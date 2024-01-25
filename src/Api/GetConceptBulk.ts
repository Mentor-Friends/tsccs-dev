import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
export async function GetConceptBulk(conceptIds: number[]){
    try{
        var bulkConceptFetch = [];
        for(let i=0; i<conceptIds.length; i++){
            let conceptUse :Concept= await ConceptsData.GetConcept(conceptIds[i]);
            if(conceptUse.id == 0){
                bulkConceptFetch.push(conceptIds[i]);
            }
        }
        if(bulkConceptFetch.length == 0){

            return bulkConceptFetch;
        }
        else{
            const response = await fetch(BaseUrl.GetConceptBulkUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bulkConceptFetch)
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            if(result.length > 0){
                for(let i=0 ; i<result.length; i++){
                    let concept = result[i] as Concept;
                    ConceptsData.AddConcept(concept);
                }

            }
            return result;

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