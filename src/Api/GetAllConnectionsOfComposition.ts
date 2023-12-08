import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetAllConnectionsOfCompositionUrl } from './../Constants/ApiConstants';
export async function GetAllConnectionsOfComposition(composition_id: number){
    try{

            const response = await fetch(GetAllConnectionsOfCompositionUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `composition_id=${composition_id}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            for(var i=0; i< result.length; i++){
                ConnectionData.AddConnection(result[i]);
                ConnectionData.AddToDictionary(result[i]);
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