/**
 * Type-Based Binary Tree Data Loading Service
 *
 * This module provides functionality for creating and populating a type-based binary tree
 * data structure from persisted concept data. The tree is organized by type identifiers,
 * enabling efficient type-based categorization, filtering, and retrieval of concepts.
 *
 * @module CreateTypeTreeFromData
 */

import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../Database/NoIndexDb";

/**
 * Creates and populates a type-based binary tree from concept data stored in the database.
 *
 * This function retrieves all concept records from IndexedDB and constructs a binary tree
 * where nodes are organized by their type identifiers (typeId). This organization enables
 * efficient grouping and retrieval of concepts by their type classification.
 *
 * The BinaryTypeTree structure is essential for type-based queries and operations, allowing
 * the system to quickly find all concepts of a particular type without scanning the entire
 * dataset. Performance metrics are tracked to monitor loading times.
 *
 * @returns A promise that resolves when the type binary tree has been fully populated
 *
 * @example
 * ```typescript
 * // Build the type-based binary tree from database
 * await CreateTypeTreeFromData();
 *
 * // The tree can now be used for type-based queries
 * const conceptsOfType = BinaryTypeTree.getByType(42);
 * console.log('All concepts of type 42:', conceptsOfType);
 * ```
 *
 * @remarks
 * - Tracks execution time for performance monitoring (startTime, endTime, time variables)
 * - Each concept is wrapped in a Node using its typeId property as the organizational key
 * - The tree is built sequentially by iterating through all retrieved concepts
 * - Type identifiers determine node placement in the binary tree structure
 * - Time measurements are calculated but not currently returned or logged
 *
 * @see {@link BinaryTypeTree.addNodeToTree} for how nodes are inserted into the tree
 * @see {@link Node} for the node data structure used in the tree
 * @see {@link getFromDatabaseWithTypeOld} for database retrieval implementation
 */
export  async function CreateTypeTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.typeId, concept, null, null);
                 BinaryTypeTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
