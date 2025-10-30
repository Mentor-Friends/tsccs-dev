/**
 * Local Character Binary Tree Initialization Module
 *
 * This module creates and populates a binary search tree indexed by concept character values.
 * This specialized tree structure enables efficient lookup of concepts by their character/name,
 * supporting fast string-based queries without requiring full database scans.
 *
 * @module CreateLocalCharacterBinaryTree
 */

import { LocalBinaryCharacterTree } from "../../DataStructures/Local/LocalBinaryCharacterTree";
import { LNode } from "../../DataStructures/Local/LNode";
import { getAllFromLocalDb } from "../../Database/NoIndexDb";

/**
 * Initializes a binary search tree indexed by concept character values from IndexedDB.
 *
 * This function retrieves all locally stored concepts and builds a binary search tree
 * where each node is indexed by the concept's characterValue (the string content/name
 * of the concept). This structure enables efficient O(log n) lookup when searching for
 * concepts by their character/string value.
 *
 * The function includes performance measurement to monitor initialization time.
 *
 * @returns A promise that resolves when the character-indexed tree is fully populated
 *
 * @remarks
 * - Creates LNode instances with characterValue as the key for each concept
 * - Builds a balanced binary search tree structure via LocalBinaryCharacterTree
 * - Measures execution time for performance monitoring (though not returned)
 * - Particularly useful for autocomplete, search, and lookup-by-name operations
 * - Called during application initialization alongside other tree structures
 * - Enables queries like "find concept with character value 'John Doe'"
 * - Character values are typically stored as strings and compared lexicographically
 *
 * @example
 * ```typescript
 * // Initialize all tree structures during app startup
 * async function initializeAllTrees() {
 *   await CreateLocalBinaryTreeFromData();
 *   await CreateLocalBinaryTypeTreeFromData();
 *   await CreateLocalCharacterBinaryTreeFromData();
 *
 *   // Now can efficiently query concepts by character value
 *   const concept = LocalBinaryCharacterTree.findByCharacter("John Doe");
 *   if (concept) {
 *     console.log(`Found concept: ${concept.id}`);
 *   }
 * }
 *
 * // Use for autocomplete functionality
 * async function searchConcepts(prefix: string) {
 *   await CreateLocalCharacterBinaryTreeFromData();
 *   const results = LocalBinaryCharacterTree.findByPrefix(prefix);
 *   return results; // All concepts starting with prefix
 * }
 * ```
 *
 * @see {@link LocalBinaryCharacterTree} - The binary tree structure for character-indexed concepts
 * @see {@link LNode} - The node structure used in the tree
 * @see {@link getAllFromLocalDb} - Retrieves all concepts from IndexedDB
 * @see {@link CreateLocalBinaryTreeFromData} - General concept tree initialization
 * @see {@link CreateLocalBinaryTypeTreeFromData} - Type-indexed tree initialization
 * @see {@link GetConceptByCharacterLocal} - Related function that uses this tree
 */
export  async function CreateLocalCharacterBinaryTreeFromData(){
    var startTime = new Date().getTime();
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new LNode(concept.characterValue, concept, null, null);
                LocalBinaryCharacterTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;

}
