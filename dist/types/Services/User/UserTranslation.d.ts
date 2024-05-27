import { LConcept } from './../../DataStructures/Local/LConcept';
export declare function GetUserGhostId(userId: number, ghostId: number): Promise<LConcept>;
export declare function AddGhostConcept(concept: LConcept, userId: number): Promise<void>;
