import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetCharacterByCharacter } from "../Api/GetCharacterDataByCharacter";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import CreateTheConcept, { CreateTheConceptImmediate } from "./CreateTheConcept";
import GetConceptByCharacter from "./GetConceptByCharacter";
import MakeTheCharacter from "./MakeTheCharacter";
import { SplitStrings } from "./SplitStrings";

export  async  function MakeTheTypeConcept(typeString: string, sessionId: number, sessionUserId: number, userId: number,
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
                if(splittedStringArray[0] == typeString){
                  var conceptString =  await MakeTheCharacter(typeString, userId, securityId, accessId, accessUserId, sessionId);
                  existingConcept = conceptString as Concept;
    
                }   
                else{
                    var categoryId:number = 1;
                    var categoryConcept = await MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = await MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId );
                    if(typeConcept){
                        
                        var concept = await CreateTheConceptImmediate(typeString, userId, categoryConcept.id,typeConcept.id, referentId,
                            accessId,splittedStringArray[1] );
                        existingConcept = concept as Concept;
                    }
    
    
                }
            }

        }

    }
    return existingConcept;


}