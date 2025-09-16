export interface CacheStats {
  cacheSize: number;
  pendingRequests: number;
  keys: string[];
}

export class DataCache<T = any> {
  static cache: Map<string, any> = new Map();
  static promises: Map<string, Promise<any>> = new Map();

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

  // Check if data exists without triggering fetch
  static has(key: string): boolean {
    return DataCache.cache.has(key);
  }

  // Get cached data synchronously (returns undefined if not cached)
  static peek<K>(key: string): K | undefined {
    return DataCache.cache.get(key) as K | undefined;
  }

  // Remove specific cache entry
  static invalidate(key: string): void {
    DataCache.cache.delete(key);
    DataCache.promises.delete(key);
  }

  // Clear all cache
  static clear(): void {
    DataCache.cache.clear();
    DataCache.promises.clear();
  }

  // Set data directly in cache
  static async set<K>(key: string, data: K): Promise<K> {
    // Clear any pending promises for this key
    DataCache.promises.delete(key);
    
    // Set the data in cache
    DataCache.cache.set(key, data);
    
    return data;
  }

  // Get cache statistics
  static stats(): CacheStats {
    return {
      cacheSize: DataCache.cache.size,
      pendingRequests: DataCache.promises.size,
      keys: Array.from(DataCache.cache.keys())
    };
  }
}


export function initWidgetCache() {
  const widgetCache = new DataCache();
  return widgetCache
}