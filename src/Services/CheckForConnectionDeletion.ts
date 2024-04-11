import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  function CheckForConnectionDeletion(newConnections:Connection[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(Array.isArray(newConnections)){
            if(!newConnections.find(obj => obj.id === oldConnections[i].id)){
                ConnectionData.RemoveConnection(oldConnections[i]);
           }
        }

    }
}


export   function CheckForConnectionDeletionWithIds(newConnectionIds:number[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(!newConnectionIds.includes(oldConnections[i].id)){
              ConnectionData.RemoveConnection(oldConnections[i]);
        }
    }
}