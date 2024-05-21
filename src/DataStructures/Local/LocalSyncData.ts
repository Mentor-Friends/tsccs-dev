import { CreateTheGhostConceptApi } from "../../Api/Create/CreateTheGhostConceptApi";
import { CreateTheGhostConnectionApi } from "../../Api/Create/CreateTheGhostConnectionApi";
import { LConcept } from "./LConcept";
import { LConnection } from "./LConnection";
import { storeToDatabase } from "../../Database/NoIndexDb";
import { ConceptsData } from "../ConceptData";
import { LocalConceptsData } from "./LocalConceptData";
import { Connection } from "../Connection";
import { CreateDefaultConcept, CreateDefaultLConcept } from "../../app";
import { LocalConnectionData } from "./LocalConnectionData";

export class LocalSyncData{
    static  conceptsSyncArray:LConcept[] = [];
    static  connectionSyncArray: LConnection[] = [];
    static ghostIdMap = new Map();
    

    static  CheckContains(concept: LConcept){
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

    static  CheckContainsConnection(connection: LConnection){
        var contains = false;
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             contains = true;
         }
        }
        return contains;
    }

    static AddConcept(concept: LConcept){
        var contains = false;
       // ConceptsData.AddConceptTemporary(concept);
        if(!contains){
         this.conceptsSyncArray.push(concept);
        }
     }

     static RemoveConcept(concept: LConcept){
        for(var i=0; i<this.conceptsSyncArray.length; i++){
         if(this.conceptsSyncArray[i].id == concept.id){
             this.conceptsSyncArray.splice(i, 1);
         }
        }
     }

     static async  SyncDataOnline(){
        let conceptsArray = this.conceptsSyncArray.slice();
        let connectionsArray = this.connectionSyncArray.slice();
        this.connectionSyncArray = [];
        this.conceptsSyncArray = [];
        if(connectionsArray.length > 0){
            await this.UpdateConceptListToIncludeRelatedConcepts(connectionsArray, conceptsArray);
            console.log("this is the sending connections", connectionsArray);
            let result = await CreateTheGhostConceptApi(conceptsArray, connectionsArray);
            let concepts = result.concepts;
            let connections = result.connections;
            for(let i =0 ; i< concepts.length; i++){
                console.log("adding this to permanent Connection", concepts[i]);
                LocalConceptsData.AddPermanentConcept(concepts[i]);

            }
            for(let i =0 ; i< connections.length; i++){
                console.log("adding this to permanent Connection", connections[i]);
                LocalConnectionData.AddPermanentConnection(connections[i]);
            }

        }
        return "done";
     }

    //  static async  SyncDataOnline(){
        
    //     if(this.conceptsSyncArray.length > 0){
    //         let conceptsArray = this.conceptsSyncArray.slice();
    //         this.conceptsSyncArray = [];
    //         let concepts = await CreateTheGhostConceptApi(conceptsArray);
    //         for(let i =0 ; i< concepts.length; i++){
    //             LocalSyncData.ghostIdMap.set(concepts[i].ghostId,concepts[i].id);
    //             LocalConceptsData.AddPermanentConcept(concepts[i]);
    //         }
    //     }
    //      if(this.connectionSyncArray.length > 0){
    //         // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
    //         //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
    //         // }
    //         let connectionsArray = this.connectionSyncArray.slice();
    //         this.ConvertGhostIdsInConnections(connectionsArray);

    //         this.connectionSyncArray = [];
    //         await CreateTheGhostConnectionApi(connectionsArray);
    //     }
    //     return "done";

    //  }

    static ConvertGhostIdsInConnections(connectionArray: LConnection[]){
        for(let i= 0 ;i < connectionArray.length; i++){
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;
            console.log("This is the old of the concept  ID ", ofTheConceptId);
            console.log("this is the ghost map", LocalSyncData.ghostIdMap);

            console.log("This is the check", LocalSyncData.ghostIdMap.get(ofTheConceptId));
            let newOfTheConceptId = LocalSyncData.ghostIdMap.get(ofTheConceptId) ?? ofTheConceptId;
            let newToTheConceptId = LocalSyncData.ghostIdMap.get(toTheConceptId) ?? toTheConceptId;
            let newTypeId = LocalSyncData.ghostIdMap.get(typeId) ?? typeId;
            console.log("This is the new oF THE CONCEPT ID ", newOfTheConceptId);
            connectionArray[i].ofTheConceptId = newOfTheConceptId;
            connectionArray[i].OfTheConceptId = newOfTheConceptId;
            connectionArray[i].toTheConceptId = newToTheConceptId;
            connectionArray[i].ToTheConceptId = newToTheConceptId;
            connectionArray[i].typeId = newTypeId;
        }
     }

     static async UpdateConceptListToIncludeRelatedConcepts(connectionArray: LConnection[], conceptsArray: LConcept[]){
        for(let i= 0 ;i < connectionArray.length; i++){
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;
            let ofTheConcept = this.CheckIfTheConceptIdExists(ofTheConceptId, conceptsArray);
            let toTheConcept = this.CheckIfTheConceptIdExists(toTheConceptId, conceptsArray);
            let type = this.CheckIfTheConceptIdExists(typeId, conceptsArray);
            if(ofTheConcept.id == 0){
                ofTheConcept = await LocalConceptsData.GetConcept(ofTheConceptId);
                conceptsArray.push(ofTheConcept);
            }
            if(toTheConcept.id == 0){
                toTheConcept = await LocalConceptsData.GetConcept(toTheConceptId);
                conceptsArray.push(toTheConcept);
            }
            if(type.id == 0){
                type = await LocalConceptsData.GetConcept(typeId);
                conceptsArray.push(type);
            }

        }
     }

     static CheckIfTheConceptIdExists(id:number, conceptList:LConcept[] = []){
        let returnConcept: LConcept = CreateDefaultLConcept();
        for(let i= 0 ; i< conceptList.length; i++ ){
            if(id == conceptList[i].ghostId || id == conceptList[i].id){
                returnConcept = conceptList[i];
            }
        }
        return returnConcept;
    }



     static AddConnection(connection: LConnection){
         this.connectionSyncArray.push(connection);
     }

     static RemoveConnection(connection: LConnection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
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