/**
 * @fileoverview Binary tree for managing user-specific concepts and connections.
 * This module provides a composite-key based tree for efficient user and session-based data storage.
 * @module DataStructures/User/UserBinaryTree
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { UserNode } from "./UserNode";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LConnection } from "../Local/LConnection";
import { CreateDefaultLConcept } from "../../app";

/**
 * Binary tree data structure for managing user-specific data with composite keys.
 *
 * @remarks
 * This class implements an AVL tree that uses composite keys (userId + sessionId + randomizer)
 * to organize user-specific concepts and connections. The composite key enables efficient
 * organization and retrieval of data by user, session, and application context.
 *
 * @example
 * ```typescript
 * const concept = new LConcept(123, "example", 5);
 * UserBinaryTree.addConceptToTree(concept, 42, 999);
 * const node = await UserBinaryTree.getNodeFromTree(42, 999, 123);
 * ```
 */
export class UserBinaryTree{
    /**
     * The root node of the user data binary tree.
     * Null if the tree is empty.
     */
    static root: UserNode | null = null;

    /**
     * Creates a composite key from user ID, session ID, and randomizer.
     *
     * @param userId - The user ID
     * @param sessionId - The session ID
     * @param randomizer - Additional identifier (defaults to 999)
     * @returns A 12-character hexadecimal composite key
     *
     * @remarks
     * The composite key is formed by concatenating three 4-digit hexadecimal values:
     * userHex (4 chars) + sessionHex (4 chars) + randomizerHex (4 chars) = 12 chars total.
     * This enables unique identification of data across users, sessions, and applications.
     *
     * @example
     * ```typescript
     * const key = UserBinaryTree.compositeKey(42, 999, 123);
     * // Returns something like "002A03E7007B"
     * ```
     */
    static compositeKey(userId: number, sessionId: number, randomizer: number = 999){
        let userHex = ('0000' + userId.toString(16).toUpperCase()).slice(-4);
        let sessionHex = ('0000' + sessionId.toString(16).toUpperCase()).slice(-4);
        let randomizerHex = ('0000'+ randomizer.toString(16).toUpperCase()).slice(-4);

        return userHex + sessionHex + randomizerHex;
    }

    /**
     * Adds a user node to the binary tree.
     *
     * @param node - The UserNode to be added to the tree
     *
     * @remarks
     * If the tree is empty, the provided node becomes the root.
     * Otherwise, the node is inserted using the AVL tree balancing algorithm.
     */
    static addNodeToTree(node:UserNode){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);

        }
    }

    /**
     * Waits for user data to be loaded into the tree.
     *
     * @returns A promise that resolves with "done" when data is loaded, or rejects with "not" after 25 seconds
     */
    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }

    /**
     * Periodically checks if user data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(UserBinaryTree.checkFlag, 1000, resolve);
        }
      };

    /**
     * Creates a node from a concept and adds it to the user tree.
     *
     * @param concept - The LConcept object to be added
     * @param userId - The user ID
     * @param sessionId - The session ID (defaults to 999)
     *
     * @remarks
     * Uses the concept's applicationId as the randomizer in the composite key.
     */
    static addConceptToTree(concept:LConcept, userId:number, sessionId: number = 999){
        let key = this.compositeKey(userId, sessionId, concept.applicationId);
        let FakeConnection: LConnection = new LConnection(0,0,0,0,0,0);
        var node: UserNode = new UserNode(key, concept,FakeConnection,  null, null);
        this.addNodeToTree(node);
    }

    /**
     * Creates a node from a connection and adds it to the user tree.
     *
     * @param connection - The LConnection object to be added
     * @param userId - The user ID
     * @param sessionId - The session ID (defaults to 999)
     *
     * @remarks
     * Uses the connection's applicationId as the randomizer in the composite key.
     */
    static addConnectionToTree(connection:LConnection, userId:number, sessionId: number = 999){
        let key = this.compositeKey(userId, sessionId, connection.applicationId);
        let FakeConcept: LConcept = CreateDefaultLConcept();
        var node: UserNode = new UserNode(key, FakeConcept,connection, null, null);
        this.addNodeToTree(node);
    }

    /**
     * Retrieves a node from the tree using composite key components.
     *
     * @param userId - The user ID
     * @param sessionId - The session ID
     * @param randomizer - Additional identifier (defaults to 999)
     * @returns The UserNode if found, null otherwise
     *
     * @remarks
     * Constructs a composite key from the parameters and performs a binary search.
     */
    static async getNodeFromTree(userId:number, sessionId: number, randomizer: number=999 ){
        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        let key = this.compositeKey(userId, sessionId, randomizer);
        if(this.root){
            var Node = this.root.getFromNode(key, this.root);
            return Node;
        }
        return null;
    }
    

    /**
     * Removes a node from the tree using composite key components.
     *
     * @param userId - The user ID
     * @param sessionId - The session ID (defaults to 999)
     * @param randomizer - Additional identifier (defaults to 999)
     *
     * @remarks
     * Constructs a composite key and removes the matching node while maintaining AVL balance.
     */
    static async removeNodeFromTree(userId:number, sessionId: number = 999, randomizer = 999){
        if(this.root){
            let key = this.compositeKey(userId, sessionId, randomizer);
            this.root = this.root.removeNode(this.root,key);
        }
    }

    /**
     * Counts the total number of nodes in the tree.
     *
     * @returns The total number of user nodes in the tree
     *
     * @remarks
     * Recursively traverses the entire tree to count all nodes. Returns 0 if the tree is empty.
     *
     * @example
     * ```typescript
     * const count = UserBinaryTree.countNumberOfNodes();
     * console.log(`Tree contains ${count} user data nodes`);
     * ```
     */
    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }





}