import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { Connection, ConnectionData, CreateTheConnectionLocal, DeleteConnectionById, GetAllConnectionsOfComposition, GetConceptByCharacter, GetConnectionBulk } from "../app";
import { GetCompositionById } from "./GetComposition";

export async function DeleteConnectionByType(id: number, linker: string){
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    for(let i=0 ; i< externalConnections.length; i++){
        ConnectionData.AddConnection(externalConnections[i]);
    }
    let connections = await ConnectionData.GetConnectionsOfConcept(id);
    let concept = await GetConceptByCharacter(linker);
    let toDelete: Connection[] = [];
    for(let i=0; i<connections.length; i++){
        if(connections[i].typeId == concept.id){
            toDelete.push(connections[i]);
        }
    }
    for(let i=0 ;i < toDelete.length; i++){
        DeleteConnectionById(toDelete[i].id);
    }

}
