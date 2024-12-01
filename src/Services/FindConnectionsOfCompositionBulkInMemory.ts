import { sendMessage, serviceWorker } from "../app";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

export async function FindConnectionsOfCompositionsBulkInMemory(composition_ids:number[] = []){
    if (serviceWorker) {
        const res: any = await sendMessage('FindConnectionsOfCompositionsBulkInMemory', {composition_ids})
        // console.log('data received from sw', res)
        return res.data
      }
    let FinalConnectionList:Connection[] = [];
    for(let i=0; i< composition_ids.length; i++){
      // let connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
       let connectionList = await ConnectionData.GetConnectionsOfConcept(composition_ids[i]);
        FinalConnectionList.push(...connectionList);
    }
    return FinalConnectionList;
    
}