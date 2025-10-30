/**
 * Default Local Concept Creation Module
 *
 * This module provides a factory function for creating empty/default local concepts.
 * These default concepts are useful as placeholders, initial values, or for representing
 * "not found" states in the Concept Connection System.
 *
 * @module CreateDefaultLConcept
 */

import { LConcept } from "../../DataStructures/Local/LConcept";

/**
 * Creates a default empty local concept with all fields initialized to zero or default values.
 *
 * This function generates a placeholder concept that can be used for initialization,
 * default return values, or to represent the absence of a concept. All numeric fields
 * are set to 0, and string fields are set to "0", which allows calling code to check
 * for validity (e.g., `if (concept.id === 0)` to detect a default concept).
 *
 * @returns A new LConcept instance with all fields set to default/zero values
 *
 * @remarks
 * - All numeric IDs (id, userId, typeId, categoryId, accessId, referentId) are set to 0
 * - Character fields (referent, typecharacter) are set to "0"
 * - isNew flag is set to false (not a new concept)
 * - created_on and updated_on are set to current timestamp
 * - Commonly used as a null object pattern to avoid null checks
 *
 * @example
 * ```typescript
 * // Use as a default return value when concept is not found
 * function findConcept(id: number): LConcept {
 *   const found = database.find(id);
 *   return found || CreateDefaultLConcept();
 * }
 *
 * const concept = findConcept(123);
 * if (concept.id === 0) {
 *   console.log("Concept not found");
 * }
 *
 * // Use as initial value for variables
 * let mainConcept = CreateDefaultLConcept();
 * // ... later assign actual concept
 * mainConcept = await fetchConcept();
 * ```
 *
 * @see {@link LConcept} - The local concept data structure
 * @see {@link CreateTheConceptLocal} - Creates actual concepts with real data
 */
export function CreateDefaultLConcept(){
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new LConcept(0,0,0,0,0,"0","0",false,created_on,updated_on,0);
    return concept;
}