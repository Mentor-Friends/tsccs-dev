/**
 * @fileoverview Connection deletion check service for the CCS-JS system.
 * This module provides utilities for identifying and removing connections that are no longer
 * needed by comparing old and new connection sets. It's essential for maintaining cache
 * consistency when compositions are updated or refreshed.
 * @module Services/CheckForConnectionDeletion
 */

import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

/**
 * Identifies and removes connections that exist in the old set but not in the new set.
 *
 * This function performs a differential check between old and new connection arrays to find
 * connections that should be deleted. It's commonly used when updating compositions or
 * refreshing data from the backend, ensuring that removed connections are cleaned from
 * the local cache.
 *
 * The function iterates through old connections and checks if each one exists in the new
 * connections array by comparing IDs. If a connection is not found in the new array,
 * it's removed from the ConnectionData cache.
 *
 * @param newConnections - Array of current/updated connections. Defaults to empty array.
 * @param oldConnections - Array of previous connections to check against. Defaults to empty array.
 *
 * @example
 * ```typescript
 * // Check and remove deleted connections after composition update
 * import { CheckForConnectionDeletion } from './CheckForConnectionDeletion';
 *
 * const oldConnections = await getCompositionConnections(compositionId);
 * const newConnections = await refreshCompositionFromBackend(compositionId);
 *
 * CheckForConnectionDeletion(newConnections, oldConnections);
 * // Removes any connections that were deleted on the backend
 * ```
 *
 * @example
 * ```typescript
 * // Handle composition refresh with connection cleanup
 * const cachedConnections = composition.connections;
 * const freshConnections = await fetchLatestConnections();
 *
 * CheckForConnectionDeletion(freshConnections, cachedConnections);
 * composition.connections = freshConnections;
 * ```
 *
 * @example
 * ```typescript
 * // Clean up connections when switching between compositions
 * const currentCompositionConnections = getCurrentConnections();
 * const newCompositionConnections = loadNewComposition();
 *
 * CheckForConnectionDeletion(newCompositionConnections, currentCompositionConnections);
 * ```
 *
 * @remarks
 * **Comparison Logic:**
 * - Uses array.find() to check if each old connection exists in new connections
 * - Compares connections by ID (obj.id === oldConnections[i].id)
 * - Only removes connections that are completely absent from new array
 *
 * **Safety Check:**
 * - Verifies newConnections is an array before comparison
 * - This prevents errors if newConnections is null or undefined
 * - Skips deletion if newConnections is not a valid array
 *
 * **Side Effects:**
 * - Directly modifies ConnectionData cache by removing connections
 * - Permanent removal from cache (cannot be undone)
 * - Does not affect backend data, only local cache
 *
 * **Performance:**
 * - O(n*m) complexity where n = oldConnections.length, m = newConnections.length
 * - Uses array.find() for each old connection
 * - Consider using CheckForConnectionDeletionWithIds for better performance with large arrays
 *
 * **Use Cases:**
 * - Synchronizing local cache with backend state
 * - Cleaning up after composition updates
 * - Maintaining cache consistency during data refresh
 * - Removing orphaned connections
 *
 * @see {@link CheckForConnectionDeletionWithIds} for ID-based comparison (better performance)
 * @see {@link ConnectionData.RemoveConnection} for connection removal implementation
 * @see {@link Connection} for connection data structure
 */
export  function CheckForConnectionDeletion(newConnections:Connection[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(Array.isArray(newConnections)){
            if(!newConnections.find(obj => obj.id === oldConnections[i].id)){
                ConnectionData.RemoveConnection(oldConnections[i]);
           }
        }

    }
}

