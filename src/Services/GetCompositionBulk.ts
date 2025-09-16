import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData, GetConceptBulk } from "../app";
import { CheckForConnectionDeletionWithIds } from "./CheckForConnectionDeletion";
import { FindConnectionsOfCompositionsBulkInMemory } from "./FindConnectionsOfCompositionBulkInMemory";
import { GetCompositionFromMemory, GetCompositionWithIdFromMemory, GetCompositionWithIdFromMemoryFromConnections, GetCompositionWithIdFromMemoryFromConnectionsNew } from "./GetComposition";

export async function GetCompositionBulk(ids:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(ids);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}


export async function GetCompositionBulkWithDataId(ids:number[]=[]){
    await GetAllConnectionsOfCompositionBulk(ids);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}

export async function GetCompositionFromConnectionsWithDataId(ids:number[]=[], connections:number[] = []){
    var newConnections = await GetConnectionBulk(connections);
    var myNewConnections = newConnections as Connection[];
    var oldConnections = await FindConnectionsOfCompositionsBulkInMemory(ids);
    CheckForConnectionDeletionWithIds(connections,oldConnections);
    var compositions: any[] = [];
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions.push(comp);
    }
    return compositions;
}


/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
export async function GetConnectionDataPrefetch(connectionIds:number[] = []): Promise<Connection[]>{

    let remainingConnections: number[] = [];
    let connectionsAll:Connection[] = [];
    let remainingIds: any = {};
    for(let i=0; i< connectionIds?.length; i++){
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

export async function GetCompositionFromConnectionsWithDataIdInObject(ids:number[]=[], connections:number[] = []){
    let remainingConnections: number[] = [];
    let allConnections:Connection[]  = [];
    for(let i=0; i< connections.length; i++){
        let connection = await ConnectionData.GetConnection(connections[i]);
        if(connection.id == 0){
            remainingConnections.push(connections[i]);
        }
        else{
          allConnections.push(connection);
        }
    }
    let allConnectionsRemaining = await GetConnectionBulk(remainingConnections);
    for(let i=0; i<allConnectionsRemaining.length; i++){
      allConnections.push(allConnectionsRemaining[i]);
    }
    let compositions:any = {};
    let compositionList:number[] = [];
    for(var j=0; j<allConnections.length; j++){
        if(!compositionList.includes(allConnections[j].ofTheConceptId)){
            compositionList.push(allConnections[j].ofTheConceptId);
        }
    }
    console.time("start");
    for(let i=0; i< ids.length;i++){
        //console.log("tHIS IS THE START", ids[i])
        let comp = await GetCompositionWithIdFromMemoryFromConnectionsNew(ids[i], allConnections, compositionList);
        compositions[ids[i]] = comp;
    }
    console.timeEnd("start");
    return compositions;
}