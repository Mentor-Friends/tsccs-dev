import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { HandleInternalError } from "./Common/ErrorPosting";


/**
 * Creates a connection (relationship) between two concepts and adds it to the sync queue.
 *
 * This is the primary function for establishing relationships in the knowledge graph.
 * Connections are directed edges that link two concepts together, representing relationships
 * like "works at", "belongs to", "authored by", etc.
 *
 * **Connection Structure:**
 * - FROM concept (ofTheConceptId) → TO concept (toTheConceptId)
 * - The relationship is directional
 * - Type ID classifies what kind of relationship it is
 * - Order ID allows sorting when multiple connections of the same type exist
 *
 * **Important Behaviors:**
 * - Connections are marked as temporary (isTemp = true) for internal compositions
 * - Added to SyncData queue for backend synchronization
 * - Assigned a random temporary ID until persisted
 * - Self-connections (same from/to) are prevented (returns invalid connection)
 * - Default access level is 4 (typically means "admin" or "restricted")
 *
 * @param ofTheConceptId - The source concept ID (start of the relationship).
 *                        This is where the connection originates FROM.
 * @param userId - The ID of the user creating this connection. Used for ownership and permissions.
 * @param toTheConceptId - The target concept ID (end of the relationship).
 *                        This is where the connection points TO.
 * @param typeId - The type classification for this connection. Defines the nature of the relationship.
 *                (e.g., 5="works_at", 6="manages", 7="member_of")
 *
 * @returns The created Connection object with all properties set, including a temporary ID
 *
 * @example
 * // Create a "works at" relationship
 * const connection = createTheConnection(
 *   aliceId,      // Alice (person)
 *   101,          // user creating this
 *   companyId,    // Tech Corp (organization)
 *   5             // "works at" connection type
 * );
 * // Result: Alice → works_at → Tech Corp
 *
 * @example
 * // Create a hierarchical relationship
 * const managerConnection = createTheConnection(
 *   managerId,    // Manager concept
 *   101,          // user
 *   employeeId,   // Employee concept
 *   6             // "manages" connection type
 * );
 * // Result: Manager → manages → Employee
 *
 * @example
 * // Attempting self-connection (will return invalid connection)
 * const selfConn = createTheConnection(123, 101, 123, 5);
 * console.log(selfConn.ofTheConceptId); // 0 (invalid)
 * console.log(selfConn.toTheConceptId); // 1 (invalid)
 *
 * @throws Errors are caught and logged via HandleInternalError but don't prevent return
 *
 * @see {@link CreateTheConnectionGeneral} for alternative connection creation
 * @see {@link CreateTheConnectionApi} for direct backend API connection creation
 */
export  function createTheConnection(ofTheConceptId:number, userId:number, toTheConceptId:number,
     typeId: number
    ):Connection{  
            var orderId: number = 1;
            var localUserId : number = userId;
            var accessId : number = 4;
            var connection = new Connection(0,ofTheConceptId,toTheConceptId,localUserId,typeId, orderId, accessId);
            if(ofTheConceptId == toTheConceptId){
                connection.ofTheConceptId = 0;
                connection.toTheConceptId = 1;
                return connection;
            }
        try{

            connection.isTemp = true;
            connection.id = Math.floor(Math.random() * 100000000);
            SyncData.AddConnection(connection);
        }
        catch(error){
            HandleInternalError(error);
        }
        return connection;

        
      
}