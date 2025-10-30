/**
 * Core data structure representing a Concept in the Freeschema system.
 * A Concept is the fundamental unit of knowledge/data with metadata for typing,
 * categorization, security, and relationships. Concepts can reference other concepts
 * through type, category, and referent relationships.
 *
 * @module DataStructures/Concept
 * @see https://documentation.freeschema.com/#concept for concept documentation
 */

import { ConceptsData } from "./ConceptData";

/**
 * Represents a concept with all its metadata and relationships.
 * A Concept is a typed, categorized piece of data with security controls,
 * timestamps, and the ability to reference other concepts.
 *
 * @class Concept
 *
 * @property id - Unique identifier for this concept
 * @property ghostId - Ghost identifier used for local/offline concepts before backend sync
 * @property userId - The ID of the user who owns/created this concept
 * @property typeId - The ID of the concept that defines this concept's type
 * @property typeUserId - The user ID of the type concept owner
 * @property categoryId - The ID of the concept that categorizes this concept
 * @property categoryUserId - The user ID of the category concept owner
 * @property referentId - The ID of the concept this concept refers to (0 if none)
 * @property referentUserId - The user ID of the referent concept owner
 * @property characterValue - The string/text content representing this concept's value
 * @property securityId - The ID of the security concept controlling access rules
 * @property securityUserId - The user ID of the security concept owner
 * @property accessId - The ID of the access concept defining permissions
 * @property accessUserId - The user ID of the access concept owner
 * @property sessionInformationId - The ID of the session concept for tracking
 * @property sessionInformationUserId - The user ID of the session concept owner
 * @property entryTimeStamp - Timestamp when this concept was created
 * @property updatedTimeStamp - Timestamp when this concept was last updated
 * @property referent - Reference to the actual Concept object this concept refers to (lazy loaded)
 * @property type - Reference to the actual Concept object defining this concept's type (lazy loaded)
 * @property isNew - Flag indicating if this concept is newly created and needs backend sync
 * @property updateRecursion - Flag enabling recursive updates through composition hierarchies
 * @property isTemp - Flag indicating if this is a temporary concept (not persisted to backend)
 * @property x - X coordinate for UI visualization/drawing
 * @property y - Y coordinate for UI visualization/drawing
 *
 * @example
 * ```typescript
 * // Create a concept representing a person
 * const person = new Concept(
 *   1001,              // id
 *   1,                 // userId
 *   20, 1,             // typeId (Person type), typeUserId
 *   10, 1,             // categoryId (People category), categoryUserId
 *   0, 0,              // referentId (no referent), referentUserId
 *   'John Doe',        // characterValue
 *   30, 1,             // securityId, securityUserId
 *   40, 1,             // accessId, accessUserId
 *   50, 1,             // sessionInformationId, sessionInformationUserId
 *   true,              // isNew
 *   new Date(),        // entryTimeStamp
 *   new Date()         // updatedTimeStamp
 * );
 *
 * console.log(person.characterValue);  // 'John Doe'
 * console.log(person.isNew);           // true
 * person.getType();                    // Logs the typeId
 * ```
 *
 * @remarks
 * The Concept class implements a flexible, self-describing data model where:
 * - Every concept has a type (which is itself a concept)
 * - Every concept belongs to a category (which is itself a concept)
 * - Concepts can refer to other concepts via the referent relationship
 * - Security and access control are handled through concept references
 * - All metadata is versioned with timestamps
 * - Concepts support both backend-synced and local-only (temporary) modes
 *
 * @see ConceptsData for the global concept storage and management
 * @see CreateTheConcept for creating new concepts
 * @see https://documentation.freeschema.com/#concept for detailed concept documentation
 */
export  class Concept{
    x: number;
    y: number;
    id: number;
    ghostId: number;    
    userId: number;
    typeId: number;
    typeUserId: number;
    categoryId: number;
    categoryUserId: number;
    referentId: number;
    referentUserId: number;
    characterValue: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionInformationId: number;
    sessionInformationUserId: number;
    entryTimeStamp: Date|string;
    updatedTimeStamp:Date|string;
    referent: Concept| null | void = null;
    type: Concept | null | void;
    isNew: boolean;
    updateRecursion: boolean = false;
    isTemp: boolean = false;


    /**
     * Creates a new Concept instance with all required metadata.
     *
     * @param id - Unique identifier for this concept
     * @param userId - The ID of the user who owns this concept
     * @param typeId - The ID of the type concept defining this concept's type
     * @param typeUserId - The user ID of the type concept owner
     * @param categoryId - The ID of the category concept this belongs to
     * @param categoryUserId - The user ID of the category concept owner
     * @param referentId - The ID of the referent concept (0 if none)
     * @param referentUserId - The user ID of the referent concept owner
     * @param characterValue - The string value representing this concept
     * @param securityId - The ID of the security concept for access control
     * @param securityUserId - The user ID of the security concept owner
     * @param accessId - The ID of the access concept defining permissions
     * @param accessUserId - The user ID of the access concept owner
     * @param sessionId - The ID of the session concept for tracking
     * @param sessionUserId - The user ID of the session concept owner
     * @param isNew - Whether this is a newly created concept needing sync (default: false)
     * @param entryTimeStamp - Creation timestamp
     * @param updatedTimeStamp - Last update timestamp
     */
    constructor(id: number, userId: number, typeId:number, typeUserId:number, categoryId:number, categoryUserId:number,
             referentId:number, referentUserId:number, characterValue:string,
            securityId:number, securityUserId:number, accessId:number, accessUserId:number, sessionId:number,
             sessionUserId:number, isNew:boolean=false, entryTimeStamp: Date|string, updatedTimeStamp:Date|string){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.typeUserId = typeUserId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = `${characterValue}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionInformationId = sessionId;
        this.sessionInformationUserId = sessionUserId;
        this.x = 0;
        this.y = 0;
        this.type = null;
        this.isNew = isNew;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
       // ConceptsData.AddConcept(this);
    }

    /**
     * Logs the typeId of this concept to the console.
     * This is a utility method for debugging and inspecting the concept's type.
     *
     * @example
     * ```typescript
     * const concept = new Concept(...);
     * concept.getType();  // Logs the typeId to console
     * ```
     */
    getType(){
        console.log(this.typeId);
    }

    









}