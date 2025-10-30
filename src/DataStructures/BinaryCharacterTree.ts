/**
 * @fileoverview BinaryCharacterTree module providing self-balancing AVL tree for concept storage by character value.
 * This module implements an AVL tree structure for efficient concept retrieval using string-based keys
 * with support for variant nodes (multiple concepts with the same character value).
 * @module DataStructures/BinaryCharacterTree
 */

import { Concept } from "../DataStructures/Concept";
import { IdentifierFlags } from "./IdentifierFlags";
import { Node } from "./Node";

/**
 * Self-balancing AVL binary tree for storing and retrieving concepts by their character value.
 * Supports multiple concepts with the same character value through variant nodes.
 * Provides O(log n) time complexity for insertions, deletions, and lookups.
 *
 * @class BinaryCharacterTree
 * @example
 * ```typescript
 * // Add a concept to the tree
 * BinaryCharacterTree.addConceptToTree(myConcept);
 *
 * // Retrieve a concept by character value
 * const node = BinaryCharacterTree.getNodeFromTree("Apple");
 * if (node) {
 *   console.log("Found:", node.value.id);
 * }
 *
 * // Get concept by character and type
 * const specificNode = await BinaryCharacterTree.getCharacterAndTypeFromTree("Apple", 5);
 * ```
 *
 * @remarks
 * This class uses static methods and maintains a single root node for the entire tree.
 * When multiple concepts share the same character value, they are stored as variants.
 */
export class BinaryCharacterTree{
    /** Root node of the character-based binary tree, null if tree is empty */
    static characterRoot: Node | null = null;


    /**
     * Waits for the character data loading flag to be set before proceeding.
     * Used for synchronization when loading initial data.
     *
     * @returns {Promise<string>} Resolves with "done" when data is loaded, rejects with "not" after 25 seconds
     *
     * @example
     * ```typescript
     * try {
     *   await BinaryCharacterTree.waitForDataToLoad();
     *   console.log("Character data loaded");
     * } catch (error) {
     *   console.log("Character data load timeout");
     * }
     * ```
     *
     * @remarks
     * Uses IdentifierFlags.isCharacterLoaded to determine when data is ready.
     * Times out after 25 seconds to prevent infinite waiting.
     */
    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    /**
     * Recursively checks if the character data loaded flag is set.
     * Internal helper method for waitForDataToLoad.
     *
     * @param {any} resolve - Promise resolve function
     *
     * @remarks
     * Checks IdentifierFlags.isCharacterLoaded every 1000ms until it's true.
     * This is an internal method used by waitForDataToLoad.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isCharacterLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryCharacterTree.checkFlag, 1000, resolve);
        }
      };
    /**
     * Adds a node to the character-based binary tree, maintaining AVL balance.
     * Supports adding variant nodes for concepts with the same character value.
     *
     * @param {Node} node - The node to add to the tree
     * @returns {Promise<Node>} The new root node after insertion and balancing
     *
     * @example
     * ```typescript
     * const node = new Node("Apple", myConcept, null, null);
     * await BinaryCharacterTree.addNodeToTree(node);
     * ```
     *
     * @remarks
     * If the tree is empty, the node becomes the root.
     * If a node with the same character value exists, the new concept is added as a variant.
     */
    static async addNodeToTree(node:Node){
        if(this.characterRoot == null){
            this.characterRoot = node;
            return this.characterRoot;
        }
        else{
            this.characterRoot = this.characterRoot.addCharacterNode(node,this.characterRoot,this.characterRoot.height);
        }
        return this.characterRoot;
    }

    /**
     * Removes a specific concept from a character node by character value and concept ID.
     *
     * @param {string} character - The character value to search for
     * @param {number} id - The concept ID to remove
     *
     * @example
     * ```typescript
     * await BinaryCharacterTree.removeNodeByCharacter("Apple", 123);
     * ```
     *
     * @remarks
     * If multiple concepts share the same character value, only the one with matching ID is removed.
     * Does nothing if the tree is empty.
     */
    static async removeNodeByCharacter(character:string, id:number){
        if(this.characterRoot){
            this.characterRoot.removeNodeWithVariants(this.characterRoot,character,id);
        }
    }



