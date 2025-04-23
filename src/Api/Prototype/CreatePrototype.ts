import { BaseUrl, Concept, Logger } from "../../app";
import { Prototype } from "../../DataStructures/Prototype/Prototype";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

export async function CreatePrototypeApi(prototype: Prototype){
    let result: any;
  const logData : any = Logger.logfunction("CreatePrototypeApi", prototype);
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreatePrototypeUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(prototype),
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            result = resultString as Concept;
            Logger.logUpdate(logData);
            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the prototype api error message: ', error.message);
        } else {
          console.log('Create the prototype api unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.CreateTheConceptUrl());
        UpdatePackageLogWithError(logData, 'CreatePrototypeApi', error);
      }
}