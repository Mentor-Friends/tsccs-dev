import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
import { getFromDb, storeToDb } from "../Database/indexdb";
import { getFromDatabase, getFromDatabaseWithType, removeFromDatabase, storeToDatabase } from "../Database/indexeddb";
export class ConceptsData{
    
    name: string;
    constructor(){
        this.name = "conceptsArray";
    }
    static  conceptsArray:Concept[] = [];

    static conceptDictionary:Concept[] = [];

    static  CheckContains(concept: Concept){
        var contains = false;
        for(var i=0; i<this.conceptsArray.length; i++){
         if(this.conceptsArray[i].id == concept.id){
             contains = true;
         }
        }

        return contains;
    }


    static AddConcept(concept: Concept){
       var contains = this.CheckContains(concept);
       this.conceptDictionary[concept.id] = concept;

       if(contains){
        this.RemoveConcept(concept);
       }
        storeToDatabase("concepts",concept);
        this.conceptsArray.push(concept);
    }

    static RemoveConcept(concept: Concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }

       removeFromDatabase("concepts",concept.id);
    }

    static GetConcept(id: number){
       var  myConcept: Concept|null;
       myConcept = null;
        for(var i=0; i<this.conceptsArray.length; i++){
            if(this.conceptsArray[i].id == id){
                myConcept = this.conceptsArray[i];
            }
        }
        if(!myConcept){
            var concept = getFromDatabase("concepts",id);
            return concept;
        }

        return myConcept;
    }

    static GetConceptByCharacter(characterValue: string){
        var  myConcept: Concept|null;
        myConcept = null;
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].characterValue == characterValue){
                 myConcept = this.conceptsArray[i];
             }
         }

         return myConcept;
     }

     static GetConceptsByTypeId(typeId: number){
        var  myConcept: Concept|null;
        var ConceptList: Concept[] = [];
        myConcept = null;
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].typeId == typeId){
                 ConceptList.push(this.conceptsArray[i]);
             }
         }

         var dbConceptList = getFromDatabaseWithType("concepts","typeId", typeId);
         for(var i=0; i< dbConceptList.length; i++){
            var contains: boolean = false;
            for(var j=0; j< ConceptList.length; j++){
                if(dbConceptList[i].id == ConceptList[j].id){
                    contains = true;
                }
            }

            if(!contains){
                ConceptList.push(dbConceptList[i]);
            }
         }
         return ConceptList;
     }


    getName(){
        return this.name;
    }
}