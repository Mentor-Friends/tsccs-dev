import { Concept } from "../../DataStructures/Concept";
import { IdentifierFlags } from "../IdentifierFlags";
import { Node } from "./../Node";

export class LocalBinaryTree{
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

    static addConceptToTree(concept:Concept){
        var node: Node = new Node(concept.id, concept, null, null);
        var characterNode: Node = new Node(concept.characterValue, concept, null,null);
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
        return this.root;
    }


    static getCharacterAndTypeFromTree(value:string, typeId: number){
        if(this.root){
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId,this.root);
            return Node;
        }   
        return this.root;
    }
}