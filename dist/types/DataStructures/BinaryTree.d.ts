import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
export declare class BinaryTree {
    static root: Node | null;
    static addNodeToTree(node: Node): Node | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addConceptToTree(concept: Concept): void;
    static getNodeFromTree(id: number): Promise<Node | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
