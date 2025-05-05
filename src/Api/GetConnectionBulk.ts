import { ConnectionData } from "./../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Connection } from "../DataStructures/Connection";
import { FindConceptsFromConnections } from "../Services/FindConeceptsFromConnection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";

/**
 * After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched
 * @param connectionIds array of connection ids that need to fetched by the local system
 * @returns the list of  connections that have been fetched
 */
export async function GetConnectionBulk(connectionIds: number[] = []): Promise<Connection[]>{
    const logData : any = Logger.logfunction("GetConnectionBulk", connectionIds.length) || {};

    let connectionList:Connection[] = [];
    try{
        if (serviceWorker) {
            logData.serviceWorker = true;
            try {
                const res: any = await sendMessage('GetConnectionBulk', {connectionIds})
                Logger.logUpdate(logData);  
                return res.data
            } catch (error) {
                console.error('GetConnectionBulk sw error: ', error);
                UpdatePackageLogWithError(logData, 'GetConnectionBulk', error);
                handleServiceWorkerException(error);
            }
        }
        if(connectionIds.length > 0){
            let bulkConnectionFetch:number[] = [];
           // if the connections are already present in the local memory then take it from there 
            //else put it in a list called bulkConnectionFetch which will be used to call and api.
            for(let i=0; i<connectionIds.length; i++){
                let conceptUse :Connection= await ConnectionData.GetConnection(connectionIds[i]);
                if(conceptUse.id == 0){
                    bulkConnectionFetch.push(connectionIds[i]);
                }
                else{
                    connectionList.push(conceptUse);
                }
            }
    
            // let remainingIds:any = {};
            // await ConnectionData.GetConnectionBulkData(connectionIds, connectionList, remainingIds );

            //bulkConnectionFetch = connectionIds;
            // if the case that bulkConnectionFetch does not have any elements then we just return everything we have
            if(bulkConnectionFetch.length == 0){
                Logger.logUpdate(logData);  
                return connectionList;
            }
            else{
    
                // if the connection could not be found in the local memory then fetch from the api.
                let header = GetRequestHeader("application/json");
                const response = await fetch(BaseUrl.GetConnectionBulkUrl(),{
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(bulkConnectionFetch)
                });
                if(response.ok){
                    const result = await response.json();
                    if(result.length > 0){
                        for(let i=0 ; i<result.length; i++){
                            let connection = result[i] as Connection;
                            connectionList.push(connection);
                            ConnectionData.AddConnection(connection);
                        }
                    }
                }
                else{
                    UpdatePackageLogWithError(logData, 'GetConnectionBulk', response.status);
                    HandleHttpError(response);
                    console.log("Get Connection Bulk error", response.status);
                }
    
    
    
            Logger.logUpdate(logData);
            }
        }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Connection Bulk error message: ', error);
        } else {
          console.log('Get Connection Bulk unexpected error: ', error);
        }
        UpdatePackageLogWithError(logData, 'GetConnectionBulk', error);
        HandleInternalError(error, BaseUrl.GetConnectionBulkUrl());
      }
      await FindConceptsFromConnections(connectionList);

      return connectionList;

}