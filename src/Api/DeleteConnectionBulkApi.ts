import { BaseUrl, ConnectionData, Logger } from "../app";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetOnlyTokenHeader } from "../Services/Security/GetRequestHeader";

/**
 * Deletes multiple connections from the backend in a single bulk operation.
 *
 * **Process**:
 * 1. Sends array of connection IDs to backend for bulk deletion
 * 2. If successful: Marks all connections as deleted in local ConnectionData
 * 3. Returns overall deletion success status
 *
 * More efficient than calling DeleteTheConnection multiple times.
 *
 * @param ids - Array of connection IDs to delete
 * @returns boolean - true if bulk deletion successful, false otherwise
 *
 * @example
 * const deleted = await DeleteTheConnectionBulkApi([5001, 5002, 5003]);
 * if (deleted) {
 *   console.log("All 3 connections deleted successfully");
 * }
 */
export default async function DeleteTheConnectionBulkApi(ids:number[]){
  const logData:any = Logger.logfunction("DeleteTheConnectionBulkApi", arguments);
  let isDeleted = false;
    try{
           let header:Headers = GetOnlyTokenHeader();
           header.append('Content-Type','application/json');
            const response = await fetch(BaseUrl.DeleteTheConnectionBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(ids)
            });
            Logger.logUpdate(logData)
            if(!response.ok){
              console.log('Delete connection Bulk Api error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }

            if(isDeleted){
              for(let i=0 ; i<ids.length; i++){
                let id = ids[i];
                ConnectionData.AddNpConn(id);

              }
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection Bulk Api error message: ', error.message);
        } else {
          console.log('Delete connection Bulk Api unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.DeleteTheConnectionUrl());
        UpdatePackageLogWithError(logData, 'DeleteTheConnectionBulkApi', error)  // handle function package error
      }
      return isDeleted;
}