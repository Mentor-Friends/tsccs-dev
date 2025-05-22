import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
export async function GetConnectionToTheConcept(typeId: number, toTheConceptId:number, userId:number, inpage:number=10, page:number=1 ){
  let connectionList:Connection[] = []; 
  try{
        var urlencoded = new URLSearchParams();
        urlencoded.append("typeId", `${typeId}`);
        urlencoded.append("toTheConceptId", `${toTheConceptId}`);
        urlencoded.append("userId", `${userId}`);
        urlencoded.append("inpage", `${inpage}`);
        urlencoded.append("page", `${page}`);
        var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsToConceptUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(response.ok){
              connectionList = await response.json() as Connection[];
            }
            else{
              console.log("Get connection of concept error", response.status);
              HandleHttpError(response);
            }
            return connectionList;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get connection of concept  error message: ', error.message);
        } else {
          console.log('Get connection of concept unexpected error: ', error);
        }
        throw error;
      }
}