/**
 * @module GetAllConnectionByType
 * @description Provides functions to retrieve connections filtered by type and direction
 */

import { GetAllLinkerConnectionsFromTheConcept } from "../../Api/GetAllLinkerConnectionsFromTheConcept";
import { GetAllLinkerConnectionsToTheConcept } from "../../Api/GetAllLinkerConnectionsToTheConcept";
import { Connection, ConnectionData, GetConceptByCharacter, MakeTheTypeConceptApi } from "../../app";

/**
 * Retrieves all connections of a specific type from or to a concept.
 * Supports both forward (from concept) and reverse (to concept) direction.
 *
 * @async
 * @param {number} id - The concept ID to query connections for
 * @param {string} linker - The connection type name to filter by
 * @param {boolean} [reverse=false] - If true, returns connections TO the concept; if false, returns connections FROM the concept
 * @returns {Promise<Connection[]>} A promise that resolves to array of matching Connection objects
 *
 * @example
 * ```typescript
 * // Get all "follows" connections FROM concept 123
 * const followsFrom = await GetAllTheConnectionsByTypeAndOfTheConcept(123, "follows", false);
 *
 * // Get all "follows" connections TO concept 123 (reverse)
 * const followsTo = await GetAllTheConnectionsByTypeAndOfTheConcept(123, "follows", true);
 * ```
 *
 * @remarks
 * This function:
 * - Forward direction (reverse=false): Returns connections where concept is ofTheConceptId
 * - Reverse direction (reverse=true): Returns connections where concept is toTheConceptId
 * - Creates or retrieves the linker concept by type name
 * - Filters connections by matching typeId
 * - Caches forward connections in ConnectionData
 * - Returns empty array if no matching connections found
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
 * Retrieves specific connections between two concepts with a given linker type.
 * Filters connections to match both the source, destination, and type.
 *
 * @async
 * @param {number} ofTheConceptId - The source concept ID
 * @param {number} toTheConceptId - The destination concept ID
 * @param {string} linker - The connection type name
 * @param {boolean} [reverse=false] - If true, swaps the direction (queries from toTheConceptId)
 * @returns {Promise<Connection[]>} A promise that resolves to array of matching connections
 *
 * @example
 * ```typescript
 * // Find all "follows" connections from concept 123 to concept 456
 * const connections = await GiveConnection(123, 456, "follows", false);
 *
 * // Find all "follows" connections from 456 to 123 (reverse direction)
 * const reverseConnections = await GiveConnection(123, 456, "follows", true);
 * ```
 *
 * @remarks
 * This function:
 * - First uses GetAllTheConnectionsByTypeAndOfTheConcept to get typed connections
 * - Then filters by the destination concept ID
 * - Forward (reverse=false): Returns connections from ofTheConceptId to toTheConceptId
 * - Reverse (reverse=true): Returns connections from toTheConceptId to ofTheConceptId
 * - Useful for finding specific connection instances between two concepts
 * - Returns empty array if no matching connections exist
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