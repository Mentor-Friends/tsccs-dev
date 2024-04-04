import { GetConcept } from "../Api/GetConcept";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

export default async function GetTheConcept(id: number){
    var concept = CreateDefaultConcept();
    concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if( concept.id != 0){

        if(concept.type == null){
            var conceptType = await ConceptsData.GetConcept(concept.typeId);
            if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
                var typeConceptString = await GetConcept(concept.typeId);
                var typeConcept = typeConceptString as Concept;
                concept.type = typeConcept;
            }
        }
    }

    return concept;
}