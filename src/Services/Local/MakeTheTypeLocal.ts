import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";

export default async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number,
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

    var existingConcept = await GetConceptByCharacterLocal(typeString);

    console.log("existing here", typeString);
    console.log(existingConcept);
    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            var splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray[0] == typeString){
                var concept = await MakeTheConceptLocal(typeString, userId, 4, userId,51, userId, referentId, userId,
                    securityId, userId,accessId, userId, sessionId, userId );
                existingConcept = concept as Concept;

            }   
            else{
                var categoryId:number = 1;
                var categoryConcept = MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );

                if(typeConcept){
                    
                    var concept = await CreateTheConceptLocal(typeString, userId, categoryId, userId,typeConcept.id, userId, referentId, userId,
                        securityId, userId,accessId, userId, sessionId, userId );
                    existingConcept = concept as Concept;
                }


            }
        }

    }
    return existingConcept;


}