import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { Concept } from "../DataStructures/Concept";
import { Returner } from "../DataStructures/Returner";
import MakeTheCharacterData from "./MakeTheCharacterData";
import MakeTheConcept from "./MakeTheConcept";

export default async function MakeTheCharacter(the_character_data:string, userId: number, securityId: number, 
    accessId:number, accessUserId:number, sessionId:number){
        var categoryUserId: number = userId;
        var securityUserId: number = userId;
        var accessUserId: number = userId;
        var categoryId: number = 4;
        var typeId: number = 51;
        var typeUserId: number = userId;
        var sessionUserId: number = userId;
        var referentUserId: number = userId;

        var lengthOfCharacters: number = the_character_data.length;
        var concept;
        if(lengthOfCharacters == 1){
            var referentId:number = the_character_data.charCodeAt(0);
            var typeIdForCharacter:number = 49;
            var characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);
            concept = MakeTheConcept(the_character_data, userId, categoryId, categoryUserId,
                referentId, referentUserId, typeIdForCharacter, typeUserId,
                securityId, securityUserId, accessId, accessUserId,
                sessionId, sessionUserId);
        }
        else{
            var characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);
            var characterData = characterDataString as Returner;
            if(characterData.isNew){
               var conceptString = await MakeTheConcept(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId,
                    securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);

                    concept = conceptString as Concept;

            }
            else{
                var conceptString = await MakeTheConcept(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId,
                    securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);

                    concept = conceptString as Concept;

            }

        }

        return concept;

    }