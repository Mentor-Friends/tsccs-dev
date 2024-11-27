import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetCharacterByCharacter } from "../Api/GetCharacterDataByCharacter";
import { sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import CreateTheConcept, { CreateTheConceptImmediate } from "./CreateTheConcept";
import GetConceptByCharacter from "./GetConceptByCharacter";
import MakeTheCharacter from "./MakeTheCharacter";
import { SplitStrings } from "./SplitStrings";

export  async  function MakeTheTypeConcept(typeString: string, sessionId: number, sessionUserId: number, userId: number,
    )
{
    if (serviceWorker) {
        const res: any = await sendMessage('MakeTheTypeConcept', { typeString, sessionId, sessionUserId, userId })
        // console.log('data received from sw', res)
        return res.data
      }

    let referentId: number = 999;
    let securityId: number = 999;
    let accessId: number = 999;
    let accessUserId: number = userId;

    let existingConcept = await GetConceptByCharacter(typeString);


    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            let splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray.length > 0){
                if(splittedStringArray[0] == typeString){
                  let conceptString =  await MakeTheCharacter(typeString, userId, securityId, accessId, accessUserId, sessionId);
                  existingConcept = conceptString as Concept;
    
                }   
                else{
                    let categoryId:number = 1;
                    let categoryConcept = await MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                    let typeConcept = await MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId );
                    if(typeConcept){
                        
                        let concept = await CreateTheConceptImmediate(typeString, userId, categoryConcept.id,typeConcept.id, referentId,
                            accessId,splittedStringArray[1] );
                        existingConcept = concept as Concept;
                    }
    
    
                }
            }

        }

    }
    return existingConcept;


}