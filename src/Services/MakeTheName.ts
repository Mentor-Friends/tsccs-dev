/**
 * @module MakeTheName
 * @description Creates name concepts in the Concept Connection System (CCS).
 * This module provides functionality for creating concepts that represent names,
 * utilizing character concepts as referents. It handles both existing concepts
 * (by retrieving their referent) and new concepts (by creating character concepts).
 */

import { Concept } from "../DataStructures/Concept";
import { ReferentInfo } from "../DataStructures/ReferentInfo";
import GetTheReferent from "./GetTheReferent";
import MakeTheCharacter from "./MakeTheCharacter";
import MakeTheConcept from "./MakeTheConcept";

/**
 * Creates a name concept with character data as its referent.
 *
 * This function creates concepts specifically designed to represent names in the CCS system.
 * It has two execution paths based on whether an existing concept is provided:
 *
 * 1. Existing concept (id > 0): Retrieves the referent of the existing concept and uses it
 * 2. New concept: Creates a new character concept and uses it as the referent for the name
 *
 * Name concepts are typed with ID 12 (name type) and use character concepts as their
 * referent, establishing a link between the name and its character representation.
 *
 * @param theCharacterData - The character string representing the name (e.g., "John Doe", "Product Name")
 * @param userId - The ID of the user creating this name concept
 * @param securityId - The security control ID for access management
 * @param securityUserId - The user ID for security control
 * @param accessId - The access control ID determining visibility
 * @param accessUserId - The user ID for access control
 * @param sessionInformationId - The session ID for tracking this operation
 * @param sessionInformationUserId - The user ID associated with the session
 * @param typeId - The type ID for the concept (used when creating from existing)
 * @param typeUserId - The user ID associated with the type
 * @param existingConcept - An existing concept to use as base (or empty concept to create new)
 *
 * @returns Promise resolving to the created or updated name Concept
 *
 * @remarks
 * - Name type ID is fixed at 12
 * - Category ID is fixed at 4
 * - Session ID defaults to 999 if not provided (using nullish coalescing)
 * - Access ID defaults to 4 if not provided
 * - For existing concepts with valid ID, retrieves and reuses the referent
 * - For new concepts, creates a character concept first, then creates the name concept
 * - Category user ID is always 999
 *
 * @example
 * ```typescript
 * // Create a new name concept
 * const emptyExisting = new Concept();
 * const nameConcept = await MakeTheName(
 *   "John Doe",
 *   1,
 *   999,
 *   1,
 *   100,
 *   1,
 *   999,
 *   999,
 *   12,
 *   1,
 *   emptyExisting
 * );
 *
 * // Update existing concept with name
 * const existing = await GetConcept(123);
 * const updatedName = await MakeTheName(
 *   "Jane Smith",
 *   1,
 *   999,
 *   1,
 *   100,
 *   1,
 *   999,
 *   999,
 *   12,
 *   1,
 *   existing
 * );
 * ```
 *
 * @see {@link MakeTheCharacter} - Creates the character concept used as referent
 * @see {@link GetTheReferent} - Retrieves the referent from existing concepts
 * @see {@link MakeTheConcept} - Creates the actual name concept entity
 */
export async function MakeTheName(theCharacterData:string, userId: number, securityId: number, securityUserId: number, accessId:number,
    accessUserId:number, sessionInformationId:number, sessionInformationUserId:number, typeId:number, typeUserId:number, existingConcept:Concept){
        
        var nameTypeId:number = 12;
        var categoryId:number = 4;
        var sessionId: number = sessionInformationId ?? 999;
        var sessionUserId: number = sessionInformationUserId ?? 999;
        var accessId: number = accessId ?? 4;
        var accessUserId: number = accessUserId ?? 999;
        var categoryUserId: number = 999;
        var referentInfo: ReferentInfo;
        var characterConcept;
        if(existingConcept.id > 0 && existingConcept.userId >0){
            characterConcept = await  GetTheReferent(existingConcept.id, existingConcept.userId,  existingConcept.referentId);
        }
        else{
           characterConcept = await  MakeTheCharacter(theCharacterData,userId, securityId, accessId,accessUserId, sessionId) as Concept;
           
        
            existingConcept = await MakeTheConcept(theCharacterData, userId, categoryId, categoryUserId, nameTypeId, typeUserId, characterConcept.id, characterConcept.userId,securityId,securityUserId,accessId,
             accessUserId,sessionId,sessionUserId);
          
        }

        return existingConcept;
}

