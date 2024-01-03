import { Connection } from "./../Connection";
export declare class ConnectionNode {
    key: any;
    value: Connection;
    leftNode: ConnectionNode | null;
    rightNode: ConnectionNode | null;
    currentNode: ConnectionNode | null;
    variants: ConnectionNode[];
    height: number;
    constructor(key: any, value: Connection, leftNode: ConnectionNode | null, rightNode: ConnectionNode | null);
    addCurrentNode(passedNode: ConnectionNode, node: ConnectionNode | null): ConnectionNode;
    addCurrentNodeType(passedNode: ConnectionNode, node: ConnectionNode | null): ConnectionNode;
    addNode(passedNode: ConnectionNode, node: ConnectionNode | null, height: number): ConnectionNode | null;
    addTypeNode(passedNode: ConnectionNode, node: ConnectionNode | null, height: number): ConnectionNode | null;
    rightRotate(y: ConnectionNode | null): ConnectionNode | null;
    leftRotate(x: ConnectionNode | null): ConnectionNode | null;
    getHeight(node: ConnectionNode | null): number;
    getBalanceFactor(N: ConnectionNode | null): number;
    getFromNode(id: number, node: ConnectionNode | null): ConnectionNode | null;
    getCharacterFromNode(value: string, node: ConnectionNode | null): ConnectionNode | null;
}
