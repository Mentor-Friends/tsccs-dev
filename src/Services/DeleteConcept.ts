import DeleteTheConcept from "../Api/DeleteTheConcept";
import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { ConnectionOfNode } from "../DataStructures/ConnectionBinaryTree/ConnectionOfNode";
import { ConnectionOfTheTree } from "../DataStructures/ConnectionBinaryTree/ConnectionOfTheTree";
import { removeFromDatabase } from "../Database/indexeddb";
import GetTheConcept from "./GetTheConcept";

export  async function DeleteConceptById(id:number){
    var concept = await GetTheConcept(id);

    var typeId = concept.typeId;
    var character = concept.characterValue;
    await BinaryTypeTree.removeTypeConcept(typeId,id);
    await BinaryCharacterTree.removeNodeByCharacter(character,id);
    //removeFromDatabase("concept",id);
    await DeleteTheConcept(id);
    await BinaryTree.removeNodeFromTree(id);
    await ConnectionOfTheTree.removeNodeFromTree(id);
}