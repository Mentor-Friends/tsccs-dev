import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { AccessTracker, CreateDefaultConcept, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { requestNextCacheServer } from "../Services/cacheService";


async function processGetConceptData(response: Response, result: Concept, logData: any, id:number) {
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
    Logger.logUpdate(logData);
    return result;
}

/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns 
 */
export async function GetConcept(id: number){    
    const logData : any = Logger.logfunction("GetConcept", arguments) || {};
    let result = CreateDefaultConcept();
    const formdata = new FormData();
    formdata.append("id", id.toString());
    try{
        if (serviceWorker) {
            logData.serviceWorker = true;
            try {
                const res: any = await sendMessage('GetConcept', {id})
                Logger.logUpdate(logData);
                return res.data
            } catch (error) {
                console.error('GetConcept sw error: ', error);
                UpdatePackageLogWithError(logData, 'GetConcept', error);
                handleServiceWorkerException(error); 
            }
        }
        if(id==0 || id==undefined || id == null) {
            return result;
        }
        var conceptUse :Concept= await ConceptsData.GetConcept(id);
        let isNpc = ConceptsData.GetNpc(id);
        if(conceptUse.id != 0 || isNpc){
            Logger.logUpdate(logData)
            return conceptUse;
        }
        else{
            let response; 
            var header = GetRequestHeader();
            const requestData = {
                method: 'POST',
                body: formdata,
                headers: header
            }
            try {    
                console.log("this is the url", BaseUrl.GetConceptUrl());
                 response = await fetch(BaseUrl.GetConceptUrl(), requestData);
            } catch (error) {
                response = await requestNextCacheServer(requestData, "/api/getConcept");
            }
            return await processGetConceptData(response, result, logData, id);
        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get the concept error message: ', error.message);
        } else {
          console.log('Get the concept unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptUrl());
        UpdatePackageLogWithError(logData, 'GetConcept', error);
      }
}