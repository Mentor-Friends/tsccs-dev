import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { Node } from "../DataStructures/Node";
import { getObjectsFromIndexDb } from "../Database/indexeddb";

export  async function CreateTypeTreeFromData(){
    try{
        let conceptList = await getObjectsFromIndexDb("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.typeId, concept, null, null);
                 BinaryTypeTree.addNodeToTree(node);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create Type Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }


}
