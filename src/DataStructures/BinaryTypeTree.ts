import { ConceptsData, dispatchIdEvent, GetTheConcept } from "../app";
import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { IdentifierFlags } from "./IdentifierFlags";
import { Node } from "./Node";
import { TypeNode } from "./TypeNode";

export class BinaryTypeTree{
    static typeRoot: Node | null = null;

    static root: TypeNode | null = null;

    // old method having concept as the value.
    // static async addNodeToTree(node:Node){
    //     if(this.typeRoot == null){
    //         this.typeRoot = node;
    //         return this.typeRoot;
    //     }
    //     else{
    //          let event = new CustomEvent(`${node.value.typeId}`, {detail: node.value.id});
    //         // console.log("this is the fired event", event);
    //          dispatchEvent(event);
    //         this.typeRoot = this.typeRoot.addTypeNode(node,this.typeRoot,this.typeRoot.height);
    //     }
    //     return this.typeRoot;
    // }

    // new method with just ids 
    static async addType(node: TypeNode){
        console.log("this is the adding type", node);
        if(this.root == null){
            this.root = node;
            let event = new CustomEvent(`${node.key}`, {detail: node.value[0]});
            // console.log("this is the fired event", event);
            //  dispatchEvent(event);
            dispatchIdEvent(node.key, {detail: node.value[0]})
            return this.root;
        }
        else{
            let event = new CustomEvent(`${node.key}`, {detail: node.value[0]});
            // console.log("this is the fired event", event);
            //  dispatchEvent(event);
            dispatchIdEvent(node.key, {detail: node.value[0]})
            // console.log("this is the fired event", event);
            this.root = this.root.addType(this.root, node.key, node.value[0]);
        }
        return this.root;
    }


    static addConceptToTree(concept:Concept){
        if(concept.typeId != 0){
            /// old type 
            // var node: Node = new Node(concept.typeId, concept, null, null);
            // this.addNodeToTree(node);


            // new functionality
            let typeNode: TypeNode = new TypeNode(concept.typeId, concept.id);
            this.addType(typeNode);
        }
    }

    static removeTypeConcept(typeId:number,id:number){

        // old mehtod
        // if(this.typeRoot){
        //     this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot,typeId,id);
        // }

        // new method
        if(this.root){
            this.root = this.root.removeNodeWithVariants(this.root, typeId, id);
        }
    }




    // static getNodeFromTree(id:number){
    //     // old method
    //     if(this.typeRoot){
    //         var Node = this.typeRoot.getFromNode(id, this.typeRoot);
    //         return Node;
    //     }



    //     return this.typeRoot;

    // }


    static getNodeFromTreeNew(id: number){
        // new method
        if(this.root){
            let node = this.root.getFromNode(id, this.root);
            return node;
        }

        return this.root;
    }


    /// old method
    // static getTypeVariantsFromTree(typeId:number){


    //         let Node = this.getNodeFromTree(typeId);
    //         var concepts : Concept[] = [];
    
    //         if(Node){

    //             concepts.push(Node?.value);
    //             for(let i=0; i< Node.variants.length; i++){
    //                 concepts.push(Node.variants[i].value);
    //             }
            
    //         return concepts;
    //     }


    // }

    //new method
    static async getTypeVariantsFromTreeNew(typeId: number){
        let node = this.getNodeFromTreeNew(typeId);
        let conceptIds: number[] = [];
        let concepts: Concept[] = [];

        if(node){
            conceptIds = node.value;

            for(let i=0 ; i < conceptIds.length; i ++){
                let alreadyExist = false;
                for(let j=0; j<concepts.length; j++){
                    if(concepts[j].id == conceptIds[i]){
                        alreadyExist = true;
                    }
                }   
                if(!alreadyExist){
                    concepts.push(await GetTheConcept(conceptIds[i]));
                }
            }
        }

        return concepts;
    }

    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
      };


    // static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
    //     var concepts : Concept[] = [];
    //         var Node = this.getNodeFromTree(typeId);
    
    //         if(Node){
    //             console.log("this is the tree to find", Node.value);
    //             if(Node.value.userId == userId ){
    //                 concepts.push(Node?.value);
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.userId == userId ){
    //                     var isPresent = false;

    //                     for(let j=0; j<concepts.length;j++){
    //                         if(concepts[j].id == Node.variants[i].value.id){
    //                             isPresent = true;
    //                         }
    //                     }
    //                     if(!isPresent){
    //                         concepts.push(Node.variants[i].value);

    //                     }

    //                 }
    //             }
    //         }
    //     return concepts;
    // }

    // new method
    static async getTypeVariantsFromTreeWithUserIdNew(typeId:number, userId:number){
        let concepts : Concept[] = [];
        let allConcepts = await this.getTypeVariantsFromTreeNew(typeId);
        console.log("these are all the concepts", allConcepts);
        for(let i=0 ;i<allConcepts.length; i++){
            if(allConcepts[i].userId == userId){
                concepts.push(allConcepts[i]);
            }
        }

        return concepts;
    }

    // static async getTypeVariantsWithCharacterValue( characterValue:string,typeId:number,){
    //     let concept = CreateDefaultConcept();
    //         var Node = this.getNodeFromTree(typeId);
    //         if(Node){
    //             if(Node.value.characterValue == characterValue ){
    //                 concept = Node.value;
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.characterValue == characterValue ){
    //                     concept = Node.variants[i].value;
    //                 }
    //             }
    //         }
    //     return concept;
    // }

    //new method
    static async getTypeVariantsWithCharacterValueNew( characterValue:string,typeId:number,){
        let allConcepts = await this.getTypeVariantsFromTreeNew(typeId);
        console.log("this is all the concepts for character", allConcepts);
        let concept = CreateDefaultConcept();
        for(let i=0; i< allConcepts.length; i++){
            if(allConcepts[i].characterValue == characterValue){
                concept = allConcepts[i];
            }
        }

        return concept;

    }

    static countNumberOfNodes(){
        if(this.typeRoot){
            return this.typeRoot.countNodeBelow(this.typeRoot);

        }
        return 0;
    }




}