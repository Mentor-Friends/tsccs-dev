import DeleteTheConcept from "../Api/DeleteTheConcept";
import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { removeFromDatabase } from "../Database/NoIndexDb";
import GetTheConcept from "./GetTheConcept";

export  async function DeleteConceptById(id:number, token:string = ""){
    var concept = await GetTheConcept(id);
    await BinaryTree.removeNodeFromTree(id);
    var typeId = concept.typeId;
    var character = concept.characterValue;
    await BinaryTypeTree.removeTypeConcept(typeId,id);
    await BinaryCharacterTree.removeNodeByCharacter(character,id);
    removeFromDatabase("concept",id);
    return await DeleteTheConcept(id, token);
}