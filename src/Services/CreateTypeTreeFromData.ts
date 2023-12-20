import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../app";

export  async function CreateTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.typeId, concept, null, null);
                 BinaryTypeTree.addNodeToTree(node);
            }

        }
        console.log("what is this");
        console.log(BinaryTypeTree.typeRoot);
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
