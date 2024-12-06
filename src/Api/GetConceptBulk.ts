import { Concept } from "./../DataStructures/Concept";
import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { sendMessage, serviceWorker } from "../app";

/**
 * This function takes in a list of ids and returns a list of concepts . This uses local memory to find concepts
 * namely in the concept binary tree. If it could not find the concepts in local memory then it fetches those from 
 * the api. The fetched concepts from api are then stored in the memory for further use in future.
 * @param conceptIds list of concept ids that need to be fetched 
 * @returns list of concepts
 */
export async function GetConceptBulk(passedConcepts: number[]): Promise<Concept[]>{
  if (serviceWorker) {
    const res: any = await sendMessage('GetConceptBulk', {passedConcepts})
    // console.log('data received from sw', res)
    return res.data
  }
    let result:Concept[] = [];
    let setTime = new Date().getTime();
    // let conceptIds = passedConcepts.filter((value, index, self) => {
    //   return self.indexOf(value) === index;
    // });
    let conceptIds = Array.from(new Set(passedConcepts));


    try{
      if(conceptIds.length > 0){
        let bulkConceptFetch: number[] = [];
        for(let i=0; i<conceptIds.length; i++){
            let conceptUse :Concept= await ConceptsData.GetConcept(conceptIds[i]);
            if(conceptUse.id == 0){
                bulkConceptFetch.push(conceptIds[i]);
            }
        }
       // let newAlgoTime = new Date().getTime();
        //let remainingIds:any = {};
        // for(let i=0; i< conceptIds.length; i++){
        //     remainingIds[conceptIds[i]] = false;
        // }
       //await ConceptsData.GetConceptBulkData(conceptIds, result, remainingIds );
        // for(let key in remainingIds){
        //     if(remainingIds[key] == false){
        //       bulkConceptFetch.push(Number(key));
        //     }
        // }
        //bulkConceptFetch = conceptIds;
    

        if(bulkConceptFetch.length == 0){

            return result;
        }
        else{
            let header = GetRequestHeader();
            const response = await fetch(BaseUrl.GetConceptBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(bulkConceptFetch)
            });
            if(response.ok){
                result = await response.json();
                console.log("got all the concepts", result);

                if(result.length > 0){
                    for(let i=0 ; i<result.length; i++){
                        let concept = result[i] as Concept;
                        ConceptsData.AddConcept(concept);
                    }
    
                }
                console.log("added the concepts");
            }
            else{
                console.log("Get Concept Bulk error", response.status);
                HandleHttpError(response);
            }


        }

      }
      
       
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Concept Bulk  error message: ', error.message);
        } else {
          console.log('Get Concept Bulk  unexpected error: ', error);
        }
       HandleInternalError(error,BaseUrl.GetConceptBulkUrl() );
      }

      return result;
    
}

export async function BulkConceptGetterApi(bulkConceptFetch: number[]) {
    const conceptList: Concept[] = []
    if (bulkConceptFetch.length > 0) {
      const myHeaders = {
        'Content-Type': 'application/json',
      }
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
          console.log('bulk concept getter api error: ', response.status)
          HandleHttpError(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('bulk concept getter api error: ', error.message)
        } else {
          console.log('bulk concept getter api error: ', error)
        }
        HandleInternalError(error, BaseUrl.GetConceptBulkUrl());
      }
    }
  
    return conceptList
  }
  