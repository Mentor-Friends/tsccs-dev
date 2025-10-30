/**
 * Module for retrieving concepts by their character value and type combination.
 * Provides specialized lookup for concepts using both character identifier and type classification.
 *
 * @module Api/GetConceptByCharacterAndType
 * @see https://documentation.freeschema.com for character and type system details
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../Constants/ApiConstants';
import { Concept } from "./../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetConceptBulk } from "./GetConceptBulk";

/**
 * Cache for in-flight concept requests keyed by character+type combination.
 * Prevents duplicate API calls for the same character-type pair.
 */
const conceptCache = new Map<string, Promise<Concept>>();

/**
 * Retrieves a concept by its character value and type ID combination.
 * This provides a more specific lookup than character value alone, useful when the same
 * character can represent different concepts of different types.
 *
 * @param characterValue - The character string identifier of the concept
 * @param typeId - The type ID that classifies the concept
 * @returns A promise that resolves to the Concept object matching both criteria
 *
 * @example
 * ```typescript
 * // Get a specific concept by character and type
 * const concept = await GetConceptByCharacterAndType("user", 5);
 * if (concept && concept.id !== 0) {
 *   console.log(`Found concept: ${concept.id}`);
 * }
 * ```
 *
 * @remarks
 * This function implements a multi-layer lookup strategy:
 *
 * 1. Request Deduplication: Caches in-flight requests using a composite key
 *    (characterValue + typeId) to prevent duplicate API calls.
 *
 * 2. Local Cache Check: First attempts to retrieve from ConceptsData using
 *    GetConceptByCharacterAndTypeLocal() method.
 *
 * 3. API Fallback: If not found locally, makes an API request with both
 *    character_value and type_id as JSON parameters.
 *
 * 4. Automatic Caching: Successfully retrieved concepts are cached in
 *    ConceptsData for future lookups.
 *
 * This is particularly useful in systems where the same character string
 * can represent different semantic concepts based on context or type.
 *
 * @see Concept for the structure of concept objects
 * @see ConceptsData.GetConceptByCharacterAndTypeLocal for local cache lookup
 * @see GetConceptByCharacterValue for type-agnostic character lookup
 * @see GetConceptByTypeBulk for bulk retrieval by type
 */
export async function GetConceptByCharacterAndType(characterValue: string, typeId: number): Promise<Concept>{
  let concept:Concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,typeId);
  let key = characterValue + typeId;
  if (conceptCache.has(key)) return conceptCache.get(key) || concept;

  const GetConceptByCharacterAndType = (async () => {
    try{
      if(concept == null || concept.id == 0){
        var json = {
          'character_value': `${characterValue}`,
          'type_id': typeId 
        };
        var toSendJson = JSON.stringify(json);
          var header = GetRequestHeader();
          const response = await fetch(BaseUrl.GetConceptByCharacterAndTypeUrl(),{
              method: 'POST',
              headers: header,
              body: toSendJson,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by type and character error", response.status);
            HandleHttpError(response);
          }

      }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by type and character error message: ', error.message);
        } else {
          console.log(' This is the concept by type and character unexpected error: ', error);
        }
        throw error;
      }
      finally {
        conceptCache.delete(key); // Remove from cache after fetching
      }
  })()
  conceptCache.set(key, GetConceptByCharacterAndType);
  return GetConceptByCharacterAndType;
}


/**
 * Retrieves multiple concepts matching any of the specified connection types in bulk.
 * This function first fetches concept IDs by type, then retrieves the full concept data.
 *
 * @param connectionTypes - Array of connection type strings to match
 * @returns A promise that resolves to an array of Concept objects matching the specified types
 *
 * @example
 * ```typescript
 * // Get all concepts associated with specific connection types
 * const concepts = await GetConceptByTypeBulk(["friendship", "colleague", "family"]);
 * console.log(`Found ${concepts.length} concepts`);
 * ```
 *
 * @remarks
 * This function performs a two-stage retrieval:
 * 1. First API call: Sends connection types to get matching concept IDs
 * 2. Second stage: Uses GetConceptBulk to efficiently fetch all concept data
 *
 * The connection types are sent as a JSON array to the API endpoint.
 * This is useful for finding all concepts that participate in connections
 * of specific types, enabling type-based concept discovery and filtering.
 *
 * @see GetConceptBulk for the bulk concept retrieval mechanism
 * @see GetConceptByCharacterAndType for single concept lookup by character and type
 * @see BaseUrl.GetConceptConnectionByType for the API endpoint
 */
export async function GetConceptByTypeBulk(connectionTypes:string[]): Promise<Concept[]>{
        let conceptList:Concept[] = [];
        let types = JSON.stringify(connectionTypes);
          var header = GetRequestHeader();
          const response = await fetch(BaseUrl.GetConceptConnectionByType(),{
              method: 'POST',
              headers: header,
              body: types,
          });
          if(response.ok){
            let conceptIdsList = await response.json() ;
            conceptList = await GetConceptBulk(conceptIdsList);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by type and character error", response.status);
            HandleHttpError(response);
          }
    return conceptList;
}
