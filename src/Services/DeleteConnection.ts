import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { removeFromDatabase } from "../Database/NoIndexDb";
import {GetConnectionById} from "./GetConnections";

export  async function DeleteConnectionById(id:number, token:string=""){
    var connection = await GetConnectionById(id);
    DeleteTheConnection(id, token);
   removeFromDatabase("connection",id);
   ConnectionBinaryTree.removeNodeFromTree(id);
   ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
}