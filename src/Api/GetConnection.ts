import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { Connection } from "../DataStructures/Connection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { Logger } from "../app";
export async function GetConnection(id: number){
    Logger.logfunction(GetConnection, arguments);
    let result :Connection= await ConnectionData.GetConnection(id);

    try{
        if(result.id != 0){

            return result;
        }
        else{
            let header = GetRequestHeader('application/x-www-form-urlencoded')
            const formdata = new FormData();
            formdata.append("id", id.toString());
            const response = await fetch(BaseUrl.GetConnectionUrl(),{
                method: 'POST',
                headers: header,
                body: formdata
            });
            if(response.ok){
                result = await response.json() as Connection;
                ConnectionData.AddConnection(result);
            }
            else{
                HandleHttpError(response);
                console.log("Get Connection Error", response.status);
            }
            return result;
            

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get Connection error message: ', error.message);
        } else {
          console.log('Get Connection unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConnectionUrl());
      }
}