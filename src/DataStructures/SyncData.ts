/**
 * @fileoverview SyncData module for managing synchronization of concepts and connections in CCS-JS.
 * This module provides queuing and batch synchronization of local changes to the backend server,
 * with support for transactional operations and rollback capabilities.
 * @module DataStructures/SyncData
 */

import { storeToDatabase } from "./../Database/NoIndexDb";
import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { CreateTheConnectionApi } from "../Api/Create/CreateTheConnectionApi";
import { Concept } from "./Concept";
import { ConceptsData } from "./ConceptData";
import { Connection } from "./Connection";
import { ConnectionData } from "./ConnectionData";
import { ReservedIds } from "./ReservedIds";
import { InnerActions } from "./Transaction/Transaction";

/**
 * Container for transactional sync data.
 * Stores concepts and connections that are part of a transaction.
 */
type syncContainer = {
    /** Unique transaction identifier */
    id: string,
    /** Transaction data containing concepts and connections */
    data: InnerActions
    /** ISO timestamp of when the transaction was created */
    createdDate: string,
}

/**
 * Manages synchronization of concepts and connections between local storage and backend.
 * Provides queuing, batch processing, and transaction support for data synchronization.
 *
 * @class SyncData
 * @example
 * ```typescript
 * // Add items to sync queue
 * SyncData.AddConcept(myConcept);
 * SyncData.AddConnection(myConnection);
 *
 * // Sync to backend
 * await SyncData.SyncDataOnline();
 *
 * // Transaction support
 * await SyncData.initializeTransaction("txn-123");
 * await SyncData.markTransactionActions("txn-123", actions);
 * await SyncData.SyncDataOnline("txn-123");
 * ```
 *
 * @remarks
 * This class provides both immediate and batched synchronization modes.
 * Transactions are automatically cleaned up after 7 days (604800000 ms).
 */
export class SyncData{
    /** Queue of concepts waiting to be synchronized to backend */
    static  conceptsSyncArray:Concept[] = [];

    /** Queue of connections waiting to be synchronized to backend */
    static  connectionSyncArray: Connection[] = [];

    /** Collection of transactional sync operations */
    static transactionCollections: syncContainer[] = []

