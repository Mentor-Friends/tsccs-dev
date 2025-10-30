/**
 * API module for searching concepts by their character value and category.
 * Retrieves concepts from the backend based on their character representation.
 *
 * @module Api/SearchConcept/GetConceptByCharacterAndCategoryApi
 * @see https://documentation.freeschema.com for reference
 */

import { ConceptsData } from "../../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from '../../Constants/ApiConstants';
import { Concept } from "../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Retrieves a concept from the backend by its character value.
 * The character value is a string representation that uniquely identifies a concept.
 *
 * This function queries the backend for a concept matching the provided character value,
 * automatically determining the appropriate category. Retrieved concepts are added to
 * the local ConceptsData cache for faster subsequent access.
 *
 * @param characterValue - The character string identifying the concept (e.g., "the_person", "john_doe")
 * @returns A promise that resolves to the matching Concept object, or a default concept if not found
 *
 * @example
 * ```typescript
 * // Find a concept by its character value
 * const concept = await GetConceptByCharacterAndCategoryApi('the_person');
 * if (concept.id !== 0) {
 *   console.log('Found concept:', concept.characterValue);
 * } else {
 *   console.log('Concept not found');
 * }
 * ```
 *
 * @remarks
 * - Returns a default concept (id=0) if the concept is not found or an error occurs
 * - Automatically caches the retrieved concept in ConceptsData
 * - HTTP errors are handled through HandleHttpError but do not throw
 * - Errors are logged to console and re-thrown for caller handling
 *
 * @see GetConceptByCharacterAndCategoryDirectApi for searching with explicit category
 * @see CreateDefaultConcept for the default concept structure
 * @see ConceptsData for the local concept cache
 */
export async function GetConceptByCharacterAndCategoryApi(characterValue: string){
    let concept = CreateDefaultConcept();

    try{
        var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetConceptByCharacterAndCategoryUrl(),{
              method: 'POST',
              headers: header,
              body:  `character_value=${characterValue}`,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by category and character error", response.status);
            HandleHttpError(response);
            }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by category and character error message: ', error.message);
        } else {
          console.log(' This is the concept by category and character unexpected error: ', error);
        }
        throw error;
      }
}