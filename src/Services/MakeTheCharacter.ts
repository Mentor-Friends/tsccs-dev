import { Concept } from "../DataStructures/Concept";
import { Returner } from "../DataStructures/Returner";
import MakeTheCharacterData from "./MakeTheCharacterData";
import MakeTheConcept from "./MakeTheConcept";

export default async function MakeTheCharacter(the_character_data:string, userId: number, securityId: number, 
    accessId:number, accessUserId:number, sessionId:number){
        let categoryUserId: number = userId;
        let securityUserId: number = userId;
        let categoryId: number = 4;
        let typeId: number = 51;
        let typeUserId: number = userId;
        let sessionUserId: number = userId;
        let referentUserId: number = userId;

        let lengthOfCharacters: number = the_character_data.length;
        let concept;
        if(lengthOfCharacters == 1){
            let referentId:number = the_character_data.charCodeAt(0);
            let typeIdForCharacter:number = 49;
            let characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);

            concept = MakeTheConcept(the_character_data, userId, categoryId, typeIdForCharacter,
                referentId, accessId, "the_character" );
        }
        else{
            let characterDataString = await MakeTheCharacterData(the_character_data, userId, securityId,accessId, sessionId);
            let characterData = characterDataString as Returner;
            if(characterData.isNew){
               let conceptString = await MakeTheConcept(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");

                    concept = conceptString as Concept;

            }
            else{
                let conceptString = await MakeTheConcept(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");

                    concept = conceptString as Concept;

            }

        }

        return concept;

    }