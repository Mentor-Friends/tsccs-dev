import { LocalBinaryCharacterTree } from "../../DataStructures/Local/LocalBinaryCharacterTree";
import { Node } from "../../DataStructures/Node";
import { getAllFromLocalDb } from "../../Database/indexdblocal";

export  async function CreateLocalCharacterBinaryTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.characterValue, concept, null, null);
                LocalBinaryCharacterTree.addNodeToTree(node);
            }

        }
        console.log(LocalBinaryCharacterTree.LocalCharacterRoot);
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
