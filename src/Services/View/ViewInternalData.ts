import { ViewInternalDataApi } from "../../Api/View/ViewInternalDataApi";
import { Concept, Connection, FormatFromConnections, GetTheConcept, recursiveFetch } from "../../app";

export async function ViewInternalData(ids: number[]){
   let connections = await ViewInternalDataApi(ids);
   let output :any[] = [];
   for(let i=0; i<ids.length; i++){
    let id = ids[i];
    let localConnections = connections[id];

    if(id && localConnections){
        let concepts: number[] = [];
        
        for(let j=0 ; j< localConnections.length; j++){

             if(!concepts.includes(localConnections[j].ofTheConceptId)){
                 concepts.push(localConnections[j].ofTheConceptId);
             }
        }
       let out = await recursiveFetch(id,localConnections, concepts);
       out.id = id;

        output.push(out);
    }

   }

   return output;
}