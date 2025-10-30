/**
 * @fileoverview Local Synchronization Data management for the Concept Connection System.
 * This module manages temporary storage of concepts and connections that need to be
 * synchronized with the local database periodically.
 * @module DataStructures/Local/LocalSyncData
 */

import { LConcept } from "./LConcept";
import { LConnection } from "./LConnection";
import { storeToDatabase } from "../../Database/NoIndexDb";

/**
 * Manages synchronization data for local concepts and connections.
 * Provides static methods for staging data before batch synchronization to the local database.
 *
 * @class LocalSyncData
 * @export
 */
export class LocalSyncData{
    /**
     * Static array storing concepts pending synchronization.
     * @type {LConcept[]}
     * @static
     */
    static  conceptsSyncArray:LConcept[] = [];

    /**
     * Static array storing connections pending synchronization.
     * @type {LConnection[]}
     * @static
     */
    static  connectionSyncArray: LConnection[] = [];


    /**
     * Checks if a concept already exists in the sync array.
     *
     * @static
     * @method CheckContains
     * @param {LConcept} concept - The concept to check
     * @returns {boolean} True if the concept exists, false otherwise
     */
    static  CheckContains(concept: LConcept){
        var contains = false;
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             contains = true;
         }
        }
        return contains;
    }

    /**
     * Removes related concepts and connections from sync arrays when a concept is deleted.
     * Removes the concept itself and any connections that reference it.
     *
     * @static
     * @method SyncDataDelete
     * @param {number} id - The ID of the concept being deleted
     * @returns {void}
     */
    static SyncDataDelete(id:number){
        for(var i=0; i< this.conceptsSyncArray.length;i++){
            if(id == this.conceptsSyncArray[i].id){
                this.conceptsSyncArray.splice(i, 1);
            }
        }
        for(var i=0;i<this.connectionSyncArray.length; i++){
            if(this.connectionSyncArray[i].ofTheConceptId == id || this.connectionSyncArray[i].toTheConceptId == id || this.connectionSyncArray[i].typeId == id){
                this.connectionSyncArray.splice(i,1);
            }
        }
    }

    /**
     * Checks if a connection already exists in the sync array.
     *
     * @static
     * @method CheckContainsConnection
     * @param {LConnection} connection - The connection to check
     * @returns {boolean} True if the connection exists, false otherwise
     */
    static  CheckContainsConnection(connection: LConnection){
        var contains = false;
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             contains = true;
         }
        }
        return contains;
    }

    /**
     * Adds a concept to the sync array for later batch synchronization.
     *
     * @static
     * @method AddConcept
     * @param {LConcept} concept - The concept to add
     * @returns {void}
     */
    static AddConcept(concept: LConcept){
        var contains = false;
       // ConceptsData.AddConceptTemporary(concept);
        if(!contains){
         this.conceptsSyncArray.push(concept);
        }
     }

     /**
      * Removes a concept from the sync array.
      *
      * @static
      * @method RemoveConcept
      * @param {LConcept} concept - The concept to remove
      * @returns {void}
      */
     static RemoveConcept(concept: LConcept){
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             this.conceptsSyncArray.splice(i, 1);
         }
        }
     }

     /**
      * Adds a connection to the sync array for later batch synchronization.
      *
      * @static
      * @method AddConnection
      * @param {LConnection} connection - The connection to add
      * @returns {void}
      */
     static AddConnection(connection: LConnection){
         this.connectionSyncArray.push(connection);
     }

     /**
      * Removes a connection from the sync array.
      *
      * @static
      * @method RemoveConnection
      * @param {LConnection} connection - The connection to remove
      * @returns {void}
      */
     static RemoveConnection(connection: LConnection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }


     /**
      * Synchronizes all pending concepts and connections to the local database.
      * Clears the sync arrays after successful synchronization.
      *
      * @static
      * @async
      * @method syncDataLocalDb
      * @returns {Promise<string>} Returns "done" when synchronization is complete
      */
     static async syncDataLocalDb(){
        if(this.conceptsSyncArray.length > 0){
            for(let i=0; i< this.conceptsSyncArray.length;i++){
                storeToDatabase("localconcept",this.conceptsSyncArray[i]);
            }
            this.conceptsSyncArray = [];
        }
         if(this.connectionSyncArray.length > 0){
            for(let i=0; i< this.connectionSyncArray.length;i++){
                storeToDatabase("localconnection",this.connectionSyncArray[i]);
            }
         this.connectionSyncArray = [];
        }
        return "done";
     }




}
