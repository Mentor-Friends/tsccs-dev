import { Concept } from "./Concept";
export declare class ConceptsData {
    name: string;
    constructor();
    static conceptsArray: Concept[];
    static conceptDictionary: Concept[];
    static CheckContains(concept: Concept): boolean;
    static AddConceptToStorage(concept: Concept): void;
    static AddConcept(concept: Concept): void;
    static AddConceptToMemory(concept: Concept): void;
    static AddConceptTemporary(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static GetConcept(id: number): Promise<Concept>;
    static GetConceptByCharacter(characterValue: string): Promise<Concept>;
    static GetConceptByCharacterAndTypeLocal(character_value: string, typeId: number): Promise<Concept>;
    static GetConceptsByTypeId(typeId: number): Concept[];
    static GetConceptsByTypeIdAndUser(typeId: number, userId: number): Promise<Concept[]>;
    static GetBinaryCharacterTree(): import("./Node").Node | null;
    getName(): string;
}
