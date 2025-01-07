import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData, GetConceptBulk, handleServiceWorkerException, sendMessage, serviceWorker } from "../app";
import { CheckForConnectionDeletionWithIds } from "./CheckForConnectionDeletion";
import { FindConnectionsOfCompositionsBulkInMemory } from "./FindConnectionsOfCompositionBulkInMemory";
import { GetCompositionFromMemory, GetCompositionFromMemoryNormal, GetCompositionFromMemoryWithConnections, GetCompositionWithIdFromMemory, GetCompositionWithIdFromMemoryFromConnection, GetCompositionWithIdFromMemoryNew } from "./GetComposition";

/**
 * ## Format JUSTDATA ##
 * Function converts the conceptIds to json (compositions)
 * This function takes in the conceptIds and returns a list of compositions related to those concepts.
 * @param conceptIds  list of concept ids that are compositions.
 * @returns compositions 
 */
export async function GetCompositionBulk(conceptIds:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(conceptIds);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
       let comp = await GetCompositionFromMemory(conceptIds[i]);
        compositions.push(comp);
    }
    return compositions;
}


/**
 * ## FORMAT DATAIDDATE ##
 * Function converts the conceptIds to json (compositions)
 * @param conceptIds this is the list of concept ids that should be converted to compostions in data - id format. 
 * @returns list of compositions in the data - id format.
 */
export async function GetCompositionBulkWithDataId(conceptIds:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(conceptIds);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
       let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions.push(comp);
    }
    return compositions;
}

/**
 * ## FORMAT DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export async function GetCompositionFromConnectionsWithDataId(conceptIds:number[]=[], connectionIds:number[] = []){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromConnectionsWithDataId', {conceptIds, connectionIds})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromConnectionsWithDataId error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
      
    // let newConnections = await GetConnectionBulk(connectionIds);
    // let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions.push(comp);
    }
    return compositions;
}

/**
 * ## FORMAT DATAIDDATE ##
 * This is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that 
 * it also prints out internal connections.
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export async function GetCompositionFromConnectionsWithDataIdFromConnections(conceptIds:number[]=[], connectionIds:number[] = []){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromConnectionsWithDataIdFromConnections', {conceptIds, connectionIds})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromConnectionsWithDataIdFromConnections error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
      
    let newConnections = await GetConnectionBulk(connectionIds);
    //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemoryFromConnection(conceptIds[i], newConnections);
        compositions.push(comp);
    }
    return compositions;
}


/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export async function GetCompositionFromConnectionsWithDataIdIndex(conceptIds:number[]=[], connectionIds:number[] = []){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromConnectionsWithDataIdIndex', {conceptIds, connectionIds})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromConnectionsWithDataIdIndex error sw: ', error)
            handleServiceWorkerException(error)
        }
    }

    let newConnections = await GetConnectionBulk(connectionIds);
    let myNewConnections = newConnections as Connection[];
    let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}


/**
 * ## Format is dictionary with key as concept id and value as data (json) ##
 * This function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export async function GetCompositionFromConnectionsWithIndex(conceptIds:number[]=[], connectionIds:number[] = []){
    let newConnections = await GetConnectionBulk(connectionIds);
    let myNewConnections = newConnections as Connection[];
    let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}


/**
 * ## FORMAT DATAIDDATE ##
 * This is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that 
 * it also prints out internal connections.
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export async function GetCompositionFromConnectionsWithIndexFromConnections(conceptIds:number[]=[], connectionIds:number[] = []){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromConnectionsWithIndexFromConnections', {conceptIds, connectionIds})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromConnectionsWithIndexFromConnections error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
      
    let newConnections = await GetConnectionBulk(connectionIds);
    //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionFromMemoryWithConnections(conceptIds[i], newConnections);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}

/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
export async function GetConnectionDataPrefetch(connectionIds:number[]): Promise<Connection[]>{
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetConnectionDataPrefetch', {connectionIds})
            return res.data
        } catch (error) {
            console.error('GetConnectionDataPrefetch error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let remainingConnections: number[] = [];
    let connectionsAll:Connection[] = [];
    let remainingIds: any = {};
    for(let i=0; i< connectionIds.length; i++){
        let connection = await ConnectionData.GetConnection(connectionIds[i]);
       // console.log("this is the connection fetch", connection);
        if(connection.id == 0){
            remainingConnections.push(connectionIds[i]);
        }
        else{
            connectionsAll.push(connection);
        }
    }
    for(let i=0; i< remainingConnections.length; i++){
        remainingIds[connectionIds[i]] = false;
    }
    //await ConnectionData.GetConnectionBulkData(connectionIds, connectionsAll, remainingIds);
    // for(let key in remainingIds){
    //     if(remainingIds[key] == false){
    //         remainingConnections.push(Number(key));
    //     }
    // }
   // remainingConnections = connectionIds;
    let prefetchConcepts : number [] = [];
    let connectionsAllLocal = await GetConnectionBulk(remainingConnections);
    connectionsAll = [...connectionsAll,...connectionsAllLocal];
    for(let j=0 ; j< connectionsAll.length; j++){
        prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
        prefetchConcepts.push(connectionsAll[j].toTheConceptId);
        prefetchConcepts.push(connectionsAll[j].typeId);
    }
    await GetConceptBulk(prefetchConcepts);
    return connectionsAll;
}

/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connections to create compositions.
 * Format is of a dictionary with ids as the key and value is the composition data.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export async function GetCompositionFromConnectionsWithDataIdInObject(conceptIds:number[]=[], connections:number[] = []){

    // get all the connections that are not available in memory from the api.
    await GetConnectionBulk(connections);
    // create a list of compositions from the fetched concepts and connections.
    let compositions:any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}

/**
 * ## Format DATAIDDATE ##
 * ## duplicate ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export async function GetCompositionFromConnectionsWithDataIdInObjectNew(conceptIds:number[]=[], connections:number[] = []){

    // get all the connections that are not available in memory from the api.
    await GetConnectionBulk(connections);
    // create a list of compositions from the fetched concepts and connections.
    let compositions:any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemoryNew(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}


/**
 * ## Format justdata ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export async function GetCompositionFromConnectionsInObject(conceptIds:number[]=[], connections:number[] = []){

    // get all the connections that are not available in memory from the api.
    await GetConnectionBulk(connections);
    // create a list of compositions from the fetched concepts and connections.
    let compositions:any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}


/**
 * ## Format Normal ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export async function GetCompositionFromConnectionsInObjectNormal(conceptIds:number[]=[], connections:number[] = []){

    // get all the connections that are not available in memory from the api.
    await GetConnectionBulk(connections);
    // create a list of compositions from the fetched concepts and connections.
    let compositions:any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionFromMemoryNormal(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}