/**
 * Identifies and removes connections using ID-based comparison for improved performance.
 *
 * This function is a more efficient variant of CheckForConnectionDeletion that compares
 * connection IDs directly instead of searching through connection objects. It uses
 * Array.includes() which is faster than array.find() for ID lookups, making it better
 * suited for large datasets.
 *
 * The function checks each old connection against an array of new connection IDs.
 * If an old connection's ID is not in the new ID array, it's removed from the cache.
 * This is particularly useful when you already have a list of IDs or when working
 * with large numbers of connections.
 *
 * @param newConnectionIds - Array of current connection IDs. Defaults to empty array.
 * @param oldConnections - Array of previous connection objects to check. Defaults to empty array.
 *
 * @example
 * ```typescript
 * // Efficient cleanup using ID array
 * import { CheckForConnectionDeletionWithIds } from './CheckForConnectionDeletion';
 *
 * const newConnectionIds = [123, 456, 789];
 * const oldConnections = cachedComposition.connections;
 *
 * CheckForConnectionDeletionWithIds(newConnectionIds, oldConnections);
 * // Removes connections whose IDs are not in [123, 456, 789]
 * ```
 *
 * @example
 * ```typescript
 * // Use when fetching connections from API
 * const apiResponse = await getConnectionsFromBackend(compositionId);
 * const newIds = apiResponse.map(conn => conn.id);
 * const cachedConnections = getLocalConnections();
 *
 * CheckForConnectionDeletionWithIds(newIds, cachedConnections);
 * ```
 *
 * @example
 * ```typescript
 * // Cleanup connections for a composition update
 * const updatedConnectionIds = composition.connections.map(c => c.id);
 * const previousConnections = await getPreviousConnections(composition.id);
 *
 * CheckForConnectionDeletionWithIds(updatedConnectionIds, previousConnections);
 * ```
 *
 * @example
 * ```typescript
 * // Filter out deleted connections during sync
 * const syncedIds = syncData.connectionIds;
 * const localConnections = ConnectionData.GetAllConnections();
 *
 * CheckForConnectionDeletionWithIds(syncedIds, localConnections);
 * // Removes any local connections not present in sync data
 * ```
 *
 * @remarks
 * **Performance Advantages:**
 * - Uses Array.includes() which is O(n) instead of array.find()
 * - More efficient for large connection arrays
 * - Better memory usage as only IDs are compared
 * - Recommended for datasets with 100+ connections
 *
 * **Comparison Logic:**
 * - Checks if oldConnection.id exists in newConnectionIds array
 * - Simple inclusion check without object comparison
 * - No need to iterate through connection properties
 *
 * **No Safety Check:**
 * - Does not verify if newConnectionIds is an array
 * - Will throw if newConnectionIds is null/undefined
 * - Caller should ensure newConnectionIds is a valid array
 *
 * **Side Effects:**
 * - Removes connections from ConnectionData cache
 * - Permanent local cache modification
 * - Does not affect backend or persistent storage
 *
 * **When to Use:**
 * - Large numbers of connections (100+)
 * - When you already have ID arrays
 * - Performance-critical operations
 * - Batch processing scenarios
 *
 * **When to Use CheckForConnectionDeletion Instead:**
 * - Small datasets (< 100 connections)
 * - When you don't have IDs readily available
 * - When newConnections might be null/undefined
 * - When the array check is needed
 *
 * **Common Patterns:**
 * ```typescript
 * // Pattern 1: Extract IDs from API response
 * const ids = apiData.map(conn => conn.id);
 * CheckForConnectionDeletionWithIds(ids, oldConnections);
 *
 * // Pattern 2: Use with composition updates
 * const validIds = getValidConnectionIds(composition);
 * CheckForConnectionDeletionWithIds(validIds, currentConnections);
 * ```
 *
 * @see {@link CheckForConnectionDeletion} for object-based comparison with safety checks
 * @see {@link ConnectionData.RemoveConnection} for connection removal implementation
 * @see {@link Connection} for connection data structure
 */
export   function CheckForConnectionDeletionWithIds(newConnectionIds:number[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(!newConnectionIds.includes(oldConnections[i].id)){
              ConnectionData.RemoveConnection(oldConnections[i]);
        }
    }
}