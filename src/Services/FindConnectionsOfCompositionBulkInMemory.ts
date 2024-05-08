import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

export async function FindConnectionsOfCompositionsBulkInMemory(composition_ids:number[] = []){
    var FinalConnectionList:Connection[] = [];
    for(let i=0; i< composition_ids.length; i++){
       var connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
        FinalConnectionList.push(...connectionList);
    }
    return FinalConnectionList;
    
}