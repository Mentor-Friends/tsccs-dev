import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection } from "../DataStructures/Connection";
import GetTheConcept from "./GetTheConcept";

export async function GetLinkerConnectionFromConcepts(id:number){

    let connections = await GetAllLinkerConnectionsFromTheConcept(id);

    for(let i=0;i<connections.length;i++){
        let localConnection = connections[i] as Connection;
        let connectionIdentifier = localConnection.typeId;
        let concept = await GetTheConcept(connectionIdentifier);
        localConnection.type = concept;
    }

    return connections;

}

export async function GetLinkerConnectionToConcepts(id:number){

    let connections = await GetAllLinkerConnectionsToTheConcept(id);

    for(let i=0;i<connections.length;i++){
        let localConnection = connections[i] as Connection;
        let connectionIdentifier = localConnection.typeId;
        let concept = await GetTheConcept(connectionIdentifier);
        localConnection.type = concept;
    }

    return connections;

}