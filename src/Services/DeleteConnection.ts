import DeleteTheConnectionBulkApi from "../Api/DeleteConnectionBulkApi";
import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { removeFromDatabase } from "../Database/indexeddb";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number){
    const logData : any = Logger.logfunction("DeleteConnectionById", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('DeleteConnectionById', { id })
            return res.data
        } catch (err) {
            console.error('DeleteConnectionById sw error: ', err);
            handleServiceWorkerException(err);
        }
    }
    let isDeleted = true;
    if(id > 0){
        // let connection = await GetConnectionById(id);
        isDeleted = await DeleteTheConnection(id);
        //removeFromDatabase("connection",id);
        ConnectionBinaryTree.removeNodeFromTree(id);
    }
    else{
        LocalConnectionData.RemoveConnectionById(id);
    }
   //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
   Logger.logUpdate(logData)
   return isDeleted;
}


export  async function DeleteConnectionByIdBulk(ids:number[]){
    const logData : any = Logger.logfunction("DeleteConnectionByIdBulk", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('DeleteConnectionByIdBulk', { ids })
            return res.data
        } catch (err) {
            console.error('DeleteConnectionByIdBulk sw error: ', err);
            handleServiceWorkerException(err);
        }
    }
    let isDeleted = await DeleteTheConnectionBulkApi(ids);
    if(isDeleted){
        for(let i=0; i<ids.length; i++){
            let id= ids[i];
            if(id > 0){
            // let connection = await GetConnectionById(id);
            //removeFromDatabase("connection",id);
                ConnectionBinaryTree.removeNodeFromTree(id);
            }
            else{
                LocalConnectionData.RemoveConnectionById(id);
            }
        }
    }

    

   //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
   Logger.logUpdate(logData)
   return isDeleted;
}