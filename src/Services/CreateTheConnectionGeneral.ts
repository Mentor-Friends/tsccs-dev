/**
 * General Connection Creation Service
 *
 * This module provides advanced functionality for creating permanent connections between
 * concepts with reserved IDs and configurable settings. It supports transaction tracking
 * and is designed for production use where connections need to be persisted and updated.
 *
 * @module CreateTheConnectionGeneral
 */

import { Concept, MakeTheTypeConceptApi } from "../app";
import { Connection } from "../DataStructures/Connection";
import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";
import { InnerActions } from "../DataStructures/Transaction/Transaction";

/**
 * Creates a permanent connection between two concepts with reserved ID and full configuration.
 *
 * This is the production-ready version of connection creation that uses reserved IDs from
 * the system's ID reservation pool. Unlike the basic createTheConnection, this function
 * marks connections as non-temporary (isTemp = false) and sets them to update mode
 * (toUpdate = true), ensuring they persist properly in the database.
 *
 * The function provides extensive configurability including custom order, access levels,
 * and user assignment. It also supports transaction tracking by accepting an actions
 * object where created connections are logged.
 *
 * @param ofTheConceptId - The ID of the source concept from which the connection originates
 * @param ofTheConceptUserId - The user ID who owns the source concept
 * @param toTheConceptId - The ID of the target concept to which the connection points
 * @param toTheConceptUserId - The user ID who owns the target concept
 * @param typeId - The ID of the concept that defines the type/nature of this connection
 * @param sessionInformationId - The ID of the session in which this connection is created
 * @param sessionInformationUserId - The user ID associated with the session information
 * @param orderId - Optional ordering value for the connection (default: 1)
 * @param accessId - Optional access level for the connection (default: 4)
 * @param passedUserId - Optional specific user ID to assign to the connection (default: 999, uses ofTheConceptUserId if not provided)
 * @param actions - Optional transaction tracking object to log created connections (default: empty actions)
 *
 * @returns A promise that resolves to the created Connection object with a reserved ID
 *
 * @example
 * ```typescript
 * // Create a production connection with transaction tracking
 * const actions: InnerActions = { concepts: [], connections: [] };
 * const connection = await CreateTheConnectionGeneral(
 *   authorConcept.id,
 *   authorConcept.userId,
 *   bookConcept.id,
 *   bookConcept.userId,
 *   wroteTypeConcept.id,
 *   999,
 *   999,
 *   1,
 *   4,
 *   authorConcept.userId,
 *   actions
 * );
 * console.log("Connection ID:", connection.id);
 * console.log("Tracked connections:", actions.connections.length);
 * ```
 *
 * @remarks
 * - Uses reserved IDs from ReservedConnectionIds for guaranteed uniqueness
 * - Connection is marked as non-temporary (isTemp = false) for persistence
 * - Sets toUpdate = true to ensure database synchronization
 * - Self-referencing connections are handled by setting ofTheConceptId to 0 and toTheConceptId to 1
 * - The connection is added to both SyncData and the provided actions object
 * - If passedUserId is 999, the function defaults to using ofTheConceptUserId
 *
 * @see {@link createTheConnection} for creating temporary connections
 * @see {@link CreateConnection} for a simplified high-level connection API
 * @see {@link ReservedConnectionIds.getId} for ID reservation mechanism
 */
export async  function CreateTheConnectionGeneral(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number,  sessionInformationId: number, sessionInformationUserId: number, orderId: number = 1, accessId = 4, passedUserId:number = 999, actions: InnerActions = {concepts: [], connections: []}
    ){  
        let orderUserId: number = ofTheConceptUserId;
        let typeUserId: number = ofTheConceptUserId;
        let userId : number = ofTheConceptUserId;

        if(passedUserId != 999){
            userId = passedUserId;
        }
        let securityId: number = 0;
        let securityUserId: number = ofTheConceptUserId;
        let accessUserId: number = ofTheConceptUserId;
        let id = await ReservedConnectionIds.getId();
        let connection = new Connection(id,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
            typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        if(ofTheConceptId == toTheConceptId){
            connection.ofTheConceptId = 0;
            connection.toTheConceptId = 1;
            return connection;
        }
        // this will cause the connection to go and update the existing with the reserved id
        connection.toUpdate = true;
        connection.isTemp = false;
        SyncData.AddConnection(connection);
        actions.connections.push(connection);
        return connection;
        
      
}

/**
 * Creates a connection between two concepts using a type string identifier.
 *
 * This is a high-level convenience function that simplifies connection creation by
 * accepting concept objects directly and a string for the connection type. It automatically
 * handles the creation or retrieval of the connection type concept and delegates to
 * CreateTheConnectionGeneral for the actual connection creation.
 *
 * This function is ideal for application-level code where you want to create connections
 * using semantic type names (like "contains", "authored", "belongs_to") rather than
 * managing type concept IDs manually.
 *
 * @param ofTheConcept - The source Concept object from which the connection originates
 * @param toTheConcept - The target Concept object to which the connection points
 * @param connectionTypeString - A string describing the connection type (e.g., "contains", "references")
 * @param actions - Optional transaction tracking object to log created connections (default: empty actions)
 *
 * @returns A promise that resolves to the created Connection object
 *
 * @example
 * ```typescript
 * // Create a "contains" connection between a folder and a file
 * const folderConcept = await GetTheConcept(123);
 * const fileConcept = await GetTheConcept(456);
 * const actions: InnerActions = { concepts: [], connections: [] };
 *
 * const connection = await CreateConnection(
 *   folderConcept,
 *   fileConcept,
 *   "contains",
 *   actions
 * );
 *
 * console.log(`Created ${connectionTypeString} connection:`, connection.id);
 * ```
 *
 * @example
 * ```typescript
 * // Create an "authored" connection between author and book
 * const authorConcept = await GetTheConcept(789);
 * const bookConcept = await GetTheConcept(101);
 *
 * const connection = await CreateConnection(
 *   authorConcept,
 *   bookConcept,
 *   "authored"
 * );
 * ```
 *
 * @remarks
 * - Automatically creates or retrieves a type concept for the connectionTypeString
 * - Uses default session information ID (999) and order (1000)
 * - Access level is set to 4 (standard access)
 * - The userId from ofTheConcept is used for the connection
 * - The connection is tracked in the provided actions object for transaction management
 *
 * @see {@link CreateTheConnectionGeneral} for the underlying connection creation logic
 * @see {@link MakeTheTypeConceptApi} for how type concepts are created/retrieved
 */
export async function CreateConnection(ofTheConcept:Concept, toTheConcept:Concept, connectionTypeString: string,actions: InnerActions = {concepts: [], connections: []} ){
    let typeConcept = await MakeTheTypeConceptApi(connectionTypeString, 999);
    let userId : number = ofTheConcept.userId;
    return await CreateTheConnectionGeneral(ofTheConcept.id, ofTheConcept.userId, toTheConcept.id, toTheConcept.userId, typeConcept.id, 999,999, 1000, 4, userId, actions);
}