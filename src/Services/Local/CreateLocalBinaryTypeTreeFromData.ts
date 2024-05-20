import { LocalBinaryTypeTree } from "../../DataStructures/Local/LocalBinaryTypeTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getAllFromLocalDb } from "../../Database/NoIndexDb";

export  async function CreateLocalBinaryTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new LNode(concept.typeId, concept, null, null);
                 LocalBinaryTypeTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
