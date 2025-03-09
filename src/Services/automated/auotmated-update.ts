import { Concept, DeleteConnectionByType } from "../../app";

export async function UpdateData(json: any, ofConcept:Concept, typeStrings:string[] = []){
    for(let i=0 ;i<typeStrings.length; i++){
        DeleteConnectionByType(ofConcept.id, typeStrings[i]);
    }

}