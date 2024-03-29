import { Connection } from "../../DataStructures/Connection";
import { ConnectionNode } from "./ConnectionNode";
export declare class ConnectionBinaryTree {
    static connectionroot: ConnectionNode | null;
    static addNodeToTree(node: ConnectionNode): ConnectionNode | undefined;
    static addConnectionToTree(connection: Connection): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static removeNodeFromTree(id: number): Promise<void>;
    static getNodeFromTree(id: number): Promise<ConnectionNode | null>;
}
