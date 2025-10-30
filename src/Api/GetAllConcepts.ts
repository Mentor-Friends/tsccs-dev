/**
 * API module for retrieving all concepts belonging to a specific user.
 * This module fetches user-specific concept data from the remote server and populates the local concept store.
 *
 * @module Api/GetAllConcepts
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves all concepts created by or associated with a specific user from the remote server.
 * This function fetches all concepts belonging to the specified user ID and adds them to the
 * local ConceptsData store for use throughout the application.
 *
 * Concepts represent individual units of knowledge or data in the Concept Connection System.
 * Each user can create and manage their own set of concepts, which can then be connected
 * to form a knowledge graph.
 *
 * @param userId - The unique identifier of the user whose concepts should be retrieved
 *
 * @returns A promise that resolves when all user concepts have been fetched and stored locally
 *
 * @example
 * ```typescript
 * // Fetch all concepts for user with ID 123
 * await GetAllUserConcepts(123);
 *
 * // User concepts are now available in ConceptsData
 * const userConcepts = ConceptsData.GetAllConcepts();
 * ```
 *
 * @remarks
 * Note: The current implementation has an inverted logic check where it processes results
 * when response.ok is false. This may be intentional for specific server configurations
 * or may need review.
 *
 * Errors are logged with the prefix 'GetAllUserConcepts error' and are re-thrown to allow
 * calling code to handle failures appropriately.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see ConceptsData.AddConcept for how concepts are stored locally
 * @see GetRequestHeader for request header configuration
 */
export async function GetAllUserConcepts(userId: number){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsOfUserUrl(),{
                method: 'POST',
                headers: header,
                body: `user_id=${userId}`
            });
            if(!response.ok){
              const result = await response.json();
              for(var i=0; i< result.length; i++){
                  ConceptsData.AddConcept(result[i]);
              }
            }
            else{
              console.log("GetAllUserConcepts error", response.status);
              HandleHttpError(response);
            }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('GetAllUserConcepts error message: ', error.message);
        } else {
          console.log('GetAllUserConcepts unexpected error: ', error);
        }
        throw error;
      }
}