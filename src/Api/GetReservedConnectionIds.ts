import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedConnectionIds, ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";
export async function GetReservedConnectionIds(){
  const logData : any = Logger.logfunction("GetReservedConnectionIds", arguments);
    try{
            let header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetReservedConnectionIdUrl(),{
                method: 'GET',
                headers: header,
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             for(let i=0; i< result.length; i++){
                ReservedConnectionIds.AddId(result[i]);
             }
             Logger.logUpdate(logData);
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('get reserved connection ids error message: ', error.message);
        } else {
          console.log('get reserved connection ids  unexpected error: ', error);
        }
        HandleInternalError(error,BaseUrl.GetReservedConnectionIdUrl() );
        UpdatePackageLogWithError(logData, 'GetReservedConnectionIds', error);
      }
}