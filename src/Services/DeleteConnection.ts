import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { removeFromDatabase } from "../Database/indexeddb";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number){
    var connection = await GetConnectionById(id);
    console.log("this is the connection", connection);
    console.log("this is the connection binary tree before", ConnectionTypeTree.connectionTypeRoot);
   removeFromDatabase("connection",id);
   ConnectionBinaryTree.removeNodeFromTree(id);
   ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
    console.log("this is the connection binary tree", ConnectionTypeTree.connectionTypeRoot);
}