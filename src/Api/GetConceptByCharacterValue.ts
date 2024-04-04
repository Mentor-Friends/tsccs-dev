import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetConceptByCharacterValue(characterValue: string){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');

            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: `character_value=${characterValue}`
          });
          if(!response.ok){
            console.log("this is the web testing");
              throw new Error(`Error! status: ${response.status}`);
          }
          else{
            const result = await response.json() as Concept;
            if(result.id > 0){
              ConceptsData.AddConcept(result);
              return result;
            }

          }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}