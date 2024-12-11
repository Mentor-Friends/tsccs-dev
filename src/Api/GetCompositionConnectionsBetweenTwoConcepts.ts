import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { sendMessage, serviceWorker } from "../app";

export async function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId:number, toConcept:number, mainKey:number){
    if (serviceWorker) {
      const res: any = await sendMessage('GetCompositionConnectionsBetweenTwoConcepts', {ofConceptId, toConcept, mainKey})
      // console.log('data received from sw', res)
      return res.data
    }
    
    var connectionList: Connection[] = [];
    try{

        var formdata = new FormData();
        formdata.append("ofConceptId", ofConceptId.toString());
        formdata.append("mainKey", mainKey.toString());
        formdata.append("toConceptId", toConcept.toString());
        const response = await fetch(BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(),{
          method: 'POST',
          body: formdata,
          redirect: "follow"
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

  
      }
      catch (error) {
        if (error instanceof Error) {
          console.log('Get composition connection between two concepts error message: ', error.message);
        } else {
          console.log('Get composition connection between two concepts unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl());
      }
      return connectionList;

  }