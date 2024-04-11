import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../app";
export async function GetConceptByCharacterValue(characterValue: string){
  let result = CreateDefaultConcept();
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');

            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: `character_value=${characterValue}`
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
              ConceptsData.AddConcept(result);
            }
          }
          else{
            console.log("Error in Getting concept by character value Error", response.status);
          }
          return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting concept by character value error message: ', error);
        } else {
          console.log('Error in Getting concept by character value unexpected error: ', error);
        }
        return result;
      }
}