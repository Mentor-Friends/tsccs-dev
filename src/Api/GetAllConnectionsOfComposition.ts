import { Connection } from '../DataStructures/Connection';
import { ConnectionData } from '../DataStructures/ConnectionData';
import { GetMaximumConnectionSyncTime } from '../Services/GetMaximumConnectionSyncTime';
import { GetAllConnectionsOfCompositionUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConnectionBinaryTree } from '../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree';
import { CheckForConnectionDeletion } from '../Services/CheckForConnectionDeletion';
export async function GetAllConnectionsOfComposition(composition_id: number){
      
        var connectionList: Connection[] = [];
        connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        if(connectionList.length == 0){
          var connectionListString = await GetAllConnectionsOfCompositionOnline(composition_id);
          connectionList = connectionListString as Connection[];
        }
        else{
          var newConnectionsString = await GetAllConnectionsOfCompositionOnline(composition_id);
          var newConnections = newConnectionsString as Connection[];
          CheckForConnectionDeletion(newConnections, connectionList);
          connectionList = newConnections;
        }
        return connectionList;
        
     
}

export async function GetAllConnectionsOfCompositionOnline(composition_id: number){
  try{
      var connectionList: Connection[] = [];
      const response = await fetch(BaseUrl.GetAllConnectionsOfCompositionUrl(),{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `composition_id=${composition_id}`
      });
      if(!response.ok){
          throw new Error(`Error! status: ${response.status}`);
      }
      console.log("waiting and watching");
      const result = await response.json();
      for(var i=0; i< result.length; i++){
          ConnectionData.AddConnection(result[i]);
          // ConnectionData.AddToDictionary(result[i]);
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