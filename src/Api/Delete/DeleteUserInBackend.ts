import { DeleteConceptById, Logger } from "../../app"
import { BaseUrl } from "../../DataStructures/BaseUrl"
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting"
import { GetOnlyTokenHeader, GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Deletes a user account from the backend server.
 *
 * **Process**:
 * 1. Sends delete request with user concept ID and API key
 * 2. Backend deletes user and returns email concept ID
 * 3. Deletes the associated email concept locally
 *
 * Used for complete user account removal including associated data.
 *
 * @param id - The user concept ID to delete
 * @returns Email concept ID that was deleted, or undefined if error
 * @throws Error if deletion fails
 *
 * @example
 * const emailConceptId = await DeleteUserInBackend(userId);
 * console.log("Deleted user and email concept:", emailConceptId);
 */
export  async function DeleteUserInBackend(
    id: number
  ) {
    const logData : any = Logger.logfunction("DeleteUserInBackend", arguments);
    try {
    var header = GetRequestHeaderWithAuthorization("application/json", "");
      let queryUrl = BaseUrl.DeleteUserUrl();
      queryUrl = queryUrl + '?conceptId=' + id + '&apiKey=freeschema';

      const response = await fetch(queryUrl, {
        method: 'POST',
        headers: header,
      })
      if (!response.ok) {
        HandleHttpError(response);
        throw new Error(`Delete composition Error! status: ${response.status}`)
      }
      else{
        let returnData = await response.json();;
        let DeleteEmail = Number(returnData.data);
        console.log("this is the delete email concept", DeleteEmail);
        DeleteConceptById(DeleteEmail);
        Logger.logUpdate(logData);
        return DeleteEmail;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Delete composition error message: ', error.message)
      } else {
        console.log('Delete composition unexpected error: ', error)
      }
      HandleInternalError(error, BaseUrl.DeleteConceptUrl());
      UpdatePackageLogWithError(logData, 'DeleteUserInBackend', error);
    }
  }