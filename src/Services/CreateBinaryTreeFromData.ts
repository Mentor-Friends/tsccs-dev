/**
 * Binary Tree Data Loading Service
 *
 * This module provides functionality for creating and populating binary tree data structures
 * from persisted concept data stored in IndexedDB. It loads concept records and adds them
 * to in-memory data structures for efficient access and querying.
 *
 * @module CreateBinaryTreeFromData
 */

import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../Database/NoIndexDb";
import { ConceptsData } from "../DataStructures/ConceptData";

/**
 * Creates and populates a binary tree structure from concept data stored in the database.
 *
 * This function loads all concept records from IndexedDB and adds them to the in-memory
 * ConceptsData structure for fast retrieval and manipulation. It measures the time taken
 * to load all concepts for performance monitoring purposes.
 *
 * The function retrieves all records of type "concept" from the database and iterates through
 * them, adding each concept to the ConceptsData memory structure. Note that the actual binary
 * tree node creation is currently commented out, with only memory storage being active.
 *
 * @returns A promise that resolves when all concepts have been loaded into memory
 *
 * @example
 * ```typescript
 * // Initialize the binary tree with database data
 * await CreateBinaryTreeFromData();
 * console.log('Binary tree populated from database');
 * ```
 *
 * @remarks
 * - Performance is tracked using start and end timestamps
 * - The actual BinaryTree node creation (lines 14-15) is commented out in current implementation
 * - Only adds concepts to ConceptsData memory structure, not to the BinaryTree itself
 * - Time measurement variables (startTime, endTime, time) are calculated but not returned or logged
 *
 * @see {@link ConceptsData.AddConceptToMemory} for how concepts are stored in memory
 * @see {@link getFromDatabaseWithTypeOld} for database retrieval implementation
 */
export default  async function CreateBinaryTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                ConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // BinaryTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
