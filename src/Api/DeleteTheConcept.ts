/**
 * Concept deletion API module for the Concept Connection System.
 *
 * This module provides the primary interface for deleting individual concept records from the system.
 * It supports both authenticated and unauthenticated deletion requests, making it flexible for
 * different security contexts. The module handles API communication, error management, and
 * returns deletion status to the caller.
 *
 * @module Api/DeleteTheConcept
 * @see https://documentation.freeschema.com for API reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";

/**
 * Deletes a single concept from the system by its ID.
 *
 * This is the primary function for removing individual concepts from the CCS database. It supports
 * optional authentication via a bearer token and handles both authenticated and unauthenticated
 * deletion scenarios. The function returns a boolean indicating success or failure, and throws
 * errors for critical failures that should halt execution.
 *
 * @param id - The unique identifier of the concept to delete
 * @param token - Optional bearer authentication token. Defaults to empty string for unauthenticated requests
 *
 * @returns A promise that resolves to `true` if the concept was successfully deleted,
 *          `false` if the deletion failed
 *
 * @throws Will throw an error if the HTTP request fails with a non-OK status
 * @throws Will re-throw any caught errors after logging them to the console
 *
 * @example
 * ```typescript
 * // Delete a concept with authentication
 * try {
 *   const success = await DeleteTheConcept(12345, 'your-auth-token');
 *   if (success) {
 *     console.log('Concept deleted successfully');
 *   }
 * } catch (error) {
 *   console.error('Critical deletion error:', error);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete a concept without authentication (using API key)
 * const result = await DeleteTheConcept(67890);
 * if (result) {
 *   console.log('Public concept removed');
 * }
 * ```
 *
 * @remarks
 * The function uses FormData to send the concept ID along with a hardcoded "nodeserver" API key.
 * When a token is provided, it switches to authenticated headers using GetRequestHeaderWithAuthorization.
 * Note that the headers parameter is currently commented out in the fetch call, which may affect
 * authentication behavior.
 *
 * Error handling follows a dual approach: errors are logged to console for debugging and then
 * re-thrown to allow the caller to handle critical failures. The function returns the success
 * status from the API response JSON.
 *
 * @see TrashTheConcept for backend-specific concept deletion
 * @see BaseUrl.DeleteConceptUrl for the API endpoint configuration
 * @see GetRequestHeaderWithAuthorization for authentication header construction
 */
export default async function DeleteTheConcept(id:number, token:string =""){
  let isDeleted = false; 
  try{
          let myHeaders = GetRequestHeader('application/x-www-form-urlencoded');
          if(token != ""){
             myHeaders = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded',token)

          }
           const formdata = new FormData();
           formdata.append("id", id.toString());
           formdata.append("apiKey", "nodeserver");
            const response = await fetch(BaseUrl.DeleteConceptUrl(),{
                method: 'POST',
                //headers: myHeaders,
                body: formdata
            });
            if(!response.ok){
              HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            else{
              const result = await response.json()

              isDeleted = result.success;
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete concept error message: ', error.message);
        } else {
          console.log('Delete concept unexpected error: ', error);
        }
        throw error;
      }
      return isDeleted;
}