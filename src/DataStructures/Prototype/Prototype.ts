import { Concept } from "../Concept";
import { Connection } from "../Connection";

export class Prototype {
    prototype: string = "";
    required:string[] = [];
    optional: string [] =[];
    concepts:Concept[] = [];
    connections:Connection[] = [];
    addedConcepts:Concept[] = [];
    addedConnections:Connection[] = [];
    childPrototypes:Prototype[] = [];

}