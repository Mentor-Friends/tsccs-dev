import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";
export async function GetAllUserConcepts(userId: number){
  const logData : any = Logger.logfunction("GetAllUserConcepts", arguments);
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsOfUserUrl(),{
                method: 'POST',
                headers: header,
                body: `user_id=${userId}`
            });
            if(response.ok){
              const result = await response.json();
              for(var i=0; i< result.length; i++){
                  ConceptsData.AddConcept(result[i]);
              }
              Logger.logUpdate(logData)
            }
            else{
              console.log("GetAllUserConcepts error", response.status);
              HandleHttpError(response);
            }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('GetAllUserConcepts error message: ', error.message);
        } else {
          console.log('GetAllUserConcepts unexpected error: ', error);
        }
        HandleInternalError(error,BaseUrl.GetAllConceptsOfUserUrl());
        UpdatePackageLogWithError(logData, 'GetAllUserConcepts', error)
      }
}