import { LocalBinaryTypeTree } from "../../DataStructures/Local/LocalBinaryTypeTree";
import { Node } from "../../DataStructures/Node";
import { getAllFromLocalDb } from "../../Database/indexdblocal";

export  async function CreateLocalBinaryTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.typeId, concept, null, null);
                 LocalBinaryTypeTree.addNodeToTree(node);
            }

        }
        console.log(LocalBinaryTypeTree.LocalTypeRoot);
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
