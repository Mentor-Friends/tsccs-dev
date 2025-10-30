import { Concept } from "../../DataStructures/Concept";

/**
 * Creates a default empty local concept with all properties set to zero/default values.
 *
 * This utility function generates a blank Concept object that can be used as a placeholder
 * or default return value when a concept is not found. All IDs and values are set to 0
 * or empty defaults.
 *
 * **Default Values:**
 * - id: 0 (indicates empty/not found)
 * - userId: 0
 * - typeId: 0
 * - categoryId: 0
 * - referentId: 0
 * - characterValue: "0"
 * - accessId: 0
 * - isNew: false
 * - entryTimeStamp: current date
 * - updatedTimeStamp: current date
 * - typeCharacter: "0"
 *
 * **Use Cases:**
 * - Default return value when concept not found
 * - Placeholder for conditional logic
 * - Initial state before loading data
 * - Template for creating new concepts
 *
 * @returns A Concept object with all properties set to default/zero values
 *
 * @example
 * // Use as default return
 * let concept = await GetTheConceptLocal(id);
 * if (concept.id === 0) {
 *   concept = CreateDefaultLConcept();
 * }
 *
 * @example
 * // Check if concept is valid
 * const concept = CreateDefaultLConcept();
 * console.log(concept.id); // 0
 * console.log(concept.characterValue); // "0"
 *
 * @see {@link CreateTheConceptLocal} for creating actual local concepts
 * @see {@link GetTheConceptLocal} for retrieving local concepts
 */
export function CreateDefaultLConcept(){
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new Concept(0,0,0,0,0,"0", 0, false,created_on,updated_on,"0");
    return concept;
}