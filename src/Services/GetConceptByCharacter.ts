/**
 * @module GetConceptByCharacter
 * @description Retrieves concepts by their character value in the Concept Connection System (CCS).
 * This module provides functions to look up concepts based on character strings,
 * utilizing both local cache (ConceptsData) and remote API calls for comprehensive
 * concept retrieval with automatic fallback mechanisms.
 */

import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

/**
 * Retrieves a concept by its character value.
 *
 * This function performs a two-tier lookup strategy to find concepts:
 * 1. First checks the local ConceptsData cache for the concept
 * 2. If not found or has invalid ID, calls the API to fetch from remote storage
 * 3. After API call, checks the cache again as API updates the cache
 *
 * This approach optimizes performance by using cached data when available while
 * ensuring data consistency through API fallback.
 *
 * @param characterValue - The character string to search for (e.g., "the_user", "hello")
 *
 * @returns Promise resolving to the found Concept, or a Concept with id=0 if not found
 *
 * @remarks
 * - Uses ConceptsData.GetConceptByCharacter for local cache lookup
 * - Falls back to GetConceptByCharacterValue API when cache misses
 * - API call updates the local cache automatically
 * - Returns null-safe with Concept having id=0 when not found
 * - Template literal ensures characterValue is treated as string
 *
 * @example
 * ```typescript
 * // Retrieve a type concept
 * const userType = await GetConceptByCharacter("the_user");
 * if (userType.id > 0) {
 *   console.log("Found user type:", userType);
 * }
 *
 * // Search for a specific name
 * const name = await GetConceptByCharacter("John Doe");
 *
 * // Check for non-existent concept
 * const missing = await GetConceptByCharacter("nonexistent");
 * console.log(missing.id); // 0
 * ```
 *
 * @see {@link GetConceptByCharacterUpdated} - Alternative implementation with same behavior
 * @see {@link ConceptsData.GetConceptByCharacter} - Local cache lookup
 * @see {@link GetConceptByCharacterValue} - Remote API lookup
 */
export default async function GetConceptByCharacter(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacter(characterValue);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}

/**
 * Retrieves a concept by its character value (updated variant).
 *
 * This function is functionally identical to GetConceptByCharacter, providing
 * an alternative export for the same lookup behavior. It follows the same
 * two-tier strategy of checking local cache first, then falling back to API.
 *
 * The "Updated" suffix may indicate a versioning strategy or future enhancement
 * point, but currently implements the same logic as the default export.
 *
 * @param characterValue - The character string to search for (e.g., "the_user", "hello")
 *
 * @returns Promise resolving to the found Concept, or a Concept with id=0 if not found
 *
 * @remarks
 * - Identical implementation to GetConceptByCharacter
 * - Exported as named export rather than default
 * - May be used for API versioning or compatibility
 * - Follows same cache-first, API-fallback pattern
 *
 * @example
 * ```typescript
 * import { GetConceptByCharacterUpdated } from './GetConceptByCharacter';
 *
 * // Use updated variant explicitly
 * const concept = await GetConceptByCharacterUpdated("the_post");
 * if (concept.id > 0) {
 *   console.log("Found concept:", concept);
 * }
 * ```
 *
 * @see {@link GetConceptByCharacter} - Default export with identical behavior
 * @see {@link ConceptsData.GetConceptByCharacter} - Local cache lookup
 * @see {@link GetConceptByCharacterValue} - Remote API lookup
 */
export  async function GetConceptByCharacterUpdated(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacter(characterValue);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}