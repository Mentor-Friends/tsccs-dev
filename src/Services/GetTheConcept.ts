import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

/**
 * 
 * @param id this is the id that can be used to get the concept.
 * @param userId This is the user that calls the concept
 * @returns Concept if it exists
 */
export default async function GetTheConcept(id: number, userId: number = 999){
    try{
        let concept = CreateDefaultConcept();
        if(id < 0){
           let lconcept:Concept =  await GetUserGhostId(userId, id);
           concept = convertFromLConceptToConcept(lconcept)
           return concept;
        }
        concept = await ConceptsData.GetConcept(id);
        console.log("this is the concept form memory", concept);
        if((concept == null || concept.id == 0) && id != null && id != undefined){
         let conceptString = await  GetConcept(id);
    
         concept = conceptString as Concept;
        }
        console.log("this is the concept from network", concept);
        if( concept.id != 0){
    
            if(concept.type == null){
                let conceptType = await ConceptsData.GetConcept(concept.typeId);
                if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
                    let typeConceptString = await GetConcept(concept.typeId);
                    let typeConcept = typeConceptString as Concept;
                    concept.type = typeConcept;
                }
            }
        }
    
        return concept;
    }
    catch(err){
        console.error("this is the error in the getting concept", err);
        throw err;
    }

}