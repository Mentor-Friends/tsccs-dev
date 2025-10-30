/**
 * @fileoverview Local Binary Type Tree for managing concepts indexed by type ID.
 * This module provides a specialized binary tree for efficient type-based concept lookups and variant retrieval.
 * @module DataStructures/Local/LocalBinaryTypeTree
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LNode } from "./LNode";

/**
 * Binary tree data structure for managing local concepts indexed by type ID.
 *
 * @remarks
 * This class implements an AVL tree optimized for type-based lookups, enabling efficient
 * retrieval of all concepts of a specific type. It supports variant management, allowing
 * multiple concepts to share the same type while being stored efficiently.
 *
 * @example
 * ```typescript
 * const concept = new LConcept(123, "example", 5);
 * LocalBinaryTypeTree.addConceptToTree(concept);
 * const variants = LocalBinaryTypeTree.getTypeVariantsFromTree(5);
 * ```
 */
export class LocalBinaryTypeTree{
    /**
     * The root node of the type-indexed binary tree.
     * Null if the tree is empty.
     */
    static LocalTypeRoot: LNode | null = null;

    /**
     * Adds a node to the type-indexed binary tree.
     *
     * @param node - The LNode to be added to the tree (keyed by type ID)
     * @returns The root node after insertion
     *
     * @remarks
     * If the tree is empty, the provided node becomes the root.
     * Otherwise, uses the addTypeNode method for type-based insertion with variant support.
     *
     * @example
     * ```typescript
     * const node = new LNode(5, concept, null, null);
     * await LocalBinaryTypeTree.addNodeToTree(node);
     * ```
     */
    static async addNodeToTree(node:LNode){
        if(this.LocalTypeRoot == null){
            this.LocalTypeRoot = node;
            return this.LocalTypeRoot;
        }
        else{
            this.LocalTypeRoot = this.LocalTypeRoot.addTypeNode(node,this.LocalTypeRoot,this.LocalTypeRoot.height);
        }
        return this.LocalTypeRoot;
    }

    /**
     * Creates a node from a concept and adds it to the type tree.
     *
     * @param concept - The LConcept object to be added to the tree
     *
     * @remarks
     * Only adds the concept if it has a non-zero typeId.
     * The node is keyed by the concept's type ID.
     *
     * @example
     * ```typescript
     * const concept = new LConcept(123, "example", 5);
     * LocalBinaryTypeTree.addConceptToTree(concept);
     * ```
     */
    static addConceptToTree(concept:LConcept){
        if(concept.typeId != 0){
            var node: LNode = new LNode(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }

    }

    /**
     * Removes a specific concept variant from the tree.
     *
     * @param typeId - The type ID identifying the node
     * @param id - The concept ID to remove
     *
     * @remarks
     * This method removes a specific variant from a node while maintaining other variants.
     * If the node has no remaining variants, the entire node is removed.
     *
     * @example
     * ```typescript
     * LocalBinaryTypeTree.removeConceptType(5, 123);
     * ```
     */
    static removeConceptType(typeId:number,id:number){
        if(this.LocalTypeRoot){
            this.LocalTypeRoot = this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot,typeId, id);

        }
    }

    /**
     * Retrieves a node from the tree by its type ID.
     *
     * @param id - The numeric type ID to search for
     * @returns The LNode if found, the root node otherwise
     *
     * @remarks
     * Performs a binary search through the tree using the type ID as the key.
     *
     * @example
     * ```typescript
     * const node = LocalBinaryTypeTree.getNodeFromTree(5);
     * if (node) {
     *   console.log("Found type node with variants:", node.variants.length);
     * }
     * ```
     */
    static getNodeFromTree(id:number){
        if(this.LocalTypeRoot){
            var Node = this.LocalTypeRoot.getFromNode(id, this.LocalTypeRoot);
            return Node;
        }
        return this.LocalTypeRoot;
    }

    /**
     * Retrieves all concept variants for a specific type ID.
     *
     * @param typeId - The type ID to search for
     * @returns An array of LConcept objects of the specified type
     *
     * @remarks
     * This method retrieves the primary concept and all its variants that share the same type ID.
     * Useful for getting all concepts of a particular type in one operation.
     *
     * @example
     * ```typescript
     * const concepts = LocalBinaryTypeTree.getTypeVariantsFromTree(5);
     * console.log(`Found ${concepts.length} concepts of type 5`);
     * ```
     */
    static getTypeVariantsFromTree(typeId:number){


            var Node = this.getNodeFromTree(typeId);
            var concepts : LConcept[] = [];

            if(Node){
                concepts.push(Node?.value);
                for(let i=0; i< Node.variants.length; i++){
                    concepts.push(Node.variants[i].value);
                }

            return concepts;
        }


    }

    /**
     * Waits for local type data to be loaded into the tree.
     *
     * @returns A promise that resolves with "done" when data is loaded, or rejects with "not" after 25 seconds
     *
     * @remarks
     * This method polls the IdentifierFlags.isLocalTypeLoaded flag every second.
     * Ensures type data is ready before performing operations.
     *
     * @example
     * ```typescript
     * try {
     *   await LocalBinaryTypeTree.waitForDataToLoad();
     *   console.log("Type data loaded");
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
     * Periodically checks if local type data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     *
     * @remarks
     * This method recursively checks the IdentifierFlags.isLocalTypeLoaded flag every 1000ms.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryTypeTree.checkFlag, 1000, resolve);
        }
      };


    /**
     * Retrieves all concept variants for a specific type ID filtered by user ID.
     *
     * @param typeId - The type ID to search for
     * @param userId - The user ID to filter by
     * @returns An array of LConcept objects of the specified type belonging to the specified user
     *
     * @remarks
     * This method retrieves all concepts of a given type that belong to a specific user.
     * Useful for user-specific concept management and filtering.
     *
     * @example
     * ```typescript
     * const userConcepts = await LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(5, 42);
     * console.log(`Found ${userConcepts.length} concepts of type 5 for user 42`);
     * ```
     */
    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : LConcept[] = [];
        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return concepts;
        // }
            var Node = this.getNodeFromTree(typeId);

            if(Node){
                if(Node.value.userId == userId ){
                    concepts.push(Node?.value);
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.userId == userId ){
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
        return concepts;
    }




}