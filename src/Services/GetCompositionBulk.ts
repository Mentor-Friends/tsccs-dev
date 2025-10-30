/**
 * Bulk Composition Retrieval Service
 *
 * This module provides high-performance functions for retrieving multiple compositions
 * simultaneously. It implements sophisticated bulk prefetching and caching strategies
 * to minimize API calls and optimize performance when dealing with large batches of
 * compositions.
 *
 * The module offers several variants optimized for different scenarios:
 * - Basic bulk retrieval
 * - Bulk with metadata (IDs and timestamps)
 * - Optimized variants using pre-fetched connection data
 * - Connection and concept prefetching utilities
 *
 * @module GetCompositionBulk
 */

import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData, GetConceptBulk } from "../app";
import { CheckForConnectionDeletionWithIds } from "./CheckForConnectionDeletion";
import { FindConnectionsOfCompositionsBulkInMemory } from "./FindConnectionsOfCompositionBulkInMemory";
import { GetCompositionFromMemory, GetCompositionWithIdFromMemory, GetCompositionWithIdFromMemoryFromConnections, GetCompositionWithIdFromMemoryFromConnectionsNew } from "./GetComposition";

/**
 * Retrieves multiple compositions in bulk with optimized prefetching.
 *
 * This function fetches multiple compositions simultaneously by first bulk-prefetching
 * all their connections in a single API call, then reconstructing each composition
 * from cached data. This is significantly more efficient than fetching compositions
 * individually.
 *
 * @param ids - Array of composition root concept IDs to retrieve (default: empty array)
 *
 * @returns A promise that resolves to an array of composition objects
 *
 * @example
 * ```typescript
 * // Fetch multiple blog posts at once
 * const postIds = [123, 456, 789, 101112];
 * const posts = await GetCompositionBulk(postIds);
 *
 * console.log(`Retrieved ${posts.length} posts`);
 * posts.forEach((post, index) => {
 *   console.log(`Post ${postIds[index]}:`, post);
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Load user profiles for a list of users
 * const userIds = await getUserIdsFromSearch("John");
 * const profiles = await GetCompositionBulk(userIds);
 *
 * profiles.forEach(profile => {
 *   const userData = profile["user_profile"];
 *   console.log(`Name: ${userData.name}, Email: ${userData.email}`);
 * });
 * ```
 *
 * @remarks
 * - Bulk prefetches all connections in a single API call
 * - Reconstructs compositions from cached connection data
 * - Much more efficient than individual GetComposition calls
 * - Returns compositions in the same order as input IDs
 * - Empty compositions returned for invalid IDs
 * - Uses GetAllConnectionsOfCompositionBulk for prefetch
 * - Uses GetCompositionFromMemory for reconstruction
 *
 * @see {@link GetCompositionBulkWithDataId} for version with metadata
 * @see {@link GetAllConnectionsOfCompositionBulk} for bulk connection prefetch
 * @see {@link GetCompositionFromMemory} for individual reconstruction
 */
export async function GetCompositionBulk(ids:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(ids);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}

/**
 * Retrieves multiple compositions in bulk with metadata wrappers.
 *
 * Similar to GetCompositionBulk, but each composition includes metadata (ID and
 * creation timestamp) in the returned structure. This is useful when you need to
 * track or reference individual compositions while processing bulk data.
 *
 * @param ids - Array of composition root concept IDs to retrieve (default: empty array)
 *
 * @returns A promise that resolves to an array of objects with id, created_at, and data fields
 *
 * @example
 * ```typescript
 * // Fetch posts with metadata for display
 * const postIds = [123, 456, 789];
 * const postsWithMeta = await GetCompositionBulkWithDataId(postIds);
 *
 * postsWithMeta.forEach(post => {
 *   console.log(`Post ID: ${post.id}`);
 *   console.log(`Created: ${post.created_at}`);
 *   console.log(`Title: ${post.data["blog_post"].title}`);
 * });
 * ```
 *
 * @remarks
 * - Each item includes: { id, created_at, data }
 * - Uses bulk prefetch for optimal performance
 * - Otherwise identical to GetCompositionBulk
 *
 * @see {@link GetCompositionBulk} for version without metadata
 * @see {@link GetCompositionWithIdFromMemory} for individual retrieval with metadata
 */
export async function GetCompositionBulkWithDataId(ids:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(ids);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}

