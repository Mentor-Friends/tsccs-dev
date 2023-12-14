import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
import { getFromDatabase, getFromDatabaseWithType, getFromDatabaseWithTypeOld, removeFromDatabase, storeToDatabase } from "../Database/indexeddb";
import { BinaryTree } from "./BinaryTree";
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
        if(concept.id > 0){
            //var contains = this.CheckContains(concept);
           // this.conceptDictionary[concept.id] = concept;
     
        //    if(contains){
          //   this.RemoveConcept(concept);
          //  }
             storeToDatabase("concept",concept);
             BinaryTree.addConceptToTree(concept);
     
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

       removeFromDatabase("concept",concept.id);
    }

    static GetConcept(id: number){
       var  myConcept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        var node = BinaryTree.getNodeFromTree(id);
        if(node?.value){
            var returnedConcept = node.value;
            if(returnedConcept){
                myConcept = returnedConcept as Concept;
            }
        }
        if(myConcept.id == 0 || myConcept == null){
            for(var i=0; i<this.conceptsArray.length; i++){
                if(this.conceptsArray[i].id == id){
                    myConcept = this.conceptsArray[i];
                }
            }
        }

        return myConcept;
    }

    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].characterValue == characterValue && this.conceptsArray[i].typeId != 51 && this.conceptsArray[i].typeId != 12){
                concept = this.conceptsArray[i];
             }
         }
        // console.log(characterValue);
        // var Node = BinaryTree.getCharacterFromTree(characterValue);
        // if(Node){
        // console.log(Node.value);

        //     return Node.value;
        // }

         return concept;
     }

     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: Concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
        for(var i=0;i<conceptList.length; i++){

            if(character_value == conceptList[i].characterValue){
                concept = conceptList[i];
            }
        }
        // var Node = BinaryTree.getCharacterAndTypeFromTree(character_value,typeId);
        // if(Node){
        // console.log(Node.value);

        //     return Node.value;
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




    getName(){
        return this.name;
    }
}