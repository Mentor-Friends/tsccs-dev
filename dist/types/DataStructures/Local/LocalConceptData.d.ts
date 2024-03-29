import { Concept } from "./../Concept";
export declare class LocalConceptsData {
    name: string;
    constructor();
    static localconceptsArray: Concept[];
    static AddConcept(concept: Concept): void;
    static AddConceptToMemory(concept: Concept): void;
    static GetConcept(id: number): Promise<Concept>;
    static GetConceptByCharacter(characterValue: string): Promise<Concept>;
    static GetConceptByCharacterAndTypeLocal(character_value: string, typeId: number): Promise<Concept>;
    static GetConceptsByTypeId(typeId: number): Concept[];
    static GetConceptsByTypeIdAndUser(typeId: number, userId: number): Promise<Concept[]>;
    getName(): string;
}
