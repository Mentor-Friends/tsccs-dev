import { Concept, DelayFunctionExecution } from "../app";
import { getObjectsFromIndexDb } from "../Database/indexeddb";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConceptsData } from "../DataStructures/ConceptData";
import { IdentifierFlags } from "../DataStructures/IdentifierFlags";

/** Number of records to process per chunk before yielding to the main thread */
const CHUNK_SIZE = 500;

/** Yields to the main thread so the browser can paint and handle events */
function yieldToMainThread(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 0));
}

/**
 * This function builds up the binary tree on startup from the indexdb.
 * Processes records in chunks to avoid blocking the main thread.
 */
export default  async function CreateConceptBinaryTreeFromIndexDb(){
    try{
        let conceptList: Concept[] = [];
        if(BaseUrl.isPwa){
            conceptList = await getObjectsFromIndexDb("concept") as Concept[];
        }
        if(Array.isArray(conceptList)){
            for(let i=0 ;i < conceptList.length ;i++){
                ConceptsData.AddConceptToMemory(conceptList[i]);
                if (i > 0 && i % CHUNK_SIZE === 0) {
                    await yieldToMainThread();
                }
            }
        }
        IdentifierFlags.isDataLoaded= true;
        IdentifierFlags.isCharacterLoaded= true;
        IdentifierFlags.isTypeLoaded= true;
    }
    catch(error){
        await DelayFunctionExecution(2000, CreateConceptBinaryTreeFromIndexDb());

        let errorObject = {
            "message": "Cannot create Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }


}
