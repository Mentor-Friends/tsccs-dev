/**
 * @fileoverview ConnectionData module for managing connection storage and retrieval in CCS-JS.
 * This module provides centralized management of connections using binary tree indexing
 * for efficient ID-based and type-based lookups.
 * @module DataStructures/ConnectionData
 */

import { removeFromDatabase, storeToDatabase } from "../Database/NoIndexDb";
import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Connection } from "./Connection";
import { ConnectionBinaryTree } from "./ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "./ConnectionBinaryTree/ConnectionTypeTree";

/**
 * Central repository for managing all connections in the CCS system.
 * Provides binary tree indexing for efficient connection retrieval by ID and type.
 * Maintains both in-memory (tree structures) and persistent (IndexedDB) storage.
 *
 * @class ConnectionData
 * @example
 * ```typescript
 * // Add a connection to the system
 * ConnectionData.AddConnection(myConnection);
 *
 * // Retrieve a connection by ID
 * const connection = await ConnectionData.GetConnection(123);
 *
 * // Get connections of a composition type
 * const connections = await ConnectionData.GetConnectionsOfCompositionLocal(10);
 * ```
 *
 * @remarks
 * This class uses static methods and properties, functioning as a singleton data store.
 * It coordinates ID-based and type-based indexing for optimized query performance.
 */
export class ConnectionData{

    /** Name identifier for this data structure */
    name: string;

    /**
     * Creates a new ConnectionData instance.
     * @remarks This is rarely instantiated as the class primarily uses static methods.
     */
    constructor(){
        this.name = "Connection Array";
    }

    /** Legacy array storage for connections (deprecated in favor of tree structures) */
    static  connectionArray:Connection[] = [];

    /** Dictionary-style storage for quick connection lookups by ID */
    static connectionDictionary:Connection[] = [];

    /**
     * Checks if a connection already exists in the connections array.
     *
     * @param {Connection} connection - The connection to check for existence
     * @returns {boolean} True if the connection exists, false otherwise
     *
     * @example
     * ```typescript
     * const exists = ConnectionData.CheckContains(myConnection);
     * if (!exists) {
     *   // Add the connection
     * }
     * ```
     */
    static  CheckContains(connection: Connection){
        var contains = false;
        for(var i=0; i<this.connectionArray.length; i++){
         if(this.connectionArray[i].id == connection.id){
             contains = true;
         }
        }

        return contains;
    }

    /**
     * Adds a connection to persistent storage (IndexedDB) only.
     * Does not update in-memory tree structures.
     *
     * @param {Connection} connection - The connection to store persistently
     *
     * @example
     * ```typescript
     * ConnectionData.AddConnectionToStorage(myConnection);
     * ```
     */
    static AddConnectionToStorage(connection:Connection){
        storeToDatabase("connection", connection);
    }


    /**
     * Adds a connection to both persistent storage and all in-memory tree indexes.
     * This is the primary method for adding connections to the system.
     *
     * @param {Connection} connection - The connection to add
     *
     * @example
     * ```typescript
     * const newConnection = new Connection(...);
     * ConnectionData.AddConnection(newConnection);
     * ```
     *
     * @remarks
     * Updates two tree structures:
     * - ConnectionBinaryTree (ID-based lookup)
     * - ConnectionTypeTree (type-based lookup)
     * Skips temporary connections (isTemp = true)
     */
    static AddConnection(connection: Connection){
    //    var contains = this.CheckContains(connection);
    //     if(contains){
    //         this.RemoveConnection(connection);
    //     }
    //     if(connection.id != 0 || connection.isTemp){

    //         storeToDatabase("connection",connection);
    //     }
    //     this.connectionArray.push(connection);
    if(!connection.isTemp){
        storeToDatabase("connection", connection);
        ConnectionBinaryTree.addConnectionToTree(connection);
        ConnectionTypeTree.addConnectionToTree(connection);
    }

    }

    /**
     * Adds a connection to in-memory tree structures only, without persisting to storage.
     * Useful for temporary connections or when storage is handled separately.
     *
     * @param {Connection} connection - The connection to add to memory
     *
     * @example
     * ```typescript
     * ConnectionData.AddConnectionToMemory(temporaryConnection);
     * ```
     *
     * @remarks
     * Updates tree structures without touching IndexedDB.
     * Skips temporary connections (isTemp = true)
     */
    static AddConnectionToMemory(connection:Connection){
        if(!connection.isTemp){
        ConnectionBinaryTree.addConnectionToTree(connection);
        ConnectionTypeTree.addConnectionToTree(connection);
        }
    }

    /**
     * Adds a connection to the dictionary for quick ID-based lookups.
     *
     * @param {Connection} connection - The connection to add to dictionary
     *
     * @example
     * ```typescript
     * ConnectionData.AddToDictionary(myConnection);
     * ```
     */
    static AddToDictionary(connection: Connection){
        this.connectionDictionary[connection.id] = connection;
    }

