import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from '../Services/Common/ErrorPosting';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { ConnectionData, Logger } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

export async function GetAllPrefetchConnections(userId:number, inpage:number){
  const logData : any = Logger.logfunction("GetAllPrefetchConnections", arguments);
    try{
      const start = new Date().getTime();
      var urlencoded = new URLSearchParams();
      urlencoded.append("user_id", userId.toString());
      var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllPrefetchConnectionsUrl(),{
            method: 'POST',
            headers: header,
            body: urlencoded
        });
        if(!response.ok){
            HandleHttpError(response);
            throw new Error(`Get all prefetch connections Error! status: ${response.status}`);
        }
         const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnectionToStorage(result[i]);
        }
        Logger.logUpdate(logData)


}
catch (error) {
    if (error instanceof Error) {
      console.log('Get all prefetch connections error message: ', error.message);
    } else {
      console.log('Get all prefetch connections unexpected error: ', error);
    }
    HandleInternalError(error, BaseUrl.GetAllPrefetchConnectionsUrl());
    UpdatePackageLogWithError(logData, 'GetAllPrefetchConnections', error);
  }
}