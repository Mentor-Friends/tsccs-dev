import { GetConnection } from "../Api/GetConnection";
import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  async function GetConnectionById(id:number){

     var connection =   await ConnectionData.GetConnection(id);
     if((connection == null || connection.id == 0) && id != null && id != undefined){
        var connectionString = await  GetConnection(id);
        connection = connectionString as Connection;
       }
       return connection;

}