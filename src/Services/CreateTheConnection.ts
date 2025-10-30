/**
 * Connection Creation Service
 *
 * This module provides functionality for creating temporary connections between concepts
 * in the Concept Connection System. It handles basic connection creation with default
 * security and access settings.
 *
 * @module CreateTheConnection
 */

import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { genHexString } from "./GenerateHexNumber";

/**
 * Creates a temporary connection between two concepts with default settings.
 *
 * This function establishes a basic connection relationship between a source concept
 * (ofTheConcept) and a target concept (toTheConcept). The created connection is marked
 * as temporary (isTemp = true) and assigned a random ID. It automatically handles the
 * special case where a concept connects to itself by setting predefined IDs.
 *
 * The function uses default values for security (0), access level (4), and order (1),
 * making it suitable for quick connection creation during prototyping or when advanced
 * configuration is not required.
 *
 * @param ofTheConceptId - The ID of the source concept from which the connection originates
 * @param ofTheConceptUserId - The user ID who owns the source concept
 * @param toTheConceptId - The ID of the target concept to which the connection points
 * @param toTheConceptUserId - The user ID who owns the target concept
 * @param typeId - The ID of the concept that defines the type/nature of this connection
 * @param sessionInformationId - The ID of the session in which this connection is created
 * @param sessionInformationUserId - The user ID associated with the session information
 *
 * @returns A new Connection object that has been added to SyncData for synchronization
 *
 * @example
 * ```typescript
 * // Create a simple "likes" connection between user's concepts
 * const likesConcept = await GetConceptByCharacter("likes");
 * const connection = createTheConnection(
 *   userConcept.id,
 *   userConcept.userId,
 *   postConcept.id,
 *   postConcept.userId,
 *   likesConcept.id,
 *   999,
 *   999
 * );
 * console.log("Connection created:", connection.id);
 * ```
 *
 * @remarks
 * - The connection is marked as temporary (isTemp = true) and assigned a random ID
 * - Self-referencing connections (where ofTheConceptId equals toTheConceptId) are handled
 *   specially by setting ofTheConceptId to 0 and toTheConceptId to 1
 * - Default security level is set to 0 and access level to 4
 * - The connection is automatically added to SyncData for later synchronization
 * - For production use with reserved IDs and more control, consider using CreateTheConnectionGeneral
 *
 * @see {@link CreateTheConnectionGeneral} for creating connections with more configuration options
 * @see {@link Connection} for the connection data structure
 * @see {@link SyncData.AddConnection} for how connections are queued for sync
 */
export  function createTheConnection(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number, sessionInformationId: number, sessionInformationUserId: number
    ):Connection{  
        var orderId: number = 1;
        var orderUserId: number = ofTheConceptUserId;
        var typeUserId: number = ofTheConceptUserId;
        var userId : number = ofTheConceptUserId;
        var securityId: number = 0;
        var securityUserId: number = ofTheConceptUserId;
        var accessId : number = 4;
        var accessUserId: number = ofTheConceptUserId;
        var connection = new Connection(0,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
            typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        if(ofTheConceptId == toTheConceptId){
            connection.ofTheConceptId = 0;
            connection.toTheConceptId = 1;
            return connection;
        }
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        SyncData.AddConnection(connection);
        return connection;
        
      
}