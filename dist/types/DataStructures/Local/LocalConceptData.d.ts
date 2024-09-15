import { LConcept } from "./../Local/LConcept";
export declare class LocalConceptsData {
    name: string;
    constructor();
    static localconceptsArray: LConcept[];
    static AddConcept(concept: LConcept): void;
    static AddPermanentConcept(concept: LConcept): void;
    static RemoveConcept(concept: LConcept): Promise<void>;
    static AddConceptToMemory(concept: LConcept): void;
    static GetConcept(id: number): Promise<LConcept>;
    static UpdateConceptSyncStatus(id: number): Promise<void>;
    static GetConceptByGhostId(id: number): Promise<LConcept>;
    static GetConceptByCharacter(characterValue: string): Promise<LConcept>;
    static GetConceptByCharacterAndTypeLocal(character_value: string, typeId: number): Promise<LConcept>;
    static GetConceptByCharacterAndCategoryLocal(character_value: string, categoryId: number): Promise<LConcept>;
    static GetConceptsByTypeId(typeId: number): LConcept[];
    static GetConceptsByTypeIdAndUser(typeId: number, userId: number): Promise<LConcept[]>;
    getName(): string;
}
