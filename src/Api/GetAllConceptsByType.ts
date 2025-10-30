/**
 * API module for retrieving concepts filtered by type and user.
 * This module fetches concepts of a specific type for a given user from the remote server
 * and populates the local concept store.
 *
 * @module Api/GetAllConceptsByType
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsByTypeUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves all concepts of a specific type belonging to a user from the remote server.
 * This function allows filtering concepts by their type (e.g., "person", "place", "thing")
 * and user ownership, enabling targeted retrieval of specific concept categories.
 *
 * In the Concept Connection System, concepts can be categorized by type to organize
 * different kinds of knowledge. This function fetches only concepts matching the specified
 * type for the given user, which is useful for displaying categorized views or performing
 * type-specific operations.
 *
 * @param type - The type category of concepts to retrieve (e.g., "person", "organization", "idea")
 * @param userId - The unique identifier of the user whose concepts should be retrieved
 *
 * @returns A promise that resolves when all matching concepts have been fetched and stored locally
 *
 * @example
 * ```typescript
 * // Fetch all "person" type concepts for user 123
 * await GetAllConceptsByType("person", 123);
 *
 * // Fetch all "organization" type concepts for user 456
 * await GetAllConceptsByType("organization", 456);
 *
 * // Retrieved concepts are now available in ConceptsData
 * const concepts = ConceptsData.GetAllConcepts();
 * ```
 *
 * @remarks
 * The function uses URLSearchParams to properly encode the request body parameters.
 * Errors are logged with the prefix 'GetAllConceptsByType error' and are re-thrown
 * to allow calling code to handle failures appropriately.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see ConceptsData.AddConcept for how concepts are stored locally
 * @see GetRequestHeader for request header configuration
 */
export async function GetAllConceptsByType(type:string,userId: number){
    try{
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());

            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsByTypeUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(response.ok){
              const result = await response.json();
              for(var i=0; i< result.length; i++){
                  ConceptsData.AddConcept(result[i]);
              }
            }

            console.log("GetAllConceptsByType error", response.status);
            HandleHttpError(response);

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('GetAllConceptsByType error message: ', error.message);
        } else {
          console.log('GetAllConceptsByType unexpected error: ', error);
        }
        throw error;
      }
}