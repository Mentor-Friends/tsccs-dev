import { Concept } from "./Concept";
export declare class Node {
    key: any;
    value: Concept;
    leftNode: Node | null;
    rightNode: Node | null;
    currentNode: Node | null;
    variants: Node[];
    height: number;
    constructor(key: any, value: Concept, leftNode: Node | null, rightNode: Node | null);
    addCurrentNode(passedNode: Node, node: Node | null): Node;
    addCurrentNodeType(passedNode: Node, node: Node | null): Node;
    addNode(passedNode: Node, node: Node | null, height: number): Node | null;
    addCharacterNode(passedNode: Node, node: Node | null, height: number): Node | null;
    addTypeNode(passedNode: Node, node: Node | null, height: number): Node | null;
    rightRotate(y: Node | null): Node | null;
    leftRotate(x: Node | null): Node | null;
    getHeight(node: Node | null): number;
    getBalanceFactor(N: Node | null): number;
    getFromNode(id: number, node: Node | null): Node | null;
    getCharacterFromNode(value: string, node: Node | null): Node | null;
    getFromNodeWithCharacterAndType(value: string, typeId: number, node: Node | null): Node | null;
}
