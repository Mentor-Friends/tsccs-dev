/**
 * @module SearchLinkMultiple
 * @description Provides functionality to search for multiple links across compositions and format the results
 */

import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection, GetConnectionBulk, GetTheConcept } from "../../app";
import { GetCompositionFromConnectionsWithDataIdInObject } from "../GetCompositionBulk";

/**
 * Searches for multiple links across compositions based on an array of search queries.
 * Returns formatted data with all linked concepts and their relationships.
 *
 * @async
 * @param {SearchQuery[]} searchQuery - Array of search query objects containing composition and link criteria
 * @param {string} [token=""] - Optional authentication token for API requests
 * @returns {Promise<any>} A promise that resolves to formatted composition data with all linked concepts
 *
 * @example
 * ```typescript
 * const queries: SearchQuery[] = [
 *   { composition: 123, linker: 456, reverse: false },
 *   { composition: 789, linker: 456, reverse: true }
 * ];
 * const result = await SearchLinkMultipleAll(queries, "auth-token");
 * console.log(result);
 * ```
 *
 * @remarks
 * This function:
 * 1. Fetches multiple linked compositions from the API
 * 2. Retrieves all related concepts and connections
 * 3. Formats the data structure with proper linker relationships
 * 4. Handles both forward and reverse link directions
 */
export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string=""){
  let concepts:any[] = [];
  let conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
  let mainCompositionId = searchQuery[0].composition;
  const result = conceptsConnections;
  let conceptIds = result.compositionIds;
  let connections = result.internalConnections;
  let linkers = result.linkers;
  let reverse = result.reverse;
  concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds,connections);
  let out = await FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
  return out;
}

/**
 * Formats composition data from connection linkers, organizing concepts into a hierarchical structure.
 * Handles both forward and reverse relationships between concepts.
 *
 * @async
 * @param {number[]} linkers - Array of connection IDs that link concepts together
 * @param {any[]} compositionData - Dictionary of composition data indexed by concept ID
 * @param {number} mainComposition - The ID of the main composition to return
 * @param {number[]} [reverse=[]] - Array of connection IDs that should be treated as reverse connections
 * @returns {Promise<any>} A promise that resolves to the formatted main composition data with all linked concepts
 *
 * @example
 * ```typescript
 * const linkers = [101, 102, 103];
 * const compositionData = { 123: { type: "data" }, 456: { type: "info" } };
 * const mainId = 123;
 * const reverseConnections = [102];
 * const result = await FormatFromConnections(linkers, compositionData, mainId, reverseConnections);
 * ```
 *
 * @remarks
 * This function:
 * - Fetches all connections from the provided linker IDs
 * - Processes each connection to build relationships
 * - Handles reverse connections (to -> from instead of from -> to)
 * - Uses the linker concept's character value as the relationship key
 * - Appends "_reverse" suffix for reverse relationships
 */
export async function FormatFromConnections(linkers:number[], compositionData: any[], mainComposition: number, reverse: number [] = []){
  let mainData: any = {};
  let connections = await GetConnectionBulk(linkers);
  for(let i=0 ; i< connections.length; i++){
    let reverseFlag = false;
    if(reverse.includes(connections[i].id)){
      reverseFlag = true;
    }
    if(reverseFlag == true){

      if(compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]){
        let mydata = compositionData[connections[i].toTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
        let newData = mydata?.data;
        let key = Object.keys(newData)[0];
        try{
          let reverseCharater = linkerConcept.characterValue + "_reverse";
          if(typeof newData === "string"){
            newData = {};
          }
            if(Array.isArray(newData[key][reverseCharater])){
              newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
            }
            else{
              if(typeof newData[key] === "string"){
                
                newData[key] = {};
              }
              newData[key][reverseCharater] = [];
              newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
            }

  
        }
        catch(ex){
          console.log("this is error", ex);
        }
      }
    }
    else
    {
      if(compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]){
        let mydata = compositionData[connections[i].ofTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
        let newData = mydata?.data;
        let key = Object.keys(newData)[0];
        try{
  
          if(typeof newData === "string"){
            newData = {};
          }
            if(Array.isArray(newData[key][linkerConcept.characterValue])){
              newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
            }
            else{
              if(typeof newData[key] === "string"){
  
                newData[key] = {};
              }
  
              newData[key][linkerConcept.characterValue] = [];
              newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
            }
  
        }
        catch(ex){
          console.log("this is error", ex);
        }
  
      }
    }

  }
  mainData = compositionData[mainComposition];
  return mainData;
}


