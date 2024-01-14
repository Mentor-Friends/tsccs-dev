import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
export declare class BinaryTypeTree {
    static typeRoot: Node | null;
    static addNodeToTree(node: Node): Promise<Node | null>;
    static addConceptToTree(concept: Concept): void;
    static removeTypeConcept(typeId: number, id: number): void;
    static getNodeFromTree(id: number): Node | null;
    static getTypeVariantsFromTree(typeId: number): Concept[] | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getTypeVariantsFromTreeWithUserId(typeId: number, userId: number): Promise<Concept[]>;
    static getTypeVariantsWithCharacterValue(characterValue: string, typeId: number): Promise<Concept>;
    static countNumberOfNodes(): number;
}
