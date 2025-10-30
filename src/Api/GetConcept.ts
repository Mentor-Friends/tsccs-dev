/**
 * Module for retrieving individual concepts from the CCS system.
 * Provides caching and optimized retrieval of Concept objects by their unique identifiers.
 *
 * @module Api/GetConcept
 * @see https://documentation.freeschema.com for concept details
 */

import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Cache for in-flight concept requests to prevent duplicate API calls.
 * Maps concept IDs to their pending Promise to enable request deduplication.
 */
const conceptCache = new Map<number, Promise<Concept>>();

/**
 * Retrieves a concept by its unique ID with built-in caching and request deduplication.
 * This is the primary function for fetching individual concepts in the CCS system.
 *
 * @param id - The unique numeric identifier of the concept to retrieve
 * @returns A promise that resolves to the Concept object, or a default concept if not found
 *
 * @example
 * ```typescript
 * // Fetch a concept by ID
 * const concept = await GetConcept(123);
 * if (concept.id !== 0) {
 *   console.log(`Found concept: ${concept.characterValue}`);
 * }
 * ```
 *
 * @remarks
 * This function implements a sophisticated multi-layer retrieval strategy:
 *
 * 1. Request Deduplication: If a request for the same ID is already in-flight,
 *    returns the existing promise instead of making a duplicate API call.
 *
 * 2. Local Cache Check: First checks ConceptsData for a cached concept or NPC marker.
 *
 * 3. API Fallback: If not found locally, fetches from the API endpoint.
 *
 * 4. NPC Tracking: If the API returns a concept with id = 0, marks it as an NPC
 *    (Non-Persistent Concept) to avoid repeated failed lookups.
 *
 * 5. Cache Cleanup: The in-flight request cache is automatically cleaned up
 *    after each request completes (success or failure).
 *
 * The function always returns a Concept object - either the found concept,
 * or a default concept with id = 0 if not found.
 *
 * @see Concept for the structure of concept objects
 * @see ConceptsData.GetConcept for local cache retrieval
 * @see CreateDefaultConcept for default concept creation
 * @see GetConceptBulk for retrieving multiple concepts efficiently
 */
export async function GetConcept(id: number){
    let result = CreateDefaultConcept();
    // check the cache
    if (conceptCache.has(id)) return conceptCache.get(id) || result;

    const getConceptById = (async () => {
        try{
            var conceptUse :Concept= await ConceptsData.GetConcept(id);
            let isNpc = ConceptsData.GetNpc(id);
            if(conceptUse.id != 0 || isNpc){
    
                return conceptUse;
            }
            else{
                var header = GetRequestHeader('application/x-www-form-urlencoded');
                const response = await fetch(BaseUrl.GetConceptUrl(),{
                    method: 'POST',
                    headers:header,
                    body: `id=${id}`
                });
                if(response.ok){
                    result = await response.json() as Concept;
                    if(result.id > 0){
                        ConceptsData.AddConcept(result);
                    }
                    else{
                        ConceptsData.AddNpc(id);
                    }
                }
                else{
                    console.log("Get the concept error", response.status, id);
                    HandleHttpError(response);
                }
                return result;
    
            }
        } catch (error) {
            if (error instanceof Error) {
              console.log('Get the concept error message: ', error.message, id);
            } else {
              console.log('Get the concept unexpected error: ', error, id);
            }
            throw error;
        } finally {
            conceptCache.delete(id); // Remove from cache after fetching
        }
    })()

    conceptCache.set(id, getConceptById);
    return getConceptById
}