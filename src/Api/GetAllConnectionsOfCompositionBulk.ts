/**
 * API module for retrieving connections for multiple compositions in a single bulk operation.
 * This module optimizes performance by fetching connections for multiple compositions at once,
 * with automatic synchronization, deletion detection, and concept resolution.
 *
 * @module Api/GetAllConnectionsOfCompositionBulk
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { FindConceptsFromConnections } from '../Services/FindConeceptsFromConnection';
import { FindConnectionsOfCompositionsBulkInMemory } from '../Services/FindConnectionsOfCompositionBulkInMemory';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError } from '../Services/Common/ErrorPosting';

/**
 * Retrieves connections for multiple compositions in a single bulk operation for improved performance.
 * This function fetches connections for multiple composition IDs at once, checks for deletions by
 * comparing with in-memory data, and automatically resolves all referenced concepts.
 *
 * Bulk operations are significantly more efficient than individual requests when working with
 * multiple compositions, reducing network overhead and improving application responsiveness.
 *
 * @param composition_ids - Array of composition IDs whose connections should be retrieved. Defaults to empty array.
 *
 * @returns A promise that resolves to an array of Connection objects from all specified compositions
 *
 * @example
 * ```typescript
 * // Fetch connections for multiple compositions at once
 * const compositionIds = [100, 200, 300];
 * const connections = await GetAllConnectionsOfCompositionBulk(compositionIds);
 *
 * console.log(`Retrieved ${connections.length} connections`);
 *
 * // All referenced concepts are automatically fetched
 * connections.forEach(conn => {
 *   console.log(`Connection ${conn.id} is ready with its concepts`);
 * });
 *
 * // Handle empty array case
 * const noConnections = await GetAllConnectionsOfCompositionBulk([]);
 * console.log(noConnections); // Returns empty array
 * ```
 *
 * @remarks
 * This function performs several important operations:
 * 1. Early return if composition_ids array is empty
 * 2. Retrieves old connections from in-memory storage for comparison
 * 3. Fetches fresh connections from server via bulk endpoint
 * 4. Detects and handles deleted connections via CheckForConnectionDeletion
 * 5. Automatically resolves all concepts referenced by the connections
 *
 * The automatic concept resolution ensures that all concepts referenced in the connections
 * are available locally, preventing the need for additional lookups.
 *
 * @see GetAllConnectionsOfCompositionOnline for the underlying bulk server fetch
 * @see FindConnectionsOfCompositionsBulkInMemory for in-memory lookup
 * @see FindConceptsFromConnections for automatic concept resolution
 * @see CheckForConnectionDeletion for deletion detection logic
 */
export async function GetAllConnectionsOfCompositionBulk(composition_ids: number[] = []){
      
        var connectionList: Connection[] = [];
        var conceptList: number[] = [];
        if(composition_ids.length <= 0){
          return connectionList;
        }
        var oldConnectionList = await FindConnectionsOfCompositionsBulkInMemory(composition_ids);
        var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString as Connection[];

        CheckForConnectionDeletion(connectionList, oldConnectionList);
        await FindConceptsFromConnections(connectionList);
        return connectionList;
        
     
}

/**
 * Fetches connections for multiple compositions directly from the remote server in a single request.
 * This function bypasses local caching and retrieves fresh data from the bulk endpoint,
 * which is optimized for handling multiple composition IDs efficiently.
 *
 * All retrieved connections are automatically added to the local ConnectionData store
 * for subsequent use throughout the application.
 *
 * @param composition_ids - Array of composition IDs to fetch connections for. Defaults to empty array.
 *
 * @returns A promise that resolves to an array of Connection objects retrieved from the server
 *
 * @example
 * ```typescript
 * // Fetch connections for multiple compositions from server
 * const connections = await GetAllConnectionsOfCompositionOnline([100, 200, 300]);
 *
 * // Process the bulk results
 * console.log(`Fetched ${connections.length} connections from server`);
 * ```
 *
 * @remarks
 * This is the underlying server communication function for bulk composition queries.
 * It uses JSON serialization for the request body to send the array of composition IDs,
 * and the server returns all connections for those compositions in a single response.
 *
 * The function handles both successful and error responses gracefully, logging appropriate
 * error messages with the prefix 'Get all connections of composition bulk error message'.
 *
 * Each retrieved connection is added to ConnectionData, making it available for local queries.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see GetAllConnectionsOfCompositionBulk for the recommended high-level function
 * @see ConnectionData.AddConnection for how connections are stored locally
 */
export async function GetAllConnectionsOfCompositionOnline(composition_ids: number[] = []){
  var connectionList: Connection[] = [];

  try{
      var header = GetRequestHeader();
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionBulkUrl(),{
        method: 'POST',
        headers: header,
        body: JSON.stringify(composition_ids)
      });
      if(response.ok){
        const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnection(result[i]);
            connectionList.push(result[i]);
        }
      }
      else{
        console.log('Get all connections of composition bulk error message: ', "Cannot get response");
        HandleHttpError(response);
      }
      return connectionList;
    }
    catch (error) {
      if (error instanceof Error) {
        console.log('Get all connections of composition bulk error message: ', error.message);
      } else {
        console.log('Get all connections of composition bulk unexpected error: ', error);
      }
      throw error;
    }
}