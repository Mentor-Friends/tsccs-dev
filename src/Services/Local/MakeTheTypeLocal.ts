import { LConcept } from "../../DataStructures/Local/LConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";
import { LocalSyncData } from "../../app";

export  async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number,
    )
{
    var accessId: number = 4;

    var existingConcept = await GetConceptByCharacterLocal(typeString);
    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            var splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray[0] == typeString){
                var concept = await MakeTheConceptLocal(typeString, "the", userId,  1, 51);
                existingConcept = concept as LConcept;

            }   
            else{
                var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );

                if(typeConcept){
                    
                    var concept = await CreateTheConceptLocal(typeString,splittedStringArray[1],  userId, categoryConcept.id, typeConcept.id, accessId );
                    existingConcept = concept as LConcept;

                }


            }

        }

    }
    console.log("This is the existing type concept", existingConcept);
    LocalSyncData.AddConcept(existingConcept);
    return existingConcept;


}