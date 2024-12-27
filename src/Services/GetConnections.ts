import { AccessTracker } from "../AccessTracker/accessTracker";
import { GetConnection } from "../Api/GetConnection";
import { Logger, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  async function GetConnectionById(id:number){
   let startTime = performance.now()
   // Add connection id in access tracker
   try{
      AccessTracker.incrementConnection(id)
   } catch {
      console.error("Error adding connection in access tracker");
      Logger.log("ERROR", "Error Adding Connection")
   }
   if (serviceWorker) {
      const res: any = await sendMessage('GetConnectionById', { id })
      // console.log('data received from sw', res)
      return res.data
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