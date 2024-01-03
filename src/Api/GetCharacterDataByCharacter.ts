import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetCharacterByCharacterUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { BaseUrl } from "../DataStructures/BaseUrl";
export async function GetCharacterByCharacter(characterValue: string){
    try{

            const response = await fetch(BaseUrl.GetCharacterByCharacterUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `character_value=${characterValue}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json() as TheCharacter;
            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}