import { Connection } from "../DataStructures/Connection";
export declare function CheckForConnectionDeletion(newConnections?: Connection[], oldConnections?: Connection[]): Promise<void>;
export declare function CheckForConnectionDeletionWithIds(newConnectionIds?: number[], oldConnections?: Connection[]): Promise<void>;
