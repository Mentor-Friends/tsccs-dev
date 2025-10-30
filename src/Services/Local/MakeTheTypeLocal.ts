import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { GetConceptByCharacterAndCategoryLocal } from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../../app";
import { InnerActions } from "../../Constants/general.const";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";

/**
 * Creates or retrieves a type concept locally - handles hierarchical type system.
 *
 * Type concepts are placeholders/templates (e.g., "the_first_name", "the_email") that define
 * what kind of data a concept represents. They have no actual value themselves.
 *
 * **Hierarchical Processing (Complex Logic)**:
 * - Single word (e.g., "status"): Creates simple type concept with typeId=51
 * - Compound words (e.g., "the_person_email"): Splits into parts and creates hierarchy:
 *   1. Creates category concept from first part ("the_person")
 *   2. Creates type concept from second part ("email")
 *   3. Creates final concept with category and type linked
 *   **Uses recursion** to build multi-level type hierarchies
 *
 * Always checks for existing type concept before creating to prevent duplicates.
 *
 * @param typeString - The type name to create (e.g., "the_status", "the_person_email")
 * @param sessionId - Session identifier (typically 999)
 * @param sessionUserId - Session user ID (typically 999, not used)
 * @param userId - User creating the type concept
 * @param actions - Action tracking for batch operations
 * @returns Type Concept (existing or newly created)
 *
 * @example
 * // Simple type
 * const statusType = await MakeTheTypeConceptLocal("the_status", 999, 999, 101);
 * // Creates: "the_status" type concept
 *
 * @example
 * // Hierarchical type (recursive processing)
 * const emailType = await MakeTheTypeConceptLocal("the_person_email", 999, 999, 101);
 * // Creates: "the_person" (category) + "email" (type) + "the_person_email" (combined)
 */
export  async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number, actions: InnerActions = {concepts: [], connections: []}
    ): Promise<Concept>
{
    const logData : any = Logger.logfunction("MakeTheTypeConceptLocal", arguments) || {};
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage("MakeTheTypeConceptLocal", {
              typeString, sessionId, sessionUserId, userId, actions
            });
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            Logger.logUpdate(logData);
            return res.data;
        } catch (error) {
            console.error("MakeTheTypeConceptLocal error sw: ", error);
            UpdatePackageLogWithError(logData, 'MakeTheTypeConceptLocal', error);
            handleServiceWorkerException(error)
        }
    }

    let accessId: number = 4;

    let existingConcept = await GetConceptByCharacterAndCategoryLocal(typeString);
    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            let splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray[0] == typeString){
                let concept = await MakeTheConceptLocal(typeString, "the", userId,  1, 51, actions);
                existingConcept = concept as Concept;
            }   
            else{
                // var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                // var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );

                // if(typeConcept){
                    let categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId, actions);
                    let typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId, actions);
                    let concept = await CreateTheConceptLocal(typeString,splittedStringArray[1],  userId, categoryConcept.id, typeConcept.id, accessId, undefined, null, actions );
                    existingConcept = concept as Concept;

             //   }


            }


        }

    }
    Logger.logUpdate(logData);
   // LocalSyncData.AddConcept(existingConcept);
    return existingConcept;


}