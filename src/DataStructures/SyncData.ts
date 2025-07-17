import { storeToDatabase } from "./../Database/NoIndexDb";
import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { CreateTheConnectionApi } from "../Api/Create/CreateTheConnectionApi";
import { Concept } from "./Concept";
import { ConceptsData } from "./ConceptData";
import { Connection } from "./Connection";
import { ConnectionData } from "./ConnectionData";
import { ReservedIds } from "./ReservedIds";
import { InnerActions } from "./Transaction/Transaction";


type syncContainer = {
    id: string,
    data: InnerActions
    createdDate: string,
}
export class SyncData{
    static  conceptsSyncArray:Concept[] = [];
    static  connectionSyncArray: Connection[] = [];
    static transactionCollections: syncContainer[] = []

    static  CheckContains(concept: Concept){
        var contains = false;
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             contains = true;
         }
        }
        return contains;
    }

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

    static  CheckContainsConnection(connection: Connection){
        var contains = false;
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             contains = true;
         }
        }
        return contains;
    }

    static AddConcept(concept: Concept){
        var contains = false;
       // ConceptsData.AddConceptTemporary(concept);
        if(!contains){
         this.conceptsSyncArray.push(concept);
        }
     }



     static RemoveConcept(concept: Concept){
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             this.conceptsSyncArray.splice(i, 1);
         }
        }
     }

     static AddConnection(connection: Connection){
         this.connectionSyncArray.push(connection);
     }

     static RemoveConnection(connection: Connection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }

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

    static async rollbackTransaction(transactionId: string, actions: InnerActions) {
        try {
            if (this.transactionCollections.some(item => item.id == transactionId)) return
            this.transactionCollections = this.transactionCollections.filter(tran => tran.id != transactionId)
        } catch (err) {console.log('LocalSyncData, roll', err)}
     }


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