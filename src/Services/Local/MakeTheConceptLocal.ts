/**
 * Local Concept Creation with Uniqueness Check Module
 *
 * This module provides "get-or-create" functionality for concepts in local storage.
 * It checks if a concept with the specified character value and type already exists,
 * and only creates a new one if it doesn't, preventing duplicate concepts.
 *
 * @module MakeTheConceptLocal
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import CreateTheConceptLocal from "./CreateTheConceptLocal";

/**
 * Gets an existing concept or creates a new one if it doesn't exist.
 *
 * This function implements a "get-or-create" pattern by first checking if a concept
 * with the given character value and type already exists in local storage. If found,
 * it returns the existing concept; otherwise, it creates and returns a new one.
 *
 * This prevents duplicate concepts from being created for the same character value
 * and type combination, maintaining data integrity and uniqueness constraints.
 *
 * @param referent - The character value/name for the concept
 * @param typeCharacter - The character representation of the concept's type
 * @param userId - The ID of the user creating/owning the concept
 * @param categoryId - The category ID for the concept
 * @param typeId - The ID of the type concept
 *
 * @returns A promise that resolves to the found or newly created LConcept
 *
 * @remarks
 * - First queries for existing concept using character value and type ID
 * - Only creates a new concept if no match is found (concept.id === 0)
 * - Automatically uses accessId of 4 (default access level) for new concepts
 * - Ensures referent uniqueness within the same type
 * - Particularly useful for maintaining referential integrity
 *
 * @example
 * ```typescript
 * // First call creates the concept
 * const concept1 = await MakeTheConceptLocal(
 *   "John Doe",     // referent
 *   "the_name",     // typeCharacter
 *   123,            // userId
 *   4,              // categoryId
 *   51              // typeId
 * );
 * console.log(`Created concept with ID: ${concept1.id}`);
 *
 * // Second call returns the same concept (no duplicate)
 * const concept2 = await MakeTheConceptLocal(
 *   "John Doe",     // same referent
 *   "the_name",     // same typeCharacter
 *   123,            // userId
 *   4,              // categoryId
 *   51              // same typeId
 * );
 * console.log(concept1.id === concept2.id); // true
 *
 * // Different type allows same referent
 * const concept3 = await MakeTheConceptLocal(
 *   "John Doe",     // same referent
 *   "the_company",  // different type
 *   123,
 *   4,
 *   52              // different typeId
 * );
 * console.log(concept3.id !== concept1.id); // true
 * ```
 *
 * @see {@link CreateTheConceptLocal} - Creates new concepts
 * @see {@link LocalConceptsData.GetConceptByCharacterAndTypeLocal} - Checks for existing concepts
 * @see {@link MakeTheInstanceConceptLocal} - Higher-level concept creation with type handling
 */
export default async function MakeTheConceptLocal(referent:string, typeCharacter:string, userId:number, categoryId:number,
typeId:number){

    var conceptString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeId);
    var concept = conceptString as LConcept;
    let accessId = 4;
    if(concept.id == 0){

       conceptString = await  CreateTheConceptLocal(referent,typeCharacter,userId,categoryId,typeId,accessId );

        concept = conceptString as LConcept;
    }

    return concept;


}