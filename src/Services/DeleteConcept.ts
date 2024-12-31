import { DeleteUserInBackend } from "../Api/Delete/DeleteUserInBackend";
import DeleteTheConcept from "../Api/DeleteTheConcept";
import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { ConnectionOfNode } from "../DataStructures/ConnectionBinaryTree/ConnectionOfNode";
import { ConnectionOfTheTree } from "../DataStructures/ConnectionBinaryTree/ConnectionOfTheTree";
import { removeFromDatabase } from "../Database/indexeddb";
import { handleServiceWorkerException, LocalConceptsData, sendMessage, serviceWorker } from "../app";
import GetTheConcept from "./GetTheConcept";

export async function DeleteConceptById(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('DeleteConceptById', { id })
            return res.data
        } catch (err) {
            console.error('DeleteConceptById sw error: ', err);
            handleServiceWorkerException(err);
        }
    }
    if(id > 0){
        var concept = await GetTheConcept(id);
        if(concept.id > 0){
            var typeId = concept.typeId;
            var character = concept.characterValue;
            await BinaryTypeTree.removeTypeConcept(typeId,id);
            await BinaryCharacterTree.removeNodeByCharacter(character,id);
            //removeFromDatabase("concept",id);
            await DeleteTheConcept(id);
            await BinaryTree.removeNodeFromTree(id);
            await ConnectionOfTheTree.removeNodeFromTree(id);
        }

    }
    else{
        LocalConceptsData.RemoveConceptById(id);
    }
}

export async function DeleteUser(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('DeleteUser', { id })
            return res.data
        } catch (err) {
            console.error('DeleteUser sw error: ', err);
            handleServiceWorkerException(err);
        }
    }
    if(id > 0){
        DeleteUserInBackend(id);
    }
    else{
        LocalConceptsData.RemoveConceptById(id);
    }
}