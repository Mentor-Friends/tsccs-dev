import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept, Logger } from "../app";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { AddTypeConcept } from "../Services/GetTheConcept";
export async function GetConceptByCharacterValue(characterValue: string){
  const logData : any = Logger.logfunction("GetConceptByCharacterValue", arguments);
  let result:Concept = CreateDefaultConcept();
    try{
            const formdata = new FormData();
            formdata.append("character_value", characterValue);
            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              body: formdata
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
              AddTypeConcept(result).then((output)=>{
                  ConceptsData.AddConcept(result);
              });
            }
            Logger.logUpdate(logData);
          }
          else{
            HandleHttpError(response);
            console.log("Error in Getting concept by character value Error", response.status);
          }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting concept by character value error message: ', error);
        } else {
          console.log('Error in Getting concept by character value unexpected error: ', error);
        }
       HandleInternalError(error,BaseUrl.GetConceptByCharacterValueUrl() );
       UpdatePackageLogWithError(logData, 'GetConceptByCharacterValue', error);
      }
      return result;

}