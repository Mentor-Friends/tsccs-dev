import { LConcept } from "../../DataStructures/Local/LConcept";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LNode } from "./../Local/LNode";

export class LocalBinaryCharacterTree{
    static LocalCharacterRoot: LNode | null = null;


    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalCharacterLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalBinaryCharacterTree.checkFlag, 1000, resolve);
        }
      };
    static async addNodeToTree(node:LNode){
        if(this.LocalCharacterRoot == null){
            this.LocalCharacterRoot = node;
            return this.LocalCharacterRoot;
        }
        else{
            this.LocalCharacterRoot = this.LocalCharacterRoot.addCharacterNode(node,this.LocalCharacterRoot,this.LocalCharacterRoot.height);
        }
        return this.LocalCharacterRoot;
    }

    static addConceptToTree(concept:LConcept){
        if(concept.characterValue != ""){
            var node: LNode = new LNode(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }

    }

    static getNodeFromTree(value:string){
        if(this.LocalCharacterRoot){
            var Node = this.LocalCharacterRoot.getCharacterFromNode(value, this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }

    static async getCharacterAndTypeFromTree(value:string, typeId: number){

        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        if(this.LocalCharacterRoot){
            var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId,this.LocalCharacterRoot);
            return Node;
        }   
        return this.LocalCharacterRoot;
    }

    static async getCharacterAndCategoryFromTree(value:string, categoryId: number){

        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        if(this.LocalCharacterRoot){
            var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndCategory(value, categoryId,this.LocalCharacterRoot);
            return Node;
        }   
        return this.LocalCharacterRoot;
    }

    
    static removeConceptType(character:string,id:number){
        if(this.LocalCharacterRoot){
            this.LocalCharacterRoot = this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot,character, id);
        }
    }

}