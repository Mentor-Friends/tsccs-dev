import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { Connection, CreateDefaultConcept, GetConceptBulk } from "../../app";
export async function ViewInternalDataApi(ids: number[]){
    let connectionList: Connection[] = [];
    try{
        var header = GetRequestHeader();

          const response = await fetch(BaseUrl.ViewInternalDataUrl(),{
              method: 'POST',
              headers: header,
              body: JSON.stringify(ids)
          });
          if(response.ok){
            let conceptString = await response.json() ;
            let connectionDictionary : any = {};
            for(let i=0; i < conceptString.length; i++){
                let conceptList: number[] = conceptString[i].concepts;
                connectionList = conceptString[i].connections;
                let id = conceptString[i].id;
                GetConceptBulk(conceptList);
                connectionDictionary[id] = connectionList;
            }

            return connectionDictionary;

          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("View Internal Data error", response.status);
            HandleHttpError(response);
            }
      return connectionList;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the view internal data error message: ', error.message);
        } else {
          console.log(' This is the view internal data unexpected error: ', error);
        }
        throw error;
      }
}