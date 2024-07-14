import { Concept } from "../Concept";
export declare class LConcept {
    id: number;
    ghostId: number;
    userId: number;
    typeId: number;
    categoryId: number;
    accessId: number;
    characterValue: string;
    typeCharacter: string;
    entryTimeStamp: Date;
    updatedTimeStamp: Date;
    type: LConcept | null | void | Concept;
    isNew: boolean;
    isComposition: boolean;
    isTemp: boolean;
    constructor(id: number, userId: number, typeId: number, categoryId: number, accessId: number, characterValue: string, typeCharacter: string, isNew: boolean | undefined, entryTimeStamp: Date, updatedTimeStamp: Date);
    getType(): void;
}
