import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { getObjectsFromLocalIndexDb } from "../../Database/indexdblocal";
import { BaseUrl } from "../../app";


/**
 * This will create a binary tree of local concepts that is saved from the indexdb.
 */
export default  async function CreateLocalBinaryTreeFromIndexDb(){
    try{
        let conceptList = await getObjectsFromLocalIndexDb("localconcept");
        if(Array.isArray(conceptList)){
            for(let i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConceptToMemory(concept);
            }

        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create local binary tree from index db",
            "data": error,
            "ok": false,
            "status": 400
        };
        throw errorObject;
    }

}



/**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that 
 * is only valid for the browser that creates this. We have a translator in our node server.
 * We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory 
 * then we use these ids from memory and update the indexdb with the latest id frequently.
 * This function does this process in initlization from indexdb to memory.
 * 
 * 
 */
export async function PopulateTheLocalConceptsToMemory(){
    try{
        let idList = await getObjectsFromLocalIndexDb("localid");
        if(Array.isArray(idList)){
            
            if(idList[0]){
                LocalId.AddConceptId(idList[0]);
    
            }
            if(idList[2]){
                BaseUrl.BASE_RANDOMIZER = idList[2].value;
                console.log("This is the new randomizer", BaseUrl.BASE_RANDOMIZER);
            }
        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot populate Local Ids from the Index Db",
            "data": error,
            "ok": false,
            "status": 400
        };
        throw errorObject;
    }


 }

 /**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that 
 * is only valid for the browser that creates this. We have a translator in our node server.
 * We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory 
 * then we use these ids from memory and update the indexdb with the latest id frequently.
 * This function does this process in initlization from indexdb to memory.
 * 
 * 
 */
 export async function PopulateTheLocalConnectionToMemory(){
    try{
        let idList = await getObjectsFromLocalIndexDb("localid");
        if(Array.isArray(idList)){
            
            if(idList[1]){
                LocalId.AddConnectionId(idList[1]);
    
            }
            if(idList[2]){
                BaseUrl.BASE_RANDOMIZER = idList[2].value;
                console.log("This is the new randomizer", BaseUrl.BASE_RANDOMIZER);
            }
        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot populate Local Ids from the Index Db",
            "data": error,
            "ok": false,
            "status": 400
        };
        throw errorObject;
    }


 }
