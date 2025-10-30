/**
 * Local Concept Creation Module
 *
 * This module provides functionality to create concepts in the local storage layer of the
 * Concept Connection System (CCS). It handles the instantiation of local concepts with
 * temporary IDs before they are synchronized with the backend.
 *
 * @module CreateTheConceptLocal
 */

import { CreateTheConceptApi } from "../../Api/Create/CreateTheConceptApi";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { ReservedIds } from "../../DataStructures/ReservedIds";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/NoIndexDb";

/**
 * Creates a new concept in the local storage layer.
 *
 * This function generates a new local concept with a temporary random ID and stores it
 * in both the in-memory data structure and the local IndexedDB database. The concept
 * is marked as temporary and new, indicating it needs to be synchronized with the
 * backend server when online.
 *
 * The function is essential for offline-first functionality, allowing users to create
 * concepts even when disconnected from the backend server.
 *
 * @param referent - The character value or name of the concept being created
 * @param typecharacter - The character representation of the concept's type
 * @param userId - The ID of the user creating the concept
 * @param categoryId - The category this concept belongs to
 * @param typeId - The ID of the type concept that defines this concept's type
 * @param accessId - Access control ID determining permissions for this concept
 * @param referentId - Optional ID linking to a referent concept (defaults to 0)
 *
 * @returns A promise that resolves to the newly created LConcept instance
 *
 * @remarks
 * - Generates a random temporary ID between 0 and 100,000,000
 * - Sets `isTemp` flag to true to indicate this is a local-only concept
 * - Sets `isNew` flag to true to mark it for synchronization
 * - Stores the concept in both memory (LocalConceptsData) and IndexedDB
 * - The temporary ID will be replaced with a backend-generated ID upon sync
 *
 * @example
 * ```typescript
 * // Create a concept with type "the_name" for user 123
 * const concept = await CreateTheConceptLocal(
 *   "John Doe",      // referent
 *   "the_name",      // typecharacter
 *   123,             // userId
 *   4,               // categoryId
 *   51,              // typeId
 *   4,               // accessId
 *   0                // referentId
 * );
 *
 * console.log(concept.id); // Random ID like 45892371
 * console.log(concept.isTemp); // true
 * ```
 *
 * @see {@link LConcept} - The local concept data structure
 * @see {@link LocalConceptsData.AddConcept} - Adds concept to in-memory storage
 * @see {@link storeToDatabase} - Persists concept to IndexedDB
 */
export default async function CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number,
typeId:number,
accessId:number, referentId:number = 0){

var id = Math.floor(Math.random() * 100000000);
var isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
var concept = new LConcept(id,userId,typeId,categoryId,accessId, referent,typecharacter, isNew,created_on,updated_on, referentId);
concept.isTemp = true;
LocalConceptsData.AddConcept(concept);
storeToDatabase("localconcept",concept);
return concept;

}