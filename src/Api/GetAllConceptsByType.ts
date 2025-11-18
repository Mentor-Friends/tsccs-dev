import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsByTypeUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";

/**
 * Retrieves all concepts of a specific type for a user.
 * Fetches concepts filtered by type string and user ID.
 *
 * @param type - Type string to filter concepts by
 * @param userId - User ID to filter by
 * @returns void - Updates ConceptsData cache with matching concepts
 *
 * @example
 * await GetAllConceptsByType("person", 123);
 */
export async function GetAllConceptsByType(type:string,userId: number){
  const logData:any = Logger.logfunction("GetAllConceptsByType", arguments);
    try{
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());

            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsByTypeUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(response.ok){
              const result = await response.json();
              for(var i=0; i< result.length; i++){
                  ConceptsData.AddConcept(result[i]);
              }
            }
            else{
              console.log("GetAllConceptsByType error", response.status);
              HandleHttpError(response);
            }


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('GetAllConceptsByType error message: ', error.message);
        } else {
          console.log('GetAllConceptsByType unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetAllConceptsByTypeUrl());
        UpdatePackageLogWithError(logData, 'GetAllConceptsByType', error);
      }
}