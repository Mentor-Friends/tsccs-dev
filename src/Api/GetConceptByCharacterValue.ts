import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterValueUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
export async function GetConceptByCharacterValue(characterValue: string){
    try{
            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers:{
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `character_value=${characterValue}`
          });
          if(!response.ok){
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
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}