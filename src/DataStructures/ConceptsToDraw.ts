import { Concept } from "./Concept";
export class ConceptsToDraw{
    
    name: string;
    constructor(){
        this.name = "concepts To Draw";
    }
    static  conceptsArray:Concept[] = [];

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

       if(!contains){
        this.conceptsArray.push(concept);
       }
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

    getName(){
        return this.name;
    }
}