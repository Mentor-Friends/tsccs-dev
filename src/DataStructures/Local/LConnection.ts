/**
 * @fileoverview Local Connection data structure for the Concept Connection System.
 * This module defines the LConnection class which represents a connection between
 * concepts in the local storage system.
 * @module DataStructures/Local/LConnection
 */

import { formatDate } from "../../Services/CreateDefaultConcept";
import { CreateDefaultLConcept } from "../../Services/Local/CreateDefaultLConcept";
import { Concept } from "../Concept";
import { LConcept } from "./LConcept";

/**
 * Represents a Local Connection between concepts in the Concept Connection System.
 * A local connection links two concepts and stores metadata about that relationship.
 *
 * @class LConnection
 * @export
 */
export class LConnection{
    /**
     * Unique identifier for the connection.
     * @type {number}
     */
    id: number;
    /**
     * Ghost identifier for tracking purposes.
     * @type {number}
     */
    ghostId: number;
    /**
     * Identifier of the source concept (from concept).
     * @type {number}
     */
    ofTheConceptId: number;
    /**
     * Identifier of the target concept (to concept).
     * @type {number}
     */
    toTheConceptId: number;
    /**
     * Timestamp when this connection was created or entered.
     * @type {Date | string}
     */
    entryTimeStamp: Date|string;
    /**
     * Date and time when this connection is terminated or expires.
     * @type {Date}
     */
    terminationDateTime: Date;
    /**
     * Access control identifier determining permissions.
     * @type {number}
     */
    accessId: number;
    /**
     * Type identifier that classifies this connection.
     * @type {number}
     */
    typeId: number;
    /**
     * Order identifier for sequencing connections.
     * @type {number}
     */
    orderId: number;
    /**
     * Character representation of the connection type.
     * @type {string}
     */
    typeCharacter: string;
    /**
     * Timestamp of the last local synchronization.
     * @type {Date}
     */
    localSyncTime: Date;
    /**
     * Indicates whether this connection is temporary.
     * @type {boolean}
     * @default false
     */
    isTemp:boolean = false;
    /**
     * Application identifier for multi-application support.
     * @type {number}
     * @default 999
     */
    applicationId: number = 999;
    /**
     * Reference to the type concept for this connection.
     * @type {LConcept}
     */
    type: LConcept = CreateDefaultLConcept();

    /**
     * Creates a new LConnection instance.
     *
     * @constructor
     * @param {number} [id=0] - Unique identifier for the connection
     * @param {number} ofTheConceptId - Identifier of the source concept
     * @param {number} toTheConceptId - Identifier of the target concept
     * @param {number} typeId - Type identifier that classifies this connection
     * @param {number} orderId - Order identifier for sequencing
     * @param {number} accessId - Access control identifier
     * @param {number} [applicationId=999] - Application identifier
     */
    constructor(id: number = 0, ofTheConceptId: number, toTheConceptId: number,
         typeId: number, orderId: number,
        accessId: number, applicationId: number = 999){
            this.id = id;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.typeId = typeId;
            this.ghostId = id;
            this.orderId = orderId;
            this.typeCharacter = "";
            this.accessId = accessId;
            this.entryTimeStamp = formatDate(new Date());
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
            this.applicationId = applicationId;
        }


}