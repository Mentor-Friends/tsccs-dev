/**
 * Local Connection Creation Module
 *
 * This module provides functionality to create connections between concepts in the local
 * storage layer. Connections represent relationships between concepts, forming the graph
 * structure of the Concept Connection System.
 *
 * @module CreateTheConnectionLocal
 */

import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/NoIndexDb";

/**
 * Creates a connection between two concepts in the local storage layer.
 *
 * This function establishes a directed relationship from one concept to another,
 * storing it in both memory and IndexedDB. The connection is marked as temporary
 * until synchronized with the backend server.
 *
 * The function includes validation to prevent self-referential connections
 * (a concept connecting to itself), returning an empty connection object in such cases.
 *
 * @param ofTheConceptId - The ID of the source concept (from which the connection originates)
 * @param toTheConceptId - The ID of the target concept (to which the connection points)
 * @param typeId - The ID of the type concept defining the relationship type
 * @param orderId - The order/sequence number for this connection (defaults to 1)
 *
 * @returns The newly created LConnection instance, or an empty connection if validation fails
 *
 * @remarks
 * - Automatically assigns accessId of 4 (default access level)
 * - Generates a random temporary ID between 0 and 100,000,000
 * - Sets `isTemp` flag to true for synchronization tracking
 * - Prevents self-referential connections (where ofTheConceptId === toTheConceptId)
 * - Stores the connection in both memory (LocalConnectionData) and IndexedDB
 *
 * @example
 * ```typescript
 * // Create a connection from concept 100 to concept 200 with type 51
 * const connection = CreateTheConnectionLocal(
 *   100,   // ofTheConceptId (source)
 *   200,   // toTheConceptId (target)
 *   51,    // typeId (relationship type)
 *   1      // orderId (optional, defaults to 1)
 * );
 *
 * console.log(connection.id); // Random ID like 78234561
 * console.log(connection.isTemp); // true
 *
 * // This will return an empty connection (0,0,0,0,0,0)
 * const selfConnection = CreateTheConnectionLocal(100, 100, 51);
 * console.log(selfConnection.id); // 0
 * ```
 *
 * @see {@link LConnection} - The local connection data structure
 * @see {@link LocalConnectionData.AddConnection} - Adds connection to in-memory storage
 * @see {@link storeToDatabase} - Persists connection to IndexedDB
 * @see {@link CreateTheConceptLocal} - Related function for creating concepts
 */
export  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number,
     typeId: number,orderId:number = 1,
    ){
        var accessId : number = 4;
        let randomid = Math.floor(Math.random() * 100000000);
        let realOfTheConceptId = 0;
        let realToTheConceptId = 0;
        let realTypeId = 0;
        realOfTheConceptId = ofTheConceptId;
        realToTheConceptId = toTheConceptId;
        realTypeId = typeId;
        let connection = new LConnection(0,0,0,0,0,0);
        if(ofTheConceptId != toTheConceptId){
             connection = new LConnection(0, ofTheConceptId, toTheConceptId, typeId, orderId, accessId);
            connection.isTemp = true;
            connection.id = Math.floor(Math.random() * 100000000);
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
        }
        return connection;


}