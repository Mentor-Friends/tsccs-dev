import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData, GetConceptBulk } from "../app";
import { CheckForConnectionDeletionWithIds } from "./CheckForConnectionDeletion";
import { FindConnectionsOfCompositionsBulkInMemory } from "./FindConnectionsOfCompositionBulkInMemory";
import { GetCompositionFromMemory, GetCompositionWithIdFromMemory } from "./GetComposition";

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

export async function GetCompositionFromConnectionsWithDataIdIndex(ids:number[]=[], connections:number[] = []){
    var newConnections = await GetConnectionBulk(connections);
    var myNewConnections = newConnections as Connection[];
    var oldConnections = await FindConnectionsOfCompositionsBulkInMemory(ids);
    CheckForConnectionDeletionWithIds(connections,oldConnections);
    var compositions: any = {};
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions[ids[i]] = comp;
    }
    return compositions;
}

export async function GetCompositionFromConnectionsWithIndex(ids:number[]=[], connections:number[] = []){
    var newConnections = await GetConnectionBulk(connections);
    var myNewConnections = newConnections as Connection[];
    var oldConnections = await FindConnectionsOfCompositionsBulkInMemory(ids);
    CheckForConnectionDeletionWithIds(connections,oldConnections);
    var compositions: any = {};
    for(let i=0; i< ids.length;i++){
       var comp = await GetCompositionFromMemory(ids[i]);
        compositions[ids[i]] = comp;
    }
    return compositions;
}

export async function GetConnectionDataPrefetch(connections:number[]){
    let remainingConnections: number[] = [];
    let connectionsAll:Connection[] = [];
    for(let i=0; i< connections.length; i++){
        let connection = await ConnectionData.GetConnection(connections[i]);

        if(connection.id == 0){
            remainingConnections.push(connections[i]);
        }
        else{
            connectionsAll.push(connection);
        }
    }
    let prefetchConcepts : number [] = [];
    let connectionsAllLocal = await GetConnectionBulk(remainingConnections);
    connectionsAll = [...connectionsAllLocal];
    for(let j=0 ; j< connectionsAll.length; j++){
        prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
        prefetchConcepts.push(connectionsAll[j].toTheConceptId);
    }
    await GetConceptBulk(prefetchConcepts);
    return connectionsAll;
}

export async function GetCompositionFromConnectionsWithDataIdInObject(ids:number[]=[], connections:number[] = []){
    let remainingConnections: number[] = [];
    for(let i=0; i< connections.length; i++){
        let connection = await ConnectionData.GetConnection(connections[i]);
        if(connection.id == 0){
            remainingConnections.push(connections[i]);
        }
    }
    let prefetchConcepts : number [] = [];
    let connectionsAll = await GetConnectionBulk(remainingConnections);
    for(let j=0 ; j< connectionsAll.length; j++){
        prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
        prefetchConcepts.push(connectionsAll[j].toTheConceptId);
    }
    await GetConceptBulk(prefetchConcepts);

    var compositions:any = {};
    for(let i=0; i< ids.length;i++){
        //console.log("tHIS IS THE START", ids[i])
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions[ids[i]] = comp;
    }
    return compositions;
}