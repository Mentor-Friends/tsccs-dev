import { LocalConceptsData } from "./../../DataStructures/Local/LocalConceptData";
import { GetConceptByCharacterValueUrl } from './../../Constants/ApiConstants';
import { Concept } from "../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultLConcept, Logger } from "../../app";
import { HandleHttpError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
export async function GetLocalConceptByCharacterValue(characterValue: string){
  const logData : any = Logger.logfunction("GetLocalConceptByCharacterValue", arguments);
  let result = CreateDefaultLConcept();
    try{
            var header = GetRequestHeader('application/json');

            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: `character_value=${characterValue}`
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
                LocalConceptsData.AddConcept(result);
            }
          }
          else{
            console.log("Error in Getting Local concept by character value Error", response.status);
            HandleHttpError(response);
          }
          Logger.logUpdate(logData);
          return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Local concept by character value error message: ', error);
        } else {
          console.log('Error in Getting Local concept by character value unexpected error: ', error);
        }
        UpdatePackageLogWithError(logData, 'GetLocalConceptByCharacterValue', error);
        throw result;
      }
}