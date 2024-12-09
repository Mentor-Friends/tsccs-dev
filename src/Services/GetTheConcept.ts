import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId, Logger, sendMessage, serviceWorker } from "../app";
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
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('GetTheConcept', {id, userId})
            console.log('data received from sw', res)
            return res.data
          }

        let concept = CreateDefaultConcept();
        if(id < 0){
           let lconcept:Concept =  await GetUserGhostId(userId, id);
           concept = convertFromLConceptToConcept(lconcept)
           return concept;
        }
        concept = await ConceptsData.GetConcept(id);
        if((concept == null || concept.id == 0) && id != null && id != undefined){
         let conceptString = await  GetConcept(id);
    
         concept = conceptString as Concept;
        }
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
        // Add Log
        Logger.logInfo(startTime, userId, "read", "unknown", undefined, 200, concept, "GetTheConcept", ['id', 'userId'], "unknown", undefined )
    
        return concept;
    }
    catch(err){
        console.error("this is the error in the getting concept", err);
        // Add Log
        Logger.logError(startTime, userId, "read", "unknown", undefined, 500, err, "GetTheConcept", ['id', 'userId'], "unknown", undefined )
        throw err;
    }

}