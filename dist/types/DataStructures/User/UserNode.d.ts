import { LConcept } from "../Local/LConcept";
export declare class UserNode {
    key: any;
    value: LConcept[];
    leftNode: UserNode | null;
    rightNode: UserNode | null;
    height: number;
    constructor(key: any, value: LConcept, leftNode: UserNode | null, rightNode: UserNode | null);
    addNode(passedNode: UserNode, node: UserNode | null, height: number): UserNode | null;
    rightRotate(y: UserNode | null): UserNode | null;
    leftRotate(x: UserNode | null): UserNode | null;
    getHeight(node: UserNode | null): number;
    getBalanceFactor(N: UserNode | null): number;
    getFromNode(id: number, node: UserNode | null): UserNode | null;
    removeNode(passedNode: UserNode | null, id: number): UserNode | null;
    countNodeBelow(root: UserNode | null): number;
    inOrderSuccessor(root: UserNode): UserNode;
}
