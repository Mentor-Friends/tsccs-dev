import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalGhostIdTree } from "../../DataStructures/Local/LocalGhostIdTree";
import { Concept, ConceptsData, CreateDefaultLConcept, GetTheConcept, LConcept } from "../../app";
import { convertFromConceptToLConcept } from "../Conversion/ConvertConcepts";

export async function GetTheConceptLocal(id: number){
    try{
        let lconcept: LConcept = CreateDefaultLConcept();
        if(id < 0){
            lconcept =  await LocalConceptsData.GetConcept(id);
            if(lconcept.id == 0){
                let localNode = await LocalGhostIdTree.getNodeFromTree(id);
                if(localNode?.value){
                    let returnedConcept = localNode.value;
                    if(returnedConcept){
                        lconcept = returnedConcept as LConcept;
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