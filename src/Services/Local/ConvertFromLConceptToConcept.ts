import { LConcept } from "../../DataStructures/Local/LConcept";
import { Concept } from "../../DataStructures/Concept";
import { CreateDefaultConcept } from "../CreateDefaultConcept";

export function ConvertFromLConceptToConcept(lconcept: LConcept){
    let concept: Concept = CreateDefaultConcept();
    concept.id = lconcept.id;
    concept.ghostId = lconcept.id;
    concept.accessId = lconcept.accessId;
    concept.categoryId = lconcept.categoryId;
    concept.typeId = lconcept.typeId;
    concept.type = lconcept.type;
    concept.entryTimeStamp = lconcept.entryTimeStamp;
    concept.userId = lconcept.userId;
    return concept;
}