import {
    cachePut, cacheDelete, cacheClear, cacheGetAll,
    STORE_WIDGET, STORE_LATEST, STORE_RECENT
} from "../Database/CacheDatabase";

/**
 * WidgetCacheManager — In-memory cache with IndexedDB persistence for widget data.
 *
 * Architecture:
 *   - **Reads** are synchronous from in-memory Maps (fastest possible lookup).
 *   - **Writes** update the in-memory Map immediately, then persist to IndexedDB
 *     in the background (fire-and-forget) so data survives page reloads.
 *   - **On startup**, `init()` loads all persisted data from IndexedDB into the Maps.
 *
 * This gives us the speed of in-memory access (no async overhead, no JSON.parse)
 * with the durability of IndexedDB (no 5 MB limit, survives reloads).
 *
 * Three separate caches are maintained:
 *   - **widgetMap**  — standard widget data keyed by widget ID
 *   - **latestMap**  — latest published version keyed by origin ID
 *   - **recentMap**  — recent published version keyed by origin ID
 */
export class WidgetCacheManager {

    /** In-memory cache for standard widget data */
    private static widgetMap = new Map<number, any>();
    /** In-memory cache for latest-version widget data */
    private static latestMap = new Map<number, any>();
    /** In-memory cache for recent-version widget data */
    private static recentMap = new Map<number, any>();

    /**
     * Loads all persisted widget cache data from IndexedDB into memory.
     * Call this once during app initialization (e.g. in init() or initConceptConnection()).
     * Safe to call multiple times — just overwrites the Maps.
     */
    static async init(): Promise<void> {
        try {
            const [widgets, latests, recents] = await Promise.all([
                cacheGetAll(STORE_WIDGET),
                cacheGetAll(STORE_LATEST),
                cacheGetAll(STORE_RECENT),
            ]);

            for (const record of widgets) {
                if (record && record.id != null) {
                    const { id, ...data } = record;
                    this.widgetMap.set(id, data);
                }
            }
            for (const record of latests) {
                if (record && record.id != null) {
                    const { id, ...data } = record;
                    this.latestMap.set(id, data);
                }
            }
            for (const record of recents) {
                if (record && record.id != null) {
                    const { id, ...data } = record;
                    this.recentMap.set(id, data);
                }
            }
        } catch (error) {
            console.error("WidgetCacheManager.init: failed to load from IndexedDB", error);
        }
    }

    // ─── Widget (by widget ID) ───────────────────────────────────────

    /**
     * Retrieves cached widget data by widget ID (synchronous, from memory).
     * @param id - The widget ID to look up
     * @returns The cached data object, or null if not cached
     */
    static getWidget(id: number): any | null {
        return this.widgetMap.get(id) ?? null;
    }

    /**
     * Stores widget data in memory and persists to IndexedDB in the background.
     * Skips if data is identical to what's already cached (dedup guard).
     * @param id - The widget ID
     * @param data - The widget data object to cache
     */
    static setWidget(id: number, data: any): void {
        if (this._isDuplicate(this.widgetMap, id, data)) return;
        this.widgetMap.set(id, data);
        cachePut(STORE_WIDGET, { id, ...data }).catch(() => {});
    }

    /**
     * Removes a single widget entry from memory and IndexedDB.
     * @param id - The widget ID to remove
     */
    static removeWidget(id: number): void {
        this.widgetMap.delete(id);
        cacheDelete(STORE_WIDGET, id).catch(() => {});
    }

    // ─── Latest (by origin ID) ───────────────────────────────────────

    /**
     * Retrieves cached latest-version widget data (synchronous, from memory).
     * @param id - The origin widget ID
     * @returns The cached data object, or null if not cached
     */
    static getLatest(id: number): any | null {
        return this.latestMap.get(id) ?? null;
    }

    /**
     * Stores latest-version widget data in memory and persists to IndexedDB.
     * Skips if data is identical to what's already cached.
     * @param id - The origin widget ID
     * @param data - The latest widget data to cache
     */
    static setLatest(id: number, data: any): void {
        if (this._isDuplicate(this.latestMap, id, data)) return;
        this.latestMap.set(id, data);
        cachePut(STORE_LATEST, { id, ...data }).catch(() => {});
    }

    /**
     * Removes a single latest-version entry from memory and IndexedDB.
     * @param id - The origin widget ID to remove
     */
    static removeLatest(id: number): void {
        this.latestMap.delete(id);
        cacheDelete(STORE_LATEST, id).catch(() => {});
    }

    // ─── Recent (by origin ID) ───────────────────────────────────────

    /**
     * Retrieves cached recent-version widget data (synchronous, from memory).
     * @param id - The origin widget ID
     * @returns The cached data object, or null if not cached
     */
    static getRecent(id: number): any | null {
        return this.recentMap.get(id) ?? null;
    }

    /**
     * Stores recent-version widget data in memory and persists to IndexedDB.
     * Skips if data is identical to what's already cached.
     * @param id - The origin widget ID
     * @param data - The recent widget data to cache
     */
    static setRecent(id: number, data: any): void {
        if (this._isDuplicate(this.recentMap, id, data)) return;
        this.recentMap.set(id, data);
        cachePut(STORE_RECENT, { id, ...data }).catch(() => {});
    }

    /**
     * Removes a single recent-version entry from memory and IndexedDB.
     * @param id - The origin widget ID to remove
     */
    static removeRecent(id: number): void {
        this.recentMap.delete(id);
        cacheDelete(STORE_RECENT, id).catch(() => {});
    }

    // ─── Bulk operations ─────────────────────────────────────────────

    /**
     * Clears all three widget caches from both memory and IndexedDB.
     * Useful for cache invalidation on logout or environment switch.
     */
    static clearAll(): void {
        this.widgetMap.clear();
        this.latestMap.clear();
        this.recentMap.clear();
        Promise.all([
            cacheClear(STORE_WIDGET),
            cacheClear(STORE_LATEST),
            cacheClear(STORE_RECENT),
        ]).catch(() => {});
    }

    // ─── Internal helpers ────────────────────────────────────────────

    /**
     * Checks if the new data is identical to what's already in the Map.
     * Prevents unnecessary IndexedDB writes when data hasn't changed.
     *
     * @param map - The in-memory Map to check against
     * @param id - The key to check
     * @param data - The new data to compare
     * @returns true if data is a duplicate (should be skipped)
     */
    private static _isDuplicate(map: Map<number, any>, id: number, data: any): boolean {
        const existing = map.get(id);
        if (!existing) return false;
        return JSON.stringify(existing) === JSON.stringify(data);
    }
}
