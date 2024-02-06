import { Connection } from "../DataStructures/Connection";
export declare function GetComposition(id: number): Promise<any>;
export declare function GetCompositionFromMemory(id: number): Promise<any>;
export declare function GetCompositionWithIdFromMemory(id: number): Promise<any>;
export declare function GetCompositionWithIdFromMemoryFromConnections(id: number, connectionList: Connection[]): Promise<any>;
export declare function GetCompositionWithId(id: number): Promise<any>;
