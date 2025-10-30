/**
 * @module DeleteConnectionByType
 * @description Provides functions to delete and retrieve connections by their type
 */

import { GetAllLinkerConnectionsFromTheConcept } from "../../Api/GetAllLinkerConnectionsFromTheConcept";
import { DeleteConnectionById, GetConceptByTypeBulk } from "../../app";

/**
 * Deletes all connections of specified types from a concept.
 * Finds connections matching the given linker types and deletes them.
 *
 * @async
 * @param {number} id - The concept ID whose connections should be deleted
 * @param {string[]} linkers - Array of connection type names to delete
 * @returns {Promise<boolean>} A promise that resolves to true if all deletions successful, false otherwise
 *
 * @example
 * ```typescript
 * const conceptId = 123;
 * const linkersToDelete = ["follows", "likes", "shares"];
 * const success = await DeleteConnectionByTypeBulk(conceptId, linkersToDelete);
 * if (success) {
 *   console.log("All connections deleted successfully");
 * }
 * ```
 *
 * @remarks
 * This function:
 * - Fetches all linker connections from the concept
 * - Gets concept objects for the specified linker type names
 * - Matches connections by typeId with linker concept IDs
 * - Deletes each matching connection
 * - Returns false if any deletion fails
 * - Uses bulk operations for efficiency
 */
export async function DeleteConnectionByTypeBulk(id: number, linkers: string[]){
    let isDeleted: boolean = true;
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    let typeConceptList = await GetConceptByTypeBulk(linkers);
    let toDelete: number[] = [];
    for(let i=0; i<externalConnections.length; i++){
        for(let j=0; j<typeConceptList.length; j++){
            if(externalConnections[i].typeId == typeConceptList[j].id){
                toDelete.push(externalConnections[i].id);
            }
        }

    }

    for(let i=0; i<toDelete.length; i++){
      let deleted =   await DeleteConnectionById(toDelete[i]);
      isDeleted = isDeleted && deleted;
    }

    return isDeleted;

}


/**
 * Retrieves all connection IDs of specified types from a concept without deleting them.
 * Useful for querying which connections exist before performing operations.
 *
 * @async
 * @param {number} id - The concept ID whose connections should be retrieved
 * @param {string[]} linkers - Array of connection type names to find
 * @returns {Promise<number[]>} A promise that resolves to array of matching connection IDs
 *
 * @example
 * ```typescript
 * const conceptId = 123;
 * const linkersToFind = ["follows", "likes"];
 * const connectionIds = await GetConnectionByTypeBulk(conceptId, linkersToFind);
 * // connectionIds = [101, 102, 103, 104]
 * console.log(`Found ${connectionIds.length} connections`);
 * ```
 *
 * @remarks
 * This function:
 * - Similar to DeleteConnectionByTypeBulk but only retrieves IDs
 * - Does not modify any data
 * - Returns empty array if no matching connections found
 * - Useful for counting or inspecting connections before deletion
 * - Can be used to check connection existence
 */
export async function GetConnectionByTypeBulk(id: number, linkers:string[]){
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    let typeConceptList = await GetConceptByTypeBulk(linkers);
    let toDelete: number[] = [];
    for(let i=0; i<externalConnections.length; i++){
        for(let j=0; j<typeConceptList.length; j++){
            if(externalConnections[i].typeId == typeConceptList[j].id){
                toDelete.push(externalConnections[i].id);
            }
        }

    }
    return toDelete;

}
