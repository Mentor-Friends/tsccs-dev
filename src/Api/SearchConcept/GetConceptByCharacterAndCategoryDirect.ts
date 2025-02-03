import { ConceptsData } from "./../../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../../Constants/ApiConstants';
import { Concept } from "./../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept, Logger } from "../../app";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
export async function GetConceptByCharacterAndCategoryDirectApi(characterValue: string, category_id: number): Promise<Concept>{
  const logData : any = Logger.logfunction("GetConceptByCharacterAndCategoryDirectApi", arguments);
  let concept:Concept = CreateDefaultConcept();

    try{

        var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetConceptByCharacterAndCategoryDirectUrl(),{
              method: 'POST',
              headers: header,
              body:  `character_value=${characterValue}&category_id=${category_id}`,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by category and character error", response.status);
            HandleHttpError(response);
            }
            
            Logger.logUpdate(logData);

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by category and character error message: ', error.message);
        } else {
          console.log(' This is the concept by category and character unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
        UpdatePackageLogWithError(logData, GetConceptByCharacterAndCategoryDirectApi.name, error);
    }
    return concept;

}