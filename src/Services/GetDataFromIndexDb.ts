/**
 * IndexedDB Data Retrieval Service
 *
 * This module provides comprehensive functionality for loading data from IndexedDB into
 * in-memory data structures. It handles both regular and local database data, loading
 * connections and concepts into their respective memory structures for efficient access.
 *
 * The service supports two data contexts:
 * - Global/synced data: Loaded from standard IndexedDB stores
 * - Local data: Loaded from local-only IndexedDB stores for offline or user-specific data
 *
 * @module GetDataFromIndexDb
 */

import { ConceptsData } from "../DataStructures/ConceptData";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { getAllFromLocalDb } from "../Database/NoIndexDb";
import { getFromDatabaseWithTypeOld } from "../Database/NoIndexDb";

/**
 * Loads data from the standard IndexedDB stores into memory.
 *
 * This is the main entry point for initializing the application's in-memory data structures
 * from persisted database records. Currently focuses on loading connections, with concept
 * loading functionality commented out for optimization or architectural reasons.
 *
 * The function delegates to specialized helpers to load different data types, ensuring
 * proper separation of concerns and maintainability.
 *
 * @returns A promise that resolves when all data has been loaded into memory
 *
 * @example
 * ```typescript
 * // Initialize application data from IndexedDB
 * await GetDataFromIndexDb();
 * console.log('Global data loaded successfully');
 *
 * // Access loaded connections
 * const connections = ConnectionData.getAllConnections();
 * console.log('Loaded connections:', connections.length);
 * ```
 *
 * @remarks
 * - Concept loading is currently disabled (commented out lines 11-21)
 * - Only connections are actively loaded into memory
 * - This function is typically called during application initialization
 * - Loads from the standard database, not the local-only database
 *
 * @see {@link GetConnectionsFromIndexDb} for connection loading implementation
 * @see {@link GetDataFromIndexDbLocal} for local database equivalent
 * @see {@link ConnectionData.AddConnectionToMemory} for how connections are stored
 */
export  async function GetDataFromIndexDb(){

   // var conceptList = await getFromDatabaseWithTypeOld("concept");

    GetConnectionsFromIndexDb();
    // console.log(conceptList);

        // if(Array.isArray(conceptList)){
        //     for(var i=0 ;i < conceptList.length ;i++){
        //         ConceptsData.AddConcept(conceptList[i]);
        //     }

        // }
 }

/**
 * Loads data from the local IndexedDB stores into memory.
 *
 * This function serves as the local database equivalent of GetDataFromIndexDb, handling
 * data that is stored in local-only database stores. This is typically used for user-specific
 * data, offline data, or data that should not be synchronized across devices.
 *
 * Like its global counterpart, concept loading is currently disabled, with only connection
 * data being actively loaded into the LocalConnectionData memory structure.
 *
 * @returns A promise that resolves when all local data has been loaded into memory
 *
 * @example
 * ```typescript
 * // Initialize local application data from IndexedDB
 * await GetDataFromIndexDbLocal();
 * console.log('Local data loaded successfully');
 *
 * // Access loaded local connections
 * const localConnections = LocalConnectionData.getAllConnections();
 * console.log('Loaded local connections:', localConnections.length);
 * ```
 *
 * @remarks
 * - Concept loading is currently disabled (commented out lines 25-33)
 * - Only local connections are actively loaded into memory
 * - Uses getAllFromLocalDb instead of getFromDatabaseWithTypeOld for local stores
 * - Typically called during initialization for applications supporting offline mode
 *
 * @see {@link GetConnectionsFromIndexDbLocal} for local connection loading implementation
 * @see {@link GetDataFromIndexDb} for standard database equivalent
 * @see {@link LocalConnectionData.AddConnection} for how local connections are stored
 */
 export async function GetDataFromIndexDbLocal(){
   // var conceptList = await getAllFromLocalDb("localconcept");

    GetConnectionsFromIndexDbLocal();
    // if(Array.isArray(conceptList)){
    //     for(var i=0 ;i < conceptList.length ;i++){
    //         LocalConceptsData.AddConcept(conceptList[i]);
    //     }

    // }
 }

/**
 * Loads all connections from the standard IndexedDB database into memory.
 *
 * This internal helper function retrieves all connection records from the database
 * and adds them to the ConnectionData memory structure. Connections represent
 * relationships or links between concepts in the system.
 *
 * This function is called by GetDataFromIndexDb as part of the initialization process,
 * ensuring all connection data is available in memory for efficient querying and traversal.
 *
 * @returns A promise that resolves when all connections have been loaded into memory
 *
 * @example
 * ```typescript
 * // This function is typically called internally by GetDataFromIndexDb
 * await GetConnectionsFromIndexDb();
 *
 * // Connections are now available in memory
 * const allConnections = ConnectionData.getAllConnections();
 * ```
 *
 * @remarks
 * - Retrieves records of type "connection" from the database
 * - Iterates through all retrieved connections and adds each to ConnectionData
 * - Only processes if the retrieved data is an array
 * - Internal function, not exported for external use
 *
 * @see {@link ConnectionData.AddConnectionToMemory} for how connections are stored
 * @see {@link getFromDatabaseWithTypeOld} for database query implementation
 * @see {@link GetDataFromIndexDb} for the parent initialization function
 */
 async function GetConnectionsFromIndexDb(){
    var connectionList = await getFromDatabaseWithTypeOld("connection");
    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            ConnectionData.AddConnectionToMemory(connectionList[i]);
        }

    }

 }

/**
 * Loads all local connections from the local IndexedDB database into memory.
 *
 * This internal helper function retrieves all connection records from the local database
 * stores and adds them to the LocalConnectionData memory structure. Local connections
 * represent relationships that are specific to the local context, such as user-created
 * connections that haven't been synced or are intentionally kept local.
 *
 * This function is called by GetDataFromIndexDbLocal as part of the local data
 * initialization process, ensuring offline functionality and local-only features work correctly.
 *
 * @returns A promise that resolves when all local connections have been loaded into memory
 *
 * @example
 * ```typescript
 * // This function is typically called internally by GetDataFromIndexDbLocal
 * await GetConnectionsFromIndexDbLocal();
 *
 * // Local connections are now available in memory
 * const localConns = LocalConnectionData.getAllConnections();
 * ```
 *
 * @remarks
 * - Retrieves records from the "localconnection" store using getAllFromLocalDb
 * - Different from GetConnectionsFromIndexDb in that it targets local-only stores
 * - Iterates through all retrieved connections and adds each to LocalConnectionData
 * - Only processes if the retrieved data is an array
 * - Internal function, not exported for external use
 *
 * @see {@link LocalConnectionData.AddConnection} for how local connections are stored
 * @see {@link getAllFromLocalDb} for local database query implementation
 * @see {@link GetDataFromIndexDbLocal} for the parent local initialization function
 */
 async function GetConnectionsFromIndexDbLocal(){
    var connectionList = await getAllFromLocalDb("localconnection");

    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            LocalConnectionData.AddConnection(connectionList[i]);
        }
    }
 }

