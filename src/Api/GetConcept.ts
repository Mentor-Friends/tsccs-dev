import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
export async function GetConcept(id: number){
    try{
        var Concept = ConceptsData.GetConcept(id);
        if(Concept != null){
            return Concept;
        }
        else{
            const response = await fetch(GetConceptUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
            console.log("getting data from backend");

            const result = await response.json() as Concept;
            console.log(result);
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