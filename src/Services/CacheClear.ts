import { WidgetCacheManager } from "../Widgets/WidgetCacheManager";
import { QueryCacheManager } from "../WrapperFunctions/QueryCacheManager";

/**
 * Clears all application caches (both in-memory and IndexedDB).
 *
 * Call this on user logout or when you need to force-refresh all cached data.
 * Clears widget caches (standard, latest, recent) and query caches.
 */
export function clearAllCaches(): void {
    WidgetCacheManager.clearAll();
    QueryCacheManager.clearAll();
}