    /**
     * Counts the total number of nodes in the character tree.
     *
     * @returns {number} The total count of nodes in the tree
     *
     * @example
     * ```typescript
     * const nodeCount = BinaryCharacterTree.countNumberOfNodes();
     * console.log(`Tree contains ${nodeCount} character nodes`);
     * ```
     *
     * @remarks
     * Recursively traverses the entire tree to count nodes.
     * Returns 0 if the tree is empty.
     */
    static countNumberOfNodes(){
        if(this.characterRoot){
            return this.characterRoot.countNodeBelow(this.characterRoot);

        }
        return 0;
    }

    /**
     * Convenience method to add a concept to the character tree.
     *
     * @param {Concept} concept - The concept to add to the tree
     *
     * @example
     * ```typescript
     * BinaryCharacterTree.addConceptToTree(myConcept);
     * ```
     *
     * @remarks
     * Only adds concepts with non-empty character values.
     * Creates a node with the concept's character value as the key.
     */
    static addConceptToTree(concept:Concept){
        if(concept.characterValue != ""){
            var node: Node = new Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }

    }

    /**
     * Retrieves a node from the tree by its character value.
     *
     * @param {string} value - The character value to search for
     * @returns {Node | null} The node if found, null otherwise
     *
     * @example
     * ```typescript
     * const node = BinaryCharacterTree.getNodeFromTree("Apple");
     * if (node) {
     *   const concept = node.value as Concept;
     *   console.log(concept.id);
     * }
     * ```
     *
     * @remarks
     * Uses binary search for O(log n) time complexity.
     * Returns the main node; access variants through node.variants property.
     */
    static getNodeFromTree(value:string){
        if(this.characterRoot){
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }

    /**
     * Retrieves a node from the tree by its character value (updated version).
     * Currently identical to getNodeFromTree.
     *
     * @param {string} value - The character value to search for
     * @returns {Node | null} The node if found, null otherwise
     *
     * @example
     * ```typescript
     * const node = BinaryCharacterTree.getNodeFromTreeUpdated("Apple");
     * ```
     *
     * @remarks
     * This method may be deprecated or merged with getNodeFromTree in future versions.
     */
    static getNodeFromTreeUpdated(value:string){
        if(this.characterRoot){
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }

    /**
     * Retrieves a node matching both character value and type ID.
     * Searches through variants to find the specific type match.
     *
     * @param {string} value - The character value to search for
     * @param {number} typeId - The type ID to filter by
     * @returns {Promise<Node | null>} The node matching both criteria, null if not found
     *
     * @example
     * ```typescript
     * const node = await BinaryCharacterTree.getCharacterAndTypeFromTree("Apple", 5);
     * if (node) {
     *   console.log("Found Apple of type 5");
     * }
     * ```
     *
     * @remarks
     * First finds the character node, then searches through variants for matching type.
     * Returns null if no match is found.
     */
    static async getCharacterAndTypeFromTree(value:string, typeId: number){

        // try{
            // var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.characterRoot){
            var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId,this.characterRoot);
            return Node;
        }   
        return this.characterRoot;
    }

    /**
     * Retrieves a node matching both character value and category ID.
     * Searches through variants to find the specific category match.
     *
     * @param {string} value - The character value to search for
     * @param {number} categoryId - The category ID to filter by
     * @returns {Promise<Node | null>} The node matching both criteria, null if not found
     *
     * @example
     * ```typescript
     * const node = await BinaryCharacterTree.getCharacterAndCategoryFromTree("Apple", 3);
     * if (node) {
     *   console.log("Found Apple in category 3");
     * }
     * ```
     *
     * @remarks
     * First finds the character node, then searches through variants for matching category.
     * Returns null if no match is found.
     */
    static async getCharacterAndCategoryFromTree(value:string, categoryId: number){

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.characterRoot){
            var Node = this.characterRoot.getFromNodeWithCharacterAndCategory(value, categoryId,this.characterRoot);
            return Node;
        }   
        return this.characterRoot;
    }


    


    /**
     * Removes a concept from the character tree by its ID.
     *
     * @param {number} id - The concept ID to remove
     *
     * @example
     * ```typescript
     * BinaryCharacterTree.removeConceptCharacter(123);
     * ```
     *
     * @remarks
     * After removal, the tree is automatically rebalanced to maintain AVL properties.
     * Does nothing if the tree is empty.
     */
    static removeConceptCharacter(id:number){
        if(this.characterRoot){
            this.characterRoot = this.characterRoot.removeNode(this.characterRoot,id);

        }
    }

}