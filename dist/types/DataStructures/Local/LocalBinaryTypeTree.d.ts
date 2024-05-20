import { LConcept } from "../../DataStructures/Local/LConcept";
import { LNode } from "./LNode";
export declare class LocalBinaryTypeTree {
    static LocalTypeRoot: LNode | null;
    static addNodeToTree(node: LNode): Promise<LNode | null>;
    static addConceptToTree(concept: LConcept): void;
    static removeConceptType(typeId: number, id: number): void;
    static getNodeFromTree(id: number): LNode | null;
    static getTypeVariantsFromTree(typeId: number): LConcept[] | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getTypeVariantsFromTreeWithUserId(typeId: number, userId: number): Promise<LConcept[]>;
}
