import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection, ConnectionData, CreateTheConnectionLocal, DeleteConnectionById, GetAllConnectionsOfComposition, GetConceptByCharacter, GetConnectionBulk, MakeTheTypeConceptApi, sendMessage, serviceWorker } from "../app";
import { GetCompositionById } from "./GetComposition";

/**
 * 
 * @param id 
 * @param linker 
 * @returns 
 */
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
export async function GetAllTheConnectionsByTypeAndOfTheConcept(id: number, linker: string, reverse: boolean = false){
    if (serviceWorker) {
        const res: any = await sendMessage('GetAllTheConnectionsByTypeAndOfTheConcept', { id, linker, reverse })
        // console.log('data received from sw', res)
        return res.data
    }
    let toDelete: Connection[] = [];

    if(reverse){
        let externalConnections = await GetAllLinkerConnectionsToTheConcept(id);
        let concept = await MakeTheTypeConceptApi(linker,999);

        for(let i=0; i<externalConnections.length; i++){
            if(externalConnections[i].typeId == concept.id){
                toDelete.push(externalConnections[i]);
            }
        }
    }
    else{
        let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
        for(let i=0 ; i< externalConnections.length; i++){
            ConnectionData.AddConnection(externalConnections[i]);
        }
        let connections = await ConnectionData.GetConnectionsOfConcept(id);
        let concept = await GetConceptByCharacter(linker);
        for(let i=0; i<connections.length; i++){
            if(connections[i].typeId == concept.id){
                toDelete.push(connections[i]);
            }
        }
    }

    return toDelete;
}
