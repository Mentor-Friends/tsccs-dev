import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { CreateTheConnectionApi } from "../Api/Create/CreateTheConnectionApi";
import { Concept } from "./Concept";
import { ConceptsData } from "./ConceptData";
import { Connection } from "./Connection";

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
        ConceptsData.AddConcept(concept);
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
        console.log(this.connectionSyncArray);
         this.connectionSyncArray.push(connection);
     }

     static RemoveConnection(connection: Connection){
        for(var i=0; i<this.connectionSyncArray.length; i++){
         if(this.connectionSyncArray[i].id == connection.id){
             this.connectionSyncArray.splice(i, 1);
         }
        }
     }

     static  SyncDataOnline(){
        if(this.conceptsSyncArray.length > 0){
            CreateTheConceptApi(this.conceptsSyncArray);
            this.conceptsSyncArray = [];
        }
         if(this.connectionSyncArray.length > 0){
         CreateTheConnectionApi(this.connectionSyncArray);
         this.connectionSyncArray = [];
        }
        return "done";

     }


 


}