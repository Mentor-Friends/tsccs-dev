/**
 * @module MakeTheCharacterData
 * @description Creates character data entries in the Concept Connection System (CCS).
 * This module handles the storage of character strings as data entities that can be
 * referenced by concepts. It creates TheCharacter objects and persists them through
 * the API, providing metadata about whether the character data is newly created.
 */

import { CreateTheCharacter } from "../Api/Create/CreateTheCharacter";
import { GetCharacterByCharacter } from "../Api/GetCharacterDataByCharacter";
import { Returner } from "../DataStructures/Returner";
import { TheCharacter } from "../DataStructures/TheCharacter";

/**
 * Creates or retrieves character data for a given character string.
 *
 * This function creates a TheCharacter data object with the provided character string
 * and persists it to the database through the API. The character data serves as a
 * storage mechanism for string values that can be referenced by multiple concepts.
 *
 * The created character data includes all necessary metadata for access control,
 * security, and session tracking. The Returner object indicates whether the
 * character data was newly created or already existed.
 *
 * @param the_character_data - The character string to store (e.g., "hello", "user_name")
 * @param userId - The ID of the user creating this character data
 * @param securityId - The security control ID for access management
 * @param accessId - The access control ID determining visibility
 * @param sessionId - The session ID for tracking this operation
 *
 * @returns Promise resolving to a Returner object containing the character data ID,
 *          user ID, and a flag indicating if it was newly created
 *
 * @remarks
 * - Creates a TheCharacter object with empty string for last parameter
 * - Sets isNew flag to false initially in TheCharacter constructor
 * - The actual isNew status comes from the API response in Returner
 * - All user IDs (category, access, security, session) are set to the same userId
 * - Character data is immutable once created and can be shared across concepts
 *
 * @example
 * ```typescript
 * // Create character data for a username
 * const result = await MakeTheCharacterData(
 *   "john_doe",
 *   1,
 *   999,
 *   100,
 *   999
 * );
 * console.log(result.id); // Character data ID
 * console.log(result.isNew); // true if newly created
 *
 * // Create character data for a type name
 * const typeData = await MakeTheCharacterData(
 *   "the_user",
 *   1,
 *   999,
 *   100,
 *   999
 * );
 *
 * // Use in character concept creation
 * const charData = await MakeTheCharacterData("hello", 1, 999, 100, 999);
 * // charData.id can now be used as a referent in concept creation
 * ```
 *
 * @see {@link CreateTheCharacter} - API function that persists the character data
 * @see {@link TheCharacter} - Data structure representing character data
 * @see {@link Returner} - Return type containing ID and creation status
 */
export default async function MakeTheCharacterData(the_character_data: string, userId: number, securityId: number , accessId: number,
    sessionId:number){
        var categoryUserId : number = userId;
        var accessUserId: number = userId;
        var securityUserId: number = userId;
        var sessionInformationUserId: number = userId;

        var theCharacter = new TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId,
            sessionId, sessionInformationUserId,"",false);
        var output =  await   CreateTheCharacter(theCharacter);
        var returner = output as Returner;

        return returner;

}