/**
 * Concept creation service module.
 * Provides functions for creating concepts in different modes: normal, temporary, and immediate.
 *
 * @module Services/CreateTheConcept
 * @see https://documentation.freeschema.com/#concept for concept documentation
 */

import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";
import { InnerActions } from "../DataStructures/Transaction/Transaction";
import { ConceptsData } from "../app";

/**
 * Creates a new concept and adds it to the sync queue for backend synchronization.
 * This is the standard way to create a concept that will be persisted to the backend.
 * The concept is marked as new (isNew=true) and non-temporary (isTemp=false), and
 * added to both SyncData (for backend sync) and the transaction actions list.
 *
 * @param referent - The character/string value representing the concept's content
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The ID of the category concept this concept belongs to
 * @param categoryUserId - The user ID of the category concept owner
 * @param typeId - The ID of the type concept that defines this concept's type
 * @param typeUserId - The user ID of the type concept owner
 * @param referentId - The ID of the referent concept (what this concept refers to)
 * @param referentUserId - The user ID of the referent concept owner
 * @param securityId - The ID of the security concept controlling access
 * @param securityUserId - The user ID of the security concept owner
 * @param accessId - The ID of the access concept defining permissions
 * @param accessUserId - The user ID of the access concept owner
 * @param sessionInformationId - The ID of the session concept for tracking
 * @param sessionInformationUserId - The user ID of the session concept owner
 * @param actions - Transaction object to track all concepts and connections created in this operation
 * @returns A Promise that resolves to the newly created Concept instance
 *
 * @example
 * ```typescript
 * // Create a new concept with all required metadata
 * const concept = await CreateTheConcept(
 *   'John Doe',           // referent (the actual value)
 *   1,                    // userId
 *   10, 1,                // categoryId, categoryUserId
 *   20, 1,                // typeId, typeUserId (e.g., "Person" type)
 *   0, 0,                 // referentId, referentUserId (no referent)
 *   30, 1,                // securityId, securityUserId
 *   40, 1,                // accessId, accessUserId
 *   50, 1,                // sessionInformationId, sessionInformationUserId
 *   { concepts: [], connections: [] }  // transaction actions
 * );
 *
 * console.log(concept.id);  // Auto-generated unique ID
 * console.log(concept.isNew);  // true - will be synced to backend
 * console.log(concept.isTemp);  // false - permanent concept
 * ```
 *
 * @remarks
 * - Automatically generates a unique ID using ReservedIds.getId()
 * - Sets creation and update timestamps to current time
 * - Marks concept as new (isNew=true) for backend synchronization
 * - Marks concept as non-temporary (isTemp=false) for persistence
 * - Adds concept to SyncData queue for eventual backend sync
 * - Adds concept to transaction actions for tracking within a transaction context
 * - Does NOT immediately call the backend API; sync happens separately
 *
 * @see CreateTheConceptTemporary for creating temporary concepts
 * @see CreateTheConceptImmediate for creating concepts with immediate backend sync
 * @see Concept for the concept data structure
 * @see SyncData for sync queue management
 * @see ReservedIds for ID generation
 */
export default async function CreateTheConcept(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number, actions: InnerActions = {concepts: [], connections: []}){

var id = await ReservedIds.getId();
var isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
concept.isTemp = false;
SyncData.AddConcept(concept);
actions.concepts.push(concept);
return concept;

}

/**
 * Creates a temporary concept that is NOT added to the sync queue or persisted to backend.
 * Temporary concepts are useful for UI state management, draft operations, or transient data
 * that doesn't need to be saved. The concept is marked as temporary (isTemp=true) and new (isNew=true).
 *
 * @param referent - The character/string value representing the concept's content
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The ID of the category concept this concept belongs to
 * @param categoryUserId - The user ID of the category concept owner
 * @param typeId - The ID of the type concept that defines this concept's type
 * @param typeUserId - The user ID of the type concept owner
 * @param referentId - The ID of the referent concept (what this concept refers to)
 * @param referentUserId - The user ID of the referent concept owner
 * @param securityId - The ID of the security concept controlling access
 * @param securityUserId - The user ID of the security concept owner
 * @param accessId - The ID of the access concept defining permissions
 * @param accessUserId - The user ID of the access concept owner
 * @param sessionInformationId - The ID of the session concept for tracking
 * @param sessionInformationUserId - The user ID of the session concept owner
 * @returns A Promise that resolves to the newly created temporary Concept instance
 *
 * @example
 * ```typescript
 * // Create a temporary concept for UI draft state
 * const draftConcept = await CreateTheConceptTemporary(
 *   'Draft Note',         // referent
 *   1,                    // userId
 *   10, 1,                // categoryId, categoryUserId
 *   20, 1,                // typeId, typeUserId
 *   0, 0,                 // referentId, referentUserId
 *   30, 1,                // securityId, securityUserId
 *   40, 1,                // accessId, accessUserId
 *   50, 1                 // sessionInformationId, sessionInformationUserId
 * );
 *
 * console.log(draftConcept.isTemp);  // true - won't be synced
 * console.log(draftConcept.isNew);   // true - marked as new
 * // This concept will NOT be added to SyncData or saved to backend
 * ```
 *
 * @remarks
 * - Automatically generates a unique ID using ReservedIds.getId()
 * - Sets creation and update timestamps to current time
 * - Marks concept as new (isNew=true) but also temporary (isTemp=true)
 * - Does NOT add concept to SyncData (no backend sync)
 * - Does NOT add concept to transaction actions
 * - Useful for draft states, temporary UI elements, or client-only data
 * - The concept exists only in client memory until explicitly converted/saved
 *
 * @see CreateTheConcept for creating persistent concepts
 * @see CreateTheConceptImmediate for creating concepts with immediate backend sync
 * @see Concept for the concept data structure
 */
