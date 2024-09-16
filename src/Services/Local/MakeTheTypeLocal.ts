import { LConcept } from "../../DataStructures/Local/LConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { GetConceptByCharacterAndCategoryLocal } from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";

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
 * @returns 
 */
export  async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number,
    ): Promise<LConcept>
{
    var accessId: number = 4;

    var existingConcept = await GetConceptByCharacterAndCategoryLocal(typeString);
    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            var splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray[0] == typeString){
                var concept = await MakeTheConceptLocal(typeString, "the", userId,  1, 51);
                existingConcept = concept as LConcept;
            }   
            else{
                // var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                // var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );

                // if(typeConcept){
                    let categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    let typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );
                    var concept = await CreateTheConceptLocal(typeString,splittedStringArray[1],  userId, categoryConcept.id, typeConcept.id, accessId );
                    existingConcept = concept as LConcept;

             //   }


            }


        }

    }
   // LocalSyncData.AddConcept(existingConcept);
    return existingConcept;


}