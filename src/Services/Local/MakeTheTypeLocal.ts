import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { GetConceptByCharacterAndCategoryLocal } from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../../app";
import { InnerActions } from "../../Constants/general.const";

/**
 * There are two types of concepts. One type of concept is a type concept. These concepts have no actual value and do not mean
 * anything unless they are associated with other values. These are placeholders like first_name, last_name, age etc that are required in the system.
 * These types need to be created seperately.
 * 
 * 
 * @param typeString type of the concept that needs to be created.
 * @param sessionId SessionId of the user
 * @param sessionUserId Not required pass 999
 * @param userId UserId of the user creating this concept
 * @param actions InnerActions|undefined actions to collect
 * @returns 
 */
export  async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number, actions: InnerActions = {concepts: [], connections: []}
    ): Promise<Concept>
{
    Logger.logfunction("MakeTheTypeConceptLocal", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage("MakeTheTypeConceptLocal", {
              typeString, sessionId, sessionUserId, userId, actions
            });
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            return res.data;
        } catch (error) {
            console.error("MakeTheTypeConceptLocal error sw: ", error);
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
                    let concept = await CreateTheConceptLocal(typeString,splittedStringArray[1],  userId, categoryConcept.id, typeConcept.id, accessId, undefined, undefined, actions );
                    existingConcept = concept as Concept;

             //   }


            }


        }

    }
   // LocalSyncData.AddConcept(existingConcept);
    return existingConcept;


}