import { Concept, DelayFunctionExecution } from "../app";
import { getObjectsFromIndexDb } from "../Database/indexeddb";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { ConceptsData } from "../DataStructures/ConceptData";
import { IdentifierFlags } from "../DataStructures/IdentifierFlags";

/**
 * This function builds up the binary tree on startup from the indexdb
 */
export default  async function CreateConceptBinaryTreeFromIndexDb(){
    try{
        let conceptList: Concept[] = [];
        if(BaseUrl.isPwa){
            conceptList = await getObjectsFromIndexDb("concept") as Concept[];
        }
        if(Array.isArray(conceptList)){
            for(let i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                ConceptsData.AddConceptToMemory(concept);
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
