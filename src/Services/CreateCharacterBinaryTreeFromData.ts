import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../app";

export  async function CreateCharacterBinaryTreeFromData(){
    var tree = new BinaryCharacterTree();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.characterValue, concept, null, null);
                 BinaryCharacterTree.addNodeToTree(node);
            }

        }


}
