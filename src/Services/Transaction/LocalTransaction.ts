import {
  Concept,
  CreateConnection,
  CreateConnectionBetweenEntityLocal,
  CreateConnectionBetweenTwoConceptsLocal,
  CreateTheCompositionLocal,
  CreateTheConnectionLocal,
  InnerActions,
  LocalSyncData,
  MakeTheInstanceConceptLocal,
  MakeTheTypeConceptLocal,
} from "../../app";
import CreateTheConceptLocal from "../Local/CreateTheConceptLocal";
import { DeleteConnectionByIdBulk } from "../DeleteConnection";
import { GetConnectionsBetweenApi } from "../../Api/GetConnections/GetConnectionsBetweenApi";
import { buildFetchConnection, FetchConnectionQuery } from "../../DataStructures/FetchConnection";

export class LocalTransaction {
  protected transactionId!: string;
  actions: InnerActions = {
    concepts: [],
    connections: [],
  };
  protected success = true;
  protected pendingConnectionDeletions: number[] = [];

  constructor() {
    this.transactionId = Math.random().toString().substring(5);
  }

  /**
   * Method to initialize the transactions for specified transaction
   */
  async initialize() {
    await LocalSyncData.initializeTransaction(this.transactionId);
  }

  /**
   * Method to commi the created Transactions
   */
  async commitTransaction() {
    if (!this.success) throw Error("Query Transaction Expired");

    await LocalSyncData.SyncDataOnline(this.transactionId);
    if (this.pendingConnectionDeletions.length > 0) {
      await DeleteConnectionByIdBulk(this.pendingConnectionDeletions);
    }
    this.actions = { concepts: [], connections: [] };
    this.pendingConnectionDeletions = [];
    this.success = false;
  }

  async commitTransactionWithoutAuth() {
    if (!this.success) throw Error("Query Transaction Expired");

    await LocalSyncData.SyncDataOnlineWithoutAuth(this.transactionId);
    if (this.pendingConnectionDeletions.length > 0) {
      await DeleteConnectionByIdBulk(this.pendingConnectionDeletions);
    }
    this.actions = { concepts: [], connections: [] };
    this.pendingConnectionDeletions = [];
    this.success = false;
  }

  /**
   * Method to rollback all the tranctions occured
   */
  async rollbackTransaction() {
    this.success = false;
    this.actions = { concepts: [], connections: [] };
    this.pendingConnectionDeletions = [];
    await LocalSyncData.rollbackTransaction(this.transactionId, this.actions);
  }

  /**
   * Method to move concepts and connection to transaction collection
   * @param concept Concept
   */
  protected async markAction() {
    await LocalSyncData.markTransactionActions(
      this.transactionId,
      this.actions
    );
  }

  /**
   * Deletions
   */

  /**
   * Queries the backend for connections matching the given criteria and queues all
   * returned connection IDs for bulk deletion when commitTransaction() is called.
   *
   * **Nothing is deleted until commitTransaction() is called.**
   * Calling rollbackTransaction() discards the queue without touching the backend.
   *
   * Supported query permutations:
   * 1. `ofTheConceptId` + `toTheConceptId` + `type` — connections between two specific concepts
   * 2. `ofTheConceptId` + `type`                    — all connections FROM a concept of that type
   * 3. `toTheConceptId` + `type`                    — all connections TO a concept of that type
   * 4. `typeId` + `isComposition: true`             — all internal connections of a composition
   *
   * For multiple queries in one go use {@link DeleteConnectionsBetweenBulk} — it sends
   * all queries in a single HTTP request.
   *
   * @param query - Partial FetchConnectionQuery with only the fields relevant to your permutation.
   * @returns The connection IDs queued for deletion by this call.
   *
   * @example
   * // Delete all connections of type "the_project_s_page" from concept 103927382
   * const ids = await transaction.DeleteConnectionsBetween({
   *     ofTheConceptId: 103927382,
   *     type: "the_project_s_page"
   * });
   * await transaction.commitTransaction(); // deletion fires here
   *
   * @example
   * // Delete connections between two specific concepts
   * await transaction.DeleteConnectionsBetween({
   *     ofTheConceptId: 103927382,
   *     toTheConceptId: 103927389,
   *     type: "the_project_s_page"
   * });
   *
   * @example
   * // Delete all internal connections of a composition
   * await transaction.DeleteConnectionsBetween({
   *     typeId: 101490186,
   *     isComposition: true
   * });
   *
   * @see {@link DeleteConnectionsBetweenBulk} for sending multiple queries in one HTTP request
   * @see {@link commitTransaction} where the queued deletions are executed via bulk delete
   */
  async DeleteConnectionsBetween(query: Partial<FetchConnectionQuery>): Promise<number[]> {
    return this.DeleteConnectionsBetweenBulk([query]);
  }

