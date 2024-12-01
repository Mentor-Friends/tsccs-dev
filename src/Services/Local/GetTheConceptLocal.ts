import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalGhostIdTree } from "../../DataStructures/Local/LocalGhostIdTree";
import { Concept, CreateDefaultLConcept, GetTheConcept, sendMessage, serviceWorker } from "../../app";
import { convertFromConceptToLConcept } from "../Conversion/ConvertConcepts";

/**
 * This function converts any local/ virtual or real concept id to a LConcept. 
 * In case that the id is virtual then it tries to find it from the local memory. This will return -ve id.
 * In case that the virtual id has already been synced to the backend then it gets this from the relational binary tree(LocalGhostIdTree). This will return +ve id.
 * In case that we pass real id then this will return real concept but formatted in LConcept form. This might have undefined ghostId.
 * @param id the id that you want to find out the concept of. This could be a negative (virtual id ) or a real concept id.
 * @returns LConcept with either (-ve or +ve id)
 */
export async function GetTheConceptLocal(id: number){
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('GetTheConceptLocal', {id})
            // console.log('data received from sw', res)
            return res.data
          }

        let lconcept: Concept = CreateDefaultLConcept();
        if(id < 0){
            lconcept =  await LocalConceptsData.GetConcept(id);
            if(lconcept.id == 0){
                let localNode = await LocalGhostIdTree.getNodeFromTree(id);
                if(localNode?.value){
                    let returnedConcept = localNode.value;
                    if(returnedConcept){
                        lconcept = returnedConcept as Concept;
                    }
                }
            }
    
        }
        else{
            let concept:Concept =  await GetTheConcept(id);
            lconcept = convertFromConceptToLConcept(concept);
        }
    
        return lconcept;
    }
    catch(error){
        throw error;
    }


}