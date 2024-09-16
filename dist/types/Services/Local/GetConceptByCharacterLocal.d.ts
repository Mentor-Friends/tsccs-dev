import { LConcept } from "../../app";
export default function GetConceptByCharacterLocal(characterValue: string): Promise<LConcept>;
/**
 *
 * @param character the character value of the concept we want to find in our local system.
 * @returns LConcept which will be the associated concept with the character Value.
 */
export declare function GetConceptByCharacterAndCategoryLocal(character: string): Promise<LConcept>;
export declare function GetConceptByCategoryAndCharacterLocalMemory(value: string, categoryId: number): Promise<LConcept>;
export declare function GetConceptByCharacterLocalFull(characterValue: string): Promise<LConcept>;
