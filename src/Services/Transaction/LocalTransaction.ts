import { Concept, CreateConnectionBetweenTwoConceptsLocal, CreateTheCompositionLocal, CreateTheConnectionLocal, InnerActions, LocalSyncData, MakeTheInstanceConceptLocal, MakeTheTypeConceptLocal } from "../../app";
import CreateTheConceptLocal from "../Local/CreateTheConceptLocal";

export class LocalTransaction {
  protected transactionId!: string;
  actions: InnerActions = {
    concepts: [],
    connections: []
  }
  protected success = true

  constructor() {
    this.transactionId = Math.random().toString().substring(5);
  }

  /**
   * Method to initialize the transactions for specified transaction
   */
  async initialize() {
    await LocalSyncData.initializeTransaction(this.transactionId)
  }

  /**
   * Method to commi the created Transactions
   */
  async commitTransaction () {
    // Save the data
    if (!this.success) throw Error('Query Transaction Expired');

    await LocalSyncData.SyncDataOnline(this.transactionId) 
    this.actions = {concepts: [], connections: []}
    this.success = false
  }

  /**
   * Method to rollback all the tranctions occured
   */
  async rollbackTransaction() {
    // rollback all the changes

    this.success = false
    this.actions = {concepts: [], connections: []}
    await LocalSyncData.rollbackTransaction(this.transactionId, this.actions)
  }

  /**
   * Method to move concepts and connection to transaction collection
   * @param concept Concept
   */
  protected async markAction() {
    await LocalSyncData.markTransactionActions(this.transactionId, this.actions)
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
        if (!this.success) throw Error('Query Transaction Expired');

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
        console.log(err)
        this.success = false
        throw err
    }
  }
  
  async MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number) {
      try {
        if (!this.success) throw Error('Query Transaction Expired');

          const concept = await MakeTheTypeConceptLocal(typeString, sessionId, sessionUserId, userId, this.actions)
          await this.markAction();
      
          return concept    
    } catch (err) {
        console.log(err)
        this.success = false
        throw err
    }
  }

  async CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number, typeId:number, 
    accessId:number, isComposition: boolean = false, referentId:number|null = 0, actions: InnerActions = {concepts: [], connections: []}) {
    try {
        if (!this.success) throw Error('Query Transaction Expired');

        const concept = await CreateTheConceptLocal(referent, typecharacter, userId, categoryId, typeId, accessId,isComposition,referentId, this.actions);
        await this.markAction();
    
        return concept
    } catch (err) {
        console.log(err)
        this.success = false
        throw err
    }
  }


  /**
   * Connections
   */

  async CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false) {
      try {
        if (!this.success) throw Error('Query Transaction Expired');

        const connection = await CreateConnectionBetweenTwoConceptsLocal(ofTheConcept, toTheConcept, linker, both, this.actions)
        await this.markAction();
    
        return connection
    } catch (err) {
        console.log(err)
        this.success = false
        throw err
    }
  }

  async CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, typeId: number,orderId:number = 1, typeString: string = "", userId: number = 999) {
    try {
        if (!this.success) throw Error('Query Transaction Expired');

        const connection = await CreateTheConnectionLocal(ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId, this.actions)
        await this.markAction();
    
        return connection
    } catch (err) {
        console.log(err)
        this.success = false
        throw err
    }
  }


  /**
   * Compositions
   */

  async CreateTheCompositionLocal(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null, automaticSync: boolean  = false) {
      try {
        if (!this.success) throw Error('Query Transaction Expired');

        const concept = await CreateTheCompositionLocal(json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId, automaticSync, this.actions)
        await this.markAction();
    
        return concept
    } catch (err) {
        console.log(err)
        this.success = false
        throw err
    }
  }
}
