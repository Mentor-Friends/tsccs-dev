/**
 * API module for creating and retrieving type concepts.
 * Type concepts define the categories and classifications used in the Concept Connection System.
 *
 * @module Api/MakeTheTypeConceptApi
 * @see https://documentation.freeschema.com for reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { ConceptsData, GetConceptByCharacter } from "../app";
import { GetConceptByCharacterAndCategory } from "../Services/ConceptFinding/GetConceptByCharacterAndCategory";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

const conceptCache = new Map<string, Promise<Concept>>();

/**
 * Retrieves or creates a type concept based on a string identifier.
 * Type concepts are special concepts that define categories for other concepts in the system.
 *
 * This function first attempts to find an existing type concept locally, then queries the backend
 * if not found. If the concept doesn't exist in the backend, it creates a new type concept.
 * The function uses caching to prevent duplicate requests for the same type.
 *
 * @param type - The string identifier for the type concept (e.g., "the_person", "the_location")
 * @param userId - The user ID associated with the request
 * @returns A promise that resolves to the Concept object representing the type
 *
 * @example
 * ```typescript
 * // Get or create a "person" type concept
 * const personType = await MakeTheTypeConceptApi('the_person', 123);
 * console.log('Person type ID:', personType.id);
 *
 * // Use the type concept when creating new concepts
 * const newPerson = await CreateConcept('John Doe', personType.id);
 * ```
 *
 * @remarks
 * - Uses local caching to prevent duplicate simultaneous requests
 * - First searches for existing concept via GetConceptByCharacterAndCategory
 * - Creates new type concept in backend if not found or if typeId is 4 (unknown type)
 * - Automatically adds the retrieved concept to ConceptsData for local access
 * - Cache entries are cleaned up after the fetch completes
 * - Returns a default concept with id=0 if errors occur
 *
 * @see GetConceptByCharacterAndCategory for local concept searching
 * @see MakeTheNameInBackend for creating named concepts
 */
export async function MakeTheTypeConceptApi(type:string, userId:number){
  // create  a default concept with all defaulting to zero
  let concept = CreateDefaultConcept();

  // check the cache
  if (conceptCache.has(type)) return conceptCache.get(type) || concept;

  const makeTypeConcept = (async () => {
    try{
      // get the concept by character and category from the api
      concept = await GetConceptByCharacterAndCategory(type);
      if(concept.id == 0 || concept.typeId == 4){
        var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.MakeTheTypeConceptUrl(),{
          method: 'POST',
          headers: header,
          body: `type=${type}`
        });
        if(!response.ok){
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
        }
        let result = await response.json();
        concept = result as Concept;
        if(concept.id > 0) ConceptsData.AddConcept(concept);
      }
      return concept;
    }
    catch (error) {
      if (error instanceof Error) console.log('Make The Type Concept Api error : ', error.message);
      else console.log('Make The Type Concept Api error : ', error);
      throw error;
    }
    finally {
      conceptCache.delete(type); // Remove from cache after fetching
    }
  })()
  // set the cache when fetching
  conceptCache.set(type, makeTypeConcept);
  return makeTypeConcept;
}
