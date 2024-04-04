import { Concept } from "../DataStructures/Concept";

export function CreateDefaultConcept(){
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false,created_on,updated_on);
    return concept;
}