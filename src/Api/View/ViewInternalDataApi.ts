import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { Connection, CreateDefaultConcept, GetConceptBulk } from "../../app";
export async function ViewInternalDataApi(id: number){
    let connectionList: Connection[] = [];

    try{
        var header = GetRequestHeader();

          const response = await fetch(BaseUrl.ViewInternalDataUrl() + "?id=" + id,{
              method: 'GET',
              headers: header
          });
          if(response.ok){
            let conceptString = await response.json() ;
            let conceptList: number[] = conceptString.item1;
            connectionList = conceptString.item2;
            GetConceptBulk(conceptList);
            return connectionList;
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("View Internal Data error", response.status);
            }
      return connectionList;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the view internal data error message: ', error.message);
        } else {
          console.log(' This is the view internal data unexpected error: ', error);
        }
        return connectionList;
      }
}