import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetMaximumConnectionSyncTime } from '../Services/GetMaximumConnectionSyncTime';
import { GetAllConnectionsOfCompositionBulkUrl } from '../Constants/ApiConstants';
import { ConceptsData } from "./../DataStructures/ConceptData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetConceptBulk } from './GetConceptBulk';
import { FindConceptsFromConnections } from '../Services/FindConeceptsFromConnection';
import { FindConnectionsOfCompositionsBulkInMemory } from '../Services/FindConnectionsOfCompositionBulkInMemory';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
export async function GetAllConnectionsOfCompositionBulk(composition_ids: number[] = []){
      
        var connectionList: Connection[] = [];
        var conceptList: number[] = [];
        if(composition_ids.length <= 0){
          return connectionList;
        }
        var oldConnectionList = await FindConnectionsOfCompositionsBulkInMemory(composition_ids);
        var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString as Connection[];
        CheckForConnectionDeletion(connectionList, oldConnectionList);
        await FindConceptsFromConnections(connectionList);
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