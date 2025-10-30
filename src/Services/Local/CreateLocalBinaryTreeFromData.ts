/**
 * Local Binary Tree Initialization Module
 *
 * This module handles the initialization of the in-memory binary tree data structure
 * from persisted local concepts stored in IndexedDB. It loads all concepts from the
 * database and populates the in-memory cache for fast access.
 *
 * @module CreateLocalBinaryTreeFromData
 */

import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { getAllFromLocalDb } from "../../Database/NoIndexDb";

/**
 * Initializes the local binary tree structure by loading concepts from IndexedDB.
 *
 * This function retrieves all locally stored concepts from the IndexedDB database
 * and populates the in-memory LocalConceptsData structure. This is typically called
 * during application initialization to hydrate the memory cache from persistent storage.
 *
 * The function ensures that all previously created local concepts are available in
 * memory for fast lookup operations without needing to query the database repeatedly.
 *
 * @returns A promise that resolves when all concepts have been loaded into memory
 *
 * @remarks
 * - Retrieves all concepts from the "localconcept" store in IndexedDB
 * - Uses `LocalConceptsData.AddConceptToMemory` to add each concept to the in-memory structure
 * - The commented code suggests this originally used a traditional binary tree (Node-based)
 *   but now uses a more efficient data structure via LocalConceptsData
 * - Safe to call multiple times; duplicate concepts will be handled by AddConceptToMemory
 * - This is a synchronization step from persistent storage to volatile memory
 *
 * @example
 * ```typescript
 * // During application initialization
 * async function initializeApp() {
 *   console.log("Loading local concepts...");
 *   await CreateLocalBinaryTreeFromData();
 *   console.log("Local concepts loaded into memory");
 *
 *   // Now concepts can be accessed quickly from memory
 *   const concept = await LocalConceptsData.GetConcept(123);
 * }
 *
 * initializeApp();
 * ```
 *
 * @see {@link LocalConceptsData.AddConceptToMemory} - Adds concepts to in-memory storage
 * @see {@link getAllFromLocalDb} - Retrieves all records from IndexedDB
 * @see {@link CreateLocalBinaryTypeTreeFromData} - Similar function for type-indexed tree
 * @see {@link CreateLocalCharacterBinaryTreeFromData} - Similar function for character-indexed tree
 */
export default  async function CreateLocalBinaryTreeFromData(){
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }

        }


}
