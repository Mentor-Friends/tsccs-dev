import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { Connection, ConnectionData, CreateTheConnectionLocal, DeleteConnectionById, GetAllConnectionsOfComposition, GetConceptByCharacter, GetConnectionBulk, sendMessage, serviceWorker } from "../app";
import { GetCompositionById } from "./GetComposition";

export async function DeleteConnectionByType(id: number, linker: string){
    if (serviceWorker) {
        const res: any = await sendMessage('DeleteConnectionByType', { id, linker })
        // console.log('data received from sw', res)
        return res.data
      }
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


/**
 * This function returns all the connections from the ofTheConceptId and connection type
 * @param id ofTheConceptId
 * @param linker the connection type
 * @returns Array of connections
 */
export async function GetAllTheConnectionsByTypeAndOfTheConcept(id: number, linker: string){
    if (serviceWorker) {
        const res: any = await sendMessage('GetAllTheConnectionsByTypeAndOfTheConcept', { id, linker })
        // console.log('data received from sw', res)
        return res.data
    }
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    for(let i=0 ; i< externalConnections.length; i++){
        ConnectionData.AddConnection(externalConnections[i]);
    }
    let toDelete: Connection[] = [];
    let connections = await ConnectionData.GetConnectionsOfConcept(id);
    let concept = await GetConceptByCharacter(linker);
    for(let i=0; i<connections.length; i++){
        if(connections[i].typeId == concept.id){
            toDelete.push(connections[i]);
        }
    }
    return toDelete;
}
