import { ConceptsData, Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetOnlyTokenHeader, GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";

/**
 * Deletes a concept from the backend server by ID.
 *
 * **Process**:
 * 1. Sends delete request to backend with concept ID
 * 2. If successful: Marks concept as deleted in local ConceptsData (NPC list)
 * 3. Returns deletion success status
 *
 * NPC (Non-Present Concept) list tracks deleted concept IDs to prevent reuse.
 *
 * @param id - The concept ID to delete
 * @returns boolean - true if successfully deleted, false otherwise
 *
 * @example
 * const deleted = await DeleteTheConcept(12345);
 * if (deleted) {
 *   console.log("Concept deleted successfully");
 * }
 */
export default async function DeleteTheConcept(id:number){
  let isDeleted = false;
  const logData:any =  Logger.logfunction("DeleteTheConcept", arguments);
    try{
           
           const formdata = new FormData();
           formdata.append("id", id.toString());
           let header = GetOnlyTokenHeader();
            const response = await fetch(BaseUrl.DeleteConceptUrl(),{
                method: 'POST',
                headers: header,
                body: formdata
            });
            if(!response.ok){
               // throw new Error(`Error! status: ${response.status}`);
               console.log("Delete concept error", response.status);
                HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }
            if(isDeleted){
              ConceptsData.AddNpc(id);
            }

            Logger.logUpdate(logData)
        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete concept error message: ', error.message);
        } else {
          console.log('Delete concept unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.DeleteConceptUrl());
        UpdatePackageLogWithError(logData, 'DeleteTheConcept', error)  // handle function package error
      }
      return isDeleted;
}