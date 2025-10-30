/**
 * Module for bulk retrieval of connections from the CCS system.
 * Provides optimized batch fetching of multiple connections in a single API request.
 *
 * @module Api/GetConnectionBulk
 * @see https://documentation.freeschema.com for bulk connection operations
 */

import { Concept } from "./../DataStructures/Concept";
import { ConnectionData } from "./../DataStructures/ConnectionData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Connection } from "../DataStructures/Connection";
import { FindConceptsFromConnections } from "../Services/FindConeceptsFromConnection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves multiple connections in a single optimized API request.
 * This function checks the local cache first and only fetches uncached connections from the API.
 *
 * @param connectionIds - Array of connection IDs to retrieve (defaults to empty array)
 * @returns A promise that resolves to an array of Connection objects
 *
 * @example
 * ```typescript
 * // Fetch multiple connections at once
 * const connections = await GetConnectionBulk([101, 102, 103, 104]);
 * connections.forEach(conn => {
 *   console.log(`Connection ${conn.id}: ${conn.ofTheConceptId} -> ${conn.toTheConceptId}`);
 * });
 * ```
 *
 * @remarks
 * Performance optimization strategy:
 * 1. Checks ConnectionData cache for each requested connection ID
 * 2. Immediately includes cached connections in results
 * 3. Batches all uncached IDs into a single bulk API request
 * 4. Caches all newly fetched connections for future use
 * 5. Automatically fetches related concepts via FindConceptsFromConnections
 * 6. Returns empty array if all connections are cached or if none requested
 *
 * This function provides significant performance benefits:
 * - Reduces network overhead by batching API requests
 * - Avoids redundant fetches through cache checking
 * - Proactively loads related concepts to prevent N+1 query problems
 *
 * The automatic concept fetching ensures that when you have connections,
 * you also have the concepts they connect, enabling immediate relationship
 * traversal without additional API calls.
 *
 * @see Connection for the structure of connection objects
 * @see ConnectionData.AddConnection for caching mechanism
 * @see GetConnection for single connection retrieval
 * @see FindConceptsFromConnections for automatic concept loading
 */
export async function GetConnectionBulk(connectionIds: number[] = []){
    var connectionList:Connection[] = [];

    try{
        var bulkConnectionFetch = [];
        for(let i=0; i<connectionIds.length; i++){
            let conceptUse :Connection= await ConnectionData.GetConnection(connectionIds[i]);
            if(conceptUse.id == 0){
                bulkConnectionFetch.push(connectionIds[i]);
            }
            else{
                connectionList.push(conceptUse);
            }
        }
        if(bulkConnectionFetch.length == 0){

            return connectionList;
        }
        else{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.GetConnectionBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(bulkConnectionFetch)
            });
            if(response.ok){
                const result = await response.json();
                if(result.length > 0){
                    for(let i=0 ; i<result.length; i++){
                        let connection = result[i] as Connection;
                        connectionList.push(connection);
                        ConnectionData.AddConnection(connection);
                    }
                    await FindConceptsFromConnections(connectionList);
                }
            }
            else{
                console.log("Get Connection Bulk error", response.status);
                HandleHttpError(response);
            }



            return connectionList;

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Connection Bulk error message: ', error.message);
        } else {
          console.log('Get Connection Bulk unexpected error: ', error);
        }
        throw error;
      }
}