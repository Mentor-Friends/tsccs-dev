import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";

export class BinaryCharacterTree{
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
        var node: Node = new Node(concept.characterValue, concept, null, null);
        this.addNodeToTree(node);
    }

    static getNodeFromTree(value:string){
        if(this.root){
            var Node = this.root.getFromNodeWithCharacter(value, this.root);
            return Node;
        }
        return this.root;
    }

}