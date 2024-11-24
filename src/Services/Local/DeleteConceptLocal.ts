import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetTheConceptLocal } from "./GetTheConceptLocal";

export async function DeleteConceptLocal(id:number){
    let concept: Concept = await GetTheConceptLocal(id);
    LocalConceptsData.RemoveConcept(concept);
}