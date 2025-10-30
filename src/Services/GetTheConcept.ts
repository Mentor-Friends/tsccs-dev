/**
 * Concept Retrieval Service
 *
 * This module provides the primary interface for retrieving concepts from the system.
 * It implements a multi-tier caching strategy that checks local memory first, then
 * falls back to API calls. It also handles special ghost concepts (negative IDs) and
 * ensures concept type information is properly populated.
 *
 * @module GetTheConcept
 */

import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId, LConcept, UserBinaryTree } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

/**
 * Retrieves a concept by ID with automatic caching and type population.
 *
 * This is the primary function for concept retrieval in the CCS system. It implements
 * a sophisticated multi-tier lookup strategy:
 * 1. For negative IDs: Retrieves ghost concepts from user-specific storage
 * 2. For positive IDs: Checks local cache (ConceptsData) first
 * 3. Falls back to API call (GetConcept) if not in cache
 * 4. Ensures the concept's type information is populated
 * 5. Returns default concept if all retrieval attempts fail
 *
 * Ghost concepts (negative IDs) are special user-specific concepts that exist in
 * local storage rather than the main database. They're converted from LConcept format
 * to standard Concept format during retrieval.
 *
 * @param id - The ID of the concept to retrieve (negative IDs are ghost concepts)
 * @param userId - The user ID for ghost concept lookup (default: 999)
 *
 * @returns A promise that resolves to the retrieved Concept, or a default concept if not found
 *
 * @example
 * ```typescript
 * // Retrieve a regular concept
 * const concept = await GetTheConcept(12345);
 * console.log("Concept type:", concept.type?.characterValue);
 * console.log("Concept value:", concept.characterValue);
 * ```
 *
 * @example
 * ```typescript
 * // Retrieve a ghost concept (negative ID)
 * const ghostConcept = await GetTheConcept(-100, 456);
 * console.log("Ghost concept:", ghostConcept.characterValue);
 * ```
 *
 * @example
 * ```typescript
 * // Check if concept was found
 * const concept = await GetTheConcept(99999);
 * if (concept.id === 0) {
 *   console.log("Concept not found, using default");
 * } else {
 *   console.log("Found concept:", concept.id);
 * }
 * ```
 *
 * @remarks
 * - Negative IDs indicate ghost concepts stored in user-specific storage
 * - Ghost concepts are converted from LConcept to Concept format
 * - The function checks local cache (ConceptsData) before making API calls
 * - If a concept is found but has no type populated, fetches and attaches the type
 * - Type concepts are also cached for efficiency
 * - Returns a default concept (id=0) if retrieval fails at all levels
 * - The function is null-safe; always returns a Concept instance
 * - Automatically populates concept.type if it's null but typeId exists
 *
 * @see {@link CreateDefaultConcept} for the default concept structure
 * @see {@link ConceptsData.GetConcept} for cache lookup
 * @see {@link GetConcept} for API-based retrieval
 * @see {@link GetUserGhostId} for ghost concept retrieval
 */
export default async function GetTheConcept(id: number, userId: number = 999){
    var concept = CreateDefaultConcept();
    if(id < 0){
       let lconcept:LConcept =  await GetUserGhostId(userId, id);
       concept = convertFromLConceptToConcept(lconcept)
       return concept;
    }
    concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
        var conceptString = await  GetConcept(id);
        
        concept = conceptString as Concept;
    }
    if( concept.id != 0){

        if(concept.type == null) {

            var conceptType = await ConceptsData.GetConcept(concept.typeId);
            if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
                var typeConceptString = await GetConcept(concept.typeId);
                var typeConcept = typeConceptString as Concept;
                concept.type = typeConcept;
            }
        }
    }

    return concept;
}