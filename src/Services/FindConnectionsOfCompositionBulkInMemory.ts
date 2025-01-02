import { handleServiceWorkerException, sendMessage, serviceWorker } from "../app";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";

export async function FindConnectionsOfCompositionsBulkInMemory(composition_ids:number[] = []){
  let FinalConnectionList:Connection[] = [];
  try {
    if (serviceWorker) {
      try {
        const res: any = await sendMessage('FindConnectionsOfCompositionsBulkInMemory', {composition_ids})
        return res.data
      } catch (error) {
        console.error('FindConnectionsOfCompositionsBulkInMemory sw error: ', error)
        handleServiceWorkerException(error)
      }
    }
    for(let i=0; i< composition_ids.length; i++){
      // let connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
       let connectionList = await ConnectionData.GetConnectionsOfConcept(composition_ids[i]);
        FinalConnectionList.push(...connectionList);
    }
    return FinalConnectionList;
  } catch (error) {
      console.error('FindConnectionsOfCompositionsBulkInMemory error: ', error)
      return FinalConnectionList;
  } 
}