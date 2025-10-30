import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { Connection } from "../../app";

/**
 * Retrieves all connections originating from a specific concept with a given type.
 *
 * Searches local storage (IndexedDB) for connections where:
 * - ofTheConceptId matches the provided concept ID
 * - typeId matches the provided type
 *
 * @param ofTheConcept - The source concept ID (connections originating from this concept)
 * @param typeId - The connection type ID to filter by
 * @param userId - User ID (currently not used in filtering)
 * @returns Array of Connection objects matching the criteria (empty array if none found)
 * @throws Error if local storage query fails
 *
 * @example
 * // Get all "has_property" connections from a person concept
 * const connections = await GetConnectionOfTheConceptLocal(personId, 42, userId);
 */
export async function GetConnectionOfTheConceptLocal(ofTheConcept: number, typeId: number, userId: number){
    try{
        let connections: Connection[] = await LocalConnectionData.GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConcept);
        return connections;
    }
    catch(error){
        throw error;
    }

}