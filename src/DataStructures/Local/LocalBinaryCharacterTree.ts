/**
 * @fileoverview Local Binary Character Tree for managing concepts indexed by character value.
 * This module provides a specialized binary tree implementation for efficient character-based lookups.
 * @module DataStructures/Local/LocalBinaryCharacterTree
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LNode } from "./../Local/LNode";

/**
 * Binary tree data structure for managing local concepts indexed by character values.
 *
 * @remarks
 * This class implements an AVL tree specifically optimized for character-based lookups.
 * Unlike LocalBinaryTree which uses numeric IDs, this tree uses character values as keys,
 * enabling efficient string-based searches with O(log n) complexity.
 *
 * @example
 * ```typescript
 * const concept = new LConcept(123, "example", 1);
 * LocalBinaryCharacterTree.addConceptToTree(concept);
 * const node = LocalBinaryCharacterTree.getNodeFromTree("example");
 * ```
 */
export class LocalBinaryCharacterTree{
    /**
     * The root node of the character-indexed binary tree.
     * Null if the tree is empty.
     */
    static LocalCharacterRoot: LNode | null = null;


    /**
     * Waits for local character data to be loaded into the tree.
     *
     * @returns A promise that resolves with "done" when data is loaded, or rejects with "not" after 25 seconds
     *
     * @remarks
     * This method polls the IdentifierFlags.isLocalCharacterLoaded flag every second.
     * Useful for ensuring data is ready before performing operations on the tree.
     *
     * @example
     * ```typescript
     * try {
     *   await LocalBinaryCharacterTree.waitForDataToLoad();
     *   console.log("Character data loaded");
     * } catch (error) {
     *   console.log("Loading timed out");
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
     * Periodically checks if local character data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     *
     * @remarks
     * This method recursively checks the IdentifierFlags.isLocalCharacterLoaded flag every 1000ms.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalCharacterLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryCharacterTree.checkFlag, 1000, resolve);
        }
      };
    /**
     * Adds a node to the character-indexed binary tree.
     *
     * @param node - The LNode to be added to the tree (keyed by character value)
     * @returns The root node after insertion
     *
     * @remarks
     * If the tree is empty, the provided node becomes the root.
     * Otherwise, uses the addCharacterNode method for character-based insertion.
     *
     * @example
     * ```typescript
     * const node = new LNode("example", concept, null, null);
     * await LocalBinaryCharacterTree.addNodeToTree(node);
     * ```
     */
    static async addNodeToTree(node:LNode){
        if(this.LocalCharacterRoot == null){
            this.LocalCharacterRoot = node;
            return this.LocalCharacterRoot;
        }
        else{
            this.LocalCharacterRoot = this.LocalCharacterRoot.addCharacterNode(node,this.LocalCharacterRoot,this.LocalCharacterRoot.height);
        }
        return this.LocalCharacterRoot;
    }

    /**
     * Creates a node from a concept and adds it to the character tree.
     *
     * @param concept - The LConcept object to be added to the tree
     *
     * @remarks
     * Only adds the concept if it has a non-empty characterValue.
     * The node is keyed by the concept's character value.
     *
     * @example
     * ```typescript
     * const concept = new LConcept(123, "example", 1);
     * LocalBinaryCharacterTree.addConceptToTree(concept);
     * ```
     */
    static addConceptToTree(concept:LConcept){
        if(concept.characterValue != ""){
            var node: LNode = new LNode(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }

    }

    /**
     * Retrieves a node from the tree by its character value.
     *
     * @param value - The character string to search for
     * @returns The LNode if found, the root node otherwise
     *
     * @remarks
     * Performs a binary search through the tree using the character value as the key.
     *
     * @example
     * ```typescript
     * const node = LocalBinaryCharacterTree.getNodeFromTree("example");
     * if (node) {
     *   console.log("Found concept:", node.value);
     * }
     * ```
     */
    static getNodeFromTree(value:string){
        if(this.LocalCharacterRoot){
            var Node = this.LocalCharacterRoot.getCharacterFromNode(value, this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }

    /**
     * Retrieves a node by matching both character value and type ID.
     *
     * @param value - The character value to search for
     * @param typeId - The type ID to match
     * @returns The matching LNode if found, the root node otherwise
     *
     * @remarks
     * This method searches for a node that matches both the character value and type ID,
     * useful for finding specific concept variants.
     *
     * @example
     * ```typescript
     * const node = await LocalBinaryCharacterTree.getCharacterAndTypeFromTree("example", 5);
     * if (node) {
     *   console.log("Found matching concept:", node.value);
     * }
     * ```
     */
    static async getCharacterAndTypeFromTree(value:string, typeId: number){

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.LocalCharacterRoot){
            var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId,this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }

    /**
     * Removes a concept variant from the tree.
     *
     * @param character - The character value identifying the node
     * @param id - The concept ID to remove
     *
     * @remarks
     * This method removes a specific variant from a node while maintaining other variants.
     * If the node has no remaining variants, the entire node is removed.
     *
     * @example
     * ```typescript
     * LocalBinaryCharacterTree.removeConceptType("example", 123);
     * ```
     */
    static removeConceptType(character:string,id:number){
        if(this.LocalCharacterRoot){
            this.LocalCharacterRoot = this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot,character, id);
        }
    }

}