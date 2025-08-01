import { CreateTheGhostConceptApi } from "../../Api/Create/CreateTheGhostConceptApi";
import { CreateTheGhostConnectionApi } from "../../Api/Create/CreateTheGhostConnectionApi";
import { Concept } from "./../Concept";
import { UpdateToDatabase } from "../../Database/indexdblocal";
import { ConceptsData } from "../ConceptData";
import { LocalConceptsData } from "./LocalConceptData";
import { Connection } from "../Connection";
import { CreateDefaultConcept, CreateDefaultLConcept, handleServiceWorkerException, InnerActions, Logger, sendMessage, serviceWorker } from "../../app";
import { LocalConnectionData } from "./LocalConnectionData";
import { LocalBinaryTree } from "./LocalBinaryTree";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

type syncContainer = {
    id: string,
    data: InnerActions
    createdDate: string,
}

export class LocalSyncData{
    static  conceptsSyncArray:Concept[] = [];
    static  connectionSyncArray: Connection[] = [];
    static ghostIdMap = new Map();
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
        try{
            let contains = false;
            let existingConcept = LocalSyncData.CheckIfTheConceptIdExists(concept.id, this.conceptsSyncArray);
            if(existingConcept.id != 0){
                contains = true;
            }
            if(!contains){
             this.conceptsSyncArray.push(concept);
            }
        }
        catch(error){
            throw error;
        }

     }

     static RemoveConcept(concept: Concept){
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             this.conceptsSyncArray.splice(i, 1);
         }
        }
     }

     static async SyncDataOnlineWithoutAuth(transactionId?:string, actions?:InnerActions, withAuth:boolean = false){
        return LocalSyncData.SyncDataOnline(transactionId, actions, withAuth);
     }

     static async SyncDataOnline(transactionId?: string, actions?: InnerActions, withAuth: boolean = true){
        let startTime = performance.now()
        console.log('syncing...', transactionId, actions, 'aa: ', this.conceptsSyncArray, this.connectionSyncArray, !!serviceWorker, withAuth)
        setTimeout(() => {
            console.log('syncing...', transactionId, actions, 'aa: ', this.conceptsSyncArray, this.connectionSyncArray, !!serviceWorker, withAuth)
        }, 5000)
        try{
            if (serviceWorker) {
                try {
                    console.log("syncing in the service worker", transactionId, withAuth);
                    debugger;
                    const res: any = await sendMessage('LocalSyncData__SyncDataOnline', {transactionId, withAuth})
                    return res.data
                } catch (error) {
                    console.error('LocalSyncData__SyncDataOnline sw error: ', error);
                    handleServiceWorkerException(error);
                }
            }
            console.log("syncing in the without service worker syncing", transactionId, withAuth);
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
            } else if (Array.isArray(actions?.concepts) && Array.isArray(actions?.connections)) {
                // filter concepts from conceptsSyncArray and connectionSyncArray and sync only belonging to this tab
                console.log("this is the concepts and connections array", actions?.concepts, actions?.connections);
                // conceptsArray = actions.concepts.filter(concept => this.conceptsSyncArray.some(con => concept.id == con.id || concept.ghostId == con.ghostId)).slice()
                // connectionsArray = actions.connections.filter(connection => this.connectionSyncArray.some(conn => connection.id == conn.id || connection.ghostId == conn.ghostId)).slice()
                conceptsArray = actions.concepts.slice()
                connectionsArray = actions.connections.slice()

                console.log("this is the concepts and connections array", conceptsArray, connectionsArray);
                // Remove the concepts and connections from the array that belongs to the actions/tab
                // Remove concepts not in sync array and warn
                this.conceptsSyncArray = this.conceptsSyncArray.filter(concept => {
                    const found = actions.concepts.some(con => concept.id == con.id || concept.ghostId == con.ghostId);
                    if (!found) console.warn(`Concept not found in sync array: ${concept.id || concept.ghostId}`);
                    return found;
                });

                // Remove connections not in sync array and warn
                this.connectionSyncArray = this.connectionSyncArray.filter(connection => {
                    const found = actions.connections.some(conn => connection.id == conn.id || connection.ghostId == conn.ghostId);
                    if (!found) console.warn(`Connection not found in sync array: ${connection.id || connection.ghostId}`);
                    return found;
                });
            } else {
                console.warn('Syncing this way has been Depreceted in service worker.')

                console.info('Only if serive worker is not running')
                conceptsArray = this.conceptsSyncArray.slice() || [];
                connectionsArray = this.connectionSyncArray.slice() || [];
                // return []
                this.connectionSyncArray = [];
                this.conceptsSyncArray = [];
            }
            console.log("syncing... inside the syncer", withAuth);
            let toSyncConcepts = [];
            for(let i= 0; i< conceptsArray.length; i++){
    
                //if(!conceptsArray[i].isSynced){
                toSyncConcepts.push(conceptsArray[i]);
                //}
                // this is used to denote that the local concept has already been synced with the online db
                await LocalConceptsData.UpdateConceptSyncStatus(conceptsArray[i].id);
    
    
            }
            console.log("syncing... inside the syncer 2", withAuth, conceptsArray);
            //if(connectionsArray.length > 0){
                await this.UpdateConceptListToIncludeRelatedConcepts(connectionsArray, toSyncConcepts);
                let result = await CreateTheGhostConceptApi(toSyncConcepts, connectionsArray, withAuth);

                console.log("syncing... inside the syncer 3", withAuth);
                let concepts = result.concepts;
                let connections = result.connections;
                for(let i =0 ; i< concepts.length; i++){
                    LocalConceptsData.AddPermanentConcept(concepts[i]);
    
                }
                for(let i =0 ; i< connections.length; i++){
                    LocalConnectionData.AddPermanentConnection(connections[i]);
                }
    
            //}
            
            // Logger.logInfo(startTime, "unknown", undefined, "unknown", undefined, 200, conceptsArray, "SyncDataOnline", [], "unknown", undefined )
    
            return conceptsArray;
        }
        catch(error){
            // Add Log
            Logger.logError(startTime, "unknown", undefined, "unknown", undefined, 500, error, "SyncDataOnline", [], "unknown", undefined )
    
            throw error;
        }

     }

    static ConvertGhostIdsInConnections(connectionArray: Connection[]){
        for(let i= 0 ;i < connectionArray.length; i++){
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;

            let newOfTheConceptId = LocalSyncData.ghostIdMap.get(ofTheConceptId) ?? ofTheConceptId;
            let newToTheConceptId = LocalSyncData.ghostIdMap.get(toTheConceptId) ?? toTheConceptId;
            let newTypeId = LocalSyncData.ghostIdMap.get(typeId) ?? typeId;
            connectionArray[i].ofTheConceptId = newOfTheConceptId;
            connectionArray[i].toTheConceptId = newToTheConceptId;
            connectionArray[i].typeId = newTypeId;
        }
     }

     static async UpdateConceptListToIncludeRelatedConcepts(connectionArray: Connection[], conceptsArray: Concept[]){
        for(let i= 0 ;i < connectionArray.length; i++){
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;
            if(ofTheConceptId < 0){
                let ofTheConcept = this.CheckIfTheConceptIdExists(ofTheConceptId, conceptsArray);
                if(ofTheConcept.id == 0){
                    ofTheConcept = await LocalConceptsData.GetConceptByGhostId(ofTheConceptId);
                    if(ofTheConcept.id != 0){
                        if(ofTheConcept.id != ofTheConcept.ghostId){
                            connectionArray[i].ofTheConceptId = ofTheConcept.id;
                        }
                    }
                    else{
                        ofTheConcept = await LocalConceptsData.GetConcept(ofTheConceptId);
                        // if this has already been synced before and is a composition type then do not send it again
                       // if(!ofTheConcept.isSynced && !ofTheConcept.isComposition){
                        this.AddConceptIfDoesNotExist(ofTheConcept,conceptsArray)
                     //   }
                    }

                }
            }

            if(toTheConceptId < 0){
                let toTheConcept = this.CheckIfTheConceptIdExists(toTheConceptId, conceptsArray);
                if(toTheConcept.id == 0){
                    toTheConcept = await LocalConceptsData.GetConceptByGhostId(toTheConceptId);

                    if(toTheConcept.id != 0){
                        if(toTheConcept.id != toTheConcept.ghostId){
                            connectionArray[i].toTheConceptId = toTheConcept.id;
                        }
                    }
                    else{
                        toTheConcept = await LocalConceptsData.GetConcept(toTheConceptId);
                        // if this has already been synced before and is a composition type then do not send it again
                      //   if(!toTheConcept.isSynced && !toTheConcept.isComposition){
                        this.AddConceptIfDoesNotExist(toTheConcept,conceptsArray)
     
                      //   }
                    }

                }
            }

            if(typeId < 0){
                let type = this.CheckIfTheConceptIdExists(typeId, conceptsArray);
                if(type.id == 0){

                    type = await LocalConceptsData.GetConceptByGhostId(typeId);
                    if(type.id != 0){
                        if(type.id != type.ghostId){
                            connectionArray[i].typeId = type.id;
                        }
                    }
                    else{
                        type = await LocalConceptsData.GetConcept(typeId);

                        // if this has already been synced before and is a composition type then do not send it again
                    //    if(!type.isSynced && !type.isComposition){
                            this.AddConceptIfDoesNotExist(type,conceptsArray)
                    //    }
                    }

                }
            }


        }
     }

     static AddConceptIfDoesNotExist(concept: Concept, conceptList: Concept[] = []){
        let exists : boolean = false;
        for(let i= 0 ; i< conceptList.length; i++ ){
            if(concept.ghostId == conceptList[i].ghostId ){
                exists = true;
            }
        }
        if(!exists){
            conceptList.push(concept);
        }
     }

     static CheckIfTheConceptIdExists(id:number, conceptList:Concept[] = []){
        let returnConcept: Concept = CreateDefaultLConcept();
        for(let i= 0 ; i< conceptList.length; i++ ){
            if(id == conceptList[i].ghostId || id == conceptList[i].id){
                returnConcept = conceptList[i];
            }
        }
        return returnConcept;
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

     static RemoveConnectionById(connectionId: number){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connectionId){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }


     static async syncDataLocalDb(){
        if(this.conceptsSyncArray.length > 0){
            for(let i=0; i< this.conceptsSyncArray.length;i++){
                UpdateToDatabase("localconcept",this.conceptsSyncArray[i]);
            }
            this.conceptsSyncArray = [];
        }
         if(this.connectionSyncArray.length > 0){
            for(let i=0; i< this.connectionSyncArray.length;i++){
                UpdateToDatabase("localconnection",this.connectionSyncArray[i]);
            }
         this.connectionSyncArray = [];
        }
        return "done";
     }

     static async initializeTransaction(transactionId: string) {
        try {
            if (serviceWorker) {
                try {
                    const res: any = await sendMessage('LocalSyncData__initializeTransaction', {transactionId})
                    return res.data
                } catch (error) {
                    console.error('LocalSyncData__initializeTransaction sw error: ', error);
                    handleServiceWorkerException(error);
                }
            }
    
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
            if (serviceWorker) {
                try {
                    const res: any = await sendMessage('LocalSyncData__markTransactionActions', {transactionId, actions})
                    return res.data
                } catch (error) {
                    console.error('LocalSyncData__markTransactionActions sw error: ', error);
                    handleServiceWorkerException(error);
                }
            }
    
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
            if (serviceWorker) {
                try {
                    const res: any = await sendMessage('LocalSyncData__rollbackTransaction', {transactionId, actions})
                    return res.data
                } catch (error) {
                    console.error('LocalSyncData__rollbackTransaction sw error: ', error);
                    handleServiceWorkerException(error);
                }
            }
            if (this.transactionCollections.some(item => item.id == transactionId)) return
            this.transactionCollections = this.transactionCollections.filter(tran => tran.id != transactionId)
        } catch (err) {console.log('LocalSyncData, roll', err)}
     }


}