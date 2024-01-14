import { Connection } from "./Connection";
export declare class ConnectionData {
    name: string;
    constructor();
    static connectionArray: Connection[];
    static connectionDictionary: Connection[];
    static CheckContains(connection: Connection): boolean;
    static AddConnectionToStorage(connection: Connection): void;
    static AddConnection(connection: Connection): void;
    static AddConnectionToMemory(connection: Connection): void;
    static AddToDictionary(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static GetConnectionTree(): import("./ConnectionBinaryTree/ConnectionNode").ConnectionNode | null;
    static GetConnectionTypeTree(): import("./ConnectionBinaryTree/ConnectionNode").ConnectionNode | null;
    static GetConnection(id: number): Promise<Connection>;
    static GetConnectionsOfCompositionLocal(id: number): Promise<Connection[]>;
    getName(): string;
}
