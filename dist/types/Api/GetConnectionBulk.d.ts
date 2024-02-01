import { Connection } from "../DataStructures/Connection";
export declare function GetConnectionBulk(connectionIds: number[]): Promise<string | Connection[] | number[]>;
