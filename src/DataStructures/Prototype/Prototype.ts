import { Concept } from "../Concept";
import { Connection } from "../Connection";

export class Prototype {
    // main string for the prototype
    prototype: string = "";
    required:string[] = [];
    optional: string [] =[];

    // these could be children prototypes
    childPrototypes:Prototype[] = [];

    isCompositional:boolean = false;
    options:string[] = [];
    selector:string = "";


    concepts:Concept[] = [];
    connections:Connection[] = [];
    addedConcepts:Concept[] = [];
    addedConnections:Connection[] = [];

}
