import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetCharacterByCharacterUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";

/**
 * Retrieves character data by character value string.
 * Fetches TheCharacter object containing character metadata.
 *
 * @param characterValue - String value of the character to retrieve
 * @returns TheCharacter object or undefined on error
 *
 * @example
 * const char = await GetCharacterByCharacter("the_person");
 */
export async function GetCharacterByCharacter(characterValue: string){
  const logData : any = Logger.logfunction("GetCharacterByCharacter", arguments);
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
            Logger.logUpdate(logData)
            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetCharacterByCharacterUrl());
        UpdatePackageLogWithError(logData, 'GetCharacterByCharacter', error);
      }
}