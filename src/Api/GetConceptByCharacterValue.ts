import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../app";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
export async function GetConceptByCharacterValue(characterValue: string){
  let result:Concept = CreateDefaultConcept();
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const formdata = new FormData();
            formdata.append("character_value", characterValue);
            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: formdata
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
              ConceptsData.AddConcept(result);
            }
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
      }
      return result;

}