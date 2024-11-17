import { GetConnection } from "../Api/GetConnection";
import { sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  async function GetConnectionById(id:number){
   if (serviceWorker) {
      const res: any = await sendMessage('GetConnectionById', { id })
      console.log('data received from sw', res)
      return res.data
    }
     let connection =   await ConnectionData.GetConnection(id);
     if((connection == null || connection.id == 0) && id != null && id != undefined){
        let connectionString = await  GetConnection(id);
        connection = connectionString as Connection;
       }
       return connection;

}