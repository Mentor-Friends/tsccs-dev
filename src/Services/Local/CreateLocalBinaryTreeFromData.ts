import { IdentifierFlags } from "../../DataStructures/IdentifierFlags";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { GetLockStatus, getObjectsFromLocalIndexDb, LockTheDatabase, UnlockDatabase, UpdateToDatabase } from "../../Database/indexdblocal";
import { BaseUrl, Concept, DelayFunctionExecution, Logger } from "../../app";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";


/**
 * Loads local concepts from IndexedDB into memory-based binary tree for fast lookup.
 *
 * Retrieves all stored local concepts from IndexedDB and adds them to LocalConceptsData
 * in-memory structure. Sets flags indicating local data is ready for use.
 *
 * @throws Error if IndexedDB read fails (retries after 2s delay)
 */
export default  async function CreateLocalBinaryTreeFromIndexDb(){
    const logData : any = Logger.logfunction("CreateLocalBinaryTreeFromIndexDb");
    try{
        //let conceptList = await getObjectsFromLocalIndexDb("localconcept");
        let conceptList:Concept[] = [];
        if(Array.isArray(conceptList)){
            for(let i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConceptToMemory(concept);
            }

        }
        IdentifierFlags.isLocalDataLoaded = true;
        IdentifierFlags.isLocalTypeLoaded = true;
        IdentifierFlags.isLocalCharacterLoaded = true;

        Logger.logUpdate(logData);
    }
    catch(error){
        await DelayFunctionExecution(2000, CreateLocalBinaryTreeFromIndexDb());
        let errorObject = {
            "message": "Cannot create local binary tree from index db",
            "data": error,
            "ok": false,
            "status": 400
        };
        UpdatePackageLogWithError(logData, 'CreateLocalBinaryTreeFromIndexDb', error);
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
 * Here we have locked this function so that other processes cannot access this process in the case that this process is ongoing
 * 
 * 
 */
export async function PopulateTheLocalConceptsToMemory(){
    const logData : any = Logger.logfunction("PopulateTheLocalConceptsToMemory");
    try{
        // put a lock on the indexdb for the domain so that no two things do this same process.
        await navigator.locks?.request("dblock", async (lock) => {
            // get the last local concept id(-ve) from the indexdb
            let idList = await getObjectsFromLocalIndexDb("localid");
            // if the list is valid then.
            if(Array.isArray(idList)){
                
                // if the zeroth component that is the concept component is present
                if(idList[0]){

                    // if the zeroth component (concept component) has a valid value;
                    let localConceptIdValue = idList[0].value;

                    if(localConceptIdValue){
                        // add the new concept id to the memory
                        LocalId.AddConceptId(idList[0]);

                        // update the indexdb with the new concept value that other programs can use and
                        // reserve the 10 ids for this program.
                        await UpdateToDatabase("localid", {"id": 0, "value": localConceptIdValue - 10});
                    }
                    else{
                        // incase there is invalid id then choose a random id .
                        localConceptIdValue =  -Math.floor(Math.random() * 100000000);
                        let object = {"id": 0, "value": localConceptIdValue};
                        let newObject = {"id": 0, "value": localConceptIdValue - 10};
                        LocalId.AddConceptId(object);
                        await UpdateToDatabase("localid", newObject);
                    }

        
                }
                if(idList[2]){
                    // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                  //  BaseUrl.setRandomizer(idList[2].value)
                }
            }
        });

        Logger.logUpdate(logData);

    }
    catch(error){
        let errorObject = {
            "message": "Cannot populate Local Ids from the Index Db",
            "data": error,
            "ok": false,
            "status": 400
        };
        UpdatePackageLogWithError(logData, 'PopulateTheLocalConceptsToMemory', error);
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
 * This function locked so that no two parallel process can access this functionality at the same time.
 * That might cause some ids to be repeated.
 * 
 * 
 */
 export async function PopulateTheLocalConnectionToMemory(){
    const logData : any = Logger.logfunction("PopulateTheLocalConnectionToMemory");
    try{
                // put a lock on the indexdb for the domain so that no two things do this same process.
        await navigator.locks?.request("dblock", async (lock) => {
            let idList = await getObjectsFromLocalIndexDb("localid");
            if(Array.isArray(idList)){
                
                if(idList[1]){
                    let localConnectionId = idList[1].value;
                    if(localConnectionId){
                        LocalId.AddConnectionId(idList[1]);
                        await UpdateToDatabase("localid", {"id": 1, "value": localConnectionId - 10});
                    }
                    else{
                        // incase there is invalid id then choose a random id .
                        localConnectionId =  -Math.floor(Math.random() * 100000000);
                        let object = {"id": 0, "value": localConnectionId};
                        let newObject = {"id": 0, "value": localConnectionId - 10};
                        LocalId.AddConnectionId(object);
                        await UpdateToDatabase("localid", newObject);
                    }

                }
                if(idList[2]){
                    // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                    
                   // BaseUrl.setRandomizer(idList[2].value)
    
                }
            }
        });

        Logger.logUpdate(logData)

    }
    catch(error){
        let errorObject = {
            "message": "Cannot populate Local Ids from the Index Db",
            "data": error,
            "ok": false,
            "status": 400
        };
        UpdatePackageLogWithError(logData, "PopulateTheLocalConnectionToMemory", error);
        throw errorObject;
    }


 }
