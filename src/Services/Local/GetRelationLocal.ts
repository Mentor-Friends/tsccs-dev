import { Concept, GetCompositionLocal, GetConceptByCharacterAndCategoryLocal,  LConnection, MakeTheTypeConceptApi, MakeTheTypeConceptLocal } from "../../app";
import { GetConnectionOfTheConceptLocal } from "./GetConnectionOfTheConceptLocal";

export async function GetRelationLocal(id: number, relation:string, userId: number){
    try{
        let typeConcept:Concept =  await GetConceptByCharacterAndCategoryLocal(relation);
        let localConnections: LConnection[] = []
        if(typeConcept.id != 0){
            localConnections = await GetConnectionOfTheConceptLocal(id, typeConcept.id, userId);
        }
        let output: any = []
        for(let i=0 ; i< localConnections.length; i++){
            let comp = await GetCompositionLocal(localConnections[i].toTheConceptId);
            output.push(comp);
        }
    
        return output;
    }
    catch(error){
        throw error;
    }

}