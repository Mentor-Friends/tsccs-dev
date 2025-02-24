import { ConceptsData } from "./../../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../../Constants/ApiConstants';
import { Concept } from "./../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
export async function GetConceptByCharacterAndCategoryDirectApi(characterValue: string, category_id: number){
    let concept = CreateDefaultConcept();

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
            console.log("This is the concept by category and character direct api error", response.status);
            HandleHttpError(response);
            }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by category and character direct api error message: ', error.message, characterValue, category_id,BaseUrl.GetConceptByCharacterAndCategoryDirectUrl() );
        } else {
          console.log(' This is the concept by category and character unexpected direct api error: ', error,characterValue, category_id,BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
        }
        throw error;
      }
}