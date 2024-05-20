import { LConcept } from "../../DataStructures/Local/LConcept";
import { LNode } from "./../Local/LNode";
export declare class LocalBinaryCharacterTree {
    static LocalCharacterRoot: LNode | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addNodeToTree(node: LNode): Promise<LNode | null>;
    static addConceptToTree(concept: LConcept): void;
    static getNodeFromTree(value: string): LNode | null;
    static getCharacterAndTypeFromTree(value: string, typeId: number): Promise<LNode | null>;
    static removeConceptType(character: string, id: number): void;
}
