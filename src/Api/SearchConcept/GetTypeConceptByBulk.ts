import { BaseUrl, Concept, GetConceptBulk } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

/**
 * Retrieves type concepts for multiple character values in bulk.
 * Optimizes fetching by batching character lookups in one request.
 *
 * **Complex Logic**: First fetches concept IDs for all character strings,
 * then bulk-fetches the full concept objects.
 *
 * @param characters - Array of character value strings
 * @returns Array of Concept objects matching the character values
 *
 * @example
 * const concepts = await GetTypeConceptByBulk(["the_person", "the_place", "the_thing"]);
 */
export async function GetTypeConceptByBulk(characters: string[]){
    let concepts: Concept[] = [];
    try{
        let typeCharacters = JSON.stringify(characters);
        let header = GetRequestHeader();
        const response = await fetch(BaseUrl.GetTypeConceptBulk(),{
            method: 'POST',
            headers: header,
            body:typeCharacters
        });
        if(response.ok){
            let conceptIds = await response.json();
            concepts = await GetConceptBulk(conceptIds);
        }
        else{
        //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the GetTypeConceptByBulk error", response.status);
            HandleHttpError(response);
        }
    }
    catch(error){
        if (error instanceof Error) {
        console.log(' This is the GetTypeConceptByBulk error message: ', error.message);
        } else {
        console.log(' This is the GetTypeConceptByBulk unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
    }
    return concepts;
}