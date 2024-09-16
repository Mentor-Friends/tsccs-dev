import { LocalBinaryTypeTree } from "../../DataStructures/Local/LocalBinaryTypeTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getObjectsFromLocalIndexDb } from "../../Database/indexdblocal";

export  async function CreateLocalBinaryTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getObjectsFromLocalIndexDb("localconcept");
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
