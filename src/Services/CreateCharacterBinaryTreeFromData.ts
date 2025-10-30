/**
 * Character-Based Binary Tree Data Loading Service
 *
 * This module provides functionality for creating and populating a character-based binary tree
 * data structure from persisted concept data. The tree is organized by character values,
 * allowing for efficient character-based searching and retrieval of concepts.
 *
 * @module CreateCharacterBinaryTreeFromData
 */

import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../app";

/**
 * Creates and populates a character-based binary tree from concept data stored in the database.
 *
 * This function retrieves all concept records from IndexedDB and constructs a binary tree
 * where nodes are organized by their character values. Each concept is wrapped in a Node
 * with its characterValue as the key, enabling efficient character-based lookups and searches.
 *
 * The BinaryCharacterTree allows for alphabetical or character-based organization of concepts,
 * which is useful for features like autocomplete, search suggestions, or character-based
 * filtering of concept data.
 *
 * @returns A promise that resolves when the character binary tree has been fully populated
 *
 * @example
 * ```typescript
 * // Build the character-based binary tree from database
 * await CreateCharacterBinaryTreeFromData();
 *
 * // The tree can now be used for character-based searches
 * const results = BinaryCharacterTree.search('a');
 * console.log('Concepts starting with "a":', results);
 * ```
 *
 * @remarks
 * - Creates a new BinaryCharacterTree instance at the start of execution
 * - Each concept is converted to a Node using its characterValue property as the key
 * - The tree is built incrementally by adding one node at a time
 * - Character values determine the position in the binary tree for O(log n) search performance
 *
 * @see {@link BinaryCharacterTree.addNodeToTree} for how nodes are inserted into the tree
 * @see {@link Node} for the node data structure used in the tree
 * @see {@link getFromDatabaseWithTypeOld} for database retrieval implementation
 */
export  async function CreateCharacterBinaryTreeFromData(){
    var tree = new BinaryCharacterTree();
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.characterValue, concept, null, null);
                 BinaryCharacterTree.addNodeToTree(node);
            }

        }


}
