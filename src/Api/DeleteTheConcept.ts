import { Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetOnlyTokenHeader, GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConcept(id:number){
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
}