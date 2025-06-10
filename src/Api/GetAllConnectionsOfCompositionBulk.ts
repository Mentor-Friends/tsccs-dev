import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { FindConceptsFromConnections } from '../Services/FindConeceptsFromConnection';
import { FindConnectionsOfCompositionsBulkInMemory } from '../Services/FindConnectionsOfCompositionBulkInMemory';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from '../Services/Common/ErrorPosting';
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from '../app';


export async function GetAllConnectionsOfCompositionBulk(composition_ids: number[] = []){
  const logData : any = Logger.logfunction("GetAllConnectionsOfCompositionBulk", arguments) || {};
  if (serviceWorker) {
    logData.serviceWorker = true;
    try {
      const res: any = await sendMessage('GetAllConnectionsOfCompositionBulk', {composition_ids})
      Logger.logUpdate(logData);
      return res.data
    } catch (error) {
      console.error('GetAllConnectionsOfCompositionBulk sw error: ', error);
      UpdatePackageLogWithError(logData, 'GetAllConnectionsOfCompositionBulk', error);
      handleServiceWorkerException(error);
    }
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
  Logger.logUpdate(logData)
  return connectionList;
}

export async function GetAllConnectionsOfCompositionOnline(composition_ids: number[] = []){
  const logData :any = Logger.logfunction("GetAllConnectionsOfCompositionOnline", arguments);
  var connectionList: Connection[] = [];

  try{
      var header = GetRequestHeader("application/json");
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
      Logger.logUpdate(logData)
      return connectionList;
    }
    catch (error) {
      if (error instanceof Error) {
        console.log('Get all connections of composition bulk error message: ', error.message);
      } else {
        console.log('Get all connections of composition bulk unexpected error: ', error);
      }
      HandleInternalError(error,BaseUrl.GetAllConnectionsOfCompositionBulkUrl() );
      UpdatePackageLogWithError(logData, 'GetAllConnectionsOfCompositionOnline', error )
    }
}