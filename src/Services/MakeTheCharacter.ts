/**
 * @module MakeTheCharacter
 * @description Creates character-based concepts in the Concept Connection System (CCS).
 * This module handles the creation of concepts representing character data, with special
 * handling for single characters (using ASCII codes) versus multi-character strings.
 * It serves as a fundamental building block for text and string representation in CCS.
 */

import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { Concept } from "../DataStructures/Concept";
import { Returner } from "../DataStructures/Returner";
import MakeTheCharacterData from "./MakeTheCharacterData";
import MakeTheConcept from "./MakeTheConcept";

/**
 * Creates a character concept for the given character data.
 *
 * This function creates concepts that represent character data in the CCS system.
 * It handles two distinct cases based on the length of the input:
 *
 * 1. Single character: Uses the ASCII character code as the referent ID and type 49
 * 2. Multiple characters: Uses character data ID as referent and type 51
 *
 * Both cases first create the underlying character data before creating the concept.
 *
 * @param the_character_data - The character string to create a concept for (e.g., "a", "hello")
 * @param userId - The ID of the user creating this character concept
 * @param securityId - The security control ID for access management
 * @param accessId - The access control ID determining visibility
 * @param accessUserId - The user ID for access control
 * @param sessionId - The session ID for tracking this operation
 *
 * @returns Promise resolving to the created character Concept
 *
 * @remarks
 * - Single characters use ASCII charCodeAt(0) as their referent ID
 * - Single characters are typed with ID 49 (character type)
 * - Multi-character strings are typed with ID 51 (character data type)
 * - Multi-character strings reference the created character data as referent
 * - Category ID is always 4 for character concepts
 * - Always creates new character data before creating the concept
 *
 * @example
 * ```typescript
 * // Create a single character concept
 * const charA = await MakeTheCharacter(
 *   "a",
 *   1,
 *   999,
 *   100,
 *   1,
 *   999
 * );
 * // Uses ASCII code 97 as referent ID
 *
 * // Create a multi-character concept
 * const hello = await MakeTheCharacter(
 *   "hello",
 *   1,
 *   999,
 *   100,
 *   1,
 *   999
 * );
 * // Creates character data first, then references it
 *
 * // Create a type string
 * const typeName = await MakeTheCharacter(
 *   "the_user",
 *   1,
 *   999,
 *   100,
 *   1,
 *   999
 * );
 * ```
 *
 * @see {@link MakeTheCharacterData} - Creates the underlying character data
 * @see {@link MakeTheConcept} - Creates the concept entity
 * @see {@link Returner} - Return type for character data creation
 */
export default async function MakeTheCharacter(the_character_data:string, userId: number, securityId: number, 
    accessId:number, accessUserId:number, sessionId:number){
        var categoryUserId: number = userId;
        var securityUserId: number = userId;
        var accessUserId: number = userId;
        var categoryId: number = 4;
        var typeId: number = 51;
        var typeUserId: number = userId;
        var sessionUserId: number = userId;
        var referentUserId: number = userId;

        var lengthOfCharacters: number = the_character_data.length;
        var concept;
        if(lengthOfCharacters == 1){
            var referentId:number = the_character_data.charCodeAt(0);
            var typeIdForCharacter:number = 49;
            var characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);

            concept = MakeTheConcept(the_character_data, userId, categoryId, categoryUserId,
                referentId, referentUserId, typeIdForCharacter, typeUserId,
                securityId, securityUserId, accessId, accessUserId,
                sessionId, sessionUserId);
        }
        else{
            var characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);
            var characterData = characterDataString as Returner;
            if(characterData.isNew){
               var conceptString = await MakeTheConcept(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId,
                    securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);

                    concept = conceptString as Concept;

            }
            else{
                var conceptString = await MakeTheConcept(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId,
                    securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);

                    concept = conceptString as Concept;

            }

        }

        return concept;

    }