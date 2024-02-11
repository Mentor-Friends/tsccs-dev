import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../app";

export async function GetAllLinkerConnectionsFromTheConcept(conceptId:number){
    try{
        var connections: Connection[] = [];
        const start = new Date().getTime();
  
          const response = await fetch(BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`,{
              method: 'GET',
              headers:{
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
          });
          if(!response.ok){
              throw new Error(`Error! status: ${response.status}`);
          }
           const result = await response.json();

           for(var i=0; i<result.length;i++){
            var connection = result[i] as Connection;
            connections.push(connection);
           }

           return connections;

  
  
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