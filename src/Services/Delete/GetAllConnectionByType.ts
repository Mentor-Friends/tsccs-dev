import { GetAllLinkerConnectionsFromTheConcept } from "../../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection, ConnectionData, GetConceptByCharacter, MakeTheTypeConceptApi } from "../../app";

/**
 * This function returns all the connections from the ofTheConceptId and connection type
 * @param id ofTheConceptId
 * @param linker the connection type
 * @param reverse if you put in reverse true then the reverse connections are returned.
 * @returns Array of connections
 */
export async function GetAllTheConnectionsByTypeAndOfTheConcept(id: number, linker: string, reverse: boolean = false){
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
        let concept = await MakeTheTypeConceptApi(linker,999);
        for(let i=0; i<externalConnections.length; i++){
            if(externalConnections[i].typeId == concept.id){
                toDelete.push(externalConnections[i]);
            }
        }
    }

    return toDelete;
}


/**
 * This function returns all the connections from the ofTheConceptId with toTheConceptId and linkers as given, the reverse is also true.
 * @param id ofTheConceptId
 * @param linker the connection type
 * @returns Array of connections
 */
export async function GiveConnection(ofTheConceptId: number, toTheConceptId:number, linker: string, reverse: boolean = false){
    let toDelete: Connection[] = [];
    let filteredConnections: Connection[] = [];

    if(reverse){
        toDelete = await GetAllTheConnectionsByTypeAndOfTheConcept(toTheConceptId, linker, reverse);
    }
    else{
        toDelete = await GetAllTheConnectionsByTypeAndOfTheConcept(ofTheConceptId, linker, reverse);
    }

    if(reverse){
        for(let i=0; i<toDelete.length; i++){
            if(toDelete[i].ofTheConceptId == ofTheConceptId){
                filteredConnections.push(toDelete[i]);
            }
        }
    }
    else{
        for(let i=0; i<toDelete.length; i++){
            if(toDelete[i].toTheConceptId == toTheConceptId){
                filteredConnections.push(toDelete[i]);
            }
        }
    }
    return filteredConnections;
}