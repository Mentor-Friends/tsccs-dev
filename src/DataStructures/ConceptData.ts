import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
import { getFromDatabase, getFromDatabaseWithType, getFromDatabaseWithTypeOld, removeFromDatabase, storeToDatabase } from "../Database/indexeddb";
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
        storeToDatabase("concept",concept);
        this.conceptsArray.push(concept);
    }

    static RemoveConcept(concept: Concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }

       removeFromDatabase("concept",concept.id);
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
            var concept = getFromDatabase("concept",id);
            return concept;
        }

        return myConcept;
    }

    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].characterValue == characterValue){
                concept = this.conceptsArray[i];
             }
         }

         return concept;
     }

     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        var conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
        for(var i=0;i<conceptList.length; i++){

            if(character_value == conceptList[i].characterValue){
                concept = conceptList[i];
            }
        }
        return concept;

     }

     static  GetConceptsByTypeId(typeId: number){
        var  myConcept: Concept|null;
        var ConceptList: Concept[] = [];
        myConcept = null;
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].typeId == typeId){
                 ConceptList.push(this.conceptsArray[i]);
             }
         }
         console.log("not in the static file");
        //  getFromDatabaseWithType("concept","typeId",typeId).then(conceptList=>{
        //     console.log("thi sis my list");
        //  });
        //   var dbConceptList = await getFromDatabaseWithTypeOld("concept","typeId", typeId);
        //   console.log(dbConceptList);
        //   if(Array.isArray(dbConceptList)){
        //         console.log(dbConceptList);
        //         console.log(dbConceptList.length);
        //  for(var i=0; i< dbConceptList.length; i++){
        //     console.log("here to push firsts");
        //     var contains: boolean = false;
        //     for(var j=0; j< ConceptList.length; j++){
        //         if(dbConceptList[i].id == ConceptList[j].id){
        //             contains = true;
        //         }
        //     }
        //     console.log("here to push");
        //     if(!contains){
        //         ConceptList.push(dbConceptList[i]);
        //     }
        //  }
        // }
        // console.log("this is the concept list");
        // console.log(ConceptList);
         return ConceptList;
     }




    getName(){
        return this.name;
    }
}