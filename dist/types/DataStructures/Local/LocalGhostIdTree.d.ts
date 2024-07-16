import { LConcept } from "../../DataStructures/Local/LConcept";
import { LNode } from "./../Local/LNode";
export declare class LocalGhostIdTree {
    static root: LNode | null;
    static addNodeToTree(node: LNode): LNode | undefined;
    static addConceptToTree(concept: LConcept): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getNodeFromTree(id: number): Promise<LNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
}