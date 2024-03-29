import { Connection } from '../DataStructures/Connection';
export declare function GetAllConnectionsOfCompositionBulk(composition_ids?: number[]): Promise<Connection[]>;
export declare function GetAllConnectionsOfCompositionOnline(composition_ids?: number[]): Promise<string | Connection[]>;
