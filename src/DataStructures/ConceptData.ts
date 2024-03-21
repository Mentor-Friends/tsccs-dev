import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
import {  getFromDatabaseWithType, getFromDatabaseWithTypeOld, removeFromDatabase, storeToDatabase } from "../Database/NoIndexDb";
import { BinaryTree } from "./BinaryTree";
import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { BinaryTypeTree } from "./BinaryTypeTree";
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

    static AddConceptToStorage(concept: Concept){
        if(concept.id > 0){
        storeToDatabase("concept",concept);
        }
    }

    static AddConcept(concept: Concept){
        if(concept.id > 0){
            //var contains = this.CheckContains(concept);
           // this.conceptDictionary[concept.id] = concept;
     
        //    if(contains){
          //   this.RemoveConcept(concept);
          //  }
             storeToDatabase("concept",concept);
             BinaryTree.addConceptToTree(concept);
              BinaryTypeTree.addConceptToTree(concept);
              BinaryCharacterTree.addConceptToTree(concept);
        }

    }

    static AddConceptToMemory(concept: Concept){
        if(concept.id > 0){
            //var contains = this.CheckContains(concept);
           // this.conceptDictionary[concept.id] = concept;
     
        //    if(contains){
          //   this.RemoveConcept(concept);
          //  }
             BinaryTree.addConceptToTree(concept);
              BinaryTypeTree.addConceptToTree(concept);
              BinaryCharacterTree.addConceptToTree(concept);
        }

    }

    static AddConceptTemporary(concept: Concept){
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

       removeFromDatabase("concept",concept.id);
    }

    static async GetConcept(id: number){
       var  myConcept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        var node = await BinaryTree.getNodeFromTree(id);
        if(node?.value){
            var returnedConcept = node.value;
            if(returnedConcept){
                myConcept = returnedConcept as Concept;
            }
        }
        // if(myConcept.id == 0 || myConcept == null){
        //     for(var i=0; i<this.conceptsArray.length; i++){
        //         if(this.conceptsArray[i].id == id){
        //             myConcept = this.conceptsArray[i];
        //         }
        //     }
        // }
        return myConcept;
    }

    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        //  for(var i=0; i<this.conceptsArray.length; i++){
        //      if(this.conceptsArray[i].characterValue == characterValue){
        //         concept = this.conceptsArray[i];
        //      }
        //  }

        var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
        if(Node){
            console.log("got the character");
            concept  = Node.value;
        }
        // console.log(characterValue);
        // var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
        // if(Node){
        //     console.log(Node.value);

        //     return Node.value;
        // }

         return concept;
     }

     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
        concept = await BinaryTypeTree.getTypeVariantsWithCharacterValue(character_value,typeId);
        // if(Node){

        //     concept =  Node.value;
        //     console.log("found the output");
        //     console.log(concept);
        // }
        return concept;

     }

     static  GetConceptsByTypeId(typeId: number){
        var  myConcept: Concept|null;
        let ConceptList: Concept[] = [];
        myConcept = null;
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].typeId == typeId){
                 ConceptList.push(this.conceptsArray[i]);
             }
         }
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

     static async   GetConceptsByTypeIdAndUser(typeId: number, userId: number){
        let ConceptList: Concept[] = [];
        ConceptList = await BinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
         return ConceptList;
     }

     static GetBinaryCharacterTree(){
        return BinaryCharacterTree.characterRoot;
     }




    getName(){
        return this.name;
    }
}