/**
 * @fileoverview Local Concept data structure for the Concept Connection System.
 * This module defines the LConcept class which represents a local concept entity
 * with various identifiers, timestamps, and metadata properties.
 * @module DataStructures/Local/LConcept
 */

import { Concept } from "../Concept";

/**
 * Represents a Local Concept in the Concept Connection System.
 * A local concept is a data structure that stores concept information locally
 * before or instead of synchronizing with a remote server.
 *
 * @class LConcept
 * @export
 */
export  class LConcept{
    /**
     * Unique identifier for the concept.
     * @type {number}
     */
    id: number;
    /**
     * Ghost identifier for tracking purposes.
     * @type {number}
     */
    ghostId: number;
    /**
     * Identifier of the user who owns this concept.
     * @type {number}
     */
    userId: number;
    /**
     * Type identifier that classifies this concept.
     * @type {number}
     */
    typeId: number;
    /**
     * Category identifier for grouping concepts.
     * @type {number}
     */
    categoryId: number;
    /**
     * Access control identifier determining permissions.
     * @type {number}
     */
    accessId: number;
    /**
     * The character or text value representing this concept.
     * @type {string}
     */
    characterValue: string;
    /**
     * Character representation of the type.
     * @type {string}
     */
    typeCharacter: string;
    /**
     * Timestamp when this concept was created or entered.
     * @type {Date | string}
     */
    entryTimeStamp: Date|string;
    /**
     * Identifier for the referent data.
     * @type {number}
     */
    referentId: number;
    /**
     * Timestamp when this concept was last updated.
     * @type {Date | string}
     */
    updatedTimeStamp:Date|string;
    /**
     * Reference to the type concept (can be LConcept or Concept).
     * @type {LConcept | null | void | Concept}
     */
    type: LConcept | null | void | Concept;
    /**
     * Indicates whether this concept is newly created.
     * @type {boolean}
     */
    isNew: boolean;
    /**
     * Indicates whether this concept is a composition.
     * @type {boolean}
     * @default false
     */
    isComposition: boolean = false;
    /**
     * Indicates whether this concept is temporary.
     * @type {boolean}
     * @default false
     */
    isTemp: boolean = false;
    /**
     * Application identifier for multi-application support.
     * @type {number}
     * @default 999
     */
    applicationId: number = 999;

    /**
     * Creates a new LConcept instance.
     *
     * @constructor
     * @param {number} id - Unique identifier for the concept
     * @param {number} userId - Identifier of the user who owns this concept
     * @param {number} typeId - Type identifier that classifies this concept
     * @param {number} categoryId - Category identifier for grouping concepts
     * @param {number} accessId - Access control identifier
     * @param {string} characterValue - The character or text value of this concept
     * @param {string} typeCharacter - Character representation of the type
     * @param {boolean} [isNew=false] - Whether this concept is newly created
     * @param {Date | string} entryTimeStamp - Creation timestamp
     * @param {Date | string} updatedTimeStamp - Last update timestamp
     * @param {number} referentId - Identifier for the referent data
     * @param {number} [applicationId=999] - Application identifier
     */
    constructor(id: number, userId: number, typeId:number, categoryId:number,accessId: number, characterValue:string, typeCharacter:string,
         isNew:boolean=false, entryTimeStamp: Date|string, updatedTimeStamp:Date|string, referentId: number, applicationId: number = 999){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.characterValue = characterValue;
        this.accessId = accessId;
        this.type = null;
        this.isNew = isNew;
        this.typeCharacter = typeCharacter;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
        this.referentId = referentId;
        this.applicationId = applicationId;
       // ConceptsData.AddConcept(this);
    }

    /**
     * Logs the type identifier of this concept to the console.
     * Used primarily for debugging purposes.
     *
     * @method getType
     * @returns {void}
     */
    getType(){
        console.log(this.typeId);
    }

    









}