import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { Connection } from "../DataStructures/Connection";
export async function GetConnection(id: number){
    try{
        var connectionUse :Connection= await ConnectionData.GetConnection(id);
        if(connectionUse.id != 0){

            return connectionUse;
        }
        else{
            console.log("getting connection from online");
            const response = await fetch(BaseUrl.GetConnectionUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json() as Connection;
            ConnectionData.AddConnection(result);
            console.log("this is the connection added", result);
            return result;
            

        }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}