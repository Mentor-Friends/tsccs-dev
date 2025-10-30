/**
 * Connection deletion API module for the Concept Connection System.
 *
 * This module provides the primary interface for deleting individual connection records between
 * concepts in the system. Connections represent relationships, links, or associations between
 * different concepts. This module supports both authenticated and unauthenticated deletion
 * requests and handles all aspects of API communication and error management.
 *
 * @module Api/DeleteTheConnection
 * @see https://documentation.freeschema.com for API reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";

/**
 * Deletes a single connection between concepts by its ID.
 *
 * This is the primary function for removing individual connections (relationships) between concepts
 * in the CCS database. Connections represent links, associations, or relationships between different
 * concept nodes. The function supports optional authentication and returns a boolean indicating
 * whether the deletion was successful.
 *
 * @param id - The unique identifier of the connection to delete
 * @param token - Optional bearer authentication token. Defaults to empty string for unauthenticated requests
 *
 * @returns A promise that resolves to `true` if the connection was successfully deleted,
 *          `false` if the deletion failed or encountered errors
 *
 * @throws Will re-throw any caught errors after logging them to the console
 *
 * @example
 * ```typescript
 * // Delete a connection with authentication
 * try {
 *   const success = await DeleteTheConnection(456, 'your-auth-token');
 *   if (success) {
 *     console.log('Connection removed successfully');
 *   } else {
 *     console.log('Failed to remove connection');
 *   }
 * } catch (error) {
 *   console.error('Critical error during deletion:', error);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete a connection without authentication
 * const removed = await DeleteTheConnection(789);
 * if (removed) {
 *   console.log('Connection deleted');
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Remove multiple connections sequentially
 * const connectionIds = [101, 102, 103];
 * for (const connId of connectionIds) {
 *   await DeleteTheConnection(connId, authToken);
 * }
 * ```
 *
 * @remarks
 * The function uses FormData to send the connection ID along with a hardcoded "nodeserver" API key.
 * When a token is provided, authenticated headers are prepared using GetRequestHeaderWithAuthorization,
 * though the headers are currently commented out in the fetch call.
 *
 * The fetch request includes `redirect: "follow"` to handle any server-side redirects automatically.
 * Error handling logs failures to the console before re-throwing, allowing both debugging and
 * proper error propagation to calling code.
 *
 * Unlike concept deletion, connection deletion typically has fewer cascade effects since connections
 * are edges in the concept graph rather than nodes themselves.
 *
 * @see DeleteTheConnectionBulkApi for bulk connection deletion
 * @see BaseUrl.DeleteTheConnectionUrl for the API endpoint configuration
 * @see GetRequestHeaderWithAuthorization for authentication header construction
 */
export default async function DeleteTheConnection(id:number, token:string = ""){
  let isDeleted = false;  
  try{
           const formdata = new FormData();
           let myHeaders = GetRequestHeader('application/x-www-form-urlencoded');
           if(token != ""){
              myHeaders = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded',token)
           }
           formdata.append("id", id.toString());
           formdata.append("apiKey", "nodeserver");
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
               // headers: myHeaders,
                body: formdata,  
                redirect: "follow"
            });
            if(!response.ok){
              console.log('Delete connection error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }



        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection error message: ', error.message);
        } else {
          console.log('Delete connection unexpected error: ', error);
        }
        throw error;
      }

      return isDeleted;
}