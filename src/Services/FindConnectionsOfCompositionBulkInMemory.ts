import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";

export async function FindConnectionsOfCompositionsBulkInMemory(composition_ids:number[] = []){
  const logData : any = Logger.logfunction("FindConnectionsOfCompositionsBulkInMemory", [composition_ids.length]) || {};
  let FinalConnectionList:Connection[] = [];
  try {
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage('FindConnectionsOfCompositionsBulkInMemory', {composition_ids})
        Logger.logUpdate(logData); 
        return res.data
      } catch (error) {
        console.error('FindConnectionsOfCompositionsBulkInMemory sw error: ', error)
        UpdatePackageLogWithError(logData, 'FindConnectionsOfCompositionsBulkInMemory', error);
        handleServiceWorkerException(error)
      }
    }
    for(let i=0; i< composition_ids.length; i++){
      // let connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
       let connectionList = await ConnectionData.GetConnectionsOfConcept(composition_ids[i]);
        FinalConnectionList.push(...connectionList);
    }
    Logger.logUpdate(logData)
    return FinalConnectionList;
  } catch (error) {
      console.error('FindConnectionsOfCompositionsBulkInMemory error: ', error)
      UpdatePackageLogWithError(logData, 'FindConnectionsOfCompositionsBulkInMemory', error);
      return FinalConnectionList;
  } 
}