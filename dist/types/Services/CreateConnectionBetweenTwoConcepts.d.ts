import { Concept } from "../DataStructures/Concept";
export declare function CreateConnectionBetweenTwoConcepts(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, count?: boolean): Promise<void>;
export declare function CountRelationship(linker: string, concept: Concept, passedUserId?: number | null): Promise<void>;
