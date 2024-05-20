import { LConcept } from "./LConcept";
import { LConnection } from "./LConnection";
export declare class LocalSyncData {
    static conceptsSyncArray: LConcept[];
    static connectionSyncArray: LConnection[];
    static CheckContains(concept: LConcept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: LConnection): boolean;
    static AddConcept(concept: LConcept): void;
    static RemoveConcept(concept: LConcept): void;
    static SyncDataOnline(): Promise<string>;
    static AddConnection(connection: LConnection): void;
    static RemoveConnection(connection: LConnection): void;
    static syncDataLocalDb(): Promise<string>;
}
