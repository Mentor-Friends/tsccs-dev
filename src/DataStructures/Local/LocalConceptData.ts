import { GetConcept } from "../../Api/GetConcept";
import { Concept } from "./../Concept";
import {  storeToDatabase } from "../../Database/indexdblocal";
import { BinaryTree } from "./../BinaryTree";
import { LocalBinaryTree } from "./LocalBinaryTree";
import { LocalBinaryCharacterTree } from "./LocalBinaryCharacterTree";
import { LocalBinaryTypeTree } from "./LocalBinaryTypeTree";
export class LocalConceptsData{

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
        if(concept.id > 0){
             storeToDatabase("localconcept",concept);
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
            this.conceptsArray.push(concept);
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

     //  removeFromDatabase("concept",concept.id);
    }

    static async GetConcept(id: number){
       var  myConcept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
       var node = await LocalBinaryTree.getNodeFromTree(id);
       if(node?.value){
           var returnedConcept = node.value;
           if(returnedConcept){
               myConcept = returnedConcept as Concept;
           }
       }

        return myConcept;
    }

    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        //  for(var i=0; i<this.conceptsArray.length; i++){
        //      if(this.conceptsArray[i].characterValue == characterValue){
        //         concept = this.conceptsArray[i];
        //      }
        //  }

        var Node = LocalBinaryCharacterTree.getNodeFromTree(characterValue);
        if(Node){
            console.log("got the character");
            concept  = Node.value;
        }
         return concept;
     }

     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
        // for(var i=0;i<conceptList.length; i++){

        //     if(character_value == conceptList[i].characterValue){
        //         concept = conceptList[i];
        //     }
        // }

        var Node = await LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
        if(Node){

            concept =  Node.value;
            console.log("found the output");
            console.log(concept);
        }
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
         return ConceptList;
     }

     static async  GetConceptsByTypeIdAndUser(typeId: number, userId: number){
        var  myConcept: Concept|null;
        let ConceptList: Concept[] = [];
        // myConcept = null;
        //  for(var i=0; i<this.conceptsArray.length; i++){
        //      if(this.conceptsArray[i].typeId == typeId && this.conceptsArray[i].userId == userId){
        //          ConceptList.push(this.conceptsArray[i]);
        //      }
        //  }
        ConceptList = await LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
         return ConceptList;
     }




    getName(){
        return this.name;
    }
}