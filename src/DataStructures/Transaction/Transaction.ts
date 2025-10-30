/**
 * @fileoverview Defines the Transaction class for managing transactional operations.
 * @module DataStructures/Transaction/Transaction
 */

import { CreateConnection, CreateTheConnectionGeneral, MakeTheInstanceConcept, MakeTheTypeConcept } from "../../app";
import { Concept } from "../Concept";
import { Connection } from "../Connection";
import { SyncData } from "../SyncData";

/**
 * Manages transactional operations for concepts and connections.
 * This class provides ACID-like transaction capabilities for creating and managing
 * concepts and connections. It supports rollback functionality and ensures data
 * consistency by tracking all actions within a transaction context.
 *
 * @class Transaction
 *
 * @example
 * ```typescript
 * const transaction = new Transaction();
 * await transaction.initialize();
 *
 * try {
 *   const concept = await transaction.MakeTheInstanceConcept(
 *     "User", "John Doe", false, 1, 4, 999, 0
 *   );
 *   await transaction.commitTransaction();
 * } catch (error) {
 *   await transaction.rollbackTransaction();
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Complex transaction with multiple operations
 * const transaction = new Transaction();
 * await transaction.initialize();
 *
 * try {
 *   const user = await transaction.MakeTheInstanceConcept("User", "Alice", false, 1, 4);
 *   const post = await transaction.MakeTheInstanceConcept("Post", "My First Post", false, 1, 4);
 *   await transaction.CreateConnection(user, post, "authored");
 *   await transaction.commitTransaction();
 * } catch (error) {
 *   console.error("Transaction failed:", error);
 *   await transaction.rollbackTransaction();
 * }
 * ```
 */
export class Transaction {
    /**
     * Unique identifier for this transaction.
     * Generated randomly to track transaction operations.
     *
     * @protected
     * @type {string}
     */
    protected transactionId!: string;

    /**
     * Collection of all actions performed within this transaction.
     * Tracks concepts and connections created or modified during the transaction.
     *
     * @type {InnerActions}
     */
    actions: InnerActions = {
        concepts: [],
        connections: []
    };

    /**
     * Flag indicating whether the transaction is still valid.
     * Set to false on failure or after rollback to prevent further operations.
     *
     * @protected
     * @type {boolean}
     * @default true
     */
    protected success = true;

    /**
     * Creates a new Transaction instance.
     * Generates a unique transaction ID for tracking purposes.
     *
     * @constructor
     *
     * @example
     * ```typescript
     * const transaction = new Transaction();
     * await transaction.initialize();
     * ```
     */
    constructor() {
    this.transactionId = Math.random().toString().substring(5);
  }

  /**
   * Initializes the transaction in the data store.
   * Must be called before performing any transactional operations.
   *
   * @async
   * @returns {Promise<void>}
   * @throws {Error} If initialization fails
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   * ```
   */
  async initialize() {
        await SyncData.initializeTransaction(this.transactionId);
  }

    /**
   * Marks and persists the current transaction actions.
   * Internal method to save concepts and connections to the transaction collection.
   *
   * @protected
   * @async
   * @returns {Promise<void>}
   *
   * @remarks
   * This method is called internally after each concept or connection operation
   * to ensure actions are tracked for potential rollback.
   */
  protected async markAction() {
    await SyncData.markTransactionActions(
      this.transactionId,
      this.actions
    );
  }

    /**
   * Rolls back all operations performed within this transaction.
   * Reverts all changes made during the transaction and marks it as expired.
   * After rollback, no further operations can be performed on this transaction.
   *
   * @async
   * @returns {Promise<void>}
   *
   * @example
   * ```typescript
   * try {
   *   const concept = await transaction.MakeTheInstanceConcept(...);
   *   // ... operation that might fail
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   *   console.error("Transaction rolled back due to error:", error);
   * }
   * ```
   */
  async rollbackTransaction() {
    // rollback all the changes

    this.success = false;
    this.actions = { concepts: [], connections: [] };
    await SyncData.rollbackTransaction(this.transactionId, this.actions);
  }

  /**
   * Commits the transaction, making all changes permanent.
   * Synchronizes all transaction data to the online/persistent store.
   * After commit, the transaction is marked as expired and cannot be used further.
   *
   * @async
   * @returns {Promise<void>}
   * @throws {Error} If the transaction has already expired or failed
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   *
   * try {
   *   await transaction.MakeTheInstanceConcept("User", "Alice", false, 1, 4);
   *   await transaction.commitTransaction();
   *   console.log("Transaction committed successfully");
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   * }
   * ```
   */
async commitTransaction() {
    // Save the data
    if (!this.success) throw Error("Query Transaction Expired");

    await SyncData.SyncDataOnline(this.transactionId);
    this.actions = { concepts: [], connections: [] };
    this.success = false;
  }


