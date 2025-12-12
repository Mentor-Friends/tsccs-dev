import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from '../Services/Common/ErrorPosting';
import { Logger } from '../app';
import { log } from 'console';

/**
 * Retrieves all connections belonging to a specific composition.
 * Checks local cache first, then fetches from backend if needed.
 *
 * **Complex Logic**: First checks ConnectionData cache, then fetches from API,
 * compares with cached data to detect deletions, and updates cache.
 *
 * @param composition_id - ID of the composition whose connections to retrieve
 * @returns Array of Connection objects for the composition
 *
 * @example
 * const connections = await GetAllConnectionsOfComposition(456);
 */
export async function GetAllConnectionsOfComposition(composition_id: number){
      const logData : any = Logger.logfunction("GetAllConnectionsOfComposition", arguments);
        var connectionList: Connection[] = [];
        //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        connectionList = await ConnectionData.GetConnectionsOfConcept(composition_id);
        if(connectionList.length == 0){
          var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_id);
          connectionList = connectionListString as Connection[];
        }
        else{
          var newConnectionsString = await GetAllConnectionsOfCompositionOnline(composition_id);
          var newConnections = newConnectionsString as Connection[];
          CheckForConnectionDeletion(newConnections, connectionList);
          connectionList = newConnections;
        }
        Logger.logUpdate(logData);
        return connectionList;
        

}

/**
 * Fetches connections for a composition directly from the backend.
 * Internal helper function for GetAllConnectionsOfComposition.
 *
 * @param composition_id - ID of the composition
 * @returns Array of Connection objects from backend
 */
export async function GetAllConnectionsOfCompositionOnline(composition_id: number){
  const logData : any = Logger.logfunction("GetAllConnectionsOfCompositionOnline", arguments);
  var connectionList: Connection[] = [];

  try{
      const formdata = new FormData();
      formdata.append("composition_id", composition_id.toString());
      const headers = await GetRequestHeader('','application/json');
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionUrl(),{
        method: 'POST',
        headers: headers,
        body: formdata
      });
      console.log("this is getting connection from online", BaseUrl.GetAllConnectionsOfCompositionUrl(), composition_id);
      if(!response.ok){
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      for(var i=0; i< result.length; i++){
          ConnectionData.AddConnection(result[i]);
          connectionList.push(result[i]);
      }
      Logger.logUpdate(logData)
      return connectionList;
    }
    catch (error) {
      if (error instanceof Error) {
        console.log('Get all connection of composition error : ', error.message);
      } else {
        console.log('Get all connection of composition error : ', error);
      }
      HandleInternalError(error, BaseUrl.GetAllConnectionsOfCompositionUrl());
      UpdatePackageLogWithError(logData, 'GetAllConnectionsOfCompositionOnline', error);
    }
}