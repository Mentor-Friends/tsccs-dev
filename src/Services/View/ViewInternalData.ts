import { ViewInternalDataApi } from "../../Api/View/ViewInternalDataApi";
import { Concept, Connection, FormatFromConnections, GetTheConcept, recursiveFetch } from "../../app";

export async function ViewInternalData(id: number){
   let connections: Connection[] = await ViewInternalDataApi(id);
   let concepts: number[] = [];
   for(let i=0 ; i< connections.length; i++){
        if(!concepts.includes(connections[i].ofTheConceptId)){
            concepts.push(connections[i].ofTheConceptId);
        }
   }
   let out = recursiveFetch(id,connections, concepts);
   return out;
}