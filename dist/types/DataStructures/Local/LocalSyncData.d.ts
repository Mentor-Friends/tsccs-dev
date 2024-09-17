import { Concept } from "./../Concept";
import { LConnection } from "./LConnection";
export declare class LocalSyncData {
    static conceptsSyncArray: Concept[];
    static connectionSyncArray: LConnection[];
    static ghostIdMap: Map<any, any>;
    static CheckContains(concept: Concept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: LConnection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static SyncDataOnline(): Promise<Concept[]>;
    static ConvertGhostIdsInConnections(connectionArray: LConnection[]): void;
    static UpdateConceptListToIncludeRelatedConcepts(connectionArray: LConnection[], conceptsArray: Concept[]): Promise<void>;
    static AddConceptIfDoesNotExist(concept: Concept, conceptList?: Concept[]): void;
    static CheckIfTheConceptIdExists(id: number, conceptList?: Concept[]): Concept;
    static AddConnection(connection: LConnection): void;
    static RemoveConnection(connection: LConnection): void;
    static syncDataLocalDb(): Promise<string>;
}
