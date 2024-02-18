import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { ConnectionData } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

export async function GetAllPrefetchConnections(userId:number, inpage:number){
    try{
      const start = new Date().getTime();
      var urlencoded = new URLSearchParams();
      urlencoded.append("user_id", userId.toString());
      var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllPrefetchConnectionsUrl(),{
            method: 'POST',
            headers: header,
            body: urlencoded
        });
        if(!response.ok){
            throw new Error(`Error! status: ${response.status}`);
        }
         const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConnectionData.AddConnectionToStorage(result[i]);
        }
        let elapsed = new Date().getTime() - start;
        console.log("The time taken is ", elapsed);


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