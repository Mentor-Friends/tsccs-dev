import { Concept } from "../../DataStructures/Concept";
import { Node } from "./../Node";
export declare class LocalBinaryCharacterTree {
    static LocalCharacterRoot: Node | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addNodeToTree(node: Node): Promise<Node | null>;
    static addConceptToTree(concept: Concept): void;
    static getNodeFromTree(value: string): Node | null;
    static getCharacterAndTypeFromTree(value: string, typeId: number): Promise<Node | null>;
    static removeConceptType(character: string, id: number): void;
}
