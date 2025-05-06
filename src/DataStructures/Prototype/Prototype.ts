import { Concept } from "../Concept";
import { Connection } from "../Connection";
import { PrototypeOption } from "./PrototypeOption";
import { QuerySelector } from "./QuerySelector";

export class Prototype {
    // main string for the prototype
    prototype: string = "";
    required:string[] = [];
    optional: string [] =[];

    // if the prototype is a string type, put number for number
    field: string = "string";

    // these could be children prototypes
    childPrototypes:Prototype[] = [];

    isCompositional:boolean = false;
    options:PrototypeOption[] = [];

    // for selecting from another type
    isQueryType:boolean = false;
    querySelector:QuerySelector|null = null;


    

    concepts:Concept[] = [];
    connections:Connection[] = [];
    addedConcepts:Concept[] = [];
    addedConnections:Connection[] = [];

}
