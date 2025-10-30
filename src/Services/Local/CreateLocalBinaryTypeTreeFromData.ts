/**
 * Local Binary Type Tree Initialization Module
 *
 * This module creates and populates a binary search tree indexed by concept type IDs.
 * This specialized tree structure enables efficient lookup of concepts by their type,
 * which is crucial for querying all concepts of a particular type.
 *
 * @module CreateLocalBinaryTypeTreeFromData
 */

import { LocalBinaryTypeTree } from "../../DataStructures/Local/LocalBinaryTypeTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getAllFromLocalDb } from "../../Database/NoIndexDb";

/**
 * Initializes a binary search tree indexed by concept type IDs from IndexedDB.
 *
 * This function retrieves all locally stored concepts and builds a binary search tree
 * where each node is indexed by the concept's typeId. This structure allows for O(log n)
 * lookup time when searching for concepts of a specific type, significantly improving
 * performance over linear searches.
 *
 * The function includes performance measurement via timestamps to monitor initialization time.
 *
 * @returns A promise that resolves when the type-indexed tree is fully populated
 *
 * @remarks
 * - Creates LNode instances with typeId as the key for each concept
 * - Builds a balanced binary search tree structure via LocalBinaryTypeTree
 * - Measures execution time for performance monitoring (though not returned)
 * - Called during application initialization, typically after CreateLocalBinaryTreeFromData
 * - Enables efficient queries like "get all concepts of type X"
 * - Tree structure allows for fast insertion, deletion, and lookup operations
 *
 * @example
 * ```typescript
 * // Initialize the type-indexed tree during app startup
 * async function initializeTrees() {
 *   await CreateLocalBinaryTreeFromData(); // General tree first
 *   await CreateLocalBinaryTypeTreeFromData(); // Then type-specific tree
 *
 *   // Now can efficiently query concepts by type
 *   const userConcepts = LocalBinaryTypeTree.getConceptsByType(51); // typeId 51
 *   console.log(`Found ${userConcepts.length} concepts of type 51`);
 * }
 *
 * // Measure initialization performance
 * const start = performance.now();
 * await CreateLocalBinaryTypeTreeFromData();
 * const duration = performance.now() - start;
 * console.log(`Type tree initialized in ${duration}ms`);
 * ```
 *
 * @see {@link LocalBinaryTypeTree} - The binary tree structure for type-indexed concepts
 * @see {@link LNode} - The node structure used in the tree
 * @see {@link getAllFromLocalDb} - Retrieves all concepts from IndexedDB
 * @see {@link CreateLocalBinaryTreeFromData} - General concept tree initialization
 * @see {@link CreateLocalCharacterBinaryTreeFromData} - Character-indexed tree initialization
 */
export  async function CreateLocalBinaryTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new LNode(concept.typeId, concept, null, null);
                 LocalBinaryTypeTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