    /**
   * Creates a new instance concept within the transaction.
   * The concept represents a data instance of a specified type with associated metadata.
   *
   * @async
   * @param {string} type - The type of the concept (e.g., "User", "Post")
   * @param {string} referent - The value or name of the concept instance
   * @param {boolean} [composition=false] - Whether this is a composition concept
   * @param {number} userId - The ID of the user creating the concept
   * @param {number} accessId - The access level ID for the concept
   * @param {number} [sessionInformationId=999] - The session information ID
   * @param {number} [referentId=0] - The referent ID for linking
   * @returns {Promise<Concept>} The created concept
   * @throws {Error} If the transaction has expired or creation fails
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   *
   * try {
   *   const userConcept = await transaction.MakeTheInstanceConcept(
   *     "User",
   *     "John Doe",
   *     false,
   *     123,
   *     4,
   *     999,
   *     0
   *   );
   *   await transaction.commitTransaction();
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   * }
   * ```
   */
  async MakeTheInstanceConcept(
    type: string,
    referent: string,
    composition: boolean = false,
    userId: number,
    accessId: number,
    sessionInformationId: number = 999,
    referentId: number = 0
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const concept = await MakeTheInstanceConcept(
        type,
        referent,
        composition,
        userId,
        accessId,
        sessionInformationId,
        referentId,
        this.actions
      );
      await this.markAction();

      return concept;
    } catch (err) {
      console.log(err);
      this.success = false;
      throw err;
    }
  }
  

    /**
   * Creates a connection between two concepts within the transaction.
   * Establishes a typed relationship between source and target concepts.
   *
   * @async
   * @param {Concept} ofTheConcept - The source concept (starting point of the connection)
   * @param {Concept} toTheConcept - The target concept (endpoint of the connection)
   * @param {string} typeConnection - The type of connection/relationship
   * @returns {Promise<Connection>} The created connection
   * @throws {Error} If the transaction has expired or creation fails
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   *
   * try {
   *   const user = await transaction.MakeTheInstanceConcept("User", "Alice", false, 1, 4);
   *   const post = await transaction.MakeTheInstanceConcept("Post", "My Post", false, 1, 4);
   *   const connection = await transaction.CreateConnection(user, post, "authored");
   *   await transaction.commitTransaction();
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   * }
   * ```
   */
  async CreateConnection(
    ofTheConcept: Concept,
    toTheConcept: Concept,
    typeConnection: string
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateConnection(
        ofTheConcept,
        toTheConcept,
        typeConnection,
        this.actions
      );
      await this.markAction();

      return connection;
    } catch (err) {
      console.log(err);
      this.success = false;
      throw err;
    }
  }

  /**
   * Creates a new type concept within the transaction.
   * Type concepts define the schema or classification for instance concepts.
   *
   * @async
   * @param {string} typeString - The name of the type to create
   * @param {number} sessionId - The session ID
   * @param {number} sessionUserId - The session user ID
   * @param {number} userId - The ID of the user creating the type
   * @returns {Promise<Concept>} The created type concept
   * @throws {Error} If the transaction has expired or creation fails
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   *
   * try {
   *   const typeConcept = await transaction.MakeTheTypeConcept(
   *     "CustomType",
   *     999,
   *     1,
   *     1
   *   );
   *   await transaction.commitTransaction();
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   * }
   * ```
   */
  async MakeTheTypeConcept (
    typeString: string, sessionId: number, sessionUserId: number, userId: number
  ){
        try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await MakeTheTypeConcept(
        typeString,
        sessionId,
        sessionUserId,
        userId,
        this.actions
      );
      await this.markAction();

      return connection;
    } catch (err) {
      console.log(err);
      this.success = false;
      throw err;
    }
  }

  /**
   * Creates a connection using concept IDs within the transaction.
   * This is a more general method for creating connections when working directly with IDs
   * rather than Concept objects. Provides fine-grained control over connection properties.
   *
   * @async
   * @param {number} ofTheConceptId - The ID of the source concept
   * @param {number} ofTheConceptUserId - The user ID of the source concept
   * @param {number} toTheConceptId - The ID of the target concept
   * @param {number} toTheConceptUserId - The user ID of the target concept
   * @param {number} typeId - The connection type ID
   * @param {number} sessionInformationId - The session information ID
   * @param {number} sessionInformationUserId - The session information user ID
   * @param {number} [orderId=1] - The order ID for sequencing connections
   * @param {number} [accessId=4] - The access level ID
   * @param {number} [passedUserId=999] - The passed user ID for permissions
   * @returns {Promise<Connection>} The created connection
   * @throws {Error} If the transaction has expired or creation fails
   *
   * @example
   * ```typescript
   * const transaction = new Transaction();
   * await transaction.initialize();
   *
   * try {
   *   const connection = await transaction.CreateTheConnectionGeneral(
   *     123, 1,  // source concept
   *     456, 1,  // target concept
   *     789,     // type ID
   *     999, 1,  // session info
   *     1,       // order
   *     4,       // access
   *     999      // user
   *   );
   *   await transaction.commitTransaction();
   * } catch (error) {
   *   await transaction.rollbackTransaction();
   * }
   * ```
   */
async CreateTheConnectionGeneral(
    ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number,  sessionInformationId: number, sessionInformationUserId: number, orderId: number = 1, accessId = 4, passedUserId:number = 999
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateTheConnectionGeneral(
        ofTheConceptId,
        ofTheConceptUserId,
        toTheConceptId,
        toTheConceptUserId,
        typeId,
        sessionInformationId,
        sessionInformationUserId,
        orderId,
        accessId,
        passedUserId,
        this.actions
      );
      await this.markAction();

      return connection;
    } catch (err) {
      console.log(err);
      this.success = false;
      throw err;
    }
  }

}

/**
 * Represents the collection of actions within a transaction.
 * This interface tracks all concepts and connections created or modified
 * during a transaction for rollback and commit purposes.
 *
 * @interface InnerActions
 *
 * @example
 * ```typescript
 * const actions: InnerActions = {
 *   concepts: [concept1, concept2],
 *   connections: [connection1, connection2]
 * };
 * ```
 */
export interface InnerActions {
    /**
     * Array of concepts created or modified in the transaction.
     * @type {Concept[]}
     */
    concepts: Concept[],

    /**
     * Array of connections created or modified in the transaction.
     * @type {Connection[]}
     */
    connections: Connection[]
}