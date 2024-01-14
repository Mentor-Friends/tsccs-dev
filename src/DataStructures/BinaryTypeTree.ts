import { Concept } from "../DataStructures/Concept";
import { IdentifierFlags } from "./IdentifierFlags";
import { Node } from "./Node";

export class BinaryTypeTree{
    static typeRoot: Node | null = null;

    static async addNodeToTree(node:Node){
        if(this.typeRoot == null){
            console.log("this is type root ", node);
            this.typeRoot = node;
            return this.typeRoot;
        }
        else{
            this.typeRoot = this.typeRoot.addTypeNode(node,this.typeRoot,this.typeRoot.height);
        }
        return this.typeRoot;
    }

    static addConceptToTree(concept:Concept){
        if(concept.typeId != 0){
            var node: Node = new Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }

    static removeTypeConcept(typeId:number,id:number){
        if(this.typeRoot){
            this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot,typeId,id);

        }
    }




    static getNodeFromTree(id:number){
        if(this.typeRoot){
            var Node = this.typeRoot.getFromNode(id, this.typeRoot);
            return Node;
        }
        return this.typeRoot;
    }

    static getTypeVariantsFromTree(typeId:number){


            var Node = this.getNodeFromTree(typeId);
            var concepts : Concept[] = [];
    
            if(Node){
                concepts.push(Node?.value);
                for(let i=0; i< Node.variants.length; i++){
                    concepts.push(Node.variants[i].value);
                }
            
            return concepts;
        }


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


    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : Concept[] = [];
        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return concepts;
        }
            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                if(Node.value.userId == userId ){
                    concepts.push(Node?.value);
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.userId == userId ){
                        var isPresent = false;

                        for(let j=0; j<concepts.length;j++){
                            if(concepts[j].id == Node.variants[i].value.id){
                                isPresent = true;
                            }
                        }
                        if(!isPresent){
                            concepts.push(Node.variants[i].value);

                        }

                    }
                }
            }
        return concepts;
    }

    static async getTypeVariantsWithCharacterValue( characterValue:string,typeId:number,){
        var concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return concept;
        }
            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                if(Node.value.characterValue == characterValue ){
                    concept = Node.value;
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.characterValue == characterValue ){
                        concept = Node.variants[i].value;
                    }
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