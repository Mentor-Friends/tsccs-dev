import { LConnection } from "./LConnection";
export declare class LocalConnectionData {
    name: string;
    constructor();
    static connectionArray: LConnection[];
    static connectionDictionary: LConnection[];
    static CheckContains(connection: LConnection): boolean;
    static AddConnection(connection: LConnection): void;
    static AddConnectionToMemory(connection: LConnection): void;
    static AddToDictionary(connection: LConnection): void;
    static RemoveConnection(connection: LConnection): void;
    static AddPermanentConnection(connection: LConnection): void;
    static GetConnection(id: number): LConnection | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static GetConnectionsOfCompositionLocal(id: number): Promise<LConnection[]>;
    static GetConnectionOfCompositionAndTypeLocal(typeId: number, ofTheConceptId: number): Promise<LConnection[]>;
    getName(): string;
}
