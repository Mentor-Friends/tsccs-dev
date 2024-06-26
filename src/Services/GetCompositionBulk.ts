import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionBulk } from "../Api/GetConnectionBulk";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../app";
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


export async function GetCompositionFromConnectionsWithDataIdInObject(ids:number[]=[], connections:number[] = []){
    let remainingConnections: number[] = [];
    for(let i=0; i< connections.length; i++){
        let connection = await ConnectionData.GetConnection(connections[i]);
        if(connection.id == 0){
            remainingConnections.push(connections[i]);
        }
    }
    await GetConnectionBulk(remainingConnections);
    var compositions:any = {};
    for(let i=0; i< ids.length;i++){
        //console.log("tHIS IS THE START", ids[i])
       var comp = await GetCompositionWithIdFromMemory(ids[i]);
        compositions[ids[i]] = comp;
    }
    return compositions;
}