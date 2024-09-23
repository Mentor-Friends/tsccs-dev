import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedConnectionIds, ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
export async function GetReservedConnectionIds(){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetReservedConnectionIdUrl(),{
                method: 'GET',
                headers: header,
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             for(var i=0; i< result.length; i++){
                ReservedConnectionIds.AddId(result[i]);
             }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('get reserved connection ids error message: ', error.message);
        } else {
          console.log('get reserved connection ids  unexpected error: ', error);
        }
        HandleInternalError(error,BaseUrl.GetReservedConnectionIdUrl() );
      }
}