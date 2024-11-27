import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { FindConceptsFromConnections } from '../Services/FindConeceptsFromConnection';
import { FindConnectionsOfCompositionsBulkInMemory } from '../Services/FindConnectionsOfCompositionBulkInMemory';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError, HandleInternalError } from '../Services/Common/ErrorPosting';
import { sendMessage, serviceWorker } from '../app';


export async function GetAllConnectionsOfCompositionBulk(composition_ids: number[] = []){
  if (serviceWorker) {
    const res: any = await sendMessage('GetAllConnectionsOfCompositionBulk', {composition_ids})
    // console.log('data received from sw', res)
    return res.data
  }
      var connectionList: Connection[] = [];
      var conceptList: number[] = [];
      if(composition_ids.length <= 0){
        return connectionList;
      }
      var oldConnectionList = await FindConnectionsOfCompositionsBulkInMemory(composition_ids);
      var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_ids);
      connectionList = connectionListString as Connection[];

      CheckForConnectionDeletion(connectionList, oldConnectionList);
      await FindConceptsFromConnections(connectionList);
      return connectionList;
        
     
}

export async function GetAllConnectionsOfCompositionOnline(composition_ids: number[] = []){
  var connectionList: Connection[] = [];

  try{
      var header = GetRequestHeader();
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionBulkUrl(),{
        method: 'POST',
        headers: header,
        body: JSON.stringify(composition_ids)
      });
      if(response.ok){
        const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnection(result[i]);
            connectionList.push(result[i]);
        }
      }
      else{
        console.log('Get all connections of composition bulk error message: ', "Cannot get response");
        HandleHttpError(response);
      }
      return connectionList;
    }
    catch (error) {
      if (error instanceof Error) {
        console.log('Get all connections of composition bulk error message: ', error.message);
      } else {
        console.log('Get all connections of composition bulk unexpected error: ', error);
      }
      HandleInternalError(error,BaseUrl.GetAllConnectionsOfCompositionBulkUrl() );
    }
}