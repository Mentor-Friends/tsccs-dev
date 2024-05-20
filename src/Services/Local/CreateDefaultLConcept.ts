import { LConcept } from "../../DataStructures/Local/LConcept";

export function CreateDefaultLConcept(){
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new LConcept(0,0,0,0,0,"0","0",false,created_on,updated_on);
    return concept;
}