/**
 * @fileoverview Bulk composition connection retrieval service for the CCS-JS system.
 * This module provides functionality to efficiently retrieve connections for multiple
 * compositions from local memory/cache, which is essential for performance optimization
 * when working with complex nested compositions.
 * @module Services/FindConnectionsOfCompositionBulkInMemory
 */

import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

/**
 * Retrieves all connections for multiple compositions from local memory in a single operation.
 *
 * This function is designed for efficient bulk retrieval of connections across multiple
 * compositions. Instead of making individual API calls or database queries for each composition,
 * it retrieves all connections from the local ConnectionData cache, aggregating results from
 * multiple compositions into a single array.
 *
 * The function iterates through each composition ID, fetches its connections from local cache,
 * and accumulates all connections into a unified list. This is particularly useful for:
 * - Loading nested composition structures
 * - Analyzing relationship graphs across multiple compositions
 * - Preparing data for bulk operations
 * - Optimizing performance when working with complex composition hierarchies
 *
 * @param composition_ids - Array of composition IDs to retrieve connections for. Defaults to empty array.
 * @returns A promise that resolves to an array containing all connections from all specified compositions.
 *          The returned array combines connections from all compositions with potential duplicates
 *          if the same connection belongs to multiple compositions.
 *
 * @example
 * ```typescript
 * // Retrieve connections for multiple related compositions
 * import { FindConnectionsOfCompositionsBulkInMemory } from './FindConnectionsOfCompositionBulkInMemory';
 *
 * const compositionIds = [123, 456, 789];
 * const allConnections = await FindConnectionsOfCompositionsBulkInMemory(compositionIds);
 *
 * console.log(`Found ${allConnections.length} total connections`);
 * // Returns all connections from compositions 123, 456, and 789
 * ```
 *
 * @example
 * ```typescript
 * // Load nested composition structure
 * const mainComposition = await GetComposition(100);
 * const subcompositionIds = mainComposition.subcompositions; // [101, 102, 103]
 *
 * // Get all connections for the nested structure
 * const nestedConnections = await FindConnectionsOfCompositionsBulkInMemory(subcompositionIds);
 *
 * // Process all connections together
 * nestedConnections.forEach(conn => {
 *   console.log(`Connection: ${conn.ofTheConceptId} -> ${conn.toTheConceptId}`);
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Analyze relationship graph across compositions
 * const compositionIds = [200, 201, 202];
 * const connections = await FindConnectionsOfCompositionsBulkInMemory(compositionIds);
 *
 * // Find all unique concepts involved
 * const conceptIds = new Set();
 * connections.forEach(conn => {
 *   conceptIds.add(conn.ofTheConceptId);
 *   conceptIds.add(conn.toTheConceptId);
 * });
 *
 * console.log(`Graph contains ${conceptIds.size} unique concepts`);
 * ```
 *
 * @example
 * ```typescript
 * // Prepare data for bulk deletion
 * const compositionsToDelete = [301, 302, 303];
 * const connectionsToRemove = await FindConnectionsOfCompositionsBulkInMemory(compositionsToDelete);
 *
 * // Delete all connections in bulk
 * const connectionIds = connectionsToRemove.map(conn => conn.id);
 * await DeleteConnectionByIdBulk(connectionIds);
 * ```
 *
 * @example
 * ```typescript
 * // Handle empty composition list
 * const emptyResult = await FindConnectionsOfCompositionsBulkInMemory([]);
 * console.log(emptyResult); // Returns: []
 * ```
 *
 * @remarks
 * Important implementation details and considerations:
 *
 * **Data Source:**
 * - Retrieves data from local cache (ConnectionData) only, not from backend
 * - Uses GetConnectionsOfCompositionLocal which accesses in-memory storage
 * - Does not make network requests or database queries
 * - Assumes connections are already cached locally
 *
 * **Performance Characteristics:**
 * - Significantly faster than making individual API calls for each composition
 * - Memory-efficient as it uses spread operator to accumulate results
 * - Sequential processing (not parallel) but from fast local cache
 * - Suitable for real-time operations without network latency
 *
 * **Connection Aggregation:**
 * - Uses spread operator (...) to merge connection arrays
 * - Maintains order: connections from first composition ID appear first
 * - May include duplicate connections if they belong to multiple compositions
 * - Does not deduplicate results
 *
 * **Duplicate Handling:**
 * - Same connection may appear multiple times if it's in multiple compositions
 * - Caller should deduplicate if needed using connection IDs
 * - Example deduplication: `const unique = [...new Map(connections.map(c => [c.id, c])).values()]`
 *
 * **Empty Input:**
 * - Returns empty array if composition_ids is empty
 * - No error thrown for empty input
 * - Safe to call with empty array
 *
 * **Async Behavior:**
 * - Function is async due to GetConnectionsOfCompositionLocal being async
 * - However, it processes compositions sequentially, not in parallel
 * - For better performance with many compositions, consider parallelizing
 *
 * **Error Handling:**
 * - No explicit error handling in current implementation
 * - Will throw if GetConnectionsOfCompositionLocal throws
 * - Consider wrapping in try-catch for production use
 *
 * **Use Cases:**
 * - Loading nested composition structures
 * - Building relationship graphs
 * - Preparing bulk operations
 * - Analyzing composition hierarchies
 * - Offline-first operations
 *
 * **Limitations:**
 * - Only works with cached data (must be loaded first)
 * - Does not fetch from backend if cache is empty
 * - May return stale data if cache isn't updated
 * - No automatic cache validation
 *
 * **Best Practices:**
 * ```typescript
 * // Ensure compositions are loaded first
 * await loadCompositionsIntoCache(compositionIds);
 * const connections = await FindConnectionsOfCompositionsBulkInMemory(compositionIds);
 *
 * // Deduplicate if needed
 * const uniqueConnections = [...new Map(connections.map(c => [c.id, c])).values()];
 * ```
 *
 * @see {@link ConnectionData.GetConnectionsOfCompositionLocal} for single composition connection retrieval
 * @see {@link Connection} for connection data structure
 * @see {@link FindConceptsFromConnections} for retrieving concepts from connection lists
 * @see {@link DeleteConnectionByIdBulk} for bulk connection deletion
 */
export async function FindConnectionsOfCompositionsBulkInMemory(composition_ids:number[] = []){
    var FinalConnectionList:Connection[] = [];
    for(let i=0; i< composition_ids.length; i++){
       var connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
        FinalConnectionList.push(...connectionList);
    }
    return FinalConnectionList;

}