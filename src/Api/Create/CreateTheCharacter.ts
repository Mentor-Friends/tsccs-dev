/**
 * Character creation API module for the Concept Connection System.
 * This module handles the creation and persistence of character data in the CCS database,
 * managing both local repository caching and remote server synchronization.
 *
 * @module Api/Create/CreateTheCharacter
 * @see https://documentation.freeschema.com for CCS API reference
 */

import { CharacterRepository } from "../../DataStructures/CharacterRepository";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a new character in the Concept Connection System database.
 * This function checks if the character already exists in the local repository
 * before making an API call. If the character doesn't exist (id == 0), it sends
 * a POST request to create the character on the server and caches it locally.
 * If the character already exists, it returns the existing character data without
 * making a network request.
 *
 * @param characterData - The character object containing the data to be created
 * @returns A promise that resolves to a Returner object containing the character ID,
 *          user ID, and creation status information
 *
 * @example
 * ```typescript
 * const newCharacter = new TheCharacter(userId, "A", 0, 0, 4, 4, 999, 999, "", false);
 * const result = await CreateTheCharacter(newCharacter);
 * console.log(`Created character with ID: ${result.id}`);
 * ```
 *
 * @remarks
 * This function implements a dual-write pattern:
 * 1. First checks the local CharacterRepository for existing character
 * 2. If not found (id == 0), creates the character on the server via API
 * 3. Caches the newly created character in the local repository
 * 4. Returns either the new character data or existing character reference
 *
 * The function uses GetRequestHeader() for authentication and authorization.
 * Network errors are logged and handled through the HandleHttpError utility.
 *
 * @throws Will throw an error if the HTTP request fails or returns a non-OK status
 * @see CharacterRepository for local character caching
 * @see GetRequestHeader for authentication details
 * @see https://documentation.freeschema.com for character data structure
 */
export async function CreateTheCharacter(characterData: TheCharacter){
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