import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
export async function GetConcept(id: number){
    try{
        var conceptUse :Concept= await ConceptsData.GetConcept(id);
        if(conceptUse.id != 0){

            return conceptUse;
        }
        else{
            const response = await fetch(BaseUrl.GetConceptUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }

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