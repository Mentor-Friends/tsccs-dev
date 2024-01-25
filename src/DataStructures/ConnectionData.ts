import { removeFromDatabase, storeToDatabase } from "../Database/indexeddb";
import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Connection } from "./Connection";
import { ConnectionBinaryTree } from "./ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "./ConnectionBinaryTree/ConnectionTypeTree";
export class ConnectionData{
    
    name: string;
    constructor(){
        this.name = "Connection Array";
    }
    static  connectionArray:Connection[] = [];

    static connectionDictionary:Connection[] = [];
    static  CheckContains(connection: Connection){
        var contains = false;
        for(var i=0; i<this.connectionArray.length; i++){
         if(this.connectionArray[i].id == connection.id){
             contains = true;
         }
        }

        return contains;
    }

    static AddConnectionToStorage(connection:Connection){
        storeToDatabase("connection", connection);
    }


    static AddConnection(connection: Connection){
    //    var contains = this.CheckContains(connection);
    //     if(contains){
    //         this.RemoveConnection(connection);
    //     }
    //     if(connection.id != 0 || connection.isTemp){

    //         storeToDatabase("connection",connection);
    //     }
    //     this.connectionArray.push(connection);
        storeToDatabase("connection", connection);
        ConnectionBinaryTree.addConnectionToTree(connection);
        ConnectionTypeTree.addConnectionToTree(connection);
    }

    static AddConnectionToMemory(connection:Connection){
        ConnectionBinaryTree.addConnectionToTree(connection);
        ConnectionTypeTree.addConnectionToTree(connection);
    }

    static AddToDictionary(connection: Connection){
        this.connectionDictionary[connection.id] = connection;
    }

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

    static GetConnectionTree(){
        return ConnectionBinaryTree.connectionroot;
    }

    static GetConnectionTypeTree(){
        return ConnectionTypeTree.connectionTypeRoot;
    }

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

    getName(){
        return this.name;
    }
}