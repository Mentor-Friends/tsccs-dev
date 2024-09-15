import { ViewInternalDataApi } from "../../Api/View/ViewInternalDataApi";
import { Concept, Connection, FormatFromConnections, GetTheConcept, recursiveFetch } from "../../app";

export async function ViewInternalData(ids: number[]){
    try{
        let connections = await ViewInternalDataApi(ids);

        let output :any[] = [];
        for(let i=0; i<ids.length; i++){
         let id = ids[i];
         let localConnections = connections[id];
     
         if(id && localConnections){
             let concepts: number[] = [];
             let formattedOutput :any = {};
             for(let j=0 ; j< localConnections.length; j++){
     
                  if(!concepts.includes(localConnections[j].ofTheConceptId)){
                      concepts.push(localConnections[j].ofTheConceptId);
                  }
             }
            let out = await recursiveFetch(id,localConnections, concepts);
            formattedOutput.data = out;
            formattedOutput.id = id;
     
             output.push(formattedOutput);
         }
         else{
             let formattedOutput: any = {};
             formattedOutput.id = id;
             let concept: Concept = await GetTheConcept(id);
             let noconn: any = {};
             if(concept.type){
                 noconn[concept?.type?.characterValue] = concept.characterValue;
                 formattedOutput.data = noconn;
                 output.push(formattedOutput)
             }
     
         }
     
        }
     
        return output;
    }
    catch(err){
        throw err;
    }

}