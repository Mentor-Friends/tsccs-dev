import { Concept, GetCompositionLocal, GetConceptByCharacterAndCategoryLocal,  Connection, MakeTheTypeConceptApi, MakeTheTypeConceptLocal, serviceWorker, sendMessage, handleServiceWorkerException } from "../../app";
import { GetConnectionOfTheConceptLocal } from "./GetConnectionOfTheConceptLocal";

export async function GetRelationLocal(id: number, relation:string, userId: number){
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage("GetRelationLocal", {
                    id, relation, userId
                });
                return res.data;
            } catch (error) {
                console.error("GetRelationLocal error sw: ", error);
                handleServiceWorkerException(error);
            }
        }
        let typeConcept:Concept =  await GetConceptByCharacterAndCategoryLocal(relation);
        let localConnections: Connection[] = []
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