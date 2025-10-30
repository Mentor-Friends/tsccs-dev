/**
 * API module for prefetching connections to optimize application performance.
 * This module retrieves frequently accessed or anticipated connections in advance,
 * storing them for faster access and improved user experience.
 *
 * @module Api/GetAllPrefetchConnections
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { HandleHttpError } from '../Services/Common/ErrorPosting';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { ConnectionData } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

/**
 * Prefetches connections for a user to optimize application performance and reduce load times.
 * This function retrieves connections that are likely to be needed soon, such as connections
 * for concepts on the current or next page, and stores them in persistent storage for fast access.
 *
 * Prefetching is a performance optimization technique that loads data before it's explicitly requested,
 * reducing perceived latency and improving user experience. This function is particularly useful
 * for pagination scenarios or predictive loading based on user behavior.
 *
 * @param userId - The unique identifier of the user whose connections should be prefetched
 * @param inpage - The page number or index indicating which set of connections to prefetch
 *
 * @returns A promise that resolves when all prefetch connections have been fetched and stored
 *
 * @example
 * ```typescript
 * // Prefetch connections for user 123 on page 1
 * await GetAllPrefetchConnections(123, 1);
 *
 * // Prefetch connections for the next page in advance
 * const currentPage = 2;
 * await GetAllPrefetchConnections(userId, currentPage + 1);
 *
 * // Connections are now in storage and will load instantly when needed
 * const connections = await ConnectionData.GetConnectionsFromStorage();
 * ```
 *
 * @remarks
 * This function includes performance timing to measure the prefetch operation duration,
 * logging the elapsed time in milliseconds to help monitor and optimize performance.
 *
 * Unlike other connection fetch functions, this uses AddConnectionToStorage rather than
 * AddConnection, which may indicate a different storage mechanism optimized for prefetching.
 *
 * The function uses URLSearchParams to encode the user_id parameter in the request body.
 * Errors are logged with the prefix 'Get all prefetch connections error message' and are
 * re-thrown to allow calling code to handle failures.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see ConnectionData.AddConnectionToStorage for the specialized storage mechanism
 * @see GetRequestHeader for request header configuration
 */
export async function GetAllPrefetchConnections(userId:number, inpage:number){
    try{
      const start = new Date().getTime();
      var urlencoded = new URLSearchParams();
      urlencoded.append("user_id", userId.toString());
      var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllPrefetchConnectionsUrl(),{
            method: 'POST',
            headers: header,
            body: urlencoded
        });
        if(!response.ok){
           HandleHttpError(response);
            throw new Error(`Get all prefetch connections Error! status: ${response.status}`);
        }
         const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnectionToStorage(result[i]);
        }
        let elapsed = new Date().getTime() - start;
        console.log("The time taken is ", elapsed);


}
catch (error) {
    if (error instanceof Error) {
      console.log('Get all prefetch connections error message: ', error.message);
    } else {
      console.log('Get all prefetch connections unexpected error: ', error);
    }
    throw error;
  }
}