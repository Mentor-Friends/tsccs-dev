/**
 * @module ViewInternalData
 * @description Provides functionality to view and format internal composition data for multiple concepts
 */

import { ViewInternalDataApi } from "../../Api/View/ViewInternalDataApi";
import { Concept, Connection, FormatFromConnections, GetTheConcept, recursiveFetch } from "../../app";

/**
 * Retrieves and formats internal data for multiple concepts by their IDs.
 * Fetches internal connections and builds composition structures for each concept.
 *
 * @async
 * @param {number[]} ids - Array of concept IDs to retrieve internal data for
 * @returns {Promise<any[]>} A promise that resolves to array of formatted composition objects with id and data fields
 *
 * @example
 * ```typescript
 * const conceptIds = [123, 456, 789];
 * const internalData = await ViewInternalData(conceptIds);
 * // internalData = [
 * //   { id: 123, data: { user: { name: "John", email: "john@example.com" } } },
 * //   { id: 456, data: { post: { title: "Hello", content: "World" } } },
 * //   { id: 789, data: { type: "value" } }
 * // ]
 * ```
 *
 * @remarks
 * This function:
 * - Fetches internal connections for all provided concept IDs
 * - For concepts with connections: builds composition structure using recursiveFetch
 * - For concepts without connections: returns concept's type and character value
 * - Each result includes id field and data field
 * - Handles missing connections gracefully
 * - Useful for viewing composition internals in list format
 */
export async function ViewInternalData(ids: number[]){
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