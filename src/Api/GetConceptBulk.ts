/**
 * Module for bulk retrieval of concepts from the CCS system.
 * Provides optimized batch fetching of multiple concepts in a single API request.
 *
 * @module Api/GetConceptBulk
 * @see https://documentation.freeschema.com for bulk operation details
 */

import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves multiple concepts in a single optimized API request.
 * This function checks the local cache first and only fetches uncached concepts from the API.
 *
 * @param conceptIds - Array of concept IDs to retrieve
 * @returns A promise that resolves to an array of Concept objects
 *
 * @example
 * ```typescript
 * // Fetch multiple concepts at once
 * const concepts = await GetConceptBulk([1, 2, 3, 4, 5]);
 * concepts.forEach(concept => {
 *   console.log(`Concept ${concept.id}: ${concept.characterValue}`);
 * });
 * ```
 *
 * @remarks
 * Performance optimization strategy:
 * 1. Checks ConceptsData cache for each requested concept ID
 * 2. Immediately returns cached concepts without API call
 * 3. Batches all uncached IDs into a single bulk API request
 * 4. Caches all newly fetched concepts for future use
 * 5. Returns empty array if all concepts are cached or if the API request fails
 *
 * This is significantly more efficient than calling GetConcept() multiple times
 * when you need to retrieve multiple concepts, as it reduces network overhead.
 *
 * @see Concept for the structure of concept objects
 * @see ConceptsData.AddConcept for caching mechanism
 * @see GetConcept for single concept retrieval
 * @see BulkConceptGetterApi for alternative bulk fetching without cache checking
 */
export async function GetConceptBulk(conceptIds: number[]){
    let result:Concept[] = [];
    try{
        var bulkConceptFetch = [];
        for(let i=0; i<conceptIds.length; i++){
            let conceptUse :Concept= await ConceptsData.GetConcept(conceptIds[i]);
            if(conceptUse.id == 0){
                bulkConceptFetch.push(conceptIds[i]);
            } else {
              result.push(conceptUse)
            }
        }
        if(bulkConceptFetch.length == 0){
            
            return result;
        }
        else{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.GetConceptBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(bulkConceptFetch)
            });
            if(response.ok){
                let output = await response.json();
                if(output.length > 0){
                    for(let i=0 ; i<output.length; i++){
                        let concept = output[i] as Concept;
                        result.push(concept);
                        ConceptsData.AddConcept(concept);
                    }
    
                }
            }
            else{
                console.log("Get Concept Bulk error", response.status);
                HandleHttpError(response);
            }
            return result;

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Concept Bulk  error message: ', error.message);
        } else {
          console.log('Get Concept Bulk  unexpected error: ', error);
        }
        throw error;
      }
}

/**
 * Alternative bulk concept fetcher that directly queries the API without pre-checking the cache.
 * This function is useful when you want to force-fetch concepts from the API regardless of cache state.
 *
 * @param bulkConceptFetch - Array of concept IDs to fetch from the API
 * @returns A promise that resolves to an array of Concept objects
 *
 * @example
 * ```typescript
 * // Force fetch concepts from API bypassing cache check
 * const freshConcepts = await BulkConceptGetterApi([10, 20, 30]);
 * console.log(`Fetched ${freshConcepts.length} concepts`);
 * ```
 *
 * @remarks
 * Differences from GetConceptBulk:
 * - Does NOT check ConceptsData cache before making the API request
 * - Always makes an API call if IDs are provided (except when array is empty)
 * - Still caches the fetched concepts in ConceptsData after retrieval
 * - Uses JSON content type for the request
 *
 * Use this function when:
 * - You need the latest data from the server
 * - You want to refresh cached concepts
 * - Cache invalidation is needed for specific concepts
 *
 * @see GetConceptBulk for cache-aware bulk retrieval
 * @see ConceptsData.AddConcept for caching mechanism
 */
export async function BulkConceptGetterApi(bulkConceptFetch: number[]) {
    const conceptList: Concept[] = []
    if (bulkConceptFetch.length > 0) {
      const myHeaders = {
        'Content-Type': 'application/json',
      }
      try {
        const response = await fetch(BaseUrl.GetConceptBulkUrl(), {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(bulkConceptFetch),
        })
        if (response.ok) {
          const result = await response.json()
          if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
              const concept = result[i] as Concept
              conceptList.push(concept)
              ConceptsData.AddConcept(concept)
            }
          }
        }
        else{
          HandleHttpError(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('bulk concept getter api error: ', error.message)
        } else {
          console.log('bulk concept getter api error: ', error)
        }
        throw error;
      }
    }
  
    return conceptList
  }
  