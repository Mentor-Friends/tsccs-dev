import { CreateConnection, CreateTheConnectionGeneral, MakeTheInstanceConcept, MakeTheTypeConcept } from "../../app";
import { Concept } from "../Concept";
import { Connection } from "../Connection";
import { SyncData } from "../SyncData";

export class Transaction {
    protected transactionId!: string;
    actions: InnerActions = {
        concepts: [],
        connections: []
    };
    protected success = true;

    constructor() {
    this.transactionId = Math.random().toString().substring(5);
  }

  async initialize() {
        await SyncData.initializeTransaction(this.transactionId);
  }

    /**
   * Method to move concepts and connection to transaction collection
   * @param concept Concept
   */
  protected async markAction() {
    await SyncData.markTransactionActions(
      this.transactionId,
      this.actions
    );
  }

    /**
   * Method to rollback all the tranctions occured
   */
  async rollbackTransaction() {
    // rollback all the changes

    this.success = false;
    this.actions = { concepts: [], connections: [] };
    await SyncData.rollbackTransaction(this.transactionId, this.actions);
  }

async commitTransaction() {
    // Save the data
    if (!this.success) throw Error("Query Transaction Expired");

    await SyncData.SyncDataOnline(this.transactionId);
    this.actions = { concepts: [], connections: [] };
    this.success = false;
  }


    /**
   * Concepts
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




export interface InnerActions {
    concepts: Concept[], 
    connections: Connection[]
}