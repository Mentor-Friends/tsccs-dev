/**
 * @fileoverview BinaryTree module providing self-balancing AVL tree for concept storage by ID.
 * This module implements an AVL (Adelson-Velsky and Landis) tree structure for efficient
 * concept retrieval with O(log n) time complexity.
 * @module DataStructures/BinaryTree
 */

import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
import { IdentifierFlags } from "./IdentifierFlags";

/**
 * Self-balancing AVL binary tree for storing and retrieving concepts by their numeric ID.
 * Provides O(log n) time complexity for insertions, deletions, and lookups.
 *
 * @class BinaryTree
 * @example
 * ```typescript
 * // Add a concept to the tree
 * BinaryTree.addConceptToTree(myConcept);
 *
 * // Retrieve a concept by ID
 * const node = await BinaryTree.getNodeFromTree(123);
 * if (node) {
 *   console.log("Found:", node.value.characterValue);
 * }
 *
 * // Count all nodes
 * const count = BinaryTree.countNumberOfNodes();
 * ```
 *
 * @remarks
 * This class uses static methods and maintains a single root node for the entire tree.
 * The tree automatically balances itself using AVL rotations to maintain optimal search performance.
 */
export class BinaryTree{
    /** Root node of the binary tree, null if tree is empty */
    static root: Node | null = null;

    /**
     * Adds a node to the binary tree, maintaining AVL balance.
     *
     * @param {Node} node - The node to add to the tree
     * @returns {Node} The new root node after insertion and balancing
     *
     * @example
     * ```typescript
     * const node = new Node(123, myConcept, null, null);
     * BinaryTree.addNodeToTree(node);
     * ```
     *
     * @remarks
     * If the tree is empty, the node becomes the root.
     * Otherwise, the node is inserted and the tree is automatically balanced.
     */
    static addNodeToTree(node:Node){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);
        }
    }

    /**
     * Waits for the data loading flag to be set before proceeding.
     * Used for synchronization when loading initial data.
     *
     * @returns {Promise<string>} Resolves with "done" when data is loaded, rejects with "not" after 25 seconds
     *
     * @example
     * ```typescript
     * try {
     *   await BinaryTree.waitForDataToLoad();
     *   console.log("Data loaded successfully");
     * } catch (error) {
     *   console.log("Data load timeout");
     * }
     * ```
     *
     * @remarks
     * Uses IdentifierFlags.isDataLoaded to determine when data is ready.
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
     * Recursively checks if the data loaded flag is set.
     * Internal helper method for waitForDataToLoad.
     *
     * @param {any} resolve - Promise resolve function
     *
     * @remarks
     * Checks IdentifierFlags.isDataLoaded every 1000ms until it's true.
     * This is an internal method used by waitForDataToLoad.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
      };

    /**
     * Convenience method to add a concept to both the ID tree and character tree.
     *
     * @param {Concept} concept - The concept to add to the tree
     *
     * @example
     * ```typescript
     * BinaryTree.addConceptToTree(myConcept);
     * ```
     *
     * @remarks
     * Creates a node with the concept's ID as the key and adds it to this tree.
     * Also creates a node with the concept's character value and adds it to BinaryCharacterTree.
     */
    static addConceptToTree(concept:Concept){
        var node: Node = new Node(concept.id, concept, null, null);
        var characterNode: Node = new Node(concept.characterValue, concept, null,null);
        BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }

    /**
     * Retrieves a node from the tree by its ID.
     *
     * @param {number} id - The concept ID to search for
     * @returns {Promise<Node | null>} The node if found, null otherwise
     *
     * @example
     * ```typescript
     * const node = await BinaryTree.getNodeFromTree(123);
     * if (node) {
     *   const concept = node.value as Concept;
     *   console.log(concept.characterValue);
     * }
     * ```
     *
     * @remarks
     * Uses binary search for O(log n) time complexity.
     * Returns null if the tree is empty or the node is not found.
     */
    static async getNodeFromTree(id:number){

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.root){
            var Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return null;
    }
    

    /**
     * Removes a node from the tree by its ID.
     *
     * @param {number} id - The concept ID to remove
     *
     * @example
     * ```typescript
     * await BinaryTree.removeNodeFromTree(123);
     * ```
     *
     * @remarks
     * After removal, the tree is automatically rebalanced to maintain AVL properties.
     * Does nothing if the tree is empty.
     */
    static async removeNodeFromTree(id:number){
        if(this.root){
            this.root = this.root.removeNode(this.root,id);
        }
    }




    /**
     * Counts the total number of nodes in the tree.
     *
     * @returns {number} The total count of nodes in the tree
     *
     * @example
     * ```typescript
     * const nodeCount = BinaryTree.countNumberOfNodes();
     * console.log(`Tree contains ${nodeCount} concepts`);
     * ```
     *
     * @remarks
     * Recursively traverses the entire tree to count nodes.
     * Returns 0 if the tree is empty.
     */
    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }





}