import { LConcept } from "../../DataStructures/Local/LConcept";
import { UserNode } from "./UserNode";
export declare class UserBinaryTree {
    static root: UserNode | null;
    static addNodeToTree(node: UserNode): UserNode | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addConceptToTree(concept: LConcept, userId: number): void;
    static getNodeFromTree(id: number): Promise<UserNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
