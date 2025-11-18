import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";
import { ConceptsData } from "../app";

/**
 * Creates a new concept and adds it to the sync queue for backend synchronization.
 *
 * This is the primary function for creating concepts in the system. The concept is:
 * - Assigned a unique ID from the reserved ID pool
 * - Marked as non-temporary (persisted)
 * - Added to the SyncData queue for automatic backend synchronization
 * - Cached locally in IndexedDB for offline access
 *
 * @param {string} referent - The character value (text/name) of the concept. This is the human-readable
 *                           representation of the concept (e.g., "John Doe", "Project Alpha")
 * @param {number} userId - The ID of the user creating this concept. Used for ownership and access control.
 * @param {number} categoryId - The category classification ID. Used for further classification within a type
 *                             (e.g., for TYPE_PERSON: 1=Employee, 2=Contractor, 3=Customer)
 * @param {number} typeId - The type classification ID. Defines what kind of concept this is
 *                         (e.g., 1=Person, 2=Organization, 3=Document)
 * @param {number} referentId - Optional reference to another concept ID. Used for creating instances
 *                             that reference a type concept. Can be 0 or null if not applicable.
 * @param {number} accessId - Access control level for the concept. Determines who can view/edit
 *                           (e.g., 1=Public, 2=Private, 3=Shared, 4=Admin)
 * @param {string} typeCharacter - The string representation of the type name (e.g., "Person", "Document").
 *                                Used for display and filtering purposes.
 *
 * @returns {Promise<Concept>} A promise that resolves to the newly created Concept object with all properties set.
 *
 * @example
 * // Create a person concept
 * const person = await CreateTheConcept(
 *   "Alice Smith",  // name
 *   101,           // userId
 *   1,             // categoryId (Employee)
 *   1,             // typeId (Person)
 *   0,             // referentId (none)
 *   2,             // accessId (Private)
 *   "Person"       // typeCharacter
 * );
 * console.log(person.id); // 12345
 *
 * @see {@link CreateTheConceptTemporary} for creating non-persisted temporary concepts
 * @see {@link CreateTheConceptImmediate} for creating concepts with immediate backend sync
 */
export default async function CreateTheConcept(referent:string, userId:number, categoryId:number,
typeId:number,referentId:number,
accessId:number, typeCharacter:string){

let id = await ReservedIds.getId();
let isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
// let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    // securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);

    concept.isTemp = false;
SyncData.AddConcept(concept);
return concept;

}

/**
 * Creates a temporary concept that is NOT persisted to the database or synced to the backend.
 *
 * Use this function when you need a transient concept that exists only in memory during the
 * current session. Temporary concepts are useful for:
 * - UI state management
 * - Draft content before finalization
 * - Calculations or intermediate results
 * - Testing without affecting the database
 *
 * Temporary concepts are marked with `isTemp = true` and will not be saved when the application
 * closes or refreshes. They are NOT added to the SyncData queue.
 *
 * @param referent - The character value (text/name) of the concept
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The category classification ID
 * @param typeId - The type classification ID
 * @param referentId - Optional reference to another concept ID
 * @param accessId - Access control level for the concept
 * @param typeCharacter - The string representation of the type name
 *
 * @returns Promise resolving to the temporary Concept object
 *
 * @example
 * // Create a temporary draft note
 * const draftNote = await CreateTheConceptTemporary(
 *   "Draft: Meeting Notes",
 *   101,
 *   1,
 *   3,  // Document type
 *   0,
 *   2,
 *   "Document"
 * );
 * console.log(draftNote.isTemp); // true
 *
 * @see {@link CreateTheConcept} for creating persistent concepts
 */
export  async function CreateTheConceptTemporary(referent:string, userId:number, categoryId:number,
    typeId:number, referentId:number,
    accessId:number, typeCharacter:string){

    let id = await ReservedIds.getId();
    let isNew: boolean = true;
    let created_on:Date = new Date();
    let updated_on:Date = new Date();
    // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,referentId, referent,
    //     accessId,isNew,created_on, updated_on);
    let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
    concept.isTemp = true;
    return concept;

}

/**
 * Creates a concept and immediately sends it to the backend API, bypassing the sync queue.
 *
 * This function is useful when you need guaranteed immediate synchronization to the backend,
 * such as for critical operations that must be persisted right away. Unlike the standard
 * CreateTheConcept, this function:
 * - Calls the backend API directly (CreateTheConceptApi)
 * - Does NOT use the SyncData queue (bypasses batch synchronization)
 * - Adds the concept to local ConceptsData immediately
 * - Marks the concept as NOT new (isNew = false)
 *
 * Use this for time-sensitive operations where you cannot wait for the next sync cycle.
 *
 * @param referent - The character value (text/name) of the concept
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The category classification ID
 * @param typeId - The type classification ID
 * @param referentId - Optional reference to another concept ID (can be null)
 * @param accessId - Access control level for the concept
 * @param typeCharacter - The string representation of the type name
 *
 * @returns Promise resolving to the created Concept object
 *
 * @example
 * // Create a critical log entry that must be saved immediately
 * const logEntry = await CreateTheConceptImmediate(
 *   "Critical Error: System Failure",
 *   101,
 *   5,  // Log category
 *   7,  // Log type
 *   null,
 *   1,  // Public access
 *   "LogEntry"
 * );
 * // Concept is immediately sent to backend
 *
 * @see {@link CreateTheConcept} for standard queued creation
 * @see {@link CreateTheConceptApi} for the backend API call
 */
export  async function CreateTheConceptImmediate(referent:string, userId:number, categoryId:number,
    typeId:number,referentId:number|null,
    accessId:number, typeCharacter:string){

    let id = await ReservedIds.getId();
    let isNew: boolean = false;
    let created_on:Date = new Date();
let updated_on:Date = new Date();
    // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    //     securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);

    let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);

    ConceptsData.AddConcept(concept);

    CreateTheConceptApi([concept]);
    //SyncData.AddConcept(concept);
    return concept;

}