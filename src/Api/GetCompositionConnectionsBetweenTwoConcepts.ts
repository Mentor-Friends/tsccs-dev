import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

export async function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId:number, toConcept:number, mainKey:number){
  var connectionList: Connection[] = [];
    
    try{

        var formdata = new FormData();
        formdata.append("ofConceptId", ofConceptId.toString());
        formdata.append("mainKey", mainKey.toString());
        formdata.append("toConceptId", toConcept.toString());
        var header = GetRequestHeader();
        const response = await fetch(BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(),{
          method: 'POST',
          headers: header,
          body: formdata
        });
        if(response.ok){
          const result = await response.json();
          for(var i=0; i< result.length; i++){
              ConnectionData.AddConnection(result[i]);
              connectionList.push(result[i]);
          }
        }
        else{
          console.log("Get composition connection between two concepts", response.status);
          HandleHttpError(response);
        }

  
        return connectionList;
      }
      catch (error) {
        if (error instanceof Error) {
          console.log('Get composition connection between two concepts error message: ', error.message);
        } else {
          console.log('Get composition connection between two concepts unexpected error: ', error);
        }
        throw error;
      }
  }