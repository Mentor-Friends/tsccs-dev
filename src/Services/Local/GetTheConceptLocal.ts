import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { Concept, ConceptsData, CreateDefaultLConcept, GetTheConcept, LConcept } from "../../app";
import { convertFromConceptToLConcept } from "../Conversion/ConvertConcepts";

export async function GetTheConceptLocal(id: number){
    let lconcept: LConcept = CreateDefaultLConcept();
    if(id < 0){
        lconcept =  await LocalConceptsData.GetConcept(id);

    }
    else{
        let concept:Concept =  await GetTheConcept(id);
        lconcept = convertFromConceptToLConcept(concept);
    }

    return lconcept;

}