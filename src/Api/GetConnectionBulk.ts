import { Concept } from "./../DataStructures/Concept";
import { ConnectionData } from "./../DataStructures/ConnectionData";
import { GetConceptBulkUrl, GetConceptUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Connection } from "../DataStructures/Connection";
import { FindConceptsFromConnections } from "../Services/FindConeceptsFromConnection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetConnectionBulk(connectionIds: number[]){
    try{
        var connectionList:Connection[] = [];
        var bulkConnectionFetch = [];
        for(let i=0; i<connectionIds.length; i++){
            let conceptUse :Connection= await ConnectionData.GetConnection(connectionIds[i]);
            if(conceptUse.id == 0){
                bulkConnectionFetch.push(connectionIds[i]);
            }
            else{
                connectionList.push(conceptUse);
            }
        }
        if(bulkConnectionFetch.length == 0){

            return connectionList;
        }
        else{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.GetConnectionBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(bulkConnectionFetch)
            });
            if(!response.ok){
                return connectionList;
                throw new Error(`Error! status: ${response.status}`);
            }


            const result = await response.json();
            if(result.length > 0){
                for(let i=0 ; i<result.length; i++){
                    let connection = result[i] as Connection;
                    connectionList.push(connection);
                    ConnectionData.AddConnection(connection);
                }

                await FindConceptsFromConnections(connectionList);

                

            }
            return connectionList;

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