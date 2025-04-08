import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
export async function GetConceptBulk(conceptIds: number[]) {
    let result:Concept[] = [];
    try{
        var bulkConceptFetch = [];
        for(let i=0; i<conceptIds.length; i++){
            let conceptUse :Concept= await ConceptsData.GetConcept(conceptIds[i]);
            if(conceptUse.id == 0){
                bulkConceptFetch.push(conceptIds[i]);
            } else {
              result.push(conceptUse)
            }
        }
        if(bulkConceptFetch.length == 0){
            
            return result;
        }
        else{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.GetConceptBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(bulkConceptFetch)
            });
            if(response.ok){
                let output = await response.json();
                if(output.length > 0){
                    for(let i=0 ; i<output.length; i++){
                        let concept = output[i] as Concept;
                        result.push(concept);
                        ConceptsData.AddConcept(concept);
                    }
    
                }
            }
            else{
                console.log("Get Concept Bulk error", response.status);
                HandleHttpError(response);
            }
            return result;

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Concept Bulk  error message: ', error.message);
        } else {
          console.log('Get Concept Bulk  unexpected error: ', error);
        }
        throw error;
      }
}

export async function BulkConceptGetterApi(bulkConceptFetch: number[]) {
    const conceptList: Concept[] = []
    if (bulkConceptFetch.length > 0) {
      const myHeaders = GetRequestHeader()
      try {
        const response = await fetch(BaseUrl.GetConceptBulkUrl(), {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(bulkConceptFetch),
        })
        if (response.ok) {
          const result = await response.json()
          if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
              const concept = result[i] as Concept
              conceptList.push(concept)
              ConceptsData.AddConcept(concept)
            }
          }
        }
        else{
          HandleHttpError(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('bulk concept getter api error: ', error.message)
        } else {
          console.log('bulk concept getter api error: ', error)
        }
        throw error;
      }
    }
  
    return conceptList
  }
  