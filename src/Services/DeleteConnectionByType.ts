import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection, ConnectionData, DeleteConnectionById, GetConceptByCharacter, handleServiceWorkerException, Logger, MakeTheTypeConceptApi, sendMessage, serviceWorker } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";

/**
 * 
 * @param id 
 * @param linker 
 * @returns 
 */
export async function DeleteConnectionByType(id: number, linker: string){
    const logData : any = Logger.logfunction("DeleteConnectionByType", arguments);
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('DeleteConnectionByType', { id, linker })
            Logger.logUpdate(logData); 
            return res.data
        } catch (error) {
            console.error('DeleteConnectionByType sw error: ', error)
            UpdatePackageLogWithError(logData, 'DeleteConnectionByType', error);
            handleServiceWorkerException(error)
        }
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

    Logger.logUpdate(logData);
}


/**
 * This function returns all the connections from the ofTheConceptId and connection type
 * @param id ofTheConceptId
 * @param linker the connection type
 * @returns Array of connections
 */
export async function GetAllTheConnectionsByTypeAndOfTheConcept(id: number, linker: string, reverse: boolean = false){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetAllTheConnectionsByTypeAndOfTheConcept', { id, linker, reverse })
            return res.data
        } catch (error) {
            console.error('GetAllTheConnectionsByTypeAndOfTheConcept sw error: ', error)
            handleServiceWorkerException(error)
        }
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
