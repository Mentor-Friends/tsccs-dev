/**
 * @fileoverview Binary tree for managing connections indexed by type ID.
 * This module provides a specialized tree for efficient type-based connection lookups and variant retrieval.
 * @module DataStructures/ConnectionBinaryTree/ConnectionTypeTree
 */

import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";

/**
 * Binary tree data structure for managing connections indexed by type ID.
 *
 * @remarks
 * This class implements an AVL tree optimized for type-based connection lookups.
 * It enables efficient retrieval of all connections of a specific type and supports
 * variant management for grouping related connections.
 *
 * @example
 * ```typescript
 * const connection = new Connection(123, 1, 2, 3, 4, 5);
 * ConnectionTypeTree.addConnectionToTree(connection);
 * const variants = await ConnectionTypeTree.getTypeVariantsFromTree(5);
 * ```
 */
export class ConnectionTypeTree{
    /**
     * The root node of the type-indexed connection tree.
     * Null if the tree is empty.
     */
    static connectionTypeRoot: ConnectionNode | null = null;

    /**
     * Adds a connection node to the type-indexed tree.
     *
     * @param node - The ConnectionNode to be added
     * @returns The root node after insertion
     *
     * @remarks
     * Uses the addTypeNode method for type-based insertion with variant support.
     */
    static async addNodeToTree(node:ConnectionNode){
        if(this.connectionTypeRoot == null){
            this.connectionTypeRoot = node;
            return this.connectionTypeRoot;
        }
        else{
            this.connectionTypeRoot = this.connectionTypeRoot.addTypeNode(node,this.connectionTypeRoot,this.connectionTypeRoot.height);
        }
        return this.connectionTypeRoot;
    }

    /**
     * Waits for connection type data to be loaded.
     *
     * @returns A promise that resolves when data is loaded, or rejects after 25 seconds
     */
    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }

    /**
     * Periodically checks if connection type data has been loaded.
     *
     * @param resolve - The promise resolve function to call when data is loaded
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isConnectionTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(ConnectionTypeTree.checkFlag, 1000, resolve);
        }
      };

    /**
     * Creates a node from a connection and adds it to the type tree.
     *
     * @param connection - The Connection object to be added
     *
     * @remarks
     * Only adds the connection if it has a non-zero typeId.
     */
    static addConnectionToTree(connection:Connection){
        if(connection.typeId != 0){
            var node: ConnectionNode = new ConnectionNode(connection.typeId, connection, null, null);
            this.addNodeToTree(node);
        }

    }

    /**
     * Removes a specific connection variant from the tree.
     *
     * @param typeId - The type ID identifying the node
     * @param id - The connection ID to remove
     */
    static removeTypeConcept(typeId:number,id:number){
        if(this.connectionTypeRoot){
            this.connectionTypeRoot = this.connectionTypeRoot.removeNodeWithVariants(this.connectionTypeRoot,typeId,id);

        }
    }

    /**
     * Retrieves a node from the tree by its type ID.
     *
     * @param id - The numeric type ID to search for
     * @returns The ConnectionNode if found, the root node otherwise
     */
    static getNodeFromTree(id:number){



        if(this.connectionTypeRoot){
            var Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
            return Node;
        }
        return this.connectionTypeRoot;
    }

    /**
     * Retrieves all connection variants for a specific type ID.
     *
     * @param typeId - The type ID to search for
     * @returns An array of Connection objects of the specified type
     *
     * @remarks
     * Returns the primary connection and all its variants that share the same type ID.
     */
    static async getTypeVariantsFromTree(typeId:number){
        var connection : Connection[] = [];

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return connection;
        // }

            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                connection.push(Node?.value);
                for(let i=0; i< Node.variants.length; i++){
                    connection.push(Node.variants[i].value);
                }
            
            return connection;
        }


    }






    /**
     * Retrieves all connection variants for a specific type ID filtered by user ID.
     *
     * @param typeId - The type ID to search for
     * @param userId - The user ID to filter by
     * @returns An array of Connection objects of the specified type belonging to the specified user
     *
     * @remarks
     * Useful for user-specific connection management and filtering.
     */
    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : Connection[] = [];

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