import {
    openCacheDatabase, cachePut, cacheDelete, cacheClear,
    STORE_QUERY
} from "../Database/CacheDatabase";

/**
 * QueryCacheManager — In-memory cache with IndexedDB persistence for freeschema query results.
 *
 * Architecture:
 *   - **Reads** (`get`) are synchronous from an in-memory Map — no async overhead.
 *   - **Writes** (`set`) update the Map immediately, then persist to IndexedDB
 *     in the background (fire-and-forget). Also dispatches a CustomEvent so
 *     active subscribers (SchemaQueryObservable) can re-render with fresh data.
 *   - **On startup**, `init()` loads all persisted query results from IndexedDB
 *     into the Map so cached data is available from the very first read.
 *
 * This gives us the speed of in-memory access with the durability of IndexedDB
 * (no 5 MB localStorage limit, survives page reloads).
 *
 * The stale-while-revalidate flow in FreeschemaQueryApi:
 *   1. `get(hash)` returns cached data synchronously from memory
 *   2. Caller returns cached data to UI immediately
 *   3. Background fetch gets fresh data from API
 *   4. `set(hash, fresh)` updates memory + IndexedDB + fires CustomEvent
 *   5. Subscribers pick up the event and re-render with fresh data
 */
export class QueryCacheManager {

    /** Prefix for CustomEvent names — ensures no collision with other window events */
    private static prefix = "FREESCHEMA_CACHE_";

    /** In-memory cache: hash → query result data */
    private static cacheMap = new Map<string, any>();

    /**
     * Loads all persisted query cache data from IndexedDB into memory.
     * Call this once during app initialization.
     * Safe to call multiple times — just overwrites the Map.
     */
    static async init(): Promise<void> {
        try {
            // queryCache store uses out-of-line keys, so we need key+value pairs.
            // cacheGetAll returns values; we need a different approach for out-of-line keys.
            // We'll use openCursor to get both keys and values.
            const records = await cacheGetAllWithKeys(STORE_QUERY);
            for (const { key, value } of records) {
                this.cacheMap.set(key as string, value);
            }
        } catch (error) {
            console.error("QueryCacheManager.init: failed to load from IndexedDB", error);
        }
    }

    /**
     * Computes a SHA-256 hash of a query object for use as a cache key.
     *
     * The query is canonicalized by recursively sorting all object keys before
     * hashing, so that `{a:1, b:2}` and `{b:2, a:1}` produce the same hash.
     *
     * @param query - The freeschema query object to hash
     * @returns Hex-encoded SHA-256 hash string
     */
    static async getHash(query: any): Promise<string> {
        return await hashJsonObject(query);
    }

    /**
     * Retrieves cached query results by hash key (synchronous, from memory).
     *
     * @param hash - The SHA-256 hash of the query (from getHash)
     * @returns The cached result data, or null if not found
     */
    static get(hash: string): any | null {
        return this.cacheMap.get(hash) ?? null;
    }

    /**
     * Stores query results in memory, persists to IndexedDB, and notifies subscribers.
     *
     * Includes a deduplication guard: if the new data serializes identically to
     * what's already in memory, the write and event dispatch are both skipped.
     * This prevents infinite revalidation loops (set → event → fetch → set → ...).
     *
     * @param hash - The SHA-256 hash key for this query
     * @param data - The query result data to cache
     */
    static set(hash: string, data: any): void {
        // Dedup guard: skip if data hasn't changed
        const existing = this.cacheMap.get(hash);
        const serialized = JSON.stringify(data);
        if (existing && JSON.stringify(existing) === serialized) return;

        // Update in-memory cache immediately
        this.cacheMap.set(hash, data);

        // Persist to IndexedDB in the background (out-of-line key)
        cachePut(STORE_QUERY, data, hash).catch(() => {});

        // Notify active subscribers that fresh data is available
        window.dispatchEvent(
            new CustomEvent(this.prefix + hash, {
                detail: data
            })
        );
    }

    /**
     * Subscribes to cache updates for a specific query hash.
     *
     * Uses window CustomEvents (synchronous, in-memory) so subscribers are
     * notified immediately when `set()` is called — no IndexedDB polling needed.
     *
     * @param hash - The query hash to listen for updates on
     * @param callback - Function called with the fresh data when cache is updated
     * @returns An unsubscribe function — call it to stop listening
     */
    static subscribe(hash: string, callback: (data: any) => void) {
        const handler = (event: Event) => {
            const e = event as CustomEvent;
            callback(e.detail);
        };

        window.addEventListener(this.prefix + hash, handler);

        // Return cleanup function for the caller to remove the listener
        return () => {
            window.removeEventListener(this.prefix + hash, handler);
        };
    }

    /**
     * Removes a single cached query result from memory and IndexedDB.
     * @param hash - The query hash key to remove
     */
    static remove(hash: string): void {
        this.cacheMap.delete(hash);
        cacheDelete(STORE_QUERY, hash).catch(() => {});
    }

    /**
     * Clears all cached query results from memory and IndexedDB.
     * Useful for cache invalidation on logout or environment switch.
     */
    static clearAll(): void {
        this.cacheMap.clear();
        cacheClear(STORE_QUERY).catch(() => {});
    }
}


/**
 * Retrieves all key-value pairs from an IndexedDB store using a cursor.
 * Needed for stores with out-of-line keys (like queryCache) where getAll()
 * only returns values without their keys.
 *
 * @param storeName - The object store to read from
 * @returns Array of {key, value} pairs
 */
async function cacheGetAllWithKeys(storeName: string): Promise<{ key: IDBValidKey; value: any }[]> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const results: { key: IDBValidKey; value: any }[] = [];
        const request = store.openCursor();

        request.onsuccess = () => {
            const cursor = request.result;
            if (cursor) {
                results.push({ key: cursor.key, value: cursor.value });
                cursor.continue();
            } else {
                resolve(results);
            }
        };
        request.onerror = (event) => {
            console.error(`QueryCacheManager: cursor read failed for ${storeName}`, event);
            reject(event);
        };
    });
}


/**
 * Computes a deterministic SHA-256 hash of any JSON-serializable object.
 *
 * To ensure that semantically identical objects always produce the same hash
 * regardless of property insertion order, all object keys are recursively sorted
 * before serialization. Arrays maintain their order (only object keys are sorted).
 *
 * @param obj - Any JSON-serializable value (object, array, string, number, etc.)
 * @returns Hex-encoded SHA-256 hash string (64 characters)
 *
 * @example
 * // These produce the same hash:
 * await hashJsonObject({ a: 1, b: 2 });
 * await hashJsonObject({ b: 2, a: 1 });
 */
export async function hashJsonObject(obj: any) {
    // Canonicalize by recursively sorting object keys at every level
    const sortedJsonString = JSON.stringify(obj, (_key, value) => {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            return Object.keys(value).sort().reduce((sorted: any, k) => {
                sorted[k] = value[k];
                return sorted;
            }, {});
        }
        return value;
    });

    const encoder = new TextEncoder();
    const data = encoder.encode(sortedJsonString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}
