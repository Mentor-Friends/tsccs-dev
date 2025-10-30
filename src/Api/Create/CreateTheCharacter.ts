import { CharacterRepository } from "../../DataStructures/CharacterRepository";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { Logger } from "../../app";

/**
 * Creates a character on the backend server with local caching.
 *
 * **Logic**:
 * 1. Checks CharacterRepository for existing character by data value
 * 2. If exists locally: Returns existing character ID
 * 3. If not exists: Creates on server and adds to local repository
 *
 * Character data represents string values used across the system with deduplication.
 *
 * @param characterData - TheCharacter object to create
 * @returns Returner object with character ID and metadata
 * @throws Error if HTTP request fails
 *
 * @example
 * const char = await CreateTheCharacter({
 *   data: "user@example.com",
 *   userId: 42
 * });
 * // If "user@example.com" already exists, returns existing ID
 */
export async function CreateTheCharacter(characterData: TheCharacter){
  const logData : any = Logger.logfunction("CreateTheCharacter", characterData);
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
      Logger.logUpdate(logData);
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
        UpdatePackageLogWithError(logData, 'CreateTheCharacter', error);
        throw error;
      }
}