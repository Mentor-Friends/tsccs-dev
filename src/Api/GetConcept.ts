import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { AccessTracker, CreateDefaultConcept, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns 
 */
export async function GetConcept(id: number){    
    Logger.logfunction(GetConcept, arguments);
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('GetConcept', {id})
                return res.data
            } catch (error) {
                console.error('GetConcept sw error: ', error);
                handleServiceWorkerException(error); 
            }
        }
        let result = CreateDefaultConcept();
        if(id==0 || id==undefined || id == null) {
            return result;
        }
        var conceptUse :Concept= await ConceptsData.GetConcept(id);
        let isNpc = ConceptsData.GetNpc(id);
        if(conceptUse.id != 0 || isNpc){

            return conceptUse;
        }
        else{
            var header = GetRequestHeader();
            console.log("this is the url", BaseUrl.GetConceptUrl());
            const formdata = new FormData();
            formdata.append("id", id.toString());
            const response = await fetch(BaseUrl.GetConceptUrl(),{
                method: 'POST',
                body: formdata
            });
            if(response.ok){
                result = await response.json() as Concept;
                if(result.id > 0){
                    ConceptsData.AddConcept(result);
                }
                else{
                    ConceptsData.AddNpc(id);
                }
            }
            else{
                console.log("Get the concept error", response.status);
                HandleHttpError(response);
            }
            
            return result;

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get the concept error message: ', error.message);
        } else {
          console.log('Get the concept unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptUrl());
      }
}