    /**
     * Checks if a concept already exists in the sync queue.
     *
     * @param {Concept} concept - The concept to check
     * @returns {boolean} True if the concept is in the sync queue, false otherwise
     *
     * @private
     */
    static  CheckContains(concept: Concept){
        var contains = false;
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             contains = true;
         }
        }
        return contains;
    }

    /**
     * Removes all sync data related to a specific concept ID.
     * Removes the concept and any connections that reference it.
     *
     * @param {number} id - The concept ID to remove from sync queues
     *
     * @example
     * ```typescript
     * SyncData.SyncDataDelete(123);
     * ```
     *
     * @remarks
     * Also removes connections where the concept appears as ofTheConceptId, toTheConceptId, or typeId.
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
     * Checks if a connection already exists in the sync queue.
     *
     * @param {Connection} connection - The connection to check
     * @returns {boolean} True if the connection is in the sync queue, false otherwise
     *
     * @private
     */
    static  CheckContainsConnection(connection: Connection){
        var contains = false;
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             contains = true;
         }
        }
        return contains;
    }

    /**
     * Adds a concept to the synchronization queue.
     *
     * @param {Concept} concept - The concept to add to sync queue
     *
     * @example
     * ```typescript
     * SyncData.AddConcept(myConcept);
     * // Later...
     * await SyncData.SyncDataOnline();
     * ```
     */
    static AddConcept(concept: Concept){
        var contains = false;
       // ConceptsData.AddConceptTemporary(concept);
        if(!contains){
         this.conceptsSyncArray.push(concept);
        }
     }



     /**
     * Removes a concept from the synchronization queue.
     *
     * @param {Concept} concept - The concept to remove from sync queue
     *
     * @example
     * ```typescript
     * SyncData.RemoveConcept(myConcept);
     * ```
     */
     static RemoveConcept(concept: Concept){
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             this.conceptsSyncArray.splice(i, 1);
         }
        }
     }

     /**
     * Adds a connection to the synchronization queue.
     *
     * @param {Connection} connection - The connection to add to sync queue
     *
     * @example
     * ```typescript
     * SyncData.AddConnection(myConnection);
     * // Later...
     * await SyncData.SyncDataOnline();
     * ```
     */
     static AddConnection(connection: Connection){
         this.connectionSyncArray.push(connection);
     }

     /**
     * Removes a connection from the synchronization queue.
     *
     * @param {Connection} connection - The connection to remove from sync queue
     *
     * @example
     * ```typescript
     * SyncData.RemoveConnection(myConnection);
     * ```
     */
     static RemoveConnection(connection: Connection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }

     /**
     * Synchronizes queued data to the backend server.
     * Can sync either a specific transaction or all queued data.
     *
     * @param {string} [transactionId] - Optional transaction ID to sync specific transaction
     * @returns {Promise<string>} Returns "done" when synchronization completes
     * @throws {Error} If synchronization fails
     *
     * @example
     * ```typescript
     * // Sync all queued data
     * await SyncData.SyncDataOnline();
     *
     * // Sync specific transaction
     * await SyncData.SyncDataOnline("txn-123");
     * ```
     *
     * @remarks
     * - If transactionId is provided, only that transaction is synced and removed from collection
     * - Otherwise, all queued concepts and connections are synced
     * - Automatically cleans up transactions older than 7 days (604800000 ms)
     * - Adds data to permanent storage before sending to backend
     */
     static async  SyncDataOnline(transactionId?:string){
        try{
            let conceptsArray: Concept[] = [];
            let connectionsArray: Connection[] = [];
            if (transactionId && this.transactionCollections.some(tran => tran.id == transactionId)) {
                const transaction = this.transactionCollections.find(tran => tran.id == transactionId)
                // remove current transaction from list
                this.transactionCollections = this.transactionCollections.filter(tran => tran.id != transactionId)
                // remove old query actions older than 15 days
                this.transactionCollections = this.transactionCollections.filter(tran => new Date(tran.createdDate).getTime() > (new Date().getTime() - 604800000 ))
                
                if (!transaction) return
                conceptsArray = transaction.data.concepts.slice();
                connectionsArray = transaction.data.connections.slice();
                if(conceptsArray.length > 0){
                    await CreateTheConceptApi(conceptsArray);
                }
                if(connectionsArray.length > 0){
                    await CreateTheConnectionApi(connectionsArray);
                }
            }
            else{
                for(let i=0;i<this.conceptsSyncArray.length;i++){
                    ConceptsData.AddConcept(this.conceptsSyncArray[i]);
                }
        
                for(let i=0;i<this.connectionSyncArray.length;i++){
                    ConnectionData.AddConnection(this.connectionSyncArray[i]);
                }

                if(this.conceptsSyncArray.length > 0){
                    conceptsArray = this.conceptsSyncArray.slice();
                    this.conceptsSyncArray = [];
                    await CreateTheConceptApi(conceptsArray);
                }
                if(this.connectionSyncArray.length > 0){
        
                    // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
                    //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
                    // }
                    connectionsArray = this.connectionSyncArray.slice();
                    this.connectionSyncArray = [];
                    await CreateTheConnectionApi(connectionsArray);
                }
            }
            return "done";
        }
        catch(err){
            throw err;
        }


     }

    /**
     * Initializes a new transaction container for tracking related changes.
     *
     * @param {string} transactionId - Unique identifier for the transaction
     *
     * @example
     * ```typescript
     * await SyncData.initializeTransaction("txn-123");
     * // Make changes...
     * await SyncData.markTransactionActions("txn-123", actions);
     * await SyncData.SyncDataOnline("txn-123");
     * ```
     *
     * @remarks
     * Does nothing if a transaction with the same ID already exists.
     * Creates an empty container with the current timestamp.
     */
    static async initializeTransaction(transactionId: string) {
        try {
    
            if (this.transactionCollections.some(item => item.id == transactionId)) return
    
            this.transactionCollections.push({
                id: transactionId,
                data: {concepts: [], connections: []},
                createdDate: new Date().toISOString()
            })
        } catch (error) {
            console.log('error in initializeTransaction', error)
        }
     }

    /**
     * Marks specific actions as part of a transaction.
     * Removes these actions from the general sync queues to prevent duplication.
     *
     * @param {string} transactionId - The transaction ID
     * @param {InnerActions} actions - The concepts and connections to mark as part of transaction
     *
     * @example
     * ```typescript
     * const actions = {
     *   concepts: [concept1, concept2],
     *   connections: [connection1, connection2]
     * };
     * await SyncData.markTransactionActions("txn-123", actions);
     * ```
     *
     * @remarks
     * - Updates the transaction container with the actions
     * - Removes marked items from conceptsSyncArray and connectionSyncArray
     * - Matches items by both id and ghostId to handle temporary IDs
     */
    static async markTransactionActions(transactionId: string, actions: InnerActions) {
        // remove marked 
        try {
    
            this.transactionCollections = this.transactionCollections.map(tran => {
                if (tran.id == transactionId) {
                    return {
                        ...tran,
                        data: JSON.parse(JSON.stringify(actions))
                    }
                } else return tran
            })
            
            this.conceptsSyncArray = this.conceptsSyncArray.filter(concept => !actions.concepts.some(con => con.id == concept.id || con.ghostId == concept.id))
            this.connectionSyncArray = this.connectionSyncArray.filter(connection => !actions.connections.some(con => con.id == connection.id || con.ghostId == connection.id))
        } catch (error) {
            console.log('error in markTransactionActions', error)
        }
     }

    /**
     * Rolls back a transaction by removing it from the transaction collection.
     *
     * @param {string} transactionId - The transaction ID to rollback
     * @param {InnerActions} actions - The actions to rollback (currently unused)
     *
     * @example
     * ```typescript
     * await SyncData.rollbackTransaction("txn-123", actions);
     * ```
     *
     * @remarks
     * Currently only removes the transaction from collection if it doesn't already exist.
     * The logic may need review as it checks for existence before removal.
     */
    static async rollbackTransaction(transactionId: string, actions: InnerActions) {
        try {
            if (this.transactionCollections.some(item => item.id == transactionId)) return
            this.transactionCollections = this.transactionCollections.filter(tran => tran.id != transactionId)
        } catch (err) {console.log('LocalSyncData, roll', err)}
     }


     /**
     * Synchronizes queued data to local IndexedDB storage only (not to backend).
     *
     * @returns {Promise<string>} Returns "done" when local sync completes
     *
     * @example
     * ```typescript
     * await SyncData.syncDataLocalDb();
     * ```
     *
     * @remarks
     * - Stores concepts to "localconcept" database
     * - Stores connections to "localconnection" database
     * - Clears the sync queues after storing
     * - Used for offline persistence without backend sync
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