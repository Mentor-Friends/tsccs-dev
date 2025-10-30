/**
 * @fileoverview Local Connection Data management for the Concept Connection System.
 * This module provides static methods for managing local connection data, including
 * adding, removing, and retrieving connections from memory and database storage.
 * @module DataStructures/Local/LocalConnectionData
 */

import {storeToDatabase } from "../../Database/NoIndexDb";
import { IdentifierFlags } from "../IdentifierFlags";
import { LConnection } from "./LConnection";

/**
 * Manages local connection data storage and retrieval.
 * Provides static methods for managing connections in memory and database,
 * with support for querying connections by composition and waiting for data loads.
 *
 * @class LocalConnectionData
 * @export
 */
export class LocalConnectionData{
    /**
     * Name identifier for this data structure.
     * @type {string}
     */
    name: string;

    /**
     * Creates a new LocalConnectionData instance.
     *
     * @constructor
     */
    constructor(){
        this.name = "Connection Array";
    }

    /**
     * Static array storing all local connections in memory.
     * @type {LConnection[]}
     * @static
     */
    static  connectionArray:LConnection[] = [];

    /**
     * Static dictionary/map for fast connection lookups by ID.
     * @type {LConnection[]}
     * @static
     */
    static connectionDictionary:LConnection[] = [];

    /**
     * Checks if a connection already exists in the array.
     *
     * @static
     * @method CheckContains
     * @param {LConnection} connection - The connection to check
     * @returns {boolean} True if the connection exists, false otherwise
     */
    static  CheckContains(connection: LConnection){
        var contains = false;
        for(var i=0; i<this.connectionArray.length; i++){
         if(this.connectionArray[i].id == connection.id){
             contains = true;
         }
        }

        return contains;
    }


    /**
     * Adds a connection to the local storage system.
     * If the connection already exists, it is removed and re-added.
     * Stores non-temporary connections with valid IDs to the database.
     *
     * @static
     * @method AddConnection
     * @param {LConnection} connection - The connection to add
     * @returns {void}
     */
    static AddConnection(connection: LConnection){
       var contains = this.CheckContains(connection);
        if(contains){
            this.RemoveConnection(connection);
        }
        if(connection.id != 0 || connection.isTemp){

            storeToDatabase("localconnection",connection);
        }
        this.connectionArray.push(connection);
    }

    /**
     * Adds a connection to the fast lookup dictionary.
     *
     * @static
     * @method AddToDictionary
     * @param {LConnection} connection - The connection to add to dictionary
     * @returns {void}
     */
    static AddToDictionary(connection: LConnection){
        this.connectionDictionary[connection.id] = connection;
    }

    /**
     * Removes a connection from the local storage system.
     * Removes from both the array and the database (if it has a valid ID).
     *
     * @static
     * @method RemoveConnection
     * @param {LConnection} connection - The connection to remove
     * @returns {void}
     */
    static RemoveConnection(connection: LConnection){
       for(var i=0; i<this.connectionArray.length; i++){
        if(this.connectionArray[i].id == connection.id){
            this.connectionArray.splice(i, 1);
        }
       }
       if(connection.id != 0){
      //  removeFromDatabase("connection",connection.id);

       }
    }

    /**
     * Retrieves a connection by its ID.
     *
     * @static
     * @method GetConnection
     * @param {number} id - The ID of the connection to retrieve
     * @returns {LConnection | null} The connection if found, null otherwise
     */
    static GetConnection(id: number){
       var  myConcept: LConnection|null;
       myConcept = null;
        for(var i=0; i<this.connectionArray.length; i++){
            if(this.connectionArray[i].id == id){
                myConcept = this.connectionArray[i];
            }
        }
        return myConcept;
    }


    /**
     * Waits for the local connection data to finish loading.
     * Uses a polling mechanism to check the loading flag.
     *
     * @static
     * @async
     * @method waitForDataToLoad
     * @returns {Promise<string>} Resolves with "done" when loaded, rejects after 25 seconds
     */
    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    /**
     * Polling function that checks if connection data has finished loading.
     *
     * @static
     * @method checkFlag
     * @param {Function} resolve - The promise resolve function
     * @returns {*} Resolves immediately if loaded, otherwise schedules next check
     */
    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalConnectionLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalConnectionData.checkFlag, 1000, resolve);
        }
      };

    /**
     * Retrieves all connections of a specific composition (by type ID).
     * Waits for data to load if necessary.
     *
     * @static
     * @async
     * @method GetConnectionsOfCompositionLocal
     * @param {number} id - The composition type ID to filter by
     * @returns {Promise<LConnection[]>} Array of connections with the specified type
     */
    static async GetConnectionsOfCompositionLocal(id: number){
        var connectionList:LConnection[] = [];

        try{
            // var data = await this.waitForDataToLoad();

        for(var i=0; i<this.connectionArray.length; i++){
            if(this.connectionArray[i].typeId == id){
                connectionList.push(this.connectionArray[i]);
            }
        }
        return connectionList;
    }
    catch(exception){
        return connectionList;
    }
    }

    /**
     * Gets the name of this data structure.
     *
     * @method getName
     * @returns {string} The name identifier
     */
    getName(){
        return this.name;
    }
}
