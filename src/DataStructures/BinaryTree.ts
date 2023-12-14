import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";

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

    static addConceptToTree(concept:Concept){
        var node: Node = new Node(concept.id, concept, null, null);
        this.addNodeToTree(node);
    }

    static getNodeFromTree(id:number){
        if(this.root){
            var Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return this.root;
    }

    static getCharacterFromTree(value:string){
        if(this.root){
            var Node = this.root.getFromNodeWithCharacter(value,this.root);
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