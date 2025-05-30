import { Connection } from "../DataStructures/Connection";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { BaseUrl, Logger } from "../app";

export async function GetAllLinkerConnectionsFromTheConcept(conceptId:number){
  Logger.logfunction("GetAllLinkerConnectionsFromTheConcept", arguments);
  var connections: Connection[] = [];

    try{
        const start = new Date().getTime();
          var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`,{
              method: 'GET',
              headers: header,
          });
          if(response.ok){
            const result = await response.json();

            for(var i=0; i<result.length;i++){
             var connection = result[i] as Connection;
             connections.push(connection);
            }
          }
          else{
            console.log("Get all linker connection from the concepts error", "cannot get respone" );
            HandleHttpError(response);
          }
  }
  catch (error) {
      if (error instanceof Error) {
        console.log('Get all linker connection from the concepts error: ', error.message);
      } else {
        console.log('Get all linker connection from the concepts error(Unexpected): ', error);
      }
      HandleInternalError(error, BaseUrl.GetAllLinkerConnectionOfConceptUrl());
    }
    return connections;

}