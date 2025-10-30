/**
 * @fileoverview Connection module for the Concept Connection System (CCS-JS).
 * This module defines the Connection class which represents relationships between concepts.
 * @module DataStructures/Connection
 */

import { CreateDefaultConcept, formatDate } from "../Services/CreateDefaultConcept";
import { Concept } from "./Concept";
import { ConnectionData } from "./ConnectionData";

/**
 * Represents a connection (relationship) between two concepts in the CCS system.
 * Connections link concepts together and define semantic relationships with type, order, security, and access control.
 *
 * @class Connection
 * @example
 * ```typescript
 * const connection = new Connection(
 *   0, // id
 *   123, // ofTheConceptId
 *   456, // toTheConceptId
 *   1, 1, // userIds
 *   1, // userId
 *   10, 1, // type
 *   0, 0, // order
 *   0, 0, // security
 *   0, 0, // access
 *   0, 0  // sessionInfo
 * );
 * ```
 */
export class Connection{
    /** Unique identifier for this connection */
    id: number;

    /** User ID of the connection owner */
    userId: number;

    /** Ghost ID for tracking temporary connections before persistence */
    ghostId: number;

    /** ID of the source concept in this connection */
    ofTheConceptId: number;

    /** ID of the target concept in this connection */
    toTheConceptId: number;

    /** User ID of the source concept owner */
    ofTheConceptUserId: number;

    /** User ID of the target concept owner */
    toTheConceptUserId: number;

    /** Timestamp when the connection was created */
    entryTimeStamp: Date|string;

    /** Termination date for the connection (if applicable) */
    terminationDateTime: Date;

    /** Type ID defining the semantic meaning of this connection */
    typeId: number;

    /** User ID of the type concept owner */
    typeUserId: number;

    /** Order ID for sorting connections */
    orderId: number;

    /** User ID of the order concept owner */
    orderUserId: number;

    /** Security concept ID controlling access permissions */
    securityId: number;

    /** User ID of the security concept owner */
    securityUserId: number;

    /** Access control concept ID */
    accessId: number;

    /** User ID of the access concept owner */
    accessUserId: number;

    /** Session information concept ID for tracking connection context */
    sessionInformationId: number;

    /** User ID of the session information concept owner */
    sessionInformationUserId: number;

    /** Local synchronization timestamp for offline support */
    localSyncTime: Date;

    /** Flag indicating if this is a temporary connection not yet persisted */
    isTemp:boolean = false;

    /** Flag indicating if this connection needs to be updated */
    toUpdate:boolean = false;

    /** The type concept object providing semantic meaning to this connection */
    type: Concept = CreateDefaultConcept();

    /**
     * Creates a new Connection instance.
     *
     * @param {number} [id=0] - Unique identifier for the connection
     * @param {number} ofTheConceptId - Source concept ID
     * @param {number} toTheConceptId - Target concept ID
     * @param {number} ofTheConceptUserId - User ID of source concept owner
     * @param {number} toTheConceptUserId - User ID of target concept owner
     * @param {number} userId - User ID of connection creator
     * @param {number} typeId - Connection type ID
     * @param {number} typeUserId - User ID of type concept owner
     * @param {number} orderId - Order concept ID for sorting
     * @param {number} orderUserId - User ID of order concept owner
     * @param {number} securityId - Security concept ID
     * @param {number} securityUserId - User ID of security concept owner
     * @param {number} accessId - Access control concept ID
     * @param {number} accessUserId - User ID of access concept owner
     * @param {number} sessionInformationId - Session information concept ID
     * @param {number} sessionInformationUserId - User ID of session information concept owner
     *
     * @example
     * ```typescript
     * const connection = new Connection(
     *   1, 100, 200, 1, 1, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0
     * );
     * ```
     */
    constructor(id: number = 0, ofTheConceptId: number, toTheConceptId: number, ofTheConceptUserId: number, toTheConceptUserId: number,
        userId: number, typeId: number, typeUserId: number, orderId: number, orderUserId: number, securityId: number, securityUserId: number,
        accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number){
            this.id = id;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.ofTheConceptUserId = ofTheConceptUserId;
            this.toTheConceptUserId = toTheConceptUserId;
            this.userId = userId;
            this.typeId = typeId;
            this.ghostId = id;
            this.typeUserId = typeUserId;
            this.orderId = orderId;
            this.orderUserId = orderUserId;
            this.securityId = securityId;
            this.securityUserId = securityUserId;
            this.accessId = accessId;
            this.accessUserId = accessUserId;
            this.sessionInformationId = sessionInformationId;
            this.sessionInformationUserId = sessionInformationUserId;
            this.entryTimeStamp = formatDate(new Date());
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
        }


}