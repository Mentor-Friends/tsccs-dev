import { LocalBinaryCharacterTree } from "../../DataStructures/Local/LocalBinaryCharacterTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getObjectsFromLocalIndexDb } from "../../Database/indexdblocal";
import { Logger } from "../../app";

/**
 * Builds a binary search tree indexed by characterValue for fast text-based concept lookup.
 *
 * Loads all local concepts from IndexedDB and organizes them into a binary tree
 * structure where each node is keyed by characterValue. Enables O(log n) lookups by text.
 *
 * @throws Error if IndexedDB read or tree construction fails
 */
export  async function CreateLocalCharacterBinaryTreeFromData(){
    Logger.logfunction("CreateLocalCharacterBinaryTreeFromData");
    try{
        let conceptList = await getObjectsFromLocalIndexDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new LNode(concept.characterValue, concept, null, null);
                LocalBinaryCharacterTree.addNodeToTree(node);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create local binary character tree from IndexDb",
            "data": error,
            "ok": false,
            "status": 400
        };
        throw errorObject;
    }


}
