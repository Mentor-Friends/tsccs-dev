import { LocalBinaryTree } from "../../DataStructures/Local/LocalBinaryTree";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { Node } from "../../DataStructures/Node";
import { getAllFromLocalDb } from "../../Database/NoIndexDb";

export default  async function CreateLocalBinaryTreeFromData(){
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }

        }


}
