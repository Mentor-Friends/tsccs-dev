import { AccessTracker } from "../AccessTracker/accessTracker";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { removeFromDatabase, UpdateToDatabase } from "../Database/indexeddb";
import { IndexDbUpdate } from "../Database/IndexUpdate";
import { UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Connection } from "./Connection";
import { ConnectionBinaryTree } from "./ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionOfTheTree } from "./ConnectionBinaryTree/ConnectionOfTheTree";
import { ConnectionTypeTree } from "./ConnectionBinaryTree/ConnectionTypeTree";
export class ConnectionData {
  name: string;
  constructor() {
    this.name = "Connection Array";
  }
  static connectionArray: Connection[] = [];

  static connectionDictionary: Connection[] = [];
  static CheckContains(connection: Connection) {
    let contains = false;
    for (let i = 0; i < this.connectionArray.length; i++) {
      if (this.connectionArray[i].id == connection.id) {
        contains = true;
      }
    }

    return contains;
  }

  static AddConnectionToStorage(connection: Connection) {
    UpdateToDatabase("connection", connection);
  }

  static AddConnection(connection: Connection) {
    //    var contains = this.CheckContains(connection);
    //     if(contains){
    //         this.RemoveConnection(connection);
    //     }
    //     if(connection.id != 0 || connection.isTemp){

    //         storeToDatabase("connection",connection);
    //     }
    //     this.connectionArray.push(connection);
    // if(!connection.isTemp){
    //UpdateToDatabase("connection", connection);
    try{
      ConnectionBinaryTree.addConnectionToTree(connection);
      ConnectionTypeTree.addConnectionToTree(connection);
      ConnectionOfTheTree.addConnection(connection);
    }
    catch(error){
      console.log("this is the error in making the connection");
      throw error;
    }

  }

  static AddConnectionToMemory(connection: Connection) {
    if (!connection.isTemp) {
      ConnectionBinaryTree.addConnectionToTree(connection);
      ConnectionTypeTree.addConnectionToTree(connection);
      ConnectionOfTheTree.addConnection(connection);
    }
  }

  static AddToDictionary(connection: Connection) {
    this.connectionDictionary[connection.id] = connection;
  }

  static RemoveConnection(connection: Connection) {
    //    for(var i=0; i<this.connectionArray.length; i++){
    //     if(this.connectionArray[i].id == connection.id){
    //         this.connectionArray.splice(i, 1);
    //     }
    //    }
    if (connection.id != 0) {
      removeFromDatabase("connection", connection.id);
      ConnectionBinaryTree.removeNodeFromTree(connection.id);
      // ConnectionTypeTree.removeTypeConcept(connection.typeId, connection.id);
      ConnectionOfTheTree.removeNodeFromTree(connection.id);
    }
  }

  static GetConnectionTypeOfTree() {
    ConnectionOfTheTree.node;
  }

  static async GetConnectionByOfTheConceptAndType(
    ofTheConceptId: number,
    typeId: number
  ) {
    try {
      if (serviceWorker) {
        try {
          const res: any = await sendMessage(
            "ConnectionData__GetConnectionByOfTheConceptAndType",
            { ofTheConceptId, typeId }
          );
          return res.data;
        } catch (error) {
          console.error(
            "GetConnectionByOfTheConceptAndType sw error: ",
            error
          );
          handleServiceWorkerException(error);
        }
      }
      
      let connections = ConnectionOfTheTree.GetConnectionByOfTheConceptAndTypeId(
        ofTheConceptId,
        typeId
      );
      if (connections) {
        return connections;
      }
      return [];
    } catch (error) { 
      console.log("this is the error in GetConnectionByOfTheConceptAndType", error); 
      return [] 
    }
  }

  static GetConnectionByOfType(ofTheConceptId: number, typeId: number) {
    const logData : any = Logger.logfunction("ConnectionData.GetConnectionByOfType", arguments);
    let connections = ConnectionTypeTree.GetConnectionByOfTheConceptAndTypeId(
      ofTheConceptId,
      typeId
    );
    if (connections) {
      Logger.logUpdate(logData);
      return connections;
    }
    Logger.logUpdate(logData);
    return [];
  }

  static GetConnectionTree() {
    return ConnectionBinaryTree.connectionroot;
  }