    /**
     * Removes a connection from all storage locations (memory trees and persistent storage).
     *
     * @param {Connection} connection - The connection to remove
     *
     * @example
     * ```typescript
     * ConnectionData.RemoveConnection(obsoleteConnection);
     * ```
     *
     * @remarks
     * Removes from:
     * - IndexedDB persistent storage
     * - ConnectionBinaryTree (ID index)
     * - ConnectionTypeTree (type index)
     * Only processes connections with valid IDs (id != 0)
     */
    static RemoveConnection(connection: Connection){
    //    for(var i=0; i<this.connectionArray.length; i++){
    //     if(this.connectionArray[i].id == connection.id){
    //         this.connectionArray.splice(i, 1);
    //     }
    //    }
       if(connection.id != 0){
         removeFromDatabase("connection",connection.id);
         ConnectionBinaryTree.removeNodeFromTree(connection.id);
         ConnectionTypeTree.removeTypeConcept(connection.typeId, connection.id);
       }
    }

    /**
     * Returns the root node of the connection binary tree.
     * Used for direct tree traversal or debugging.
     *
     * @returns {Node | null} The root node of the connection tree
     *
     * @example
     * ```typescript
     * const tree = ConnectionData.GetConnectionTree();
     * if (tree) {
     *   console.log("Tree root:", tree.key);
     * }
     * ```
     */
    static GetConnectionTree(){
        return ConnectionBinaryTree.connectionroot;
    }

    /**
     * Returns the root node of the connection type tree.
     * Used for direct tree traversal or debugging.
     *
     * @returns {Node | null} The root node of the connection type tree
     *
     * @example
     * ```typescript
     * const tree = ConnectionData.GetConnectionTypeTree();
     * ```
     */
    static GetConnectionTypeTree(){
        return ConnectionTypeTree.connectionTypeRoot;
    }

    /**
     * Retrieves a connection by its ID from the binary tree index.
     *
     * @param {number} id - The connection ID to retrieve
     * @returns {Promise<Connection>} The connection if found, or a default connection if not found
     *
     * @example
     * ```typescript
     * const connection = await ConnectionData.GetConnection(123);
     * if (connection.id !== 0) {
     *   console.log("Found connection:", connection.ofTheConceptId, "->", connection.toTheConceptId);
     * }
     * ```
     *
     * @remarks
     * Returns a default connection (id = 0) if the connection is not found.
     * Uses ConnectionBinaryTree for O(log n) lookup performance.
     */
    static async GetConnection(id: number){
    //    var  myConcept: Connection|null;
    //    myConcept = null;
    //     for(var i=0; i<this.connectionArray.length; i++){
    //         if(this.connectionArray[i].id == id){
    //             myConcept = this.connectionArray[i];
    //         }
    //     }
    //     return myConcept;

    var  myConnection: Connection = new Connection(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    var node = await ConnectionBinaryTree.getNodeFromTree(id);
    if(node?.value){
        var returnedConcept = node.value;
        if(returnedConcept){
            myConnection = returnedConcept as Connection;
        }
    }
    // if(myConcept.id == 0 || myConcept == null){
    //     for(var i=0; i<this.conceptsArray.length; i++){
    //         if(this.conceptsArray[i].id == id){
    //             myConcept = this.conceptsArray[i];
    //         }
    //     }
    // }
    return myConnection;
    }

    /**
     * Retrieves all connections of a specific composition type ID from the type tree.
     * Includes the main connection and all its variants.
     *
     * @param {number} id - The type ID to filter by
     * @returns {Promise<Connection[]>} Array of connections with the specified type
     *
     * @example
     * ```typescript
     * const connections = await ConnectionData.GetConnectionsOfCompositionLocal(10);
     * console.log(`Found ${connections.length} connections of type 10`);
     * ```
     *
     * @remarks
     * Uses ConnectionTypeTree to retrieve the main connection and all variant connections.
     * Returns an empty array if no connections are found for the type.
     */
    static async GetConnectionsOfCompositionLocal(id: number){
        var connections :Connection[] = [];
        var node = await ConnectionTypeTree.getNodeFromTree(id);
        if(node?.value){
            var returnedConnection = node.value;
            if(returnedConnection){
                let myConnection = returnedConnection as Connection;
                connections.push(myConnection);
                for(let i=0; i<node.variants.length;i++){
                    connections.push(node.variants[i].value);
                }
            }
        }
        // if(myConcept.id == 0 || myConcept == null){
        //     for(var i=0; i<this.conceptsArray.length; i++){
        //         if(this.conceptsArray[i].id == id){
        //             myConcept = this.conceptsArray[i];
        //         }
        //     }
        // }
        return connections;
    }

    /**
     * Returns the name identifier of this data structure instance.
     *
     * @returns {string} The name "Connection Array"
     *
     * @example
     * ```typescript
     * const connectionData = new ConnectionData();
     * console.log(connectionData.getName()); // "Connection Array"
     * ```
     */
    getName(){
        return this.name;
    }
}