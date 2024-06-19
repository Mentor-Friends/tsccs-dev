import { ConceptsData } from "./../../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../../Constants/ApiConstants';
import { Concept } from "./../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
export async function GetConceptByCharacterAndCategory(characterValue: string){
    let concept = CreateDefaultConcept();

    try{
        var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetConceptByCharacterAndCategoryUrl(),{
              method: 'POST',
              headers: header,
              body:  `character_value=${characterValue}`,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by category and character error", response.status);
            }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by category and character error message: ', error.message);
        } else {
          console.log(' This is the concept by category and character unexpected error: ', error);
        }
        return concept;
      }
}