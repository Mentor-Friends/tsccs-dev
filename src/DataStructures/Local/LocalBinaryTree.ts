import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "../IdentifierFlags";
import { LNode } from "./../Local/LNode";

export class LocalBinaryTree{
    static root: LNode | null = null;

    static addNodeToTree(node:LNode){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);
        }
    }

    static addConceptToTree(concept:LConcept){
        var node: LNode = new LNode(concept.id, concept, null, null);
        var characterNode: LNode = new LNode(concept.characterValue, concept, null,null);
        this.addNodeToTree(node);
    }

    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryTree.checkFlag, 1000, resolve);
        }
      };

    static async getNodeFromTree(id:number){

        
        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        if(this.root){
            var Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return null;
    }


    static getCharacterAndTypeFromTree(value:string, typeId: number){
        if(this.root){
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId,this.root);
            return Node;
        }   
        return this.root;
    }

    static updateSyncStatus(id:number){
        if(this.root){
            var Node = this.root.updateNodeSyncStatus(id, true, this.root );
            return Node;
        }
        return this.root;
    }

    static async removeNodeFromTree(id:number){
        if(this.root){
            this.root = this.root.removeNode(this.root,id);
        }
    }
}