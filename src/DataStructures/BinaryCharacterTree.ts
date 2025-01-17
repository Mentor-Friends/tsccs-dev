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

    static async removeNodeByCharacter(character:string, id:number){
        if(this.characterRoot){
            this.characterRoot.removeNodeWithVariants(this.characterRoot,character,id);
        }
    }



    static countNumberOfNodes(){
        if(this.characterRoot){
            return this.characterRoot.countNodeBelow(this.characterRoot);

        }
        return 0;
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

    static getNodeFromTreeUpdated(value:string){
        if(this.characterRoot){
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }

    static async getCharacterAndTypeFromTree(value:string, typeId: number){

        // try{
            // var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.characterRoot){
            var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId,this.characterRoot);
            return Node;
        }   
        return this.characterRoot;
    }

    static async getCharacterAndCategoryFromTree(value:string, categoryId: number){

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return null;
        // }
        if(this.characterRoot){
            var Node = this.characterRoot.getFromNodeWithCharacterAndCategory(value, categoryId,this.characterRoot);
            return Node;
        }   
        return this.characterRoot;
    }


    


    static removeConceptCharacter(id:number){
        if(this.characterRoot){
            this.characterRoot = this.characterRoot.removeNode(this.characterRoot,id);

        }
    }

}