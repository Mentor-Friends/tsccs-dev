/**
 * API module for retrieving connections associated with a specific composition.
 * This module handles both local caching and remote fetching of composition connections,
 * with automatic synchronization and deletion detection.
 *
 * @module Api/GetAllConnectionsOfComposition
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetMaximumConnectionSyncTime } from '../Services/GetMaximumConnectionSyncTime';
import { GetAllConnectionsOfCompositionUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionBinaryTree } from '../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError } from '../Services/Common/ErrorPosting';

/**
 * Retrieves all connections associated with a specific composition, using local cache when available.
 * This function implements a smart caching strategy: it first checks for locally stored connections,
 * and if found, fetches fresh data from the server to detect any deletions or changes. If no local
 * data exists, it directly fetches from the server.
 *
 * A composition represents a group or collection of related concepts and their connections.
 * This function ensures that all connections within a composition are available and synchronized
 * with the remote server.
 *
 * @param composition_id - The unique identifier of the composition whose connections should be retrieved
 *
 * @returns A promise that resolves to an array of Connection objects belonging to the composition
 *
 * @example
 * ```typescript
 * // Fetch all connections for composition 456
 * const connections = await GetAllConnectionsOfComposition(456);
 *
 * // Process the connections
 * connections.forEach(conn => {
 *   console.log(`Connection: ${conn.id} links concepts`);
 * });
 * ```
 *
 * @remarks
 * This function implements a two-step synchronization process:
 * 1. First fetch: Retrieves from local cache if available
 * 2. Online fetch: Always fetches fresh data from server
 * 3. Deletion check: Compares old and new data to detect removed connections
 *
 * This approach ensures data consistency while maintaining local performance benefits.
 *
 * @see GetAllConnectionsOfCompositionOnline for the underlying server fetch operation
 * @see CheckForConnectionDeletion for how deleted connections are detected
 * @see ConnectionData.GetConnectionsOfCompositionLocal for local cache access
 */
export async function GetAllConnectionsOfComposition(composition_id: number){
      
        var connectionList: Connection[] = [];
        connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        if(connectionList.length == 0){
          var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_id);
          connectionList = connectionListString as Connection[];
        }
        else{
          var newConnectionsString = await GetAllConnectionsOfCompositionOnline(composition_id);
          var newConnections = newConnectionsString as Connection[];
          CheckForConnectionDeletion(newConnections, connectionList);
          connectionList = newConnections;
        }
        return connectionList;
        
     
}

/**
 * Fetches connections for a specific composition directly from the remote server.
 * This function bypasses local caching and always retrieves fresh data from the backend,
 * making it suitable for ensuring data accuracy and detecting server-side changes.
 *
 * All retrieved connections are automatically added to the local ConnectionData store
 * for subsequent use throughout the application.
 *
 * @param composition_id - The unique identifier of the composition whose connections should be fetched
 *
 * @returns A promise that resolves to an array of Connection objects retrieved from the server
 *
 * @example
 * ```typescript
 * // Fetch fresh connections directly from server
 * const connections = await GetAllConnectionsOfCompositionOnline(456);
 *
 * // Compare with cached data
 * const cachedConnections = await ConnectionData.GetConnectionsOfCompositionLocal(456);
 * ```
 *
 * @remarks
 * This is the underlying server communication function used by GetAllConnectionsOfComposition.
 * It should generally not be called directly unless you specifically need to bypass caching
 * and force a fresh server fetch.
 *
 * Each retrieved connection is added to ConnectionData, making it available for local queries
 * and reducing the need for subsequent server requests.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see GetAllConnectionsOfComposition for the recommended high-level function with caching
 * @see ConnectionData.AddConnection for how connections are stored locally
 */
export async function GetAllConnectionsOfCompositionOnline(composition_id: number){
  var connectionList: Connection[] = [];

  try{
      var header = GetRequestHeader('application/x-www-form-urlencoded');
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionUrl(),{
        method: 'POST',
        headers: header,
        body: `composition_id=${composition_id}`
      });
      if(!response.ok){
        HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      for(var i=0; i< result.length; i++){
          ConnectionData.AddConnection(result[i]);
          connectionList.push(result[i]);
      }

      return connectionList;
    }
    catch (error) {
      if (error instanceof Error) {
        console.log('Get all connection of composition error : ', error.message);
      } else {
        console.log('Get all connection of composition error : ', error);
      }
      throw error;
    }
}