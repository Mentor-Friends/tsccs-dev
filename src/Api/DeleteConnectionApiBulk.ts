/**
 * Bulk connection deletion API module for the Concept Connection System.
 *
 * This module provides functionality to delete multiple connections between concepts in a single API call.
 * It optimizes performance by allowing batch deletion operations rather than individual deletions,
 * making it ideal for cleanup operations and managing multiple relationships at once.
 *
 * @module Api/DeleteConnectionApiBulk
 * @see https://documentation.freeschema.com for API reference
 */

import { BaseUrl } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";

/**
 * Deletes multiple connections between concepts in a single bulk operation.
 *
 * This function sends an authenticated POST request to delete multiple connection records
 * identified by their IDs. It's particularly useful for cleanup operations, removing outdated
 * relationships, or managing connections in bulk rather than one at a time. The function
 * returns a boolean indicating success or failure of the bulk deletion.
 *
 * @param ids - Array of connection IDs to delete in bulk
 *
 * @returns A promise that resolves to `true` if all connections were successfully deleted,
 *          `false` if the deletion failed or encountered errors
 *
 * @example
 * ```typescript
 * // Delete multiple connections at once
 * const connectionIds = [101, 102, 103, 104];
 * const success = await DeleteTheConnectionBulkApi(connectionIds);
 *
 * if (success) {
 *   console.log('All connections deleted successfully');
 * } else {
 *   console.log('Bulk deletion failed');
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Clean up all connections for a specific concept
 * const obsoleteConnections = [45, 67, 89];
 * const result = await DeleteTheConnectionBulkApi(obsoleteConnections);
 * ```
 *
 * @remarks
 * This function uses authenticated headers retrieved from GetRequestHeaderWithAuthorization().
 * The connection IDs are sent as a JSON array in the request body. Unlike individual deletion
 * methods, this function does not throw errors but returns false on failure, making it safer
 * for batch operations where partial failures should be handled gracefully.
 *
 * The function logs all errors to the console for debugging purposes but does not re-throw them,
 * allowing the calling code to continue execution even if the bulk deletion fails.
 *
 * @see DeleteTheConnection for single connection deletion
 * @see BaseUrl.DeleteTheConnectionBulkUrl for the API endpoint configuration
 */
export default async function DeleteTheConnectionBulkApi(ids:number[]){
  let isDeleted = false;
    try{
           let header = GetRequestHeaderWithAuthorization();
            const response = await fetch(BaseUrl.DeleteTheConnectionBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(ids)
            });
            if(!response.ok){
              console.log('Delete connection Bulk Api error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }



        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection Bulk Api error message: ', error.message);
        } else {
          console.log('Delete connection Bulk Api unexpected error: ', error);
        }
      }
      return isDeleted;
}