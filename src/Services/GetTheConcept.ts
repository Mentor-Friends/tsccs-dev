import { GetConcept } from "../Api/GetConcept";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetTheConcept(id: number){
    var concept = ConceptsData.GetConcept(id);
    if(concept == null && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    return concept;
}