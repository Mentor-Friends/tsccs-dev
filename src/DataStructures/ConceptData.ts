import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
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
        this.conceptsArray.push(concept);
    }

    static RemoveConcept(concept: Concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }
    }

    static GetConcept(id: number){
       var  myConcept: Concept|null;
       myConcept = null;
        for(var i=0; i<this.conceptsArray.length; i++){
            if(this.conceptsArray[i].id == id){
                myConcept = this.conceptsArray[i];
            }
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

         return ConceptList;
     }


    getName(){
        return this.name;
    }
}