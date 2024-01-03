import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../Database/indexeddb";
import { ConceptsData } from "../DataStructures/ConceptData";

export default  async function CreateBinaryTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                ConceptsData.AddConcept(concept);
                // let node = new Node(concept.id, concept, null, null);
                // BinaryTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
