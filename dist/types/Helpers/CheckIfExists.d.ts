import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function CheckIfConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept;
export declare function CheckIfTypeConceptExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept;
export declare function CheckIfConnectionExistsInArray(connectionList: Connection[] | undefined, connection: Connection): Connection;
export declare function CheckIfToTheConceptExistsInConnectionArray(connectionList: Connection[] | undefined, toTheConceptId: number): Connection;
