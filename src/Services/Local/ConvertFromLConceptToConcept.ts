import { Concept } from "../../DataStructures/Concept";

/**
 * Converts a local concept (LConcept) to a standard Concept format.
 *
 * This function is part of the local/server concept conversion system. Currently, it
 * performs a passthrough as LConcept and Concept share the same structure. This function
 * exists for:
 * - API consistency and symmetry with convertFromConceptToLConcept
 * - Future extensibility if conversion logic is needed
 * - Type clarity in code (explicit conversion intent)
 *
 * **LConcept vs Concept:**
 * - LConcept: Local-only concepts stored in IndexedDB (negative IDs)
 * - Concept: Server-synced concepts (positive IDs)
 * - Both use the same Concept class structure
 *
 * **When to Use:**
 * - Preparing local concepts for backend sync
 * - Converting local concepts to server format
 * - Type-safe conversion in TypeScript
 * - Maintaining code clarity and intent
 *
 * @param lconcept - The local concept to convert
 *
 * @returns The concept in standard Concept format (currently identical to input)
 *
 * @example
 * // Convert local concept before syncing
 * const localConcept = await CreateTheConceptLocal('Draft', 'the_note', 101, 1, 3, 2);
 * const serverConcept = ConvertFromLConceptToConcept(localConcept);
 * // Now ready for backend sync
 *
 * @example
 * // Type-safe conversion
 * const lconcepts = await GetAllLocalConcepts();
 * const concepts = lconcepts.map(lc => ConvertFromLConceptToConcept(lc));
 *
 * @see {@link convertFromConceptToLConcept} for the reverse conversion
 * @see {@link CreateTheConceptLocal} for creating local concepts
 */
export function ConvertFromLConceptToConcept(lconcept: Concept){
    return lconcept;
}