import { LConcept } from "../../app";
export default function GetConceptByCharacterLocal(characterValue: string): Promise<LConcept>;
export declare function GetConceptByCharacterAndCategoryLocal(character: string): Promise<LConcept>;
export declare function GetConceptByCategoryAndCharacterLocalMemory(value: string, categoryId: number): Promise<LConcept>;
export declare function GetConceptByCharacterLocalFull(characterValue: string): Promise<LConcept>;
