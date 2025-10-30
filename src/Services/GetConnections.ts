/**
 * Connection Retrieval Service
 *
 * This module provides functions for retrieving connection objects from the system.
 * It implements a caching strategy that checks local memory first before falling
 * back to API calls, similar to concept retrieval.
 *
 * @module GetConnections
 */

import { GetConnection } from "../Api/GetConnection";
import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";

/**
 * Retrieves a connection by its ID with automatic caching.
 *
 * This function implements a two-tier lookup strategy for connection retrieval:
 * 1. First checks the local cache (ConnectionData)
 * 2. Falls back to an API call (GetConnection) if not found in cache
 *
 * The function ensures that valid connections are returned when available, and
 * handles cases where connections don't exist or retrieval fails gracefully.
 *
 * @param id - The ID of the connection to retrieve
 *
 * @returns A promise that resolves to the Connection object, or a connection with id=0 if not found
 *
 * @example
 * ```typescript
 * // Retrieve a connection and check its type
 * const connection = await GetConnectionById(12345);
 *
 * if (connection.id === 0) {
 *   console.log("Connection not found");
 * } else {
 *   console.log("Connection from:", connection.ofTheConceptId);
 *   console.log("Connection to:", connection.toTheConceptId);
 *   console.log("Connection type:", connection.typeId);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Use in a connection validation scenario
 * const connectionIds = [123, 456, 789];
 * const connections = await Promise.all(
 *   connectionIds.map(id => GetConnectionById(id))
 * );
 *
 * const validConnections = connections.filter(conn => conn.id !== 0);
 * console.log(`Found ${validConnections.length} valid connections`);
 * ```
 *
 * @example
 * ```typescript
 * // Retrieve connection and navigate to connected concepts
 * const connection = await GetConnectionById(555);
 * if (connection.id !== 0) {
 *   const fromConcept = await GetTheConcept(connection.ofTheConceptId);
 *   const toConcept = await GetTheConcept(connection.toTheConceptId);
 *   console.log(`${fromConcept.characterValue} -> ${toConcept.characterValue}`);
 * }
 * ```
 *
 * @remarks
 * - First checks ConnectionData cache for optimal performance
 * - Makes an API call only if connection is not in cache or has id=0
 * - Returns a connection with id=0 if retrieval fails at all levels
 * - The function validates that id is not null or undefined before API call
 * - Connections are automatically cached by the GetConnection API call
 * - This function is null-safe for ID checks but may throw if API fails
 *
 * @see {@link ConnectionData.GetConnection} for cache lookup
 * @see {@link GetConnection} for API-based retrieval
 * @see {@link Connection} for the connection data structure
 */
export  async function GetConnectionById(id:number){

     var connection =   await ConnectionData.GetConnection(id);
     if((connection == null || connection.id == 0) && id != null && id != undefined){
        var connectionString = await  GetConnection(id);
        connection = connectionString as Connection;
       }
       return connection;

}