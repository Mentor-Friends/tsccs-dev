import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { Connection } from "../DataStructures/Connection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";
import { requestNextCacheServer } from "../Services/cacheService";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

/**
 * Processes connection data from API response.
 * Internal helper to parse and cache connection data.
 *
 * @param response - Fetch response object
 * @param result - Connection object to populate
 */
async function processConnectionData(response: Response, result: Connection) {
    if(response.ok){
        result = await response.json() as Connection;
        ConnectionData.AddConnection(result);
    }
    else{
        HandleHttpError(response);
        console.log("Get Connection Error", response.status);
    }
}

/**
 * Retrieves a connection by its ID.
 * Checks local cache first, then fetches from backend if needed.
 *
 * **Complex Logic**: Checks ConnectionData cache, falls back to API request,
 * supports cache server fallback for resilience.
 *
 * @param id - Connection ID to retrieve
 * @returns Connection object or default connection if not found
 *
 * @example
 * const connection = await GetConnection(789);
 */
export async function GetConnection(id: number){
    const logData : any = Logger.logfunction("GetConnection", arguments);
    let result :Connection= await ConnectionData.GetConnection(id);

    try{
        if(result.id != 0){

            return result;
        }
        else{
            const formdata = new FormData();
            formdata.append("id", id.toString());
            const reqData = {
              method: "POST",
              headers: {
                Authorization: "Bearer " + TokenStorage.BearerAccessToken,
              },
              body: formdata,
            };
            let response;
            try {
                response = await fetch(BaseUrl.GetConnectionUrl(), reqData);
            } catch (error) {
                response = await requestNextCacheServer(reqData, "/api/get-connection-by-id")
            }
            await processConnectionData(response, result)
            Logger.logUpdate(logData);
            return result;
            

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Connection error message: ', error.message);
        } else {
          console.log('Get Connection unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConnectionUrl());
        UpdatePackageLogWithError(logData, 'GetConnection', error);
      }
}