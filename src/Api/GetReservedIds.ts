import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";

/**
 * Fetches reserved concept IDs from the backend.
 * Loads system-reserved concept IDs into ReservedIds cache.
 *
 * @returns void - Updates ReservedIds cache with reserved concept IDs
 *
 * @example
 * await GetReservedIds(); // Loads reserved concept IDs
 */
export async function GetReservedIds(){
  const logData : any = Logger.logfunction("GetReservedIds", arguments);
    try{
            let header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetReservedIdUrl(),{
                method: 'GET',
                headers: header,
            });
            if(!response.ok){
               HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             for(let i=0; i< result.length; i++){
                ReservedIds.AddId(result[i]);
             }
             Logger.logUpdate(logData);
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('get reserved ids error message: ', error.message);
        } else {
          console.log('get reserved ids  unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetReservedIdUrl());
        UpdatePackageLogWithError(logData, 'GetReservedIds', error);
      }
}