import { Connection } from "../../DataStructures/Connection";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates connections on the backend server via API.
 *
 * Sends an array of connection objects to the backend for bulk creation.
 * Used for creating multiple connections in a single API call.
 *
 * @param connectionData - Array of Connection objects to create
 * @returns Connection object (note: current implementation returns default connection)
 * @throws Error if HTTP request fails
 *
 * @example
 * const connections = await CreateTheConnectionApi([
 *   { ofTheConceptId: 100, toTheConceptId: 200, typeId: 42, ... },
 *   { ofTheConceptId: 100, toTheConceptId: 300, typeId: 42, ... }
 * ]);
 */
export async function CreateTheConnectionApi(connectionData: Connection[]){
  let result = new Connection(0,0,0,0,0,0,0);
    try{

        var header = GetRequestHeader();
        var jsonData = JSON.stringify(connectionData);
            const response = await fetch(BaseUrl.CreateTheConnectionUrl(),{
                method: 'POST',
                headers:header,
                body: jsonData
            });
            if(response.ok){
              const result = await response.json();

            }
            else{
              console.log('Create the connection error message: ', response.status);
              HandleHttpError(response);
            }
            return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the connection error message: ', error.message);
        } else {
          console.log(' Create the connection unexpected error: ', error);
        }
        throw error;
      }
}