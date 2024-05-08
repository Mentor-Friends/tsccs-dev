import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { Connection } from "../DataStructures/Connection";
import GetTheConcept from "./GetTheConcept";

export async function GetLinkerConnectionFromConcepts(id:number){

    var connections = await GetAllLinkerConnectionsFromTheConcept(id);

    for(var i=0;i<connections.length;i++){
        let localConnection = connections[i] as Connection;
        var connectionIdentifier = localConnection.typeId;
        let concept = await GetTheConcept(connectionIdentifier);
        localConnection.type = concept;
    }

    return connections;

}