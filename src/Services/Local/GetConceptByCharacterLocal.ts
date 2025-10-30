/**
 * Local Concept Character Lookup Module
 *
 * This module provides a simple interface for retrieving concepts by their character value
 * (string content/name) from local storage. It's commonly used to look up type concepts
 * or find concepts by their textual representation.
 *
 * @module GetConceptByCharacterLocal
 */

import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";

/**
 * Retrieves a concept from local storage by its character value.
 *
 * This function performs a lookup to find a concept whose characterValue (string content)
 * matches the provided string. This is particularly useful for finding type concepts
 * by their names (e.g., "the_user", "the_product") or for locating concepts by their
 * textual representation.
 *
 * @param characterValue - The character/string value to search for
 *
 * @returns A promise that resolves to the matching LConcept, or a default concept if not found
 *
 * @remarks
 * - Performs case-sensitive exact string matching
 * - Utilizes LocalConceptsData's internal indexing for efficient lookup
 * - If using character binary tree, lookup is O(log n), otherwise may be O(n)
 * - Returns a default/empty concept if no match is found (check concept.id === 0)
 * - Commonly used to look up type concepts before creating instances
 *
 * @example
 * ```typescript
 * // Look up a type concept
 * const userType = await GetConceptByCharacterLocal("the_user");
 * if (userType.id !== 0) {
 *   console.log(`Found user type with ID: ${userType.id}`);
 * }
 *
 * // Look up a concept by name
 * const johnConcept = await GetConceptByCharacterLocal("John Doe");
 * if (johnConcept.id !== 0) {
 *   console.log(`John exists with ID ${johnConcept.id}`);
 * } else {
 *   console.log("John not found in local storage");
 * }
 *
 * // Use in composition retrieval
 * async function getUserCompositions(userId: number) {
 *   const typeId = (await GetConceptByCharacterLocal("the_user")).id;
 *   if (typeId === 0) return [];
 *   return await LocalConceptsData.GetConceptsByTypeIdAndUser(typeId, userId);
 * }
 * ```
 *
 * @see {@link LocalConceptsData.GetConceptByCharacter} - Underlying lookup method
 * @see {@link CreateLocalCharacterBinaryTreeFromData} - Initializes character-based indexing
 * @see {@link MakeTheTypeLocal} - Uses this function to check for existing types
 * @see {@link GetCompositionListLocal} - Uses this to find type concepts
 */
export default async function GetConceptByCharacterLocal(characterValue: string){
    var concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
    return concept;
}