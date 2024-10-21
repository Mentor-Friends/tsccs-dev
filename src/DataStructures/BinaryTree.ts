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
        let node: Node = new Node(concept.id, concept, null, null);
        let characterNode: Node = new Node(concept.characterValue, concept, null,null);
        BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }

    static async getNodeFromTree(id:number){
        if(this.root){
            let Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return null;
    }
    

    static async removeNodeFromTree(id:number){
        if(this.root){
            let event = new Event(`${id}`);
             console.log("this is the fired event after delete", event);
             dispatchEvent(event);
            this.root = this.root.removeNode(this.root,id);
        }
    }


    static async getConceptListFromIds(ids: number[], connectionArray: Concept [], remainingIds: any){
        if(this.root){
            this.root.checkIfIdsInNode(this.root, ids, connectionArray, remainingIds);
        }
    }



    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }





}