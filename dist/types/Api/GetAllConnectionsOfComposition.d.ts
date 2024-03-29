import { Connection } from '../DataStructures/Connection';
export declare function GetAllConnectionsOfComposition(composition_id: number): Promise<Connection[]>;
export declare function GetAllConnectionsOfCompositionOnline(composition_id: number): Promise<string | Connection[]>;
