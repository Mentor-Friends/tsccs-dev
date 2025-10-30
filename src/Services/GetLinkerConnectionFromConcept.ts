/**
 * @module GetLinkerConnectionFromConcept
 * @description Retrieves linker connections in the Concept Connection System (CCS).
 * This module provides functions to fetch all linker-type connections associated with
 * a concept, supporting both outgoing (from) and incoming (to) directions. Linker
 * connections are special connections that use linker concepts to define typed
 * collection relationships between concepts.
 */

import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection } from "../DataStructures/Connection";
import GetTheConcept from "./GetTheConcept";

/**
 * Retrieves all linker connections originating from a concept.
 *
 * This function fetches all connections where the specified concept is the source
 * (ofTheConcept) and the connection type is a linker concept. It enriches each
 * connection by fetching and attaching the full type concept, allowing inspection
 * of what kind of linker relationship is being used.
 *
 * Linker connections typically represent collection relationships like "user_s_posts"
 * where the "_s" indicates a plural/collection relationship defined by a linker concept.
 *
 * @param id - The ID of the concept to get linker connections from
 *
 * @returns Promise resolving to an array of Connection objects with type concepts attached
 *
 * @remarks
 * - Fetches all linker connections without pagination
 * - Each connection's type property is populated with the full Concept
 * - Linker connections have special type concepts (typically type ID 16)
 * - Iterates through all connections to enrich with type data
 * - Connection.type will be a fully populated Concept object
 * - Used for traversing collection-based relationships
 *
 * @example
 * ```typescript
 * // Get all linker connections from a user
 * const userLinkers = await GetLinkerConnectionFromConcepts(123);
 * userLinkers.forEach(connection => {
 *   console.log("Linker type:", connection.type?.characterValue);
 *   console.log("Points to:", connection.toTheConceptId);
 *   console.log("Connection ID:", connection.id);
 * });
 *
 * // Find all collection relationships a concept participates in
 * const conceptLinkers = await GetLinkerConnectionFromConcepts(456);
 * const linkerTypes = conceptLinkers.map(c => c.type?.characterValue);
 * console.log("This concept has linkers:", linkerTypes);
 * // Output: ["user_s_posts", "user_s_comments", ...]
 * ```
 *
 * @see {@link GetLinkerConnectionToConcepts} - Gets linker connections pointing to a concept
 * @see {@link GetAllLinkerConnectionsFromTheConcept} - API function for fetching connections
 * @see {@link GetTheConcept} - Fetches the type concept for each connection
 */
export async function GetLinkerConnectionFromConcepts(id:number){

    var connections = await GetAllLinkerConnectionsFromTheConcept(id);

    for(var i=0;i<connections.length;i++){
        let localConnection = connections[i] as Connection;
        var connectionIdentifier = localConnection.typeId;
        let concept = await GetTheConcept(connectionIdentifier);
        localConnection.type = concept;
    }

    return connections;

}

/**
 * Retrieves all linker connections pointing to a concept.
 *
 * This function fetches all connections where the specified concept is the target
 * (toTheConcept) and the connection type is a linker concept. It enriches each
 * connection by fetching and attaching the full type concept, allowing inspection
 * of what kind of linker relationship is being used.
 *
 * This is the inverse of GetLinkerConnectionFromConcepts - it finds all collection
 * relationships where this concept is included as a member of the collection.
 *
 * @param id - The ID of the concept to get linker connections to
 *
 * @returns Promise resolving to an array of Connection objects with type concepts attached
 *
 * @remarks
 * - Fetches all incoming linker connections without pagination
 * - Each connection's type property is populated with the full Concept
 * - Useful for finding all collections that include this concept
 * - Connection.type will be a fully populated Concept object
 * - Reverse direction of GetLinkerConnectionFromConcepts
 * - Used for reverse traversal of collection relationships
 *
 * @example
 * ```typescript
 * // Find all collections that include this post
 * const postInCollections = await GetLinkerConnectionToConcepts(789);
 * postInCollections.forEach(connection => {
 *   console.log("Included in collection:", connection.type?.characterValue);
 *   console.log("Collection owner:", connection.ofTheConceptId);
 * });
 *
 * // Check if a concept is part of any linker collections
 * const incomingLinkers = await GetLinkerConnectionToConcepts(456);
 * const isInCollections = incomingLinkers.length > 0;
 * console.log("Is part of collections:", isInCollections);
 *
 * // Find what users have this comment in their collection
 * const commentCollections = await GetLinkerConnectionToConcepts(123);
 * const ownerIds = commentCollections.map(c => c.ofTheConceptId);
 * console.log("Owned by concepts:", ownerIds);
 * ```
 *
 * @see {@link GetLinkerConnectionFromConcepts} - Gets linker connections from a concept
 * @see {@link GetAllLinkerConnectionsToTheConcept} - API function for fetching connections
 * @see {@link GetTheConcept} - Fetches the type concept for each connection
 */
export async function GetLinkerConnectionToConcepts(id:number){

    var connections = await GetAllLinkerConnectionsToTheConcept(id);

    for(var i=0;i<connections.length;i++){
        let localConnection = connections[i] as Connection;
        var connectionIdentifier = localConnection.typeId;
        let concept = await GetTheConcept(connectionIdentifier);
        localConnection.type = concept;
    }

    return connections;

}