/**
 * Module for retrieving concepts by their character value string.
 * Provides lookup functionality for concepts using their character identifier without type restrictions.
 *
 * @module Api/GetConceptByCharacterValue
 * @see https://documentation.freeschema.com for character value system details
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves a concept by its character value string identifier.
 * This function performs a type-agnostic lookup, returning the first concept matching the character value.
 *
 * @param characterValue - The character string identifier of the concept to retrieve
 * @returns A promise that resolves to the Concept object, or a default concept if not found
 *
 * @example
 * ```typescript
 * // Fetch a concept by its character value
 * const concept = await GetConceptByCharacterValue("username");
 * if (concept.id > 0) {
 *   console.log(`Found concept with ID: ${concept.id}`);
 * } else {
 *   console.log("Concept not found");
 * }
 * ```
 *
 * @remarks
 * This function provides a simplified lookup mechanism:
 *
 * 1. Makes a direct API call with the character_value parameter
 * 2. Does not check local cache before making the request
 * 3. Automatically caches successful results in ConceptsData
 * 4. Returns a default concept (id = 0) if not found or on error
 *
 * Key characteristics:
 * - Uses form-urlencoded content type for the POST request
 * - Only caches concepts with id > 0 (valid concepts)
 * - Does not throw errors on HTTP failure, only logs them
 * - Simpler than GetConceptByCharacterAndType as it doesn't consider type
 *
 * Use this when you know the character value uniquely identifies a concept,
 * or when type information is not available or relevant.
 *
 * @see Concept for the structure of concept objects
 * @see CreateDefaultConcept for default concept structure
 * @see GetConceptByCharacterAndType for character+type lookup
 * @see ConceptsData.AddConcept for caching mechanism
 */
export async function GetConceptByCharacterValue(characterValue: string){
  let result = CreateDefaultConcept();
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');

            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: `character_value=${characterValue}`
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
              ConceptsData.AddConcept(result);
            }
          }
          else{
            console.log("Error in Getting concept by character value Error", response.status);
            HandleHttpError(response);
          }
          return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting concept by character value error message: ', error);
        } else {
          console.log('Error in Getting concept by character value unexpected error: ', error);
        }
        throw error;
      }
}