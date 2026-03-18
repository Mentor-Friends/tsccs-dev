import { BaseUrl } from "../DataStructures/BaseUrl";

/**
 * CacheDatabase — A dedicated IndexedDB database for application caches.
 *
 * This module manages a SEPARATE IndexedDB database from the main concept/connection
 * database (indexeddb.ts). Keeping caches in their own database avoids version-conflict
 * issues: bumping the version of the main DB triggers onupgradeneeded which deletes
 * all existing stores. By isolating cache data here, we can evolve each DB independently.
 *
 * Stores:
 *   - "widgetCache"       — cached widget data keyed by widget ID
 *   - "latestWidgetCache"  — cached latest-version widget data keyed by origin ID
 *   - "recentWidgetCache"  — cached recent-version widget data keyed by origin ID
 *   - "queryCache"         — cached freeschema query results keyed by SHA-256 hash
 *
 * All values are stored as plain JSON-serializable objects via IndexedDB's structured
 * clone algorithm, which is more efficient than JSON.stringify/parse used by localStorage.
 */

/** Current schema version — bump this when adding/removing stores */
const CACHE_DB_VERSION = 1;

/** Names of the four object stores */
const STORE_WIDGET = "widgetCache";
const STORE_LATEST = "latestWidgetCache";
const STORE_RECENT = "recentWidgetCache";
const STORE_QUERY  = "queryCache";

/** Cached database reference so we only open once */
let cachedDb: IDBDatabase | null = null;

/**
 * Opens (or returns the already-opened) cache database.
 *
 * The database name includes the API base URL and application identifier so that
 * different environments/applications each get their own isolated cache store,
 * matching the naming convention used by the main database in indexeddb.ts.
 *
 * @returns Promise resolving to the IDBDatabase instance
 */
export function openCacheDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        // Return cached reference if already open
        if (cachedDb) {
            resolve(cachedDb);
            return;
        }

        const dbName = BaseUrl.BASE_URL + "_CacheStore" + BaseUrl.BASE_APPLICATION;
        const request = indexedDB.open(dbName, CACHE_DB_VERSION);

        /**
         * onupgradeneeded fires when the database is first created or when
         * CACHE_DB_VERSION is bumped. We create all four object stores here.
         */
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            if (!db.objectStoreNames.contains(STORE_WIDGET)) {
                db.createObjectStore(STORE_WIDGET, { keyPath: "id" });
            }
            if (!db.objectStoreNames.contains(STORE_LATEST)) {
                db.createObjectStore(STORE_LATEST, { keyPath: "id" });
            }
            if (!db.objectStoreNames.contains(STORE_RECENT)) {
                db.createObjectStore(STORE_RECENT, { keyPath: "id" });
            }
            if (!db.objectStoreNames.contains(STORE_QUERY)) {
                // queryCache uses an out-of-line key (the SHA-256 hash string)
                db.createObjectStore(STORE_QUERY);
            }
        };

        request.onsuccess = (event) => {
            cachedDb = (event.target as IDBOpenDBRequest).result;
            resolve(cachedDb);
        };

        request.onerror = (event) => {
            console.error("CacheDatabase: failed to open", event);
            reject(event);
        };
    });
}

/**
 * Retrieves a single record from the specified store by key.
 *
 * @param storeName - The object store to read from
 * @param key - The key to look up (number for widget stores, string for queryCache)
 * @returns The stored value, or null if not found
 */
export async function cacheGet(storeName: string, key: IDBValidKey): Promise<any | null> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const request = store.get(key);

        request.onsuccess = () => {
            resolve(request.result ?? null);
        };
        request.onerror = (event) => {
            console.error(`CacheDatabase: get failed for ${storeName}[${key}]`, event);
            reject(event);
        };
    });
}

/**
 * Writes a record to the specified store (insert or update).
 *
 * For stores with in-line keys (widget stores), the key is read from the object's
 * "id" field. For the queryCache store (out-of-line keys), pass the key explicitly.
 *
 * @param storeName - The object store to write to
 * @param value - The value to store
 * @param key - Optional explicit key (required for queryCache which has no keyPath)
 */
export async function cachePut(storeName: string, value: any, key?: IDBValidKey): Promise<void> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = key !== undefined ? store.put(value, key) : store.put(value);

        request.onsuccess = () => resolve();
        request.onerror = (event) => {
            console.error(`CacheDatabase: put failed for ${storeName}`, event);
            reject(event);
        };
    });
}

/**
 * Deletes a single record from the specified store by key.
 *
 * @param storeName - The object store to delete from
 * @param key - The key of the record to delete
 */
export async function cacheDelete(storeName: string, key: IDBValidKey): Promise<void> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.delete(key);

        request.onsuccess = () => resolve();
        request.onerror = (event) => {
            console.error(`CacheDatabase: delete failed for ${storeName}[${key}]`, event);
            reject(event);
        };
    });
}

/**
 * Clears ALL records from the specified store.
 *
 * @param storeName - The object store to clear
 */
export async function cacheClear(storeName: string): Promise<void> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.clear();

        request.onsuccess = () => resolve();
        request.onerror = (event) => {
            console.error(`CacheDatabase: clear failed for ${storeName}`, event);
            reject(event);
        };
    });
}

/**
 * Retrieves ALL records from the specified store.
 * Used during init() to load persisted cache data into memory.
 *
 * @param storeName - The object store to read from
 * @returns Array of all stored records
 */
export async function cacheGetAll(storeName: string): Promise<any[]> {
    const db = await openCacheDatabase();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result ?? []);
        };
        request.onerror = (event) => {
            console.error(`CacheDatabase: getAll failed for ${storeName}`, event);
            reject(event);
        };
    });
}

/** Export store name constants so callers don't need magic strings */
export { STORE_WIDGET, STORE_LATEST, STORE_RECENT, STORE_QUERY };
