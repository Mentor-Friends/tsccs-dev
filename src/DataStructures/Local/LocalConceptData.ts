import { GetConcept } from "../../Api/GetConcept";
import { Concept } from "./../Concept";
import {  storeToDatabase } from "../../Database/NoIndexDb";
import { BinaryTree } from "./../BinaryTree";
import { LocalBinaryTree } from "./LocalBinaryTree";
import { LocalBinaryCharacterTree } from "./LocalBinaryCharacterTree";
import { LocalBinaryTypeTree } from "./LocalBinaryTypeTree";
export class LocalConceptsData{

    name: string;
    constructor(){
        this.name = "conceptsArray";
    }
    static  localconceptsArray:Concept[] = [];



    static AddConcept(concept: Concept){
        if(concept.id > 0){
             storeToDatabase("localconcept",concept);
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }

    }

    static AddConceptToMemory(concept: Concept){
        if(concept.id > 0){
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
        }

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
        }
        return concept;

     }

     static  GetConceptsByTypeId(typeId: number){
        var  myConcept: Concept|null;
        let ConceptList: Concept[] = [];
        myConcept = null;
         for(var i=0; i<this.localconceptsArray.length; i++){
             if(this.localconceptsArray[i].typeId == typeId){
                 ConceptList.push(this.localconceptsArray[i]);
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