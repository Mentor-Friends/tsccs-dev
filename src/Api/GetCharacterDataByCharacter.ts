/**
 * Module for retrieving character data by character value from the CCS API.
 * This module provides functionality to fetch TheCharacter objects using their unique character values.
 *
 * @module Api/GetCharacterDataByCharacter
 * @see https://documentation.freeschema.com for API reference
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetCharacterByCharacterUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves a character object from the database by its character value.
 * This function makes an API call to fetch character data and returns the corresponding TheCharacter object.
 *
 * @param characterValue - The unique string identifier for the character to retrieve
 * @returns A promise that resolves to the TheCharacter object containing the character data
 *
 * @throws {Error} Throws an error if the HTTP request fails or if the response status is not OK
 *
 * @example
 * ```typescript
 * // Fetch a character by its character value
 * const character = await GetCharacterByCharacter("a");
 * console.log(character.id, character.characterValue);
 * ```
 *
 * @remarks
 * This function uses form-urlencoded content type for the POST request.
 * The character_value is sent as a form parameter to the API endpoint.
 * Any HTTP errors are logged and handled through the HandleHttpError service.
 *
 * @see TheCharacter for the structure of the returned object
 * @see BaseUrl.GetCharacterByCharacterUrl for the API endpoint
 */
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