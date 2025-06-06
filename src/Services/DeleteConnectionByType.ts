import { GetAllLinkerConnectionsFromTheConcept } from "../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../Api/GetAllLinkerConnectionsToTheConcept";
import { GetConnectionsByApiTypes } from "../Api/GetConnections/GetConnectionsByTypeApi";
import { GetConceptByCharacterAndCategoryApi } from "../Api/SearchConcept/GetConceptByCharacterAndCategoryApi";
import { Concept, Connection, ConnectionData, DeleteConnectionById, GetConceptByCharacter, handleServiceWorkerException, Logger, MakeTheTypeConceptApi, sendMessage, serviceWorker } from "../app";
import { GetConnectionsByTypes } from "../DataStructures/ConnectionByType/GetConnectionByType";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";
import { GetConceptByCharacterAndCategory, GetConceptByCharacterAndCategoryFromMemory } from "./ConceptFinding/GetConceptByCharacterAndCategory";
import { DeleteConnectionByIdBulk } from "./DeleteConnection";

/**
 * 
 * @param id 
 * @param linker 
 * @returns 
 */
export async function DeleteConnectionByType(id: number, linker: string){
    const logData : any = Logger.logfunction("DeleteConnectionByType", arguments) || {}
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
    let isDeleted = false;
    for(let i=0 ;i < toDelete.length; i++){
        isDeleted = await DeleteConnectionById(toDelete[i].id);
    }

    Logger.logUpdate(logData);
    return isDeleted;
}


export async function DeleteConnectionByTypeBulk(id: number, linkers: string[]){
    const logData : any = Logger.logfunction("DeleteConnectionByTypeBulk", arguments) || {}
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('DeleteConnectionByTypeBulk', { id, linkers })
            Logger.logUpdate(logData); 
            return res.data
        } catch (error) {
            console.error('DeleteConnectionByTypeBulk sw error: ', error)
            UpdatePackageLogWithError(logData, 'DeleteConnectionByTypeBulk', error);
            handleServiceWorkerException(error)
        }
    }
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    for(let i=0 ; i< externalConnections.length; i++){
        ConnectionData.AddConnection(externalConnections[i]);
    }
    let connections = await ConnectionData.GetConnectionsOfConcept(id);
    let categoryConcepts :Concept[] = [];
    for(let i=0; i<linkers.length; i++){
        let linker = linkers[i];
        let categoryConcept  = await GetConceptByCharacterAndCategory(linker);
        categoryConcepts.push(categoryConcept);

    }
    let toDelete: number[] = [];
    console.log("this is all the connections for deleting taken",connections, categoryConcepts, linkers);
    for(let i=0; i<connections.length; i++){
        for(let j=0; j<categoryConcepts.length; j++){
            if(connections[i].typeId == categoryConcepts[j].id){
                toDelete.push(connections[i].id);
            }
        }

    }
    console.log("these are the to delete", toDelete);

    Logger.logUpdate(logData);
    return await DeleteConnectionByIdBulk(toDelete);

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


/**
 * 
 * @param id 
 * @param linker 
 * @returns 
 */
export async function DeleteConnectionsByTypeLocal(id: number, linkerStrings: string[]){
    const logData : any = Logger.logfunction("DeleteConnectionByTypeLocal", arguments) || {}
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('DeleteConnectionByTypeLocal', { id, linkerStrings })
            Logger.logUpdate(logData); 
            return res.data
        } catch (error) {
            console.error('DeleteConnectionByTypeLocal sw error: ', error)
            UpdatePackageLogWithError(logData, 'DeleteConnectionByTypeLocal', error);
            handleServiceWorkerException(error)
        }
    }
    let getConnectionsByTypes: GetConnectionsByTypes = new GetConnectionsByTypes();
    getConnectionsByTypes.ofTheConceptId = id;
    getConnectionsByTypes.connectionTypes = linkerStrings;

    let connections = await GetConnectionsByApiTypes(getConnectionsByTypes);

    Logger.logUpdate(logData);
}
