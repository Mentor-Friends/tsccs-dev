import { Connection } from "../DataStructures/Connection";
export declare function GetConnectionOfTheConcept(typeId: number, ofTheConceptId: number, userId: number, inpage?: number, page?: number): Promise<string | Connection[]>;
