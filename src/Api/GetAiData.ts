/**
 * API module for fetching AI-related concept data from the remote server.
 * This module retrieves AI-generated or AI-specific concepts and adds them to the local concept store.
 *
 * @module Api/GetAiData
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { HandleHttpError } from '../Services/Common/ErrorPosting';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from '../Services/Security/GetRequestHeader';
import { BinaryTree } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

/**
 * Fetches all AI-related concept data from the remote server and populates the local concept store.
 * This function retrieves AI-generated concepts, AI metadata, or AI-specific data structures
 * from the backend and adds them to the ConceptsData singleton for use throughout the application.
 *
 * The function uses authorized headers to ensure secure access to AI data endpoints.
 * All retrieved concepts are automatically added to the local in-memory concept store.
 *
 * @returns A promise that resolves when all AI data has been fetched and stored locally
 *
 * @example
 * ```typescript
 * // Fetch and populate AI data
 * await GetAiData();
 *
 * // AI concepts are now available in ConceptsData
 * const aiConcepts = ConceptsData.GetAllConcepts();
 * ```
 *
 * @remarks
 * This function requires proper authentication headers via GetRequestHeaderWithAuthorization.
 * Errors are logged to the console with the prefix 'Ai Error Message' and are re-thrown
 * to allow calling code to handle failures appropriately.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see ConceptsData.AddConcept for how concepts are stored locally
 * @see GetRequestHeaderWithAuthorization for authentication details
 */
export async function GetAiData(){
    try{
      const start = new Date().getTime();
        var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllAiData(),{
            method: 'GET',
            headers: header,
        });
        if(!response.ok){
          console.log('Ai Error Message: ', "Cannot get response");
          HandleHttpError(response);
        }
        const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConceptsData.AddConcept(result[i]);
        }
        //PurgatoryDatabaseUpdated();


}
catch (error) {
    if (error instanceof Error) {
      console.log('Ai Error Message: ', error.message);
    } else {
      console.log('Ai Error Message: ', error);
    }
    throw error;
  }
}