import { Concept } from "./../Concept";
import { Connection } from "./../Connection";
export declare class LocalSyncData {
    static conceptsSyncArray: Concept[];
    static connectionSyncArray: Connection[];
    static CheckContains(concept: Concept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: Connection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static AddConnection(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static syncDataLocalDb(): Promise<string>;
}
