/**
 * @fileoverview Binary tree data structure for managing connections.
 * This module provides an AVL tree implementation for efficient storage and retrieval of Connection objects.
 * @module DataStructures/ConnectionBinaryTree/ConnectionBinaryTree
 */

import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";

/**
 * Binary tree data structure for managing connections with efficient ID-based lookup.
 *
 * @remarks
 * This class implements a self-balancing AVL tree for storing Connection objects.
 * It provides O(log n) search, insertion, and deletion operations. The tree supports
 * asynchronous data loading with timeout capabilities and integrates with the
 * IdentifierFlags system for data synchronization.
 *
 * @example
 * ```typescript
 * const connection = new Connection(123, ...);
 * ConnectionBinaryTree.addConnectionToTree(connection);
 * const node = await ConnectionBinaryTree.getNodeFromTree(123);
 * ```
 */
export class ConnectionBinaryTree{
    /**
     * The root node of the connection binary tree.
     * Null if the tree is empty.
     */
    static connectionroot: ConnectionNode | null = null;

    /**
     * Adds a connection node to the binary tree.
     *
     * @param node - The ConnectionNode to be added to the tree
     * @returns The root node after insertion
     *
     * @remarks
     * If the tree is empty, the provided node becomes the root.
     * Otherwise, the node is inserted using the AVL tree balancing algorithm.
     *
     * @example
     * ```typescript
     * const node = new ConnectionNode(123, connection, null, null);
     * ConnectionBinaryTree.addNodeToTree(node);
     * ```
     */
    static addNodeToTree(node:ConnectionNode){
        if(this.connectionroot == null){
            this.connectionroot = node;
            return this.connectionroot;
        }
        else{
            this.connectionroot = this.connectionroot.addNode(node,this.connectionroot,this.connectionroot.height);
        }
    }

    /**
     * Creates a node from a connection and adds it to the tree.
     *
     * @param connection - The Connection object to be added to the tree
     *
     * @remarks
     * This is a convenience method that wraps the connection in a ConnectionNode
     * and adds it to the tree. The node is keyed by the connection's ID.
     *
     * @example
     * ```typescript
     * const connection = new Connection(123, 1, 2, 3, 4, 5);
     * ConnectionBinaryTree.addConnectionToTree(connection);
     * ```
     */
    static addConnectionToTree(connection:Connection){
        var node: ConnectionNode = new ConnectionNode(connection.id, connection, null, null);
        this.addNodeToTree(node);
    }

    /**
     * Waits for connection data to be loaded into the tree.
     *
     * @returns A promise that resolves with "done" when data is loaded, or rejects with "not" after 25 seconds
     *
     * @remarks
     * This method polls the IdentifierFlags.isConnectionLoaded flag every second.
     * Useful for ensuring data is ready before performing operations on the tree.
     *
     * @example
     * ```typescript
     * try {
     *   await ConnectionBinaryTree.waitForDataToLoad();
     *   console.log("Connection data loaded");
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
     * Periodically checks if connection data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     *
     * @remarks
     * This method recursively checks the IdentifierFlags.isConnectionLoaded flag every 1000ms.
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isConnectionLoaded){
            return resolve("done");
        }
        else{
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
      };

      /**
       * Removes a connection node from the tree by its ID.
       *
       * @param id - The numeric ID of the connection to remove
       *
       * @remarks
       * This method removes a node from the tree while maintaining AVL balance.
       * The tree is automatically rebalanced after removal.
       *
       * @example
       * ```typescript
       * await ConnectionBinaryTree.removeNodeFromTree(123);
       * ```
       */
      static async removeNodeFromTree(id:number){
        if(this.connectionroot){
            this.connectionroot = this.connectionroot.removeNode(this.connectionroot,id);
        }
      }

    /**
     * Retrieves a connection node from the tree by its ID.
     *
     * @param id - The numeric ID of the connection to retrieve
     * @returns The ConnectionNode if found, the root node otherwise
     *
     * @remarks
     * This method performs a binary search through the tree using the connection ID as the key.
     * The search has O(log n) time complexity in a balanced tree.
     *
     * @example
     * ```typescript
     * const node = await ConnectionBinaryTree.getNodeFromTree(123);
     * if (node) {
     *   console.log("Found connection:", node.value);
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
        if(this.connectionroot){
            var Node = this.connectionroot.getFromNode(id, this.connectionroot);
            return Node;
        }
        return this.connectionroot;
    }



}