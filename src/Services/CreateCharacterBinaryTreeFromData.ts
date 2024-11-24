import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { Node } from "../DataStructures/Node";
import { getObjectsFromIndexDb } from "../Database/indexeddb";

/**
 * This function creates a binary character tree in the memory from which we can search for concepts using character key
 * This helps us in searching concept by character faster.
 */
export  async function CreateCharacterBinaryTreeFromData(){
    try{
        let conceptList = await getObjectsFromIndexDb("concept");
        if(Array.isArray(conceptList)){
            for(let i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.characterValue, concept, null, null);
                 BinaryCharacterTree.addNodeToTree(node);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create Character Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }



}