export  async function CreateTheConceptTemporary(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = true;
    let created_on:Date = new Date();
    let updated_on:Date = new Date();
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
    concept.isTemp = true;
    return concept;
    
}

/**
 * Creates a concept and immediately adds it to ConceptsData for instant availability in queries.
 * Unlike CreateTheConcept, this function adds the concept to the in-memory ConceptsData store
 * immediately (not just SyncData), making it instantly searchable. It also sets updateRecursion=true
 * to enable recursive updates. The concept is marked as not new (isNew=false) and non-temporary.
 *
 * @param referent - The character/string value representing the concept's content
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The ID of the category concept this concept belongs to
 * @param categoryUserId - The user ID of the category concept owner
 * @param typeId - The ID of the type concept that defines this concept's type
 * @param typeUserId - The user ID of the type concept owner
 * @param referentId - The ID of the referent concept (what this concept refers to)
 * @param referentUserId - The user ID of the referent concept owner
 * @param securityId - The ID of the security concept controlling access
 * @param securityUserId - The user ID of the security concept owner
 * @param accessId - The ID of the access concept defining permissions
 * @param accessUserId - The user ID of the access concept owner
 * @param sessionInformationId - The ID of the session concept for tracking
 * @param sessionInformationUserId - The user ID of the session concept owner
 * @param actions - Transaction object to track all concepts and connections created in this operation
 * @returns A Promise that resolves to the newly created Concept instance
 *
 * @example
 * ```typescript
 * // Create a concept that's immediately available for queries
 * const concept = await CreateTheConceptImmediate(
 *   'Important User',     // referent
 *   1,                    // userId
 *   10, 1,                // categoryId, categoryUserId
 *   20, 1,                // typeId, typeUserId
 *   0, 0,                 // referentId, referentUserId
 *   30, 1,                // securityId, securityUserId
 *   40, 1,                // accessId, accessUserId
 *   50, 1,                // sessionInformationId, sessionInformationUserId
 *   { concepts: [], connections: [] }  // transaction actions
 * );
 *
 * // Concept is immediately available in ConceptsData
 * const found = ConceptsData.getConceptById(concept.id);
 * console.log(found !== null);  // true - immediately findable
 * console.log(concept.isNew);   // false - treated as existing
 * console.log(concept.updateRecursion);  // true - enables recursive updates
 * ```
 *
 * @remarks
 * - Automatically generates a unique ID using ReservedIds.getId()
 * - Sets creation and update timestamps to current time
 * - Marks concept as NOT new (isNew=false) - treated as existing concept
 * - Marks concept as non-temporary (isTemp=false)
 * - Adds concept to ConceptsData immediately for instant query availability
 * - Sets updateRecursion=true to enable recursive composition updates
 * - Adds concept to SyncData for backend synchronization
 * - Adds concept to transaction actions for tracking
 * - The commented-out line suggests this previously triggered immediate API sync
 *
 * @see CreateTheConcept for standard concept creation with delayed sync
 * @see CreateTheConceptTemporary for creating temporary concepts
 * @see ConceptsData for the in-memory concept store
 * @see SyncData for sync queue management
 */
export  async function CreateTheConceptImmediate(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number, actions: InnerActions = {concepts: [], connections: []}){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = false;
    let created_on:Date = new Date();
let updated_on:Date = new Date();
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
    ConceptsData.AddConcept(concept);
    concept.updateRecursion = true;
    //CreateTheConceptApi([concept]);
    SyncData.AddConcept(concept);
    actions.concepts.push(concept);
    return concept;
    
}