import { storeToDatabase } from "./../Database/indexeddb";
import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { CreateTheConnectionApi } from "../Api/Create/CreateTheConnectionApi";
import { Concept } from "./Concept";
import { ConceptsData } from "./ConceptData";
import { Connection } from "./Connection";
import { ConnectionData } from "./ConnectionData";
import { ReservedIds } from "./ReservedIds";

export class SyncData{
    static  conceptsSyncArray:Concept[] = [];
    static  connectionSyncArray: Connection[] = [];
    

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
        this.conceptsSyncArray.splice(id, 1);
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
        ConceptsData.AddConceptTemporary(concept);
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
        ConnectionData.AddConnection(connection);
         this.connectionSyncArray.push(connection);
     }

     static RemoveConnection(connection: Connection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }

     static async  SyncDataOnline(){
        if(this.conceptsSyncArray.length > 0){
            await CreateTheConceptApi(this.conceptsSyncArray);
            this.conceptsSyncArray = [];
        }
         if(this.connectionSyncArray.length > 0){
         await CreateTheConnectionApi(this.connectionSyncArray);
         this.connectionSyncArray = [];
        }
        return "done";

     }

     static async syncDataLocalDb(){
        if(this.conceptsSyncArray.length > 0){
            for(let i=0; i< this.conceptsSyncArray.length;i++){
                //ReservedIds.AddId(this.conceptsSyncArray[i].id);
                //this.conceptsSyncArray[i].id = -this.conceptsSyncArray[i].id;
                storeToDatabase("concept",this.conceptsSyncArray[i]);
            }
            this.conceptsSyncArray = [];
        }
         if(this.connectionSyncArray.length > 0){
            for(let i=0; i< this.connectionSyncArray.length;i++){
                // this.connectionSyncArray[i].ofTheConceptId = -this.connectionSyncArray[i].ofTheConceptId;
                // this.connectionSyncArray[i].toTheConceptId = -this.connectionSyncArray[i].toTheConceptId;
                // this.connectionSyncArray[i].OfTheConceptId = -this.connectionSyncArray[i].OfTheConceptId;
                // this.connectionSyncArray[i].ToTheConceptId = -this.connectionSyncArray[i].ToTheConceptId;
               // this.connectionSyncArray[i].typeId = -this.connectionSyncArray[i].typeId;
                storeToDatabase("connection",this.connectionSyncArray[i]);
            }
         this.connectionSyncArray = [];
        }
        return "done";
     }


 


}