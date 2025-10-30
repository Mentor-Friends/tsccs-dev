/**
 * @fileoverview Local Binary Tree data structure for managing local concepts.
 * This module provides a binary tree implementation for storing and retrieving LConcept objects
 * using an AVL tree structure for balanced performance.
 * @module DataStructures/Local/LocalBinaryTree
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "../IdentifierFlags";
import { LNode } from "./../Local/LNode";

/**
 * Binary tree data structure for managing local concepts with efficient lookup by ID.
 *
 * @remarks
 * This class implements a self-balancing binary search tree (AVL tree) for storing local concepts.
 * It provides O(log n) search, insertion, and deletion operations. The tree is keyed by concept ID
 * and supports asynchronous data loading with timeout capabilities.
 *
 * @example
 * ```typescript
 * const concept = new LConcept(123, "example", 1);
 * LocalBinaryTree.addConceptToTree(concept);
 * const node = await LocalBinaryTree.getNodeFromTree(123);
 * ```
 */
export class LocalBinaryTree{
    /**
     * The root node of the binary tree.
     * Null if the tree is empty.
     */
    static root: LNode | null = null;

    /**
     * Adds a node to the binary tree.
     *
     * @param node - The LNode to be added to the tree
     * @returns The root node after insertion
     *
     * @remarks
     * If the tree is empty, the provided node becomes the root.
     * Otherwise, the node is inserted at the appropriate position using the AVL tree algorithm.
     *
     * @example
     * ```typescript
     * const node = new LNode(123, concept, null, null);
     * LocalBinaryTree.addNodeToTree(node);
     * ```
     */
    static addNodeToTree(node:LNode){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);
        }
    }

    /**
     * Creates a node from a concept and adds it to the tree.
     *
     * @param concept - The LConcept object to be added to the tree
     *
     * @remarks
     * This is a convenience method that creates an LNode from the concept and adds it to the tree.
     * The node is keyed by the concept's ID.
     *
     * @example
     * ```typescript
     * const concept = new LConcept(123, "example", 1);
     * LocalBinaryTree.addConceptToTree(concept);
     * ```
     */
    static addConceptToTree(concept:LConcept){
        var node: LNode = new LNode(concept.id, concept, null, null);
        var characterNode: LNode = new LNode(concept.characterValue, concept, null,null);
        this.addNodeToTree(node);
    }

    /**
     * Waits for local data to be loaded into the tree.
     *
     * @returns A promise that resolves with "done" when data is loaded, or rejects with "not" after 25 seconds
     *
     * @remarks
     * This method polls the IdentifierFlags.isLocalDataLoaded flag every second until it's true.
     * If data isn't loaded within 25 seconds, the promise is rejected.
     *
     * @example
     * ```typescript
     * try {
     *   await LocalBinaryTree.waitForDataToLoad();
     *   console.log("Data loaded successfully");
     * } catch (error) {
     *   console.log("Data loading timed out");
     * }
     * ```
     */
    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }

    /**
     * Periodically checks if local data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     *
     * @remarks
     * This method is called recursively every 1000ms until the data is loaded.
     * It checks the IdentifierFlags.isLocalDataLoaded flag.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryTree.checkFlag, 1000, resolve);
        }
      };

    /**
     * Retrieves a node from the tree by its ID.
     *
     * @param id - The numeric ID of the node to retrieve
     * @returns The LNode if found, null otherwise
     *
     * @remarks
     * This method performs a binary search through the tree using the concept ID as the key.
     * The search has O(log n) time complexity in a balanced tree.
     *
     * @example
     * ```typescript
     * const node = await LocalBinaryTree.getNodeFromTree(123);
     * if (node) {
     *   console.log("Found concept:", node.value);
     * }
     * ```
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
     * Retrieves a node by matching both character value and type ID.
     *
     * @param value - The character value to search for
     * @param typeId - The type ID to match
     * @returns The matching LNode if found, the root node otherwise
     *
     * @remarks
     * This method searches for a node that matches both the character value and type ID.
     * It's useful for finding specific concept variants.
     *
     * @example
     * ```typescript
     * const node = LocalBinaryTree.getCharacterAndTypeFromTree("example", 5);
     * if (node) {
     *   console.log("Found matching concept:", node.value);
     * }
     * ```
     */
    static getCharacterAndTypeFromTree(value:string, typeId: number){
        if(this.root){
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId,this.root);
            return Node;
        }
        return this.root;
    }

    /**
     * Removes a node from the tree by its ID.
     *
     * @param id - The numeric ID of the node to remove
     *
     * @remarks
     * This method removes a node from the tree while maintaining the AVL tree balance.
     * The tree is automatically rebalanced after removal.
     *
     * @example
     * ```typescript
     * await LocalBinaryTree.removeNodeFromTree(123);
     * ```
     */
    static async removeNodeFromTree(id:number){
        if(this.root){
            this.root = this.root.removeNode(this.root,id);
        }
    }
}