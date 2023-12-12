import { Connection } from "../DataStructures/Connection";

export function GetMaximumConnectionSyncTime(connections: Connection[]){
    var maxTime: Date = new Date(0);
    for(var i=0;i<connections.length; i++){
        if(connections[i].localSyncTime > maxTime){
            maxTime = connections[i].localSyncTime;
        }
    }
    return maxTime;
}