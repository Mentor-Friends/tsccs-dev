/**
 * Statistics about the current cache state.
 */
export interface CacheStats {
  /** Number of cached entries */
  cacheSize: number;
  /** Number of pending fetch requests */
  pendingRequests: number;
  /** Array of all cache keys */
  keys: string[];
}

/**
 * Generic data cache with promise deduplication.
 *
 * Provides in-memory caching with automatic request deduplication to prevent
 * multiple simultaneous fetches for the same key.
 */
export class DataCache<T = any> {
  /** Map storing cached data by key */
  static cache: Map<string, any> = new Map();

  /** Map storing pending fetch promises by key */
  static promises: Map<string, Promise<any>> = new Map();

  /**
   * Gets data from cache or fetches if not cached.
   *
   * Automatically deduplicates concurrent requests for the same key.
   *
   * @param key - Cache key
   * @param fetcher - Function to fetch data if not cached
   * @returns Promise resolving to the cached or fetched data
   */
  static async get<K>(key: string, fetcher: () => Promise<K>): Promise<K> {
    // Return cached data immediately
    if (DataCache.cache.has(key)) {
      return DataCache.cache.get(key) as K;
    }

    // Return existing promise if already fetching
    if (DataCache.promises.has(key)) {
      return DataCache.promises.get(key) as Promise<K>;
    }

    // Start new fetch and cache the promise
    const promise = fetcher()
      .then((data: K) => {
        DataCache.cache.set(key, data);
        DataCache.promises.delete(key);
        return data;
      })
      .catch((error: Error) => {
        DataCache.promises.delete(key);
        throw error;
      });

    DataCache.promises.set(key, promise);
    return promise;
  }

  /**
   * Checks if a key exists in cache without fetching.
   *
   * @param key - Cache key to check
   * @returns True if key exists in cache
   */
  static has(key: string): boolean {
    return DataCache.cache.has(key);
  }

  /**
   * Gets cached data synchronously without fetching.
   *
   * @param key - Cache key
   * @returns Cached data or undefined if not cached
   */
  static peek<K>(key: string): K | undefined {
    return DataCache.cache.get(key) as K | undefined;
  }

  /**
   * Removes a specific cache entry.
   *
   * @param key - Cache key to remove
   */
  static invalidate(key: string): void {
    DataCache.cache.delete(key);
    DataCache.promises.delete(key);
  }

  /**
   * Clears all cached data and pending promises.
   */
  static clear(): void {
    DataCache.cache.clear();
    DataCache.promises.clear();
  }

  /**
   * Sets data directly in cache without fetching.
   *
   * @param key - Cache key
   * @param data - Data to cache
   * @returns Promise resolving to the cached data
   */
  static async set<K>(key: string, data: K): Promise<K> {
    // Clear any pending promises for this key
    DataCache.promises.delete(key);
    
    // Set the data in cache
    DataCache.cache.set(key, data);
    
    return data;
  }

  /**
   * Gets cache statistics including size and pending requests.
   *
   * @returns Object with cache statistics
   */
  static stats(): CacheStats {
    return {
      cacheSize: DataCache.cache.size,
      pendingRequests: DataCache.promises.size,
      keys: Array.from(DataCache.cache.keys())
    };
  }
}

/**
 * Initializes and returns a new widget cache instance.
 *
 * @returns A new DataCache instance
 */
export function initWidgetCache() {
  const widgetCache = new DataCache();
  return widgetCache
}