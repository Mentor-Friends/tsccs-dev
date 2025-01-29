
import { CharacterRepository } from "../../DataStructures/CharacterRepository";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { Logger } from "../../app";

export async function CreateTheCharacter(characterData: TheCharacter){
  Logger.logfunction("CreateTheCharacter", characterData);
    try{

      var characterData = CharacterRepository.GetCharacter(characterData.data);
      if(characterData.id == 0){
        var header = GetRequestHeader();
        const response = await fetch(BaseUrl.CreateTheCharacterDataUrl(),{
          method: 'POST',
          headers:header,
          body: JSON.stringify(characterData),
      });
      if(!response.ok){
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
      }
       const resultString = await response.json();
      const result = resultString as Returner;
      var savingCharacter = new TheCharacter(result.userId, characterData.data, 0, 0, 4,4,999,999,"",false);
      savingCharacter.id = result.id;
      CharacterRepository.AddCharacter(savingCharacter);
      return result;
      }
      else{
        var returningData = new Returner(characterData.id, characterData.userId, 0, false);
        return returningData;
      }


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('create the character error message: ', error.message);
        } else {
          console.log('create the character unexpected error: ', error);
        }
        throw error;
      }
}