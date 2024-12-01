import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { removeFromDatabase } from "../Database/indexeddb";
import { sendMessage, serviceWorker } from "../app";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number){
    if (serviceWorker) {
        const res: any = await sendMessage('DeleteConnectionById', { id })
        // console.log('data received from sw', res)
        return res.data
      }
      
    if(id > 0){
        let connection = await GetConnectionById(id);
        await DeleteTheConnection(id);
       //removeFromDatabase("connection",id);
       ConnectionBinaryTree.removeNodeFromTree(id);
    }
    else{
        LocalConnectionData.RemoveConnectionById(id);
    }

   //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
}