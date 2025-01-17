import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId, LConcept, UserBinaryTree } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

export default async function GetTheConcept(id: number, userId: number = 999){
    var concept = CreateDefaultConcept();
    if(id < 0){
       let lconcept:LConcept =  await GetUserGhostId(userId, id);
       concept = convertFromLConceptToConcept(lconcept)
       return concept;
    }
    console.log('cc one')
    concept = await ConceptsData.GetConcept(id);
    console.log('cc two')
    if((concept == null || concept.id == 0) && id != null && id != undefined){
        var conceptString = await  GetConcept(id);
        
        concept = conceptString as Concept;
    }
    console.log('cc three')
    if( concept.id != 0){

        if(concept.type == null){

    console.log('cc four')
    var conceptType = await ConceptsData.GetConcept(concept.typeId);
    console.log('cc five')
            if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
                var typeConceptString = await GetConcept(concept.typeId);
                var typeConcept = typeConceptString as Concept;
                concept.type = typeConcept;
            }
        }
    }

    return concept;
}