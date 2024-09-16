import { getObjectsFromIndexDb } from "../Database/indexeddb";
import { ConceptsData } from "../DataStructures/ConceptData";

/**
 * This function builds up the binary tree on startup from the indexdb 
 */
export default  async function CreateConceptBinaryTreeFromIndexDb(){
    try{
        let conceptList = await getObjectsFromIndexDb("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                ConceptsData.AddConceptToMemory(concept);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }


}
