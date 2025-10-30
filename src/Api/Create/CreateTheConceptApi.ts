/**
 * Concept creation API module for the Concept Connection System.
 * This module provides functionality to create new concepts in the CCS database,
 * which are the fundamental building blocks of the knowledge graph system.
 * Concepts represent individual ideas, entities, or nodes in the connection network.
 *
 * @module Api/Create/CreateTheConceptApi
 * @see https://documentation.freeschema.com for concept structure and API reference
 */

import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a new concept in the Concept Connection System database.
 * This function sends a POST request to the CCS API to persist a new concept.
 * Concepts are the core data entities in CCS, representing nodes in the knowledge
 * graph that can be connected to other concepts through relationships.
 *
 * @param conceptData - The concept data object to be created. Can be any valid concept
 *                      structure that conforms to the API requirements
 * @returns A promise that resolves to a Concept object containing the created concept
 *          with its assigned ID and all properties. Returns a default concept if
 *          the operation fails.
 *
 * @example
 * ```typescript
 * const newConcept = {
 *   userId: 123,
 *   characterId: 456,
 *   typeId: 1,
 *   composition: [],
 *   // ... other concept properties
 * };
 * const createdConcept = await CreateTheConceptApi(newConcept);
 * console.log(`Concept created with ID: ${createdConcept.id}`);
 * ```
 *
 * @remarks
 * This function follows a fail-safe pattern by initializing the result with a
 * default concept using CreateDefaultConcept(). This ensures that a valid concept
 * structure is always returned, even if the API call fails.
 *
 * The function uses GetRequestHeader() to include necessary authentication tokens
 * and headers in the request. All HTTP errors are handled through the HandleHttpError
 * utility and logged to the console with descriptive messages.
 *
 * @throws Will throw an error if the HTTP request fails or returns a non-OK status,
 *         after logging the error details
 * @see CreateDefaultConcept for the default concept initialization
 * @see GetRequestHeader for authentication details
 * @see HandleHttpError for error handling
 * @see https://documentation.freeschema.com for concept data model
 */
export async function CreateTheConceptApi(conceptData: any){
  let result = CreateDefaultConcept();
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheConceptUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(conceptData),
            });
            if(!response.ok){
              HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            result = resultString as Concept;

            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the concept api error message: ', error);
        } else {
          console.log('Create the concept api unexpected error: ', error);
        }
        throw error;
      }
}