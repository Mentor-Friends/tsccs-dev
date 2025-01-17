import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LNode } from "./LNode";

export class LocalBinaryTypeTree{
    static LocalTypeRoot: LNode | null = null;

    static async addNodeToTree(node:LNode){
        if(this.LocalTypeRoot == null){
            this.LocalTypeRoot = node;
            return this.LocalTypeRoot;
        }
        else{
            this.LocalTypeRoot = this.LocalTypeRoot.addTypeNode(node,this.LocalTypeRoot,this.LocalTypeRoot.height);
        }
        return this.LocalTypeRoot;
    }

    static addConceptToTree(concept:LConcept){
        if(concept.typeId != 0){
            var node: LNode = new LNode(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }

    }
    
    static removeConceptType(typeId:number,id:number){
        if(this.LocalTypeRoot){
            this.LocalTypeRoot = this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot,typeId, id);

        }
    }

    static getNodeFromTree(id:number){
        if(this.LocalTypeRoot){
            var Node = this.LocalTypeRoot.getFromNode(id, this.LocalTypeRoot);
            return Node;
        }
        return this.LocalTypeRoot;
    }

    static getTypeVariantsFromTree(typeId:number){


            var Node = this.getNodeFromTree(typeId);
            var concepts : LConcept[] = [];
    
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

        if(IdentifierFlags.isLocalTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryTypeTree.checkFlag, 1000, resolve);
        }
      };


    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : LConcept[] = [];
        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return concepts;
        // }
            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                if(Node.value.userId == userId ){
                    concepts.push(Node?.value);
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.userId == userId ){
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
        return concepts;
    }




}