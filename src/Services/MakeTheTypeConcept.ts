/**
 * @module MakeTheTypeConcept
 * @description Creates type concepts in the Concept Connection System (CCS).
 * This module handles the creation of type concepts which define the structure and
 * categorization of instance concepts. It supports both simple types and composite
 * types using recursive parsing and creation strategies.
 */

import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetCharacterByCharacter } from "../Api/GetCharacterDataByCharacter";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import { InnerActions } from "../DataStructures/Transaction/Transaction";
import CreateTheConcept, { CreateTheConceptImmediate } from "./CreateTheConcept";
import GetConceptByCharacter from "./GetConceptByCharacter";
import MakeTheCharacter from "./MakeTheCharacter";
import { SplitStrings } from "./SplitStrings";

/**
 * Creates or retrieves a type concept in the CCS system.
 *
 * This function manages the creation of type concepts which define the structure
 * and classification for instance concepts. It uses a recursive approach to handle
 * composite types by splitting type strings and creating category and type hierarchies.
 *
 * The function follows this logic:
 * 1. First checks if a concept with the given character value exists
 * 2. If not found, splits the type string to determine if it's a composite type
 * 3. For simple types, creates a character-based concept
 * 4. For composite types (e.g., "category_typename"), recursively creates both parts
 *
 * @param typeString - The string identifier for the type (e.g., "user", "post", "the_category_type")
 * @param sessionId - The session ID for tracking this operation
 * @param sessionUserId - The user ID associated with the session
 * @param userId - The ID of the user creating this type concept
 * @param actions - Transaction actions for batch operations (default: empty actions)
 *
 * @returns Promise resolving to the created or retrieved type Concept
 *
 * @remarks
 * - Uses SplitStrings to parse composite type names
 * - Recursively creates type hierarchies for composite types
 * - The first part of a split becomes the category, the second part becomes the type
 * - Simple types (no split) are created as character concepts
 * - Includes debug logging for split string arrays
 *
 * @example
 * ```typescript
 * // Create a simple type
 * const userType = await MakeTheTypeConcept(
 *   "the_user",
 *   999,
 *   1,
 *   1
 * );
 *
 * // Create a composite type
 * const compositeType = await MakeTheTypeConcept(
 *   "category_typename",
 *   999,
 *   1,
 *   1
 * );
 *
 * // With transaction actions
 * const typeWithActions = await MakeTheTypeConcept(
 *   "the_post",
 *   999,
 *   1,
 *   1,
 *   { concepts: [], connections: [] }
 * );
 * ```
 *
 * @see {@link GetConceptByCharacter} - Checks for existing type concepts
 * @see {@link MakeTheCharacter} - Creates character-based concepts for simple types
 * @see {@link SplitStrings} - Parses composite type strings
 * @see {@link CreateTheConceptImmediate} - Creates the concept entity for composite types
 */
export  async  function MakeTheTypeConcept(typeString: string, sessionId: number, sessionUserId: number, userId: number,actions: InnerActions = {concepts: [], connections: []}
    )
{
    var referentId: number = 999;
    var securityId: number = 999;
    var sessionInformationUserId: number = 999;
    var accessId: number = 999;
    var securityUserId: number = userId;
    var accessUserId: number = userId;
    var categoryUserId: number = userId;
    var securityUserId: number = userId;

    var existingConcept = await GetConceptByCharacter(typeString);


    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            var splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray.length > 0){
                console.log(splittedStringArray);
                if(splittedStringArray[0] == typeString){
                  var conceptString =  await MakeTheCharacter(typeString, userId, securityId, accessId, accessUserId, sessionId);
                  existingConcept = conceptString as Concept;
    
                }   
                else{
                    var categoryId:number = 1;
                    var categoryConcept = await MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId, actions);
                    var typeConcept = await MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId, actions );
                    if(typeConcept){
                        
                        var concept = await CreateTheConceptImmediate(typeString, userId, categoryConcept.id, userId,typeConcept.id, userId, referentId, userId,
                            securityId, userId,accessId, userId, sessionId, userId, actions );
                        existingConcept = concept as Concept;
                    }
    
    
                }
            }

        }

    }
    return existingConcept;


}