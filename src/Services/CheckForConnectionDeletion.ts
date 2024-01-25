import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

export async function CheckForConnectionDeletion(newConnections:Connection[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(!newConnections.find(obj => obj.id === oldConnections[i].id)){
            ConnectionData.RemoveConnection(oldConnections[i]);
        }
    }
}


export async function CheckForConnectionDeletionWithIds(newConnectionIds:number[] = [], oldConnections:Connection[] = []){
    for(let i=0; i<oldConnections.length; i++){
        if(!newConnectionIds.includes(oldConnections[i].id)){
            ConnectionData.RemoveConnection(oldConnections[i]);
        }
    }
}