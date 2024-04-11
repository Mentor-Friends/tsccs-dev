import { storeToDatabase } from "./../Database/NoIndexDb";
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

     static async  SyncDataOnline(){
        for(let i=0;i<this.conceptsSyncArray.length;i++){
            ConceptsData.AddConcept(this.conceptsSyncArray[i]);
        }

        for(let i=0;i<this.connectionSyncArray.length;i++){
            ConnectionData.AddConnection(this.connectionSyncArray[i]);
        }
        
        if(this.conceptsSyncArray.length > 0){
            let conceptsArray = this.connectionSyncArray.slice();
            this.connectionSyncArray = [];
            CreateTheConceptApi(conceptsArray);
        }
         if(this.connectionSyncArray.length > 0){

            // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
            //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
            // }
            let connectionsArray = this.connectionSyncArray.slice();
            this.connectionSyncArray = [];
            await CreateTheConnectionApi(connectionsArray);
        }
        return "done";

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