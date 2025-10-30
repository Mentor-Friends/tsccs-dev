import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { FindConceptsFromConnections } from '../Services/FindConeceptsFromConnection';
import { FindConnectionsOfCompositionsBulkInMemory } from '../Services/FindConnectionsOfCompositionBulkInMemory';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from '../Services/Common/ErrorPosting';
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from '../app';

/**
 * Retrieves connections for multiple compositions in bulk.
 * Optimizes fetching by batching multiple composition IDs in one request.
 *
 * **Complex Logic**: Checks in-memory cache, fetches from API, detects deletions
 * by comparing old and new data, and bulk-fetches related concepts.
 *
 * @param composition_ids - Array of composition IDs to fetch connections for
 * @returns Array of Connection objects for all compositions
 *
 * @example
 * const connections = await GetAllConnectionsOfCompositionBulk([123, 456, 789]);
 */
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

/**
 * Fetches connections for multiple compositions directly from backend.
 * Internal helper function for GetAllConnectionsOfCompositionBulk.
 *
 * @param composition_ids - Array of composition IDs
 * @returns Array of Connection objects from backend
 */
export async function GetAllConnectionsOfCompositionOnline(composition_ids: number[] = []){
  const logData :any = Logger.logfunction("GetAllConnectionsOfCompositionOnline", arguments);
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