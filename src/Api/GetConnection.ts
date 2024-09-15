import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { Connection } from "../DataStructures/Connection";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
export async function GetConnection(id: number){
    var result :Connection= await ConnectionData.GetConnection(id);

    try{
        if(result.id != 0){

            return result;
        }
        else{
            var header = GetRequestHeader('application/x-www-form-urlencoded')
            const response = await fetch(BaseUrl.GetConnectionUrl(),{
                method: 'POST',
                headers: header,
                body: `id=${id}`
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
        throw result;
      }
}