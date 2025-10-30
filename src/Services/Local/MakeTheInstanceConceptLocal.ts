/**
 * Local Instance Concept Creation Module
 *
 * This module provides high-level functionality for creating instance concepts with
 * automatic type management. It handles type creation, naming conventions (the_ prefix),
 * and different scenarios like compositions, large text values, and standard concepts.
 *
 * @module MakeTheInstanceConceptLocal
 */

import { CreateTextData } from "../../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../../Api/GetConceptByCharacterAndType";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { TheTexts } from "../../DataStructures/TheTexts";
import CreateTheConcept from "../CreateTheConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { MakeTheName } from "../MakeTheName";
import MakeTheTypeConceptLocal from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";

/**
 * Creates an instance concept with automatic type handling and smart referent management.
 *
 * This high-level function handles the complete process of creating a concept instance,
 * including:
 * - Ensuring the type concept exists (creates if needed)
 * - Adding "the_" prefix to types if not present
 * - Handling composition concepts (nested objects)
 * - Managing long text values (> 255 characters)
 * - Preventing duplicate concepts with get-or-create logic
 *
 * @param type - The type name for the concept (e.g., "user", "product")
 * @param referent - The string value/content of the concept
 * @param composition - Whether this is a composition concept (has nested structure)
 * @param userId - The ID of the user creating the concept
 * @param accessId - Access control ID for the concept
 * @param sessionInformationId - Session tracking ID (defaults to 999)
 * @param referentId - Optional ID linking to another concept (defaults to 0)
 *
 * @returns A promise that resolves to the created or found LConcept with its type attached
 *
 * @remarks
 * - Automatically prepends "the_" to type names if not already present
 * - For compositions: Always creates a new concept regardless of existing ones
 * - For text > 255 chars: Creates concept with full text stored
 * - For text <= 255 chars: Uses get-or-create logic to prevent duplicates
 * - Always ensures the type concept exists before creating the instance
 * - Sets category ID to 4 by default
 * - Returns concept with its type property populated for immediate use
 *
 * @example
 * ```typescript
 * // Create a simple string concept
 * const nameConcept = await MakeTheInstanceConceptLocal(
 *   "name",           // type (becomes "the_name")
 *   "John Doe",       // referent
 *   false,            // not a composition
 *   123,              // userId
 *   4,                // accessId
 *   999               // sessionInformationId
 * );
 * console.log(nameConcept.type.characterValue); // "the_name"
 *
 * // Create a composition concept for nested objects
 * const addressConcept = await MakeTheInstanceConceptLocal(
 *   "address",        // type (becomes "the_address")
 *   "",               // empty referent for compositions
 *   true,             // is a composition
 *   123,
 *   4,
 *   999
 * );
 *
 * // Handle long text
 * const longText = "A".repeat(300);
 * const articleConcept = await MakeTheInstanceConceptLocal(
 *   "article",
 *   longText,         // > 255 characters
 *   false,
 *   123,
 *   4,
 *   999
 * );
 *
 * // Type name with "the_" prefix already included
 * const userConcept = await MakeTheInstanceConceptLocal(
 *   "the_user",       // already has "the_" prefix
 *   "user123",
 *   false,
 *   123,
 *   4,
 *   999
 * );
 * ```
 *
 * @see {@link MakeTheTypeConceptLocal} - Creates or retrieves type concepts
 * @see {@link CreateTheConceptLocal} - Creates the actual concept instance
 * @see {@link LocalConceptsData.GetConceptByCharacterAndTypeLocal} - Checks for existing concepts
 * @see {@link CreateTheCompositionLocal} - Uses this function to create composition elements
 */
export async function MakeTheInstanceConceptLocal(type:string, referent:string, composition:boolean=false, userId: number,
    accessId:number, sessionInformationId: number=999, referentId: number = 0){
        var sessionInformationId: number = 999;
        var categoryId: number = 4;
        var sessionInformationUserId: number = userId;
        // change this
        var accessId: number = 4;

        var stringToCheck: string = "";

        var  stringLength:number = referent.length;
        var typeConcept;
        var concept: LConcept;
        var startsWithThe = type.startsWith("the_");

        if(startsWithThe){
            stringToCheck = type;
        }
        else{
            stringToCheck = "the_" + type;
        }

        if(composition){
           var   typeConceptString = await MakeTheTypeConceptLocal(type, sessionInformationId, userId, userId );
           typeConcept = typeConceptString as LConcept;
            
           var conceptString = await CreateTheConceptLocal(referent,type,userId, categoryId, typeConcept.id,accessId, referentId );

            concept = conceptString as LConcept;
        }
        else if(stringLength > 255){

            var typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString  as LConcept;
            var conceptString = await CreateTheConceptLocal(referent,stringToCheck,userId, categoryId, typeConcept.id,accessId );

            concept = conceptString as LConcept;



        }
        else{
            var typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString  as LConcept;
            var conceptByCharTypeString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString as LConcept;
            // var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            // var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                var conceptString = await CreateTheConceptLocal(referent, stringToCheck, userId, categoryId, typeConcept.id,accessId );
                concept = conceptString as LConcept;
            }
        }

        concept.type = typeConcept;
        return concept;

}