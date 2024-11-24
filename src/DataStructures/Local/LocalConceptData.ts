import { Concept } from "./../Concept";
import {  removeFromDatabase,UpdateToDatabase } from "../../Database/indexdblocal";
import { LocalBinaryTree } from "./LocalBinaryTree";
import { LocalBinaryCharacterTree } from "./LocalBinaryCharacterTree";
import { LocalBinaryTypeTree } from "./LocalBinaryTypeTree";
import { CreateDefaultLConcept } from "../../Services/Local/CreateDefaultLConcept";
import { ConceptsData } from "../ConceptData";
import { ConvertFromLConceptToConcept } from "../../Services/Local/ConvertFromLConceptToConcept";
import { LocalGhostIdTree } from "./LocalGhostIdTree";
import { LocalConnectionData } from "./LocalConnectionData";
import { LocalSyncData } from "./LocalSyncData";
export class LocalConceptsData{

    name: string;
    constructor(){
        this.name = "conceptsArray";
    }
    static  localconceptsArray:Concept[] = [];



    static AddConcept(concept: Concept){
        if(concept.id != 0){
            UpdateToDatabase("localconcept",concept);
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }

    }

    static AddPermanentConcept(concept: Concept){
        if(concept.id != 0){
            LocalBinaryTree.removeNodeFromTree(concept.ghostId);
            LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
            LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
            LocalGhostIdTree.addConceptToTree(concept);
            let removeData = removeFromDatabase("localconcept", concept.ghostId);
            ConceptsData.AddConcept(concept);
        }
    }

    static async RemoveConcept(concept: Concept){
        try{
            if(concept.id != 0){
                LocalBinaryTree.removeNodeFromTree(concept.ghostId);
                LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                await removeFromDatabase("localconcept", concept.ghostId);
                }
        }
        catch(error){
            throw error;
        }

    }

    static async RemoveConceptById(conceptId: number){
        try{
            let concept = await LocalConceptsData.GetConcept(conceptId);
            if(concept.id != 0){
                LocalBinaryTree.removeNodeFromTree(conceptId);
                LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                LocalSyncData.RemoveConcept(concept);
               // await removeFromDatabase("localconcept", concept.ghostId);
                }
        }
        catch(error){
            throw error;
        }

    }

    static AddConceptToMemory(concept: Concept){
        if(concept.id != 0){
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
        }

    }





    static async GetConcept(id: number){
       var  myConcept: Concept = CreateDefaultLConcept();
       var node = await LocalBinaryTree.getNodeFromTree(id);
       if(node?.value){
           var returnedConcept = node.value;
           if(returnedConcept){
               myConcept = returnedConcept as Concept;
           }
       }

        return myConcept;
    }

    static async UpdateConceptSyncStatus(id: number){
        LocalBinaryTree.updateSyncStatus(id); 
     }

    static async GetConceptByGhostId(id: number){
        var  myConcept: Concept = CreateDefaultLConcept();
        var node = await LocalGhostIdTree.getNodeFromTree(id);
        if(node?.value){
            var returnedConcept = node.value;
            if(returnedConcept){
                myConcept = returnedConcept as Concept;
            }
        }
 
         return myConcept;
     }

    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = CreateDefaultLConcept();
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
        var concept: Concept = CreateDefaultLConcept();
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

     static async GetConceptByCharacterAndCategoryLocal(character_value:string, categoryId: number){
        var concept: Concept = CreateDefaultLConcept();

        var Node = await LocalBinaryCharacterTree.getCharacterAndCategoryFromTree(character_value,categoryId);
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


     static async ClearData(){
        this.localconceptsArray = [];
        LocalConnectionData.connectionArray = [];
     }




    getName(){
        return this.name;
    }
}