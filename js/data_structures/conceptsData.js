
export class ConceptsData{
    constructor(){
        this.name = "conceptsArray";
    }
    static conceptsArray = [];

    static  CheckContains(concept){
        var contains = false;
        for(var i=0; i<this.conceptsArray.length; i++){
         if(this.conceptsArray[i].id == concept.id){
             contains = true;
         }
        }

        return contains;
    }


    static AddConcept(concept){
       var contains = this.CheckContains(concept);

       if(!contains){
        this.conceptsArray.push(concept);
       }
    }

    static RemoveConcept(concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }
    }

    static GetConcept(id){
        for(var i=0; i<this.conceptsArray.length; i++){
            if(this.conceptsArray[i].id == id){
                return this.conceptsArray[i];
            }
        }
    }

    getName(){
        return this.name;
    }
}