  static GetConnectionTypeTree() {
    return ConnectionTypeTree.connectionTypeRoot;
  }

  static async GetConnectionBulkData(
    ids: number[],
    connectionArray: Connection[],
    remainingIds: any
  ) {
    await ConnectionBinaryTree.getConnectionListFromIds(
      ids,
      connectionArray,
      remainingIds
    );
  }

  static async GetConnection(id: number) {
    // Increment Connection
    AccessTracker.incrementConnection(id)

    //    var  myConcept: Connection|null;
    //    myConcept = null;
    //     for(var i=0; i<this.connectionArray.length; i++){
    //         if(this.connectionArray[i].id == id){
    //             myConcept = this.connectionArray[i];
    //         }
    //     }
    //     return myConcept;

    let myConnection: Connection = new Connection(0, 0, 0, 0, 0, 0, 0);
    try {    
      if (serviceWorker) {
        try {
          const res: any = await sendMessage('ConnectionData__GetConnection', {id})
          return res.data
        } catch (error) {
          console.error('GetConnection sw error: ', error);
          handleServiceWorkerException(error);
        }
      }

      let node = await ConnectionBinaryTree.getNodeFromTree(id);
      if (node?.value) {
        let returnedConcept = node.value;
        if (returnedConcept) {
          myConnection = returnedConcept as Connection;
          //if(myConnection.count > IndexDbUpdate.MIN_USE_FOR_INDEX_DB){
          // IndexDbUpdate.UpdateConnectionIndexDb(myConnection);
          //}
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

    } catch (error) {
      console.log("this is the error in GetConnection", error);
      return myConnection;
    }
  }

  // commented
  static async GetConnectionsOfCompositionLocal(id: number) {
    const logData : any = Logger.logfunction("ConnectionData.GetConnectionsOfCompositionLocal", arguments);
    let connections: Connection[] = [];

    try{    
      if (serviceWorker) {
        logData.serviceWorker = true;
        try {
          const res: any = await sendMessage(
            "ConnectionData__GetConnectionsOfCompositionLocal",
            { id }
          );
          Logger.logUpdate(logData); 
          return res.data;
        } catch (error) {
          console.error("GetConnectionsOfCompositionLocal sw error: ", error);
          UpdatePackageLogWithError(logData, 'GetConnectionsOfCompositionLocal', error);
          handleServiceWorkerException(error);
        }
      }
      let connectionIds: number[] = [];
      connectionIds = ConnectionData.GetConnectionByOfType(id, id);
      for (let i = 0; i < connectionIds.length; i++) {
        let conn = await ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
        if (conn) {
          connections.push(conn.value);
        }
        Logger.logUpdate(logData);
      }
    }
    catch(error){
      console.log("this is the error GetConnectionsOfCompositionLocal", id, connections)
      UpdatePackageLogWithError(logData, 'ConnectionData.GetConnectionsOfCompositionLocal', error);
    }
    return connections;

    //let node = await ConnectionTypeTree.getNodeFromTree(id);
    // if(node?.value){
    //     let returnedConnection = node.value;
    //     if(returnedConnection){
    //         let myConnection = returnedConnection as Connection;
    //         connections.push(myConnection);
    //         for(let i=0; i<node.variants.length;i++){
    //             connections.push(node.variants[i].value);
    //         }
    //     }
    // }
    //return connections;
  }


    static async GetConnectionsOfConcept(id: number){
      let connectionIds: number [] = [];
      let connections: Connection[] = [];
      try {
        if (serviceWorker) {
          
          try {
            const res: any = await sendMessage("ConnectionData__GetConnectionsOfConcept", { id });
            return res.data;
          } catch (error) {
            console.error("GetConnectionsOfConcept sw error: ", error);
            handleServiceWorkerException(error);
          }
        }
        connectionIds = await ConnectionData.GetConnectionByOfTheConceptAndType(id, id);

        for(let i=0; i< connectionIds.length; i++){
            let conn = await ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
            if(conn){
                connections.push(conn.value);
            }   
        }

        return connections;
      } catch (error) {
        console.log("this is the error in GetConnectionsOfConcept", error);
        return connections;
      }
    } 

    getName(){
        return this.name;
    }
}