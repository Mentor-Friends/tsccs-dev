import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";

export async function CreateTheConnectionApi(connectionData: Connection[]){
    try{



        var jsonData = JSON.stringify(connectionData);
        console.log("this is the json data");
        console.log(jsonData);
            const response = await fetch(CreateTheConnectionUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();

            return result;
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