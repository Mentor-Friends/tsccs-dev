import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetCharacterByCharacterUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
export async function GetCharacterByCharacter(characterValue: string){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetCharacterByCharacterUrl(),{
                method: 'POST',
                headers: header,
                body: `character_value=${characterValue}`
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json() as TheCharacter;
            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
        throw error;
      }
}