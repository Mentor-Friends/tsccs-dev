import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
export async function GetReservedIds(){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetReservedIdUrl(),{
                method: 'GET',
                headers: header,
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             for(var i=0; i< result.length; i++){
                ReservedIds.AddId(result[i]);
             }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('get reserved ids error message: ', error.message, BaseUrl.GetReservedConnectionIdUrl());
        } else {
          console.log('get reserved ids  unexpected error: ', error);
        }
        throw error;
      }
}