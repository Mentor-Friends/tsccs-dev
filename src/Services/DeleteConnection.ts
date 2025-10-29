import DeleteTheConnectionBulkApi from "../Api/DeleteConnectionApiBulk";
import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { removeFromDatabase } from "../Database/NoIndexDb";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number, token:string=""){
    let isDeleted:boolean = false;
    var connection = await GetConnectionById(id);
    isDeleted = await DeleteTheConnection(id, token);
   removeFromDatabase("connection",id);
   ConnectionBinaryTree.removeNodeFromTree(id);
   ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
   return isDeleted;
}


export  async function DeleteConnectionByIdBulk(ids:number[]){
    let isDeleted = await DeleteTheConnectionBulkApi(ids);
    if(isDeleted){
        for(let i=0; i<ids.length; i++){
            let id= ids[i];
            if(id > 0){
            // let connection = await GetConnectionById(id);
            //removeFromDatabase("connection",id);
                ConnectionBinaryTree.removeNodeFromTree(id);
            }
        }
    }

    

   return isDeleted;
}