import { LConcept } from "./LConcept";
import { LConnection } from "./LConnection";
import { storeToDatabase } from "../../Database/NoIndexDb";

export class LocalSyncData{
    static  conceptsSyncArray:LConcept[] = [];
    static  connectionSyncArray: LConnection[] = [];
    

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