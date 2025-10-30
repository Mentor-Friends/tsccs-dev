/**
 * @module MakeTheInstanceConcept
 * @description Creates instance concepts in the Concept Connection System (CCS).
 * This module handles the creation of concepts with specific types and referents,
 * managing various scenarios including compositions, text data, and character concepts.
 * It serves as a core factory function for instantiating typed concepts in the system.
 */

import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { MakeTheNameInBackend } from "../Api/MakeTheNameInBackend";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import { InnerActions } from "../DataStructures/Transaction/Transaction";
import { MakeTheTypeConceptApi } from "../app";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import CreateTheConcept, { CreateTheConceptImmediate, CreateTheConceptTemporary } from "./CreateTheConcept";
import { MakeTheName } from "./MakeTheName";
import { MakeTheTimestamp } from "./MakeTheTimestamp";
import {MakeTheTypeConcept} from "./MakeTheTypeConcept";

/**
 * Creates an instance concept with a specific type and referent.
 *
 * This function is the primary factory for creating typed concepts in the CCS system.
 * It handles three main scenarios:
 * 1. Composition concepts - Creates concepts using the composition pattern
 * 2. Text concepts - Creates concepts for strings longer than 255 characters, storing them as text data
 * 3. Standard concepts - Creates or retrieves existing concepts for standard character values
 *
 * The function automatically prefixes type names with "the_" if not already present and
 * manages all necessary associations (category, type, referent, security, access, session).
 *
 * @param type - The type identifier for the concept (e.g., "user", "post", "comment").
 *                Will be automatically prefixed with "the_" if not present.
 * @param referent - The actual value or data for the concept (e.g., username, post content)
 * @param composition - If true, creates a composition concept bypassing character checks
 * @param userId - The ID of the user creating this concept
 * @param passedAccessId - The access control ID determining who can access this concept
 * @param passedSessionId - The session ID for tracking this operation (default: 999)
 * @param referentId - Optional ID of a referent concept (default: 0)
 * @param actions - Transaction actions for batch operations (default: empty actions)
 *
 * @returns Promise resolving to the created or retrieved Concept with type information populated
 *
 * @remarks
 * - For composition concepts, bypasses character lookup and creates immediately
 * - For strings > 255 chars, creates both a concept and a separate text data entry
 * - For standard concepts, checks for existing concepts by character and type before creating
 * - Includes performance timing logs (commented out) for optimization analysis
 * - The type concept is always attached to the returned concept for reference
 *
 * @example
 * ```typescript
 * // Create a standard user concept
 * const userConcept = await MakeTheInstanceConcept(
 *   "user",
 *   "john_doe",
 *   false,
 *   1,
 *   100,
 *   999
 * );
 *
 * // Create a composition concept
 * const compositionConcept = await MakeTheInstanceConcept(
 *   "custom_type",
 *   "complex_data",
 *   true,
 *   1,
 *   100
 * );
 *
 * // Create a text concept for long content
 * const longText = "Lorem ipsum...".repeat(100);
 * const textConcept = await MakeTheInstanceConcept(
 *   "article",
 *   longText,
 *   false,
 *   1,
 *   100
 * );
 * ```
 *
 * @see {@link MakeTheTypeConceptApi} - Creates or retrieves type concepts
 * @see {@link CreateTheConcept} - Creates the actual concept entity
 * @see {@link GetConceptByCharacterAndType} - Retrieves existing concepts
 * @see {@link CreateTextData} - Stores long text separately
 */
export default async function MakeTheInstanceConcept(type:string, referent:string, composition:boolean=false, userId: number, 
        passedAccessId:number, passedSessionId: number=999, referentId: number = 0, actions: InnerActions = {concepts: [], connections: []}){
            let sessionInformationId: number = passedSessionId;
            let categoryId: number = 4;
            let categoryUserId: number = userId; 
            let referentUserId: number = 999;
            let securityId: number = 999;
            let securityUserId: number = userId;
            let sessionInformationUserId: number = userId;
            // change this
            let accessId: number = passedAccessId;
            let accessUserId: number = userId;

            let stringToCheck: string = "";

            let  stringLength:number = referent.length;
            let typeConcept = CreateDefaultConcept();
            let concept: Concept;
            let startsWithThe = type.startsWith("the_");

            if(startsWithThe){
                stringToCheck = type;
            }
            else{
                stringToCheck = "the_" + type;
            }
            let startTime = new Date().getTime();

            if(composition){
               let   typeConceptString = await MakeTheTypeConceptApi(type, userId);
               typeConcept = typeConceptString as Concept;
               let conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, actions  );
                concept = conceptString as Concept;
                let end = new Date().getTime();
                let time = end - startTime;
                // console.log('Execution time in type test for composition: ' + time + "--------" +  type);
            }
            else if(stringLength > 255){

                let typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                    referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, actions  );
    
                concept = conceptString as Concept;

                let TheTextsData = new TheTexts(userId,referent,securityId,securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,
                    Date.now().toString(),true);

                CreateTextData(TheTextsData);
                let end = new Date().getTime();
                let time = end - startTime;
                // console.log('Execution time in type test for text: ' + time + "--------" +  type);

            }
            else{
                let typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptByCharTypeString = await GetConceptByCharacterAndType(referent,typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString as Concept;
                concept = conceptTypeCharacter;
                if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                    // let makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
                    // let makeTheNameConcept = makeTheNameString as Concept;
                    // concept = conceptTypeCharacter;
                    let conceptString = await CreateTheConceptImmediate(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                        12, 12, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, actions  );
                    concept = conceptString as Concept;
                   // MakeTheNameInBackend(concept.id, `${referent}`, typeConcept.id, userId);

                }
                let end = new Date().getTime();
                let time = end - startTime;
                // console.log('Execution time in type test: ' + time + "--------" +  type);
            }
            // if(concept){
            //     if(concept.type == null){
            //         let conceptType = ConceptsData.GetConcept(concept.typeId);
            //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
            //             let typeConceptStringNew = await GetConcept(concept.typeId);
            //             let newTypeConcept = typeConceptStringNew as Concept;
            //             concept.type = newTypeConcept;
            //         }
            //     }
            // }
            concept.type = typeConcept;
            return concept;
}