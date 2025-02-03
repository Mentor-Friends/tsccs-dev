import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetAllConnectionsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from '../Services/Common/ErrorPosting';
import { Logger } from '../app';
export async function GetAllUserConnections(userId: number){
  const logData : any = Logger.logfunction("GetAllUserConnections", arguments);
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsOfUserUrl(),{
                method: 'POST',
                headers: header,
                body: `user_id=${userId}`
            });
            if(!response.ok){
              console.log(' Get all user Connections status error: ', response.status);
              HandleHttpError(response);
            }
            const result = await response.json();
            for(var i=0; i< result.length; i++){
                ConnectionData.AddConnection(result[i]);
                ConnectionData.AddToDictionary(result[i]);
            }

            Logger.logUpdate(logData)

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get all user Connections error message: ', error.message);
        } else {
          console.log(' Get all user Connections unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetAllConnectionsOfUserUrl());
        UpdatePackageLogWithError(logData, GetAllUserConnections.name, error )
      }
}