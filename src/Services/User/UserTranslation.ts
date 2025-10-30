/**
 * @module UserTranslation
 * @description Provides functions to translate between ghost IDs and real IDs for user-specific concepts and connections
 */

import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { LConcept } from './../../DataStructures/Local/LConcept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';
import { LConnection } from '../../app';

/**
 * Retrieves a local concept (LConcept) by its ghost ID for a specific user.
 * Ghost IDs are temporary IDs used before concepts are persisted.
 *
 * @async
 * @param {number} userId - The user ID who owns the concept
 * @param {number} ghostId - The temporary ghost ID of the concept
 * @param {number} [sessionId=999] - The session ID (defaults to 999)
 * @param {number} [randomizer=999] - Additional randomizer for tree lookup (defaults to 999)
 * @returns {Promise<LConcept>} A promise that resolves to the LConcept, or default empty concept if not found
 *
 * @example
 * ```typescript
 * const userId = 1;
 * const ghostId = 12345;
 * const concept = await GetUserGhostId(userId, ghostId);
 * if (concept.id !== 0) {
 *   console.log("Found concept with real ID:", concept.id);
 * }
 * ```
 *
 * @remarks
 * - Searches the UserBinaryTree for the user's concepts
 * - Returns default empty LConcept if user or concept not found
 * - Used during concept creation before IDs are assigned
 * - Ghost IDs are temporary until persisted to backend
 */
export async function GetUserGhostId(userId:number,  ghostId:number, sessionId:number = 999, randomizer: number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId, randomizer);
    let realConcept: LConcept = CreateDefaultLConcept();
    if(userNode){
        for(let i=0 ; i<userNode.value.length; i++ ){
            let testConcept: LConcept = userNode.value[i];
            if(testConcept.ghostId == ghostId){
                realConcept = testConcept;

            }
        }
    }
    return realConcept;
}

/**
 * Retrieves a local connection (LConnection) by its ghost ID for a specific user.
 * Ghost IDs are temporary IDs used before connections are persisted.
 *
 * @async
 * @param {number} userId - The user ID who owns the connection
 * @param {number} ghostId - The temporary ghost ID of the connection
 * @param {number} [sessionId=999] - The session ID (defaults to 999)
 * @param {number} [randomizer=999] - Additional randomizer for tree lookup (defaults to 999)
 * @returns {Promise<LConnection>} A promise that resolves to the LConnection, or default empty connection if not found
 *
 * @example
 * ```typescript
 * const userId = 1;
 * const connectionGhostId = 67890;
 * const connection = await GetUserGhostConnectionId(userId, connectionGhostId);
 * if (connection.id !== 0) {
 *   console.log("Found connection with real ID:", connection.id);
 * }
 * ```
 *
 * @remarks
 * - Similar to GetUserGhostId but for connections instead of concepts
 * - Searches UserBinaryTree's connection values
 * - Returns default empty LConnection if not found
 * - Used during connection creation before IDs are assigned
 */
export async function GetUserGhostConnectionId(userId:number,  ghostId:number, sessionId:number = 999, randomizer: number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId, randomizer);
    let realConnection: LConnection = new LConnection(0,0,0,0,0,0);
    if(userNode){
        for(let i=0 ; i<userNode.connectionValue.length; i++ ){
            let testConnection: LConnection = userNode.connectionValue[i];
            if(testConnection.ghostId == ghostId){
                realConnection = testConnection;

            }
        }
    }
    return realConnection;
}

/**
 * Adds a ghost concept to the UserBinaryTree for temporary storage.
 * Stores concepts with ghost IDs before they are persisted.
 *
 * @async
 * @param {LConcept} concept - The local concept to add
 * @param {number} userId - The user ID who owns the concept
 * @param {number} [sessionId=999] - The session ID (defaults to 999)
 *
 * @example
 * ```typescript
 * const ghostConcept: LConcept = {
 *   ghostId: 12345,
 *   characterValue: "Test",
 *   ...
 * };
 * await AddGhostConcept(ghostConcept, 1, 999);
 * ```
 *
 * @remarks
 * - Stores concept in UserBinaryTree indexed by userId and sessionId
 * - Used for optimistic UI updates before backend persistence
 * - No return value (void function)
 */
export async function AddGhostConcept(concept: LConcept, userId: number, sessionId: number = 999){
    UserBinaryTree.addConceptToTree(concept,userId, sessionId);
}

/**
 * Adds a ghost connection to the UserBinaryTree for temporary storage.
 * Stores connections with ghost IDs before they are persisted.
 *
 * @async
 * @param {LConnection} connection - The local connection to add
 * @param {number} userId - The user ID who owns the connection
 * @param {number} [sessionId=999] - The session ID (defaults to 999)
 *
 * @example
 * ```typescript
 * const ghostConnection: LConnection = new LConnection(0, 12345, 123, 456, 999, 999);
 * await AddGhostConnection(ghostConnection, 1, 999);
 * ```
 *
 * @remarks
 * - Stores connection in UserBinaryTree indexed by userId and sessionId
 * - Used for optimistic UI updates before backend persistence
 * - No return value (void function)
 */
export async function AddGhostConnection(connection: LConnection, userId: number, sessionId: number = 999){
    UserBinaryTree.addConnectionToTree(connection,userId, sessionId);
}