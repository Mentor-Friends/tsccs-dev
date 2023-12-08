import { Concept } from "../DataStructures/Concept";
import { ReferentInfo } from "../DataStructures/ReferentInfo";
import GetTheReferent from "./GetTheReferent";
import MakeTheCharacter from "./MakeTheCharacter";
import MakeTheConcept from "./MakeTheConcept";

export async function MakeTheName(theCharacterData:string, userId: number, securityId: number, securityUserId: number, accessId:number,
    accessUserId:number, sessionInformationId:number, sessionInformationUserId:number, typeId:number, typeUserId:number, existingConcept:Concept){
        
        var nameTypeId:number = 12;
        var categoryId:number = 4;
        var sessionId: number = sessionInformationId ?? 999;
        var sessionUserId: number = sessionInformationUserId ?? 999;
        var accessId: number = accessId ?? 4;
        var accessUserId: number = accessUserId ?? 999;
        var categoryUserId: number = 999;
        var referentInfo: ReferentInfo;
        var characterConcept;
        if(existingConcept.id > 0 && existingConcept.userId >0){
            characterConcept = await  GetTheReferent(existingConcept.id, existingConcept.userId,  existingConcept.referent);
        }
        else{
           characterConcept = await  MakeTheCharacter(theCharacterData,userId, securityId, accessId,accessUserId, sessionId) as Concept;
           
        
            existingConcept = await MakeTheConcept(theCharacterData, userId, categoryId, categoryUserId, nameTypeId, typeUserId, characterConcept.id, characterConcept.userId,securityId,securityUserId,accessId,
             accessUserId,sessionId,sessionUserId);
          
        }

        return existingConcept;
}

