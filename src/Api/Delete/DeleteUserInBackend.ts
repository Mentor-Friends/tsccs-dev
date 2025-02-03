import { DeleteConceptById, Logger } from "../../app"
import { BaseUrl } from "../../DataStructures/BaseUrl"
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting"
import { GetOnlyTokenHeader, GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

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
      UpdatePackageLogWithError(logData, DeleteUserInBackend.name, error);
    }
  }