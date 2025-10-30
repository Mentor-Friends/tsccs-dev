/**
 * API module for searching concepts by character value with explicit category specification.
 * Provides direct category-based concept retrieval with request caching.
 *
 * @module Api/SearchConcept/GetConceptByCharacterAndCategoryDirect
 * @see https://documentation.freeschema.com for reference
 */

import { ConceptsData } from "./../../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../../Constants/ApiConstants';
import { Concept } from "./../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

const conceptCache = new Map<string, Promise<Concept>>();

/**
 * Retrieves a concept from the backend by its character value and specific category ID.
 * This is a more precise search than GetConceptByCharacterAndCategoryApi as it requires
 * an explicit category ID.
 *
 * The function uses request caching to prevent duplicate simultaneous requests for the
 * same character-category combination. Retrieved concepts are automatically added to
 * the local ConceptsData cache.
 *
 * @param characterValue - The character string identifying the concept (e.g., "john_doe", "building_a")
 * @param category_id - The specific category ID to search within
 * @returns A promise that resolves to the matching Concept object, or a default concept if not found
 *
 * @example
 * ```typescript
 * // Find a specific person concept in category 5
 * const person = await GetConceptByCharacterAndCategoryDirectApi('john_doe', 5);
 * if (person.id !== 0) {
 *   console.log('Found person:', person);
 * }
 *
 * // Simultaneous calls for the same concept will use the same cached promise
 * const promise1 = GetConceptByCharacterAndCategoryDirectApi('jane_doe', 5);
 * const promise2 = GetConceptByCharacterAndCategoryDirectApi('jane_doe', 5);
 * // Both will resolve to the same result without making duplicate API calls
 * ```
 *
 * @remarks
 * - Uses local caching (conceptCache) to prevent duplicate simultaneous requests
 * - Cache key is the concatenation of characterValue and category_id
 * - Returns a default concept (id=0) if the concept is not found or an error occurs
 * - Automatically caches the retrieved concept in ConceptsData for subsequent use
 * - Cache entries are cleaned up in the finally block after fetch completes
 * - HTTP errors are handled through HandleHttpError but do not throw
 * - Errors are logged with full diagnostic information including the endpoint URL
 *
 * @see GetConceptByCharacterAndCategoryApi for searching without explicit category
 * @see CreateDefaultConcept for the default concept structure
 * @see ConceptsData for the local concept cache
 */
export async function GetConceptByCharacterAndCategoryDirectApi(characterValue: string, category_id: number): Promise<Concept>{
    let concept = CreateDefaultConcept();
    if (conceptCache.has(characterValue + category_id)) return conceptCache.get(characterValue + category_id) || concept;
    const GetConceptByCharacterAndCategoryDirect = (async () => {
      try{
        var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetConceptByCharacterAndCategoryDirectUrl(),{
              method: 'POST',
              headers: header,
              body:  `character_value=${characterValue}&category_id=${category_id}`,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by category and character direct api error", response.status);
            HandleHttpError(response);
            }

      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by category and character direct api error message: ', error.message, characterValue, category_id,BaseUrl.GetConceptByCharacterAndCategoryDirectUrl() );
        } else {
          console.log(' This is the concept by category and character unexpected direct api error: ', error,characterValue, category_id,BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
        }
        throw error;
      }
      finally{
        conceptCache.delete(characterValue + category_id); // Remove from cache after fetching
      }

    })()
      conceptCache.set(characterValue + category_id, GetConceptByCharacterAndCategoryDirect);
      return GetConceptByCharacterAndCategoryDirect;

}