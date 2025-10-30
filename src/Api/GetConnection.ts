/**
 * Module for retrieving individual connections from the CCS system.
 * Provides caching and optimized retrieval of Connection objects by their unique identifiers.
 *
 * @module Api/GetConnection
 * @see https://documentation.freeschema.com for connection details
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { Connection } from "../DataStructures/Connection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves a connection by its unique ID with automatic caching.
 * Connections represent relationships between concepts in the CCS system.
 *
 * @param id - The unique numeric identifier of the connection to retrieve
 * @returns A promise that resolves to the Connection object
 *
 * @example
 * ```typescript
 * // Fetch a connection by ID
 * const connection = await GetConnection(456);
 * if (connection.id !== 0) {
 *   console.log(`Connection from ${connection.ofTheConceptId} to ${connection.toTheConceptId}`);
 * }
 * ```
 *
 * @remarks
 * This function implements a two-tier retrieval strategy:
 *
 * 1. Local Cache Check: First attempts to retrieve the connection from
 *    ConnectionData cache using GetConnection().
 *
 * 2. API Fallback: If not found in cache (id = 0), makes an API request
 *    to fetch the connection from the server.
 *
 * 3. Automatic Caching: Successfully retrieved connections are cached in
 *    ConnectionData for future lookups.
 *
 * Key characteristics:
 * - Uses form-urlencoded content type for POST request
 * - Always returns a Connection object (default has id = 0 if not found)
 * - Errors are logged but propagated to caller
 * - Does not implement request deduplication (unlike GetConcept)
 *
 * Connections are fundamental to the CCS system, linking concepts together
 * and forming the relationship graph that defines knowledge structure.
 *
 * @see Connection for the structure of connection objects
 * @see ConnectionData.GetConnection for cache retrieval
 * @see ConnectionData.AddConnection for caching mechanism
 * @see GetConnectionBulk for retrieving multiple connections efficiently
 */
export async function GetConnection(id: number){
    var result :Connection= await ConnectionData.GetConnection(id);

    try{
        if(result.id != 0){

            return result;
        }
        else{
            var header = GetRequestHeader('application/x-www-form-urlencoded')
            const response = await fetch(BaseUrl.GetConnectionUrl(),{
                method: 'POST',
                headers: header,
                body: `id=${id}`
            });
            if(response.ok){
                result = await response.json() as Connection;
                ConnectionData.AddConnection(result);
            }
            else{
                console.log("Get Connection Error", response.status);
                HandleHttpError(response);
            }
            return result;
            

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Connection error message: ', error.message);
        } else {
          console.log('Get Connection unexpected error: ', error);
        }
        throw error;
      }
}