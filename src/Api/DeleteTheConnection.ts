import { ConnectionData, Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetOnlyTokenHeader, GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConnection(id:number){
  const logData:any = Logger.logfunction("DeleteTheConnection", arguments);
  let isDeleted = false;
    try{
           const formdata = new FormData();
           formdata.append("id", id.toString());
           let header = GetOnlyTokenHeader();
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
                headers: header,
                body: formdata,  
                redirect: "follow"
            });
            Logger.logUpdate(logData)
            if(!response.ok){
              console.log('Delete connection error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }

            if(isDeleted){
              ConnectionData.AddNpConn(id);
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection error message: ', error.message);
        } else {
          console.log('Delete connection unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.DeleteTheConnectionUrl());
        UpdatePackageLogWithError(logData, 'DeleteTheConnection', error)  // handle function package error
      }
      return isDeleted;
}