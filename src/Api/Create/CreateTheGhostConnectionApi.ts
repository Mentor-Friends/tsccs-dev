import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { HandleHttpError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { Connection, Logger } from "../../app";

/**
 * Syncs local connections to the backend server preserving ghost IDs.
 *
 * Creates connections on server while maintaining ghostId for local ID tracking.
 * Used for syncing locally-created connections (negative IDs) to the backend.
 *
 * @param connectionData - Array of Connection objects to sync
 * @returns Array of created Connection objects with server-assigned positive IDs
 * @throws Error if HTTP request fails
 *
 * @example
 * const synced = await CreateTheGhostConnectionApi([
 *   { id: -123, ofTheConceptId: -100, toTheConceptId: -200, ... }
 * ]);
 * // Returns: [{ id: 5001, ghostId: -123, ofTheConceptId: 1001, toTheConceptId: 2001, ... }]
 */
export async function CreateTheGhostConnectionApi(connectionData: Connection[]){
  const logData : any = Logger.logfunction("CreateTheGhostConnectionApi", [connectionData.length]);
  let result:Connection[] = [];
    try{

      var header = GetRequestHeaderWithAuthorization("application/json", TokenStorage.BearerAccessToken);
      var jsonData = JSON.stringify(connectionData);
            const response = await fetch(BaseUrl.CreateGhostConnectionApiUrl(),{
                method: 'POST',
                headers:header,
                body: jsonData
            });
            if(response.ok){
              result = await response.json();
              return result;

            }
            else{
              console.log('Create the connection error message: ', response.status);
              HandleHttpError(response);
            }

            Logger.logUpdate(logData);

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the connection error message: ', error.message);
        } else {
          console.log(' Create the connection unexpected error: ', error);
        }
        UpdatePackageLogWithError(logData, 'CreateTheGhostConnectionApi', error);
        throw error;
      }
}