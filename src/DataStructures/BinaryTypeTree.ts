/**
 * @fileoverview BinaryTypeTree module providing self-balancing AVL tree for concept storage by type ID.
 * This module implements an AVL tree structure for efficient concept retrieval by type
 * with support for variant nodes (multiple concepts of the same type).
 * @module DataStructures/BinaryTypeTree
 */

import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { IdentifierFlags } from "./IdentifierFlags";
import { Node } from "./Node";

/**
 * Self-balancing AVL binary tree for storing and retrieving concepts by their type ID.
 * Supports multiple concepts with the same type through variant nodes.
 * Provides O(log n) time complexity for insertions, deletions, and lookups.
 *
 * @class BinaryTypeTree
 * @example
 * ```typescript
 * // Add a concept to the type tree
 * BinaryTypeTree.addConceptToTree(myConcept);
 *
 * // Get all concepts of a specific type
 * const concepts = BinaryTypeTree.getTypeVariantsFromTree(5);
 * console.log(`Found ${concepts.length} concepts of type 5`);
 *
 * // Get concepts by type and user
 * const userConcepts = await BinaryTypeTree.getTypeVariantsFromTreeWithUserId(5, 1);
 * ```
 *
 * @remarks
 * This class uses static methods and maintains a single root node for the entire tree.
 * Multiple concepts with the same type ID are stored as variants for efficient batch retrieval.
 */
export class BinaryTypeTree{
    /** Root node of the type-based binary tree, null if tree is empty */
    static typeRoot: Node | null = null;

    /**
     * Adds a node to the type-based binary tree, maintaining AVL balance.
     * Supports adding variant nodes for concepts with the same type ID.
     *
     * @param {Node} node - The node to add to the tree
     * @returns {Promise<Node>} The new root node after insertion and balancing
     *
     * @example
     * ```typescript
     * const node = new Node(5, myConcept, null, null);
     * await BinaryTypeTree.addNodeToTree(node);
     * ```
     *
     * @remarks
     * If the tree is empty, the node becomes the root.
     * If a node with the same type ID exists, the new concept is added as a variant.
     */
    static async addNodeToTree(node:Node){
        if(this.typeRoot == null){
            this.typeRoot = node;
            return this.typeRoot;
        }
        else{
            this.typeRoot = this.typeRoot.addTypeNode(node,this.typeRoot,this.typeRoot.height);
        }
        return this.typeRoot;
    }

    /**
     * Convenience method to add a concept to the type tree.
     *
     * @param {Concept} concept - The concept to add to the tree
     *
     * @example
     * ```typescript
     * BinaryTypeTree.addConceptToTree(myConcept);
     * ```
     *
     * @remarks
     * Only adds concepts with valid type IDs (typeId != 0).
     * Creates a node with the concept's type ID as the key.
     */
    static addConceptToTree(concept:Concept){
        if(concept.typeId != 0){
            var node: Node = new Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }

    /**
     * Removes a specific concept from a type node by type ID and concept ID.
     *
     * @param {number} typeId - The type ID to search for
     * @param {number} id - The concept ID to remove
     *
     * @example
     * ```typescript
     * BinaryTypeTree.removeTypeConcept(5, 123);
     * ```
     *
     * @remarks
     * If multiple concepts share the same type ID, only the one with matching concept ID is removed.
     * Does nothing if the tree is empty.
     */
    static removeTypeConcept(typeId:number,id:number){
        if(this.typeRoot){
            this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot,typeId,id);

        }
    }




    /**
     * Retrieves a node from the tree by its type ID.
     *
     * @param {number} id - The type ID to search for
     * @returns {Node | null} The node if found, null otherwise
     *
     * @example
     * ```typescript
     * const node = BinaryTypeTree.getNodeFromTree(5);
     * if (node) {
     *   console.log("Found type node with", node.variants.length, "variants");
     * }
     * ```
     *
     * @remarks
     * Uses binary search for O(log n) time complexity.
     * Returns the main node; access all concepts of this type through node.value and node.variants.
     */
    static getNodeFromTree(id:number){
        if(this.typeRoot){
            var Node = this.typeRoot.getFromNode(id, this.typeRoot);
            return Node;
        }
        return this.typeRoot;
    }

