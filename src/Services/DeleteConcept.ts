import DeleteTheConcept from "../Api/DeleteTheConcept";
import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { removeFromDatabase } from "../Database/indexeddb";
import GetTheConcept from "./GetTheConcept";

export  async function DeleteConceptById(id:number){
    var concept = await GetTheConcept(id);
    await BinaryTree.removeNodeFromTree(id);
    var typeId = concept.typeId;
    var character = concept.characterValue;
    await BinaryTypeTree.removeTypeConcept(typeId,id);
    await BinaryCharacterTree.removeNodeByCharacter(character,id);
    removeFromDatabase("concept",id);
    await DeleteTheConcept(id);
}