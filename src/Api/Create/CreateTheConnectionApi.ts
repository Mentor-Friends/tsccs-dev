import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
export async function CreateTheConnectionApi(connectionData: Connection[]){
  let result = new Connection(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    try{


        var header = GetRequestHeader();
        var jsonData = JSON.stringify(connectionData);
            const response = await fetch(BaseUrl.CreateTheConnectionUrl(),{
                method: 'POST',
                headers:header,
                body: jsonData
            });
            if(response.ok){
              const result = await response.json();

            }
            else{
              console.log('Create the connection error message: ', response);
            }
            return result;


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