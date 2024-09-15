import { CreateTextData } from "../../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../../Api/GetConceptByCharacterAndType";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { TheTexts } from "../../DataStructures/TheTexts";
import CreateTheConcept from "../CreateTheConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { MakeTheName } from "../MakeTheName";
import {MakeTheTypeConceptLocal} from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalSyncData } from "../../app";

export async function MakeTheInstanceConceptLocal(type:string, referent:string, composition:boolean=false, userId: number, 
    accessId:number, sessionInformationId: number=999, referentId: number = 0){
        try{
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
                
               var conceptString = await CreateTheConceptLocal(referent,type,userId, categoryId, typeConcept.id,accessId,true, referentId );
    
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
            LocalSyncData.AddConcept(concept);
            return concept;
        }
        catch(error){
            throw error;
        }


}