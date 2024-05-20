import { LConcept } from "./LConcept";
import { LConnection } from "./LConnection";
export declare class LocalSyncData {
    static conceptsSyncArray: LConcept[];
    static connectionSyncArray: LConnection[];
    static CheckContains(concept: LConcept): boolean;
    static SyncDataDelete(id: number): void;
<<<<<<< HEAD
    static CheckContainsConnection(connection: Connection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static SyncDataOnline(): Promise<string>;
    static AddConnection(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
=======
    static CheckContainsConnection(connection: LConnection): boolean;
    static AddConcept(concept: LConcept): void;
    static RemoveConcept(concept: LConcept): void;
    static AddConnection(connection: LConnection): void;
    static RemoveConnection(connection: LConnection): void;
>>>>>>> 99871fd6325cdf52eaea8d05c55df4297e0bb64b
    static syncDataLocalDb(): Promise<string>;
}
