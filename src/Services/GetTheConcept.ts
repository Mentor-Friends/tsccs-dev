import { AccessTracker } from "../AccessTracker/accessTracker";
import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId, handleServiceWorkerException, LocalConceptsData, Logger, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

const conceptCache = new Map<number, Promise<Concept>>();

/**
 * Get The Concept From Concept Id
 * @param id this is the id that can be used to get the concept.
 * @param userId This is the user that calls the concept
 * @returns Concept if it exists
 */
export default async function GetTheConcept(id: number, userId: number = 999){
    let startTime = performance.now()
    //Logger.logfunction(GetTheConcept,arguments);

    if(AccessTracker.activateStatus){
        try {
            AccessTracker.incrementConcept(id)
        } catch {
            console.error("Error adding connection in access tracker");
            Logger.log("ERROR", "Error Adding Connection")
        }
    }

    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetTheConcept', {id, userId})
            return res.data as Concept
        } catch (error) {
            console.error('GetTheConcept sw error: ', error)
            handleServiceWorkerException(error)
        }
    }

    let concept = CreateDefaultConcept();

    // check the cache
    if (conceptCache.has(id)) return conceptCache.get(id) || concept;

    const getConcept = (async () => {
        try{
            if(id < 0){
                let lconcept:Concept = await LocalConceptsData.GetConceptByGhostId(id);
                //concept = convertFromLConceptToConcept(lconcept)
                return lconcept;
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
                await getTheReferent(concept);
            }
            // Add Log
            // Logger.logInfo(startTime, userId, "read", "unknown", undefined, 200, concept, "GetTheConcept", ['id', 'userId'], "unknown", undefined )
            return concept;
        }
        catch(err){
            console.error("this is the error in the getting concept", err);
            // Add Log
            Logger.logError(startTime, userId, "read", "unknown", undefined, 500, err, "GetTheConcept", [id, userId], "unknown", undefined )
            throw err;
        }
        finally { 
            conceptCache.delete(id) //  remove from the cache
        }
    })()

    conceptCache.set(id, getConcept)
    return getConcept
}

export async function getTheReferent(concept:Concept){
    if(concept.referentId != 0 && concept.referentId != 999 && concept.id != concept.referentId){
        let referentConcept = await GetTheConcept(concept.referentId);
        if(referentConcept.typeId != 12){
            concept.id = concept.referentId;
        }
    }
}