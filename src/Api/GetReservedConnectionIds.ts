import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedConnectionIds, ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetReservedIds(){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetReservedConnectionIdUrl(),{
                method: 'GET',
                headers: header,
            });
            if(!response.ok){
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
          return error.message;
        } else {
          console.log('get reserved connection ids  unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}