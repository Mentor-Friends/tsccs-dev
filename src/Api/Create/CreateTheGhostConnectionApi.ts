import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { Connection, Logger } from "../../app";
export async function CreateTheGhostConnectionApi(connectionData: Connection[]){
  Logger.logfunction("CreateTheGhostConnectionApi", [connectionData.length]);
  let result:Connection[] = [];
    try{

      var header = GetRequestHeaderWithAuthorization("application/json", TokenStorage.BearerAccessToken);
      var jsonData = JSON.stringify(connectionData);
            const response = await fetch(BaseUrl.CreateGhostConnectionApiUrl(),{
                method: 'POST',
                headers:header,
                body: jsonData
            });
            if(response.ok){
              result = await response.json();
              return result;

            }
            else{
              console.log('Create the connection error message: ', response.status);
              HandleHttpError(response);
            }


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the connection error message: ', error.message);
        } else {
          console.log(' Create the connection unexpected error: ', error);
        }
        throw error;
      }
}