/**
 * Retrieves compositions using a specific set of connection IDs.
 *
 * This function fetches compositions but allows you to specify exactly which connections
 * to use for reconstruction. It also performs connection deletion checking to ensure
 * cached data is up-to-date.
 *
 * @param ids - Array of composition root concept IDs
 * @param connections - Array of specific connection IDs to use (default: empty array)
 *
 * @returns A promise that resolves to an array of objects with id, created_at, and data fields
 *
 * @example
 * ```typescript
 * // Fetch compositions using specific connections
 * const compositionIds = [123, 456];
 * const connectionIds = [789, 101112, 131415];
 *
 * const compositions = await GetCompositionFromConnectionsWithDataId(
 *   compositionIds,
 *   connectionIds
 * );
 * ```
 *
 * @remarks
 * - Fetches only specified connections
 * - Checks for connection deletions to maintain cache validity
 * - Updates cache with newly fetched connections
 * - Uses GetCompositionWithIdFromMemory for reconstruction
 *
 * @see {@link GetCompositionBulkWithDataId} for standard bulk retrieval
 * @see {@link CheckForConnectionDeletionWithIds} for deletion checking
 */
export async function GetCompositionFromConnectionsWithDataId(ids:number[]=[], connections:number[] = []){
    var newConnections = await GetConnectionBulk(connections);
    var myNewConnections = newConnections as Connection[];
    var oldConnections = await FindConnectionsOfCompositionsBulkInMemory(ids);
    CheckForConnectionDeletionWithIds(connections,oldConnections);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}

/**
 * Prefetches connections and their related concepts for optimal performance.
 *
 * This utility function fetches a batch of connections by ID and also prefetches all
 * the concepts referenced by those connections (ofTheConcept, toTheConcept, and type).
 * This ensures that when you later reconstruct compositions, all necessary data is
 * already in the cache.
 *
 * The function implements a smart caching strategy: it first checks the local cache
 * for each connection, then bulk-fetches only the missing ones from the API.
 *
 * @param connectionIds - Array of connection IDs to prefetch (default: empty array)
 *
 * @returns A promise that resolves to an array of all prefetched Connection objects
 *
 * @example
 * ```typescript
 * // Prefetch connections before processing
 * const connectionIds = [123, 456, 789, 101112];
 * const connections = await GetConnectionDataPrefetch(connectionIds);
 *
 * console.log(`Prefetched ${connections.length} connections`);
 * // Now all related concepts are also cached
 *
 * // Subsequent operations will be faster
 * for (const conn of connections) {
 *   const fromConcept = await GetTheConcept(conn.ofTheConceptId); // Fast, from cache
 *   const toConcept = await GetTheConcept(conn.toTheConceptId);   // Fast, from cache
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Use before bulk composition operations
 * const compositionIds = [123, 456, 789];
 *
 * // First, get all connection IDs for these compositions
 * const allConnectionIds = await getConnectionIdsForCompositions(compositionIds);
 *
 * // Prefetch everything
 * await GetConnectionDataPrefetch(allConnectionIds);
 *
 * // Now reconstruct compositions - will be very fast
 * const compositions = await Promise.all(
 *   compositionIds.map(id => GetCompositionFromMemory(id))
 * );
 * ```
 *
 * @remarks
 * - Checks ConnectionData cache before making API calls
 * - Only fetches connections that aren't already cached
 * - Automatically prefetches all concepts referenced by connections:
 *   - ofTheConceptId (source concept)
 *   - toTheConceptId (target concept)
 *   - typeId (connection type concept)
 * - Uses GetConnectionBulk for efficient batch fetching
 * - Uses GetConceptBulk to prefetch all related concepts
 * - Returns all connections, both cached and newly fetched
 * - Significantly improves performance for composition reconstruction
 *
 * @see {@link GetConnectionBulk} for bulk connection fetching
 * @see {@link GetConceptBulk} for bulk concept prefetching
 * @see {@link ConnectionData.GetConnection} for cache lookup
 */
