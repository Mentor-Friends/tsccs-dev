import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetMaximumConnectionSyncTime } from '../Services/GetMaximumConnectionSyncTime';
import { GetAllConnectionsOfCompositionBulkUrl } from '../Constants/ApiConstants';
import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetConceptBulk } from './GetConceptBulk';
export async function GetAllConnectionsOfCompositionBulk(composition_ids: number[] = []){
      
        var connectionList: Connection[] = [];
        var conceptList: number[] = [];
        var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString as Connection[];
        if(connectionList.length > 0){
          for(let i=0;i < connectionList.length; i++){

            if(!conceptList.includes(connectionList[i].ofTheConceptId )){
              conceptList.push(connectionList[i].ofTheConceptId);
            }
            if(!conceptList.includes(connectionList[i].toTheConceptId)){
              conceptList.push(connectionList[i].toTheConceptId);
            }

          }

          await GetConceptBulk(conceptList);

        }
        return connectionList;
        
     
}

export async function GetAllConnectionsOfCompositionOnline(composition_ids: number[] = []){
  try{
      var connectionList: Connection[] = [];
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionBulkUrl(),{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(composition_ids)
      });
      if(!response.ok){
          throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      for(var i=0; i< result.length; i++){
          ConnectionData.AddConnection(result[i]);
          connectionList.push(result[i]);
      }

      return connectionList;
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