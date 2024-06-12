import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../app";
export async function GetConcept(id: number){
    let result = CreateDefaultConcept();
    try{
        var conceptUse :Concept= await ConceptsData.GetConcept(id);
        let isNpc = ConceptsData.GetNpc(id);
        if(conceptUse.id != 0 || isNpc){

            return conceptUse;
        }
        else{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetConceptUrl(),{
                method: 'POST',
                headers:header,
                body: `id=${id}`
            });
            if(response.ok){
                result = await response.json() as Concept;
                if(result.id > 0){
                    ConceptsData.AddConcept(result);
                }
                else{
                    ConceptsData.AddNpc(id);
                }
            }
            else{
                console.log("Get the concept error", response.status);
            }
            return result;

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get the concept error message: ', error.message);
        } else {
          console.log('Get the concept unexpected error: ', error);
        }
        return result;
      }
}