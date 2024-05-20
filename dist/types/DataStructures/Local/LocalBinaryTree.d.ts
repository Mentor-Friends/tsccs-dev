import { LConcept } from "../../DataStructures/Local/LConcept";
import { LNode } from "./../Local/LNode";
export declare class LocalBinaryTree {
    static root: LNode | null;
    static addNodeToTree(node: LNode): LNode | undefined;
    static addConceptToTree(concept: LConcept): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getNodeFromTree(id: number): Promise<LNode | null>;
    static getCharacterAndTypeFromTree(value: string, typeId: number): LNode | null;
    static removeNodeFromTree(id: number): Promise<void>;
}
