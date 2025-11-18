import { BaseUrl, Connection, ConnectionData, Logger } from "../../app";
import { GetConnectionsByTypes } from "../../DataStructures/ConnectionByType/GetConnectionByType";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

/**
 * Retrieves connections filtered by multiple connection type criteria.
 * Fetches connections matching the specified type filters.
 *
 * @param connectionTypes - GetConnectionsByTypes object containing type filter criteria
 * @returns Array of Connection objects matching the type filters
 *
 * @example
 * const types = new GetConnectionsByTypes();
 * types.typeIds = [1, 2, 3];
 * const connections = await GetConnectionsByApiTypes(types);
 */
export async function GetConnectionsByApiTypes(connectionTypes: GetConnectionsByTypes){
    let connections:Connection[]= [];
  const logData : any = Logger.logfunction("GetConnectionsByApiTypes", arguments);
  try{
    var header = GetRequestHeader();
    const response = await fetch(BaseUrl.getConnectionsByTypes(),{
      method: 'POST',
      headers:header,
      body: JSON.stringify(connectionTypes),
  });
  if(!response.ok){
      HandleHttpError(response);
      throw new Error(`Error! status: ${response.status}`);
  }
    const result = await response.json();
    for(var i=0; i< result.length; i++){
        let connection:Connection = result[i];
        connections.push(connection);
        ConnectionData.AddConnection(connection);
        ConnectionData.AddToDictionary(connection);
    }
    Logger.logUpdate(logData)
    return connections;
  }
  catch(error){
        if (error instanceof Error) {
          console.log('GetConnectionsByApiTypes error message: ', error.message);
        } else {
          console.log(' GetConnectionsByApiTypes unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetAllConnectionsOfUserUrl());
        UpdatePackageLogWithError(logData, 'GetConnectionsByApiTypes', error )
        return connections;
  }

}