import { LocalBinaryTree } from "../../DataStructures/Local/LocalBinaryTree";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { Node } from "../../DataStructures/Node";
import { getAllFromLocalDb } from "../../Database/indexdblocal";

export default  async function CreateLocalBinaryTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConcept(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