  /**
   * Same as {@link DeleteConnectionsBetween} but resolves multiple queries in a single
   * HTTP request to POST /api/get-connection-between.
   *
   * Prefer this over looping DeleteConnectionsBetween — all queries go to the backend
   * in one round trip, and all returned IDs are merged into the same pending-deletion queue.
   * The actual deletion still fires as a single bulk call inside commitTransaction().
   *
   * @param queries - Array of partial FetchConnectionQuery objects, one per query permutation.
   * @returns All connection IDs queued for deletion across every query in this call.
   *
   * @example
   * // Three different queries → one HTTP request to get IDs → one bulk delete on commit
   * await transaction.DeleteConnectionsBetweenBulk([
   *     { ofTheConceptId: 103927382, type: "the_project_s_page" },
   *     { ofTheConceptId: 103927382, type: "the_project_s_tag" },
   *     { typeId: 101490186, isComposition: true },
   * ]);
   * await transaction.commitTransaction();
   *
   * @see {@link DeleteConnectionsBetween} for the single-query convenience wrapper
   * @see {@link commitTransaction} where the queued deletions are executed via bulk delete
   */
  async DeleteConnectionsBetweenBulk(queries: Partial<FetchConnectionQuery>[]): Promise<number[]> {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const fetchConnections = queries.map(buildFetchConnection);
      const results = await GetConnectionsBetweenApi(fetchConnections);
      const ids: number[] = [];
      for (const r of results) ids.push(...r.connectionIds);
      this.pendingConnectionDeletions.push(...ids);
      return ids;
    } catch (err) {
      console.log(err);
      this.success = false;
      throw err;
    }
  }

  /**
   * Concepts
   */

  async MakeTheInstanceConceptLocal(
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

      const concept = await MakeTheInstanceConceptLocal(
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

  async MakeTheTypeConceptLocal(
    typeString: string,
    sessionId: number,
    sessionUserId: number,
    userId: number
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const concept = await MakeTheTypeConceptLocal(
        typeString,
        sessionId,
        sessionUserId,
        userId,
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

  async CreateTheConceptLocal(
    referent: string,
    typecharacter: string,
    userId: number,
    categoryId: number,
    typeId: number,
    accessId: number,
    isComposition: boolean = false,
    referentId: number | null = 0,
    actions: InnerActions = { concepts: [], connections: [] }
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const concept = await CreateTheConceptLocal(
        referent,
        typecharacter,
        userId,
        categoryId,
        typeId,
        accessId,
        isComposition,
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
   * Connections
   */

  async CreateConnectionBetweenTwoConceptsLocal(
    ofTheConcept: Concept,
    toTheConcept: Concept,
    linker: string,
    both: boolean = false
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateConnectionBetweenTwoConceptsLocal(
        ofTheConcept,
        toTheConcept,
        linker,
        both,
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

  async CreateTheConnectionLocal(
    ofTheConceptId: number,
    toTheConceptId: number,
    typeId: number,
    orderId: number = 1,
    typeString: string = "",
    userId: number = 999
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateTheConnectionLocal(
        ofTheConceptId,
        toTheConceptId,
        typeId,
        orderId,
        typeString,
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

  async CreateConnection(
    ofTheConcept: Concept,
    toTheConcept: Concept,
    connectionTypeString: string,
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateConnection(
        ofTheConcept,
        toTheConcept,
        connectionTypeString,
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


  async CreateConnectionBetweenEntityLocal(
    concept1Data: Concept,
    concept2Data: Concept,
    linker: string
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const connection = await CreateConnectionBetweenEntityLocal(
        concept1Data,
        concept2Data,
        linker,
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
   * Compositions
   */

  async CreateTheCompositionLocal(
    json: any,
    ofTheConceptId: number | null = null,
    ofTheConceptUserId: number | null = null,
    mainKey: number | null = null,
    userId: number | null = null,
    accessId: number | null = null,
    sessionInformationId: number | null = null,
    automaticSync: boolean = false
  ) {
    try {
      if (!this.success) throw Error("Query Transaction Expired");

      const concept = await CreateTheCompositionLocal(
        json,
        ofTheConceptId,
        ofTheConceptUserId,
        mainKey,
        userId,
        accessId,
        sessionInformationId,
        automaticSync,
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
}
