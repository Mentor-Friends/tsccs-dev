
import { CharacterRepository } from "../../DataStructures/CharacterRepository";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";

export async function CreateTheCharacter(characterData: TheCharacter){
    try{
      var characterData = CharacterRepository.GetCharacter(characterData.data);
      if(characterData.id == 0){
        const response = await fetch(BaseUrl.CreateTheCharacterDataUrl(),{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(characterData),
      });
      if(!response.ok){
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
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}