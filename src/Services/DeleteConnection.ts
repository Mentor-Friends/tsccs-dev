import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { removeFromDatabase } from "../Database/indexeddb";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number){
    Logger.logfunction(DeleteConnectionById, arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('DeleteConnectionById', { id })
            return res.data
        } catch (err) {
            console.error('DeleteConnectionById sw error: ', err);
            handleServiceWorkerException(err);
        }
    }
        
    if(id > 0){
        // let connection = await GetConnectionById(id);
        await DeleteTheConnection(id);
        //removeFromDatabase("connection",id);
        ConnectionBinaryTree.removeNodeFromTree(id);
    }
    else{
        LocalConnectionData.RemoveConnectionById(id);
    }
   //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
}