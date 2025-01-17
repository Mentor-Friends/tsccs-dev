import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
import { IdentifierFlags } from "./IdentifierFlags";

export class BinaryTree{
    static root: Node | null = null;

    static addNodeToTree(node:Node){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);
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

        if(IdentifierFlags.isDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
      };

    static addConceptToTree(concept:Concept){
        var node: Node = new Node(concept.id, concept, null, null);
        var characterNode: Node = new Node(concept.characterValue, concept, null,null);
        BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }

    static async getNodeFromTree(id:number){

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.root){
            var Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return null;
    }
    

    static async removeNodeFromTree(id:number){
        if(this.root){
            this.root = this.root.removeNode(this.root,id);
        }
    }




    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }





}