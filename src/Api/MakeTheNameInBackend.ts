import { Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function MakeTheNameInBackend(newConceptId:number, referent:string, typeId: number, typeUserId:number){
  const logData : any = Logger.logfunction("MakeTheNameInBackend", arguments);  
  try{
        let object = {
            'newConceptId': newConceptId,
            'referent': referent,
            'typeId': typeId,
            'typeUserId': typeUserId
        }

        let myHeaders = GetRequestHeader();

        let requestObject = JSON.stringify(object);
            const response = await fetch(BaseUrl.MakeTheNameInBackendUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            Logger.logUpdate(logData)
            if(! response.ok){
              HandleHttpError(response);
            }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('make the name in backend error message: ', error.message);
        } else {
          console.log('make the name in backend unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.MakeTheNameInBackendUrl());
        UpdatePackageLogWithError(logData, 'MakeTheNameInBackend', error);
      }
}