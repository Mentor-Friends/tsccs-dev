import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData, GetConceptBulk } from "../app";
import { CheckForConnectionDeletionWithIds } from "./CheckForConnectionDeletion";
import { FindConnectionsOfCompositionsBulkInMemory } from "./FindConnectionsOfCompositionBulkInMemory";
import { GetCompositionFromMemory, GetCompositionWithIdFromMemory } from "./GetComposition";

/**
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
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export async function GetCompositionFromConnectionsWithDataId(conceptIds:number[]=[], connectionIds:number[] = []){
    let newConnections = await GetConnectionBulk(connectionIds);
    let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any[] = [];
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions.push(comp);
    }
    return compositions;
}


/**
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export async function GetCompositionFromConnectionsWithDataIdIndex(conceptIds:number[]=[], connectionIds:number[] = []){
    let newConnections = await GetConnectionBulk(connectionIds);
    let myNewConnections = newConnections as Connection[];
    let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionWithIdFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}


/**
 * This function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions. 
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export async function GetCompositionFromConnectionsWithIndex(conceptIds:number[]=[], connectionIds:number[] = []){
    let newConnections = await GetConnectionBulk(connectionIds);
    let myNewConnections = newConnections as Connection[];
    let oldConnections = await FindConnectionsOfCompositionsBulkInMemory(conceptIds);
    CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
    let compositions: any = {};
    for(let i=0; i< conceptIds.length;i++){
        let comp = await GetCompositionFromMemory(conceptIds[i]);
        compositions[conceptIds[i]] = comp;
    }
    return compositions;
}

/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
export async function GetConnectionDataPrefetch(connectionIds:number[]){
    let remainingConnections: number[] = [];
    let connectionsAll:Connection[] = [];
    let remainingIds: any = {};
    for(let i=0; i< connectionIds.length; i++){
        let connection = await ConnectionData.GetConnection(connectionIds[i]);

        if(connection.id == 0){
            remainingConnections.push(connectionIds[i]);
        }
        else{
            connectionsAll.push(connection);
        }
    }
    for(let i=0; i< connectionIds.length; i++){
        remainingIds[connectionIds[i]] = false;
    }
    //await ConnectionData.GetConnectionBulkData(connectionIds, connectionsAll, remainingIds);
    // for(let key in remainingIds){
    //     if(remainingIds[key] == false){
    //         remainingConnections.push(Number(key));
    //     }
    // }
    remainingConnections = connectionIds;
    let prefetchConcepts : number [] = [];
    let connectionsAllLocal = await GetConnectionBulk(remainingConnections);
    connectionsAll = [...connectionsAll,...connectionsAllLocal];
    for(let j=0 ; j< connectionsAll.length; j++){
        prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
        prefetchConcepts.push(connectionsAll[j].toTheConceptId);
    }
    await GetConceptBulk(prefetchConcepts);
    return connectionsAll;
}

/**
 * This function converts the conceptIds and internal connections to create compositions.
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