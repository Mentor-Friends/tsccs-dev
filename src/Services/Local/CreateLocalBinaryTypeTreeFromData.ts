import { LocalBinaryTypeTree } from "../../DataStructures/Local/LocalBinaryTypeTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getObjectsFromLocalIndexDb } from "../../Database/indexdblocal";

export  async function CreateLocalBinaryTypeTreeFromData(){
    try{
        let conceptList = await getObjectsFromLocalIndexDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new LNode(concept.typeId, concept, null, null);
                 LocalBinaryTypeTree.addNodeToTree(node);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create local binary type tree from IndexDb",
            "data": error,
            "ok": false,
            "status": 400
        };
        throw errorObject;
    }


}
