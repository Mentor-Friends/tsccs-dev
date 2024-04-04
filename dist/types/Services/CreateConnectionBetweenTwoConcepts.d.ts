import { Concept } from "../DataStructures/Concept";
export declare function CreateConnectionBetweenTwoConcepts(concept1Data: Concept, concept2Data: Concept, linker: string, both?: boolean, count?: boolean): Promise<void>;
export declare function CountRelationship(linker: string, concept: Concept, passedUserId?: number | null): Promise<void>;
