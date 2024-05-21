import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
export async function CreateTheGhostConnectionApi(connectionData: LConnection[]){
  let result:LConnection[] = [];
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
            }


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the connection error message: ', error.message);
        } else {
          console.log(' Create the connection unexpected error: ', error);
        }
        return result;
      }
}