/**
 * @fileoverview Concept discovery service from connections for the CCS-JS system.
 * This module provides functionality to identify and batch-load all concepts referenced by
 * a set of connections. This is essential for efficiently hydrating the concept cache when
 * working with compositions and connection graphs.
 * @module Services/FindConceptsFromConnection
 */

import { Connection } from "../DataStructures/Connection";
import { Concept } from "../DataStructures/Concept";
import { GetConceptBulk } from "../Api/GetConceptBulk";

/**
 * Discovers and loads all unique concepts referenced by a list of connections.
 *
 * This function analyzes a list of connections to extract all unique concept IDs (both source
 * and target concepts) and loads them into the local cache via a single bulk API call. This is
 * a critical optimization function that ensures all concepts needed for a composition or
 * connection graph are available locally before processing.
 *
 * The function performs two main operations:
 * 1. Extracts all unique concept IDs from the connection list (both ofTheConceptId and toTheConceptId)
 * 2. Fetches all concepts in a single bulk operation and caches them locally
 *
 * This batch loading approach is significantly more efficient than fetching concepts individually
 * as they're needed, reducing network overhead and improving application performance.
 *
 * @param connectionList - Array of connections to analyze for concept references. Defaults to empty array.
 * @returns A promise that resolves when all concepts have been fetched and cached.
 *          The function does not return the concepts directly; they are stored in the concept cache.
 *
 * @example
 * ```typescript
 * // Load concepts for a composition
 * import { FindConceptsFromConnections } from './FindConeceptsFromConnection';
 *
 * const compositionConnections = await GetAllConnectionsOfComposition(123);
 * await FindConceptsFromConnections(compositionConnections);
 *
 * // Now all concepts are cached and can be retrieved synchronously
 * const concept = await GetTheConcept(456); // Fast cache lookup
 * ```
 *
 * @example
 * ```typescript
 * // Prepare concepts for graph visualization
 * const connections = await FindConnectionsOfCompositionsBulkInMemory([100, 101, 102]);
 * await FindConceptsFromConnections(connections);
 *
 * // All concepts in the graph are now cached
 * connections.forEach(conn => {
 *   const fromConcept = GetTheConceptSync(conn.ofTheConceptId);
 *   const toConcept = GetTheConceptSync(conn.toTheConceptId);
 *   renderConnection(fromConcept, toConcept);
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Hydrate cache before processing composition
 * async function loadCompositionWithConcepts(compositionId: number) {
 *   // First, get all connections
 *   const connections = await GetAllConnectionsOfComposition(compositionId);
 *
 *   // Then, ensure all concepts are cached
 *   await FindConceptsFromConnections(connections);
 *
 *   // Now process the composition with all data locally available
 *   return processComposition(connections);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Handle empty connection list safely
 * const emptyConnections: Connection[] = [];
 * await FindConceptsFromConnections(emptyConnections);
 * // No API call made, function returns immediately
 * ```
 *
 * @example
 * ```typescript
 * // Load concepts for multiple compositions
 * const compositionIds = [200, 201, 202];
 * const allConnections = await FindConnectionsOfCompositionsBulkInMemory(compositionIds);
 *
 * // Single bulk load for all concepts across all compositions
 * await FindConceptsFromConnections(allConnections);
 *
 * // All concepts are now available
 * console.log("All concepts loaded for compositions:", compositionIds);
 * ```
 *
 * @remarks
 * Important implementation details and considerations:
 *
 * **Concept ID Extraction:**
 * - Extracts both ofTheConceptId (source concept) and toTheConceptId (target concept)
 * - Uses includes() to ensure uniqueness - no duplicate IDs in the final list
 * - Maintains insertion order of concept IDs
 * - Only adds IDs that haven't been seen before
 *
 * **Duplicate Prevention:**
 * - Checks if concept ID already exists in list before adding
 * - Prevents redundant API requests for the same concept
 * - Important when connections share common concepts
 * - Uses array.includes() which has O(n) complexity per check
 *
 * **Bulk Loading:**
 * - Makes a single API call via GetConceptBulk instead of individual requests
 * - Significantly reduces network overhead
 * - All concepts are fetched and cached in one operation
 * - More efficient for large connection sets
 *
 * **Cache Population:**
 * - GetConceptBulk automatically stores concepts in the local cache
 * - Concepts become available for synchronous retrieval after this function completes
 * - No need to manually cache the results
 * - Persists to IndexedDB for offline availability
 *
 * **Empty Input Handling:**
 * - Returns immediately if connectionList is empty (length === 0)
 * - No API call made for empty input
 * - Safe to call with empty arrays
 *
 * **No Return Value:**
 * - Function doesn't return the loaded concepts
 * - Concepts are stored in the global concept cache
 * - Access loaded concepts via GetTheConcept() or similar functions
 * - This is intentional for cache-based architecture
 *
 * **Performance Characteristics:**
 * - O(n*m) complexity for duplicate checking where n = connections, m = unique concepts
 * - Could be optimized with Set for better performance on large datasets
 * - Single API call regardless of number of concepts
 * - Network time dominates execution time
 *
 * **Performance Optimization Alternative:**
 * ```typescript
 * // More efficient approach using Set
 * const conceptIds = new Set<number>();
 * connectionList.forEach(conn => {
 *   conceptIds.add(conn.ofTheConceptId);
 *   conceptIds.add(conn.toTheConceptId);
 * });
 * await GetConceptBulk([...conceptIds]);
 * ```
 *
 * **Common Use Cases:**
 * - Loading concepts before rendering compositions
 * - Hydrating cache for offline-first operations
 * - Preparing data for graph analysis
 * - Ensuring all dependencies are cached before processing
 * - Optimizing batch operations
 *
 * **Integration Patterns:**
 * ```typescript
 * // Pattern 1: Composition loading
 * async function loadComposition(id: number) {
 *   const connections = await getConnections(id);
 *   await FindConceptsFromConnections(connections);
 *   return buildCompositionObject(connections);
 * }
 *
 * // Pattern 2: Graph preparation
 * async function prepareGraph(compositionIds: number[]) {
 *   const connections = await FindConnectionsOfCompositionsBulkInMemory(compositionIds);
 *   await FindConceptsFromConnections(connections);
 *   return buildGraph();
 * }
 * ```
 *
 * **Error Handling:**
 * - No explicit error handling in current implementation
 * - Will throw if GetConceptBulk fails
 * - Consider wrapping in try-catch for production use
 * - Failed bulk load means concepts won't be cached
 *
 * @see {@link GetConceptBulk} for bulk concept loading API
 * @see {@link Connection} for connection data structure
 * @see {@link Concept} for concept data structure
 * @see {@link FindConnectionsOfCompositionsBulkInMemory} for bulk connection retrieval
 * @see {@link GetTheConcept} for retrieving cached concepts
 */
export  async function FindConceptsFromConnections(connectionList:Connection[] = []){
    var ConceptList:number[] = [];
    if(connectionList.length > 0){
        for(let i=0;i < connectionList.length; i++){

          if(!ConceptList.includes(connectionList[i].ofTheConceptId )){
            ConceptList.push(connectionList[i].ofTheConceptId);
          }
          if(!ConceptList.includes(connectionList[i].toTheConceptId)){
            ConceptList.push(connectionList[i].toTheConceptId);
          }

        }
        await GetConceptBulk(ConceptList);

    }

}