export async function GetConnectionDataPrefetch(connectionIds:number[] = []): Promise<Connection[]>{

    let remainingConnections: number[] = [];
    let connectionsAll:Connection[] = [];
    let remainingIds: any = {};
    for(let i=0; i< connectionIds?.length; i++){
        let connection = await ConnectionData.GetConnection(connectionIds[i]);
       // console.log("this is the connection fetch", connection);
        if(connection.id == 0){
            remainingConnections.push(connectionIds[i]);
        }
        else{
            connectionsAll.push(connection);
        }
    }
    for(let i=0; i< remainingConnections.length; i++){
        remainingIds[connectionIds[i]] = false;
    }
    //await ConnectionData.GetConnectionBulkData(connectionIds, connectionsAll, remainingIds);
    // for(let key in remainingIds){
    //     if(remainingIds[key] == false){
    //         remainingConnections.push(Number(key));
    //     }
    // }
   // remainingConnections = connectionIds;
    let prefetchConcepts : number [] = [];
    let connectionsAllLocal = await GetConnectionBulk(remainingConnections);
    connectionsAll = [...connectionsAll,...connectionsAllLocal];
    for(let j=0 ; j< connectionsAll.length; j++){
        prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
        prefetchConcepts.push(connectionsAll[j].toTheConceptId);
        prefetchConcepts.push(connectionsAll[j].typeId);
    }
    await GetConceptBulk(prefetchConcepts);
    return connectionsAll;
}

/**
 * Retrieves compositions in bulk with optimized connection reuse, returning an object map.
 *
 * This is a highly optimized function for retrieving multiple compositions. Instead of
 * returning an array, it returns an object where keys are composition IDs and values
 * are the composition data. It reuses a single set of connections for all compositions,
 * making it extremely efficient for large batches.
 *
 * The function fetches connections once, then reconstructs all compositions from the
 * same connection pool. This approach minimizes memory usage and processing time.
 *
 * @param ids - Array of composition root concept IDs
 * @param connections - Array of connection IDs to use for all compositions (default: empty array)
 *
 * @returns A promise that resolves to an object mapping composition IDs to their data
 *
 * @example
 * ```typescript
 * // Fetch multiple compositions as a map
 * const compositionIds = [123, 456, 789];
 * const connectionIds = [1001, 1002, 1003, 1004, 1005];
 *
 * const compositionMap = await GetCompositionFromConnectionsWithDataIdInObject(
 *   compositionIds,
 *   connectionIds
 * );
 *
 * // Access by ID
 * console.log("Composition 123:", compositionMap[123]);
 * console.log("Composition 456:", compositionMap[456]);
 * console.log("Composition 789:", compositionMap[789]);
 * ```
 *
 * @example
 * ```typescript
 * // Efficient lookup for UI rendering
 * const ids = [10, 20, 30, 40, 50];
 * const connectionIds = await getAllConnectionIds(ids);
 * const dataMap = await GetCompositionFromConnectionsWithDataIdInObject(ids, connectionIds);
 *
 * // Fast random access
 * renderComponent(dataMap[20]);
 * renderComponent(dataMap[40]);
 * ```
 *
 * @remarks
 * - Returns object instead of array for O(1) lookup by ID
 * - Fetches connections once and reuses for all compositions
 * - Separates cached and non-cached connections for efficiency
 * - Computes composition list once and reuses it
 * - Each composition includes: { id, created_at, data }
 * - Uses GetCompositionWithIdFromMemoryFromConnectionsNew for reconstruction
 * - Includes console.time/timeEnd for performance monitoring
 * - Most efficient for large batches with shared connections
 *
 * @see {@link GetCompositionBulkWithDataId} for array-based bulk retrieval
 * @see {@link GetConnectionBulk} for connection fetching
 * @see {@link GetCompositionWithIdFromMemoryFromConnectionsNew} for reconstruction
 */
export async function GetCompositionFromConnectionsWithDataIdInObject(ids:number[]=[], connections:number[] = []){
    let remainingConnections: number[] = [];
    let allConnections:Connection[]  = [];
    for(let i=0; i< connections.length; i++){
        let connection = await ConnectionData.GetConnection(connections[i]);
        if(connection.id == 0){
            remainingConnections.push(connections[i]);
        }
        else{
          allConnections.push(connection);
        }
    }
    let allConnectionsRemaining = await GetConnectionBulk(remainingConnections);
    for(let i=0; i<allConnectionsRemaining.length; i++){
      allConnections.push(allConnectionsRemaining[i]);
    }
    let compositions:any = {};
    let compositionList:number[] = [];
    for(var j=0; j<allConnections.length; j++){
        if(!compositionList.includes(allConnections[j].ofTheConceptId)){
            compositionList.push(allConnections[j].ofTheConceptId);
        }
    }
    console.time("start");
    for(let i=0; i< ids.length;i++){
        //console.log("tHIS IS THE START", ids[i])
        let comp = await GetCompositionWithIdFromMemoryFromConnectionsNew(ids[i], allConnections, compositionList);
        compositions[ids[i]] = comp;
    }
    console.timeEnd("start");
    return compositions;
}