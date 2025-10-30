/**
 * @module GetTheReferent
 * @description Retrieves referent concepts in the Concept Connection System (CCS).
 * This module provides functionality to fetch the referent concept of a given concept.
 * Referents are concepts that serve as the actual data or value that another concept
 * points to, creating a level of indirection that enables flexible data modeling.
 */

import { Concept } from "../DataStructures/Concept";
import { ReferentInfo } from "../DataStructures/ReferentInfo";
import GetTheConcept from "./GetTheConcept";

/**
 * Retrieves the referent concept for a given concept.
 *
 * This function fetches the concept that serves as the referent (the actual value or
 * data) for another concept. In the CCS system, concepts often point to other concepts
 * as their referents, creating a flexible hierarchy where concepts can reference
 * other concepts as their underlying data.
 *
 * For example, a name concept might reference a character concept as its referent,
 * or a typed instance might reference its data concept as a referent.
 *
 * @param id - The ID of the concept (currently unused in implementation)
 * @param userId - The user ID of the concept (currently unused in implementation)
 * @param referentId - The ID of the referent concept to retrieve
 *
 * @returns Promise resolving to the referent Concept
 *
 * @remarks
 * - Currently only uses the referentId parameter, id and userId are not utilized
 * - The id and userId parameters may be used for future access control or validation
 * - Returns the full Concept object of the referent
 * - Uses nullish coalescing to default referentId to 0 if null/undefined
 * - Previously returned ReferentInfo (commented out code shows this)
 * - Simplified to directly return the referent concept
 *
 * @example
 * ```typescript
 * // Get the referent of a name concept
 * const nameConcept = await GetTheConcept(123);
 * const referent = await GetTheReferent(
 *   nameConcept.id,
 *   nameConcept.userId,
 *   nameConcept.referentId
 * );
 * console.log("Referent concept:", referent);
 * // referent might be a character concept
 *
 * // Get character data from a typed concept
 * const typedConcept = await GetTheConcept(456);
 * const characterData = await GetTheReferent(
 *   typedConcept.id,
 *   typedConcept.userId,
 *   typedConcept.referentId
 * );
 * console.log("Character value:", characterData.characterValue);
 *
 * // Chain referent lookups
 * const concept = await GetTheConcept(789);
 * const firstReferent = await GetTheReferent(
 *   concept.id,
 *   concept.userId,
 *   concept.referentId
 * );
 * if (firstReferent.referentId) {
 *   const secondReferent = await GetTheReferent(
 *     firstReferent.id,
 *     firstReferent.userId,
 *     firstReferent.referentId
 *   );
 *   console.log("Nested referent:", secondReferent);
 * }
 * ```
 *
 * @see {@link GetTheConcept} - Retrieves the referent concept by ID
 * @see {@link ReferentInfo} - Data structure for referent information (legacy)
 * @see {@link Concept} - The concept data structure
 */
export default async function GetTheReferent(id:number, userId:number, referentId:number){
    var myref:number = referentId ?? 0;
    var referent = await GetTheConcept(referentId) as Concept;

    //var result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);

    return referent;


}