/**
 * API module for retrieving all connections belonging to a specific user.
 * This module fetches user-specific connection data from the remote server and populates
 * the local connection store, including both the main storage and the connection dictionary.
 *
 * @module Api/GetAllConnections
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetAllConnectionsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError } from '../Services/Common/ErrorPosting';

/**
 * Retrieves all connections created by or associated with a specific user from the remote server.
 * This function fetches all connections belonging to the specified user ID and adds them to both
 * the main ConnectionData store and the connection dictionary for efficient lookup.
 *
 * Connections represent relationships between concepts in the Concept Connection System.
 * Each connection links two or more concepts together with specific relationship metadata.
 * This function ensures that all user-created connections are available locally for
 * graph traversal and relationship analysis.
 *
 * @param userId - The unique identifier of the user whose connections should be retrieved
 *
 * @returns A promise that resolves when all user connections have been fetched and stored locally
 *
 * @example
 * ```typescript
 * // Fetch all connections for user with ID 123
 * await GetAllUserConnections(123);
 *
 * // User connections are now available in ConnectionData
 * const userConnections = ConnectionData.GetAllConnections();
 *
 * // Connections are also indexed in the dictionary for fast lookup
 * const connection = ConnectionData.GetConnectionFromDictionary(connectionId);
 * ```
 *
 * @remarks
 * This function performs dual storage operations for each connection:
 * 1. AddConnection - Adds to the main connection collection
 * 2. AddToDictionary - Indexes in a dictionary for O(1) lookup by connection ID
 *
 * Errors are logged with the prefix 'Get all user Connections error' and are re-thrown
 * to allow calling code to handle failures appropriately.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see ConnectionData.AddConnection for how connections are stored
 * @see ConnectionData.AddToDictionary for connection indexing details
 * @see GetRequestHeader for request header configuration
 */
export async function GetAllUserConnections(userId: number){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsOfUserUrl(),{
                method: 'POST',
                headers: header,
                body: `user_id=${userId}`
            });
            if(!response.ok){
              console.log(' Get all user Connections status error: ', response.status);
              HandleHttpError(response);
            }
            const result = await response.json();
            for(var i=0; i< result.length; i++){
                ConnectionData.AddConnection(result[i]);
                ConnectionData.AddToDictionary(result[i]);
            }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get all user Connections error message: ', error.message);
        } else {
          console.log(' Get all user Connections unexpected error: ', error);
        }
        throw error;
      }
}