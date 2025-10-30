import { Concept, GetCompositionLocal, GetConceptByCharacterAndCategoryLocal,  Connection, MakeTheTypeConceptApi, MakeTheTypeConceptLocal, serviceWorker, sendMessage, handleServiceWorkerException } from "../../app";
import { GetConnectionOfTheConceptLocal } from "./GetConnectionOfTheConceptLocal";

/**
 * Retrieves all related compositions from local storage by relation name.
 *
 * **Process Flow (Complex Logic)**:
 * 1. Converts relation string to type concept (e.g., "the_email" → type concept)
 * 2. Finds all connections from source concept with that relation type
 * 3. For each connection, retrieves the target composition
 * 4. Returns array of all related compositions
 *
 * @param id - The source concept ID to get relations from
 * @param relation - The relation name (e.g., "the_email", "the_address")
 * @param userId - User ID for permissions
 * @returns Array of composition objects representing related entities
 * @throws Error if relation lookup or composition retrieval fails
 *
 * @example
 * // Get all email addresses related to a person
 * const emails = await GetRelationLocal(personId, "the_email", userId);
 * // Returns: [emailComposition1, emailComposition2, ...]
 */
export async function GetRelationLocal(id: number, relation:string, userId: number){
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage("GetRelationLocal", {
                    id, relation, userId
                });
                return res.data;
            } catch (error) {
                console.error("GetRelationLocal error sw: ", error);
                handleServiceWorkerException(error);
            }
        }
        let typeConcept:Concept =  await GetConceptByCharacterAndCategoryLocal(relation);
        let localConnections: Connection[] = []
        if(typeConcept.id != 0){
            localConnections = await GetConnectionOfTheConceptLocal(id, typeConcept.id, userId);
        }
        let output: any = []
        for(let i=0 ; i< localConnections.length; i++){
            let comp = await GetCompositionLocal(localConnections[i].toTheConceptId);
            output.push(comp);
        }

        return output;
    }
    catch(error){
        throw error;
    }

}