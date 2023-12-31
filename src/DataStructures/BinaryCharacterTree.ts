import { Concept } from "../DataStructures/Concept";
import { IdentifierFlags } from "./IdentifierFlags";
import { Node } from "./Node";

export class BinaryCharacterTree{
    static characterRoot: Node | null = null;


    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isCharacterLoaded){
            return resolve("done");
        }
        else{
            setTimeout(BinaryCharacterTree.checkFlag, 1000, resolve);
        }
      };
    static async addNodeToTree(node:Node){
        if(this.characterRoot == null){
            this.characterRoot = node;
            return this.characterRoot;
        }
        else{
            this.characterRoot = this.characterRoot.addCharacterNode(node,this.characterRoot,this.characterRoot.height);
        }
        return this.characterRoot;
    }

    static addConceptToTree(concept:Concept){
        if(concept.characterValue != ""){
            var node: Node = new Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }

    }

    static getNodeFromTree(value:string){
        if(this.characterRoot){
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }

    static async getCharacterAndTypeFromTree(value:string, typeId: number){

        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        if(this.characterRoot){
            console.log("searching .................");
            console.log(value);
            var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId,this.characterRoot);
            return Node;
        }   
        return this.characterRoot;
    }

}