    /**
     * Retrieves all concepts of a specific type ID as an array.
     * Includes both the main concept and all variants.
     *
     * @param {number} typeId - The type ID to search for
     * @returns {Concept[]} Array of all concepts with the specified type ID
     *
     * @example
     * ```typescript
     * const concepts = BinaryTypeTree.getTypeVariantsFromTree(5);
     * concepts.forEach(concept => {
     *   console.log(concept.characterValue);
     * });
     * ```
     *
     * @remarks
     * Returns an empty array if no concepts of the type are found.
     * Useful for batch operations on all concepts of a type.
     */
    static getTypeVariantsFromTree(typeId:number){


            var Node = this.getNodeFromTree(typeId);
            var concepts : Concept[] = [];
    
            if(Node){
                concepts.push(Node?.value);
                for(let i=0; i< Node.variants.length; i++){
                    concepts.push(Node.variants[i].value);
                }
            
            return concepts;
        }


    }

    /**
     * Waits for the type data loading flag to be set before proceeding.
     * Used for synchronization when loading initial data.
     *
     * @returns {Promise<string>} Resolves with "done" when data is loaded, rejects with "not" after 25 seconds
     *
     * @example
     * ```typescript
     * try {
     *   await BinaryTypeTree.waitForDataToLoad();
     *   console.log("Type data loaded");
     * } catch (error) {
     *   console.log("Type data load timeout");
     * }
     * ```
     *
     * @remarks
     * Uses IdentifierFlags.isTypeLoaded to determine when data is ready.
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
     * Recursively checks if the type data loaded flag is set.
     * Internal helper method for waitForDataToLoad.
     *
     * @param {any} resolve - Promise resolve function
     *
     * @remarks
     * Checks IdentifierFlags.isTypeLoaded every 1000ms until it's true.
     * This is an internal method used by waitForDataToLoad.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
      };


    /**
     * Retrieves all concepts of a specific type ID filtered by user ID.
     * Includes both the main concept and all variants belonging to the specified user.
     *
     * @param {number} typeId - The type ID to search for
     * @param {number} userId - The user ID to filter by
     * @returns {Promise<Concept[]>} Array of concepts matching both type and user
     *
     * @example
     * ```typescript
     * const userConcepts = await BinaryTypeTree.getTypeVariantsFromTreeWithUserId(5, 1);
     * console.log(`User 1 has ${userConcepts.length} concepts of type 5`);
     * ```
     *
     * @remarks
     * Returns an empty array if no matching concepts are found.
     * Automatically deduplicates concepts with the same ID.
     */
    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : Concept[] = [];
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
                        var isPresent = false;

                        for(let j=0; j<concepts.length;j++){
                            if(concepts[j].id == Node.variants[i].value.id){
                                isPresent = true;
                            }
                        }
                        if(!isPresent){
                            concepts.push(Node.variants[i].value);

                        }

                    }
                }
            }
        return concepts;
    }

    /**
     * Retrieves a concept matching both type ID and character value.
     * Searches through all concepts of the type for a matching character value.
     *
     * @param {string} characterValue - The character value to search for
     * @param {number} typeId - The type ID to filter by
     * @returns {Promise<Concept>} The concept matching both criteria, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await BinaryTypeTree.getTypeVariantsWithCharacterValue("Apple", 5);
     * if (concept.id !== 0) {
     *   console.log("Found Apple of type 5");
     * }
     * ```
     *
     * @remarks
     * Returns a default concept (id = 0) if no match is found.
     * More efficient than searching by character first when type is known.
     */
    static async getTypeVariantsWithCharacterValue( characterValue:string,typeId:number,){
        let concept = CreateDefaultConcept();
        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return concept;
        // }
            var Node = this.getNodeFromTree(typeId);
            if(Node){
                if(Node.value.characterValue == characterValue ){
                    concept = Node.value;
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.characterValue == characterValue ){
                        concept = Node.variants[i].value;
                    }
                }
            }
        return concept;
    }

    /**
     * Counts the total number of nodes in the type tree.
     *
     * @returns {number} The total count of nodes in the tree
     *
     * @example
     * ```typescript
     * const nodeCount = BinaryTypeTree.countNumberOfNodes();
     * console.log(`Tree contains ${nodeCount} type nodes`);
     * ```
     *
     * @remarks
     * Recursively traverses the entire tree to count nodes.
     * Returns 0 if the tree is empty.
     */
    static countNumberOfNodes(){
        if(this.typeRoot){
            return this.typeRoot.countNodeBelow(this.typeRoot);

        }
        return 0;
    }




}