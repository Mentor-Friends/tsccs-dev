import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";

export async function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId:number, toConcept:number, mainKey:number){
    try{
        var connectionList: Connection[] = [];

        var formdata = new FormData();
        formdata.append("ofConceptId", ofConceptId.toString());
        formdata.append("mainKey", mainKey.toString());
        formdata.append("toConceptId", toConcept.toString());
        const response = await fetch(BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(),{
          method: 'POST',
          body: formdata
        });
        if(!response.ok){
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnection(result[i]);
            connectionList.push(result[i]);
        }
  
        return connectionList;
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