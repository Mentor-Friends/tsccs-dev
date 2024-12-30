import { AccessTracker } from "../AccessTracker/accessTracker";
import { GetConnection } from "../Api/GetConnection";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  async function GetConnectionById(id:number){
   let startTime = performance.now()
   // Add connection id in access tracker
   if(AccessTracker.activateStatus === true){
      try{
         AccessTracker.incrementConnection(id)
      } catch {
         console.error("Error adding connection in access tracker");
         Logger.log("ERROR", "Error Adding Connection")
      }
   }

   if (serviceWorker) {
      try {
         const res: any = await sendMessage('GetConnectionById', { id })
         return res.data
      } catch (error) {
         console.error('GetConnectionById sw error: ', error)
         handleServiceWorkerException(error)
      }
   }
     let connection =   await ConnectionData.GetConnection(id);
     if((connection == null || connection.id == 0) && id != null && id != undefined){
        let connectionString = await  GetConnection(id);
        connection = connectionString as Connection;
       }
      // Add Log
      // Logger.logInfo(startTime, "unknown", "read", "unknown", undefined, 200, connection, "GetConnectionById", [id], "unknown", undefined )

       return connection;

}