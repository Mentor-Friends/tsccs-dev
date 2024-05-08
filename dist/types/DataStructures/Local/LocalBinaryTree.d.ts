import { Concept } from "../../DataStructures/Concept";
import { Node } from "./../Node";
export declare class LocalBinaryTree {
    static root: Node | null;
    static addNodeToTree(node: Node): Node | undefined;
    static addConceptToTree(concept: Concept): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getNodeFromTree(id: number): Promise<Node | null>;
    static getCharacterAndTypeFromTree(value: string, typeId: number): Node | null;
    static removeNodeFromTree(id: number): Promise<void>;
}
