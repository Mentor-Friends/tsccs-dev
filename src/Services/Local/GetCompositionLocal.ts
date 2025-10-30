/**
 * Local Composition Retrieval Module
 *
 * This module provides functionality to retrieve and reconstruct concept compositions from
 * local storage. It converts the graph structure of interconnected concepts and connections
 * back into hierarchical JSON objects, making them easy to work with in application code.
 *
 * @module GetCompositionLocal
 */

import { GetConcept } from "../../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../../Api/GetAllConnectionsOfComposition";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";

/**
 * Retrieves a composition and converts it to a JSON object structure.
 *
 * This function fetches a concept composition by its ID and recursively reconstructs
 * the original hierarchical JSON structure from the graph of concepts and connections.
 * The root concept's type becomes the top-level key in the returned object.
 *
 * @param id - The ID of the root concept of the composition to retrieve
 *
 * @returns A promise that resolves to a JSON object representing the composition hierarchy
 *
 * @remarks
 * - Fetches all connections associated with the composition
 * - Identifies all concepts involved in the composition
 * - Recursively traverses the graph to rebuild the JSON structure
 * - The returned object has the root concept's type as its key
 * - Uses helper function `recursiveFetchLocal` for tree traversal
 *
 * @example
 * ```typescript
 * // Retrieve a user composition by ID
 * const userJson = await GetCompositionLocal(12345);
 *
 * // Output might look like:
 * // {
 * //   "the_user": {
 * //     "name": "John Doe",
 * //     "age": 30,
 * //     "address": {
 * //       "street": "123 Main St",
 * //       "city": "Boston"
 * //     }
 * //   }
 * // }
 *
 * console.log(userJson.the_user.name); // "John Doe"
 * ```
 *
 * @see {@link GetCompositionLocalWithId} - Similar function that includes the composition ID
 * @see {@link recursiveFetchLocal} - Helper function for recursive traversal
 * @see {@link CreateTheCompositionLocal} - Related function for creating compositions
 */
export async function GetCompositionLocal(id:number){
    var connectionList:LConnection[] = [];
    var returnOutput: any = {};
    connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await LocalConceptsData.GetConcept(id);
    var output = await recursiveFetchLocal(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "top";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * Retrieves a composition with its ID included in the result.
 *
 * Similar to GetCompositionLocal, but wraps the result in an object that includes
 * both the composition data and the root concept ID. This is useful when you need
 * to track which composition the data came from.
 *
 * @param id - The ID of the root concept of the composition to retrieve
 *
 * @returns A promise that resolves to an object with 'data' and 'id' properties
 *
 * @remarks
 * - Returns an object with two properties: 'data' (the composition JSON) and 'id' (the root concept ID)
 * - Useful when working with multiple compositions and need to track their origins
 * - Only includes data if the concept exists (concept.id !== 0)
 * - Uses the same recursive fetching logic as GetCompositionLocal
 *
 * @example
 * ```typescript
 * const result = await GetCompositionLocalWithId(12345);
 *
 * // Output structure:
 * // {
 * //   data: {
 * //     "the_user": { name: "John", age: 30 }
 * //   },
 * //   id: 12345
 * // }
 *
 * console.log(result.id); // 12345
 * console.log(result.data.the_user.name); // "John"
 *
 * // Useful for batch operations
 * const compositions = await Promise.all([
 *   GetCompositionLocalWithId(100),
 *   GetCompositionLocalWithId(200)
 * ]);
 * compositions.forEach(comp => {
 *   console.log(`Composition ${comp.id}:`, comp.data);
 * });
 * ```
 *
 * @see {@link GetCompositionLocal} - Similar function without ID in result
 * @see {@link recursiveFetchLocal} - Helper function for recursive traversal
 */
export async function GetCompositionLocalWithId(id:number){
    var connectionList:LConnection[] = [];
    var returnOutput: any = {};
    connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await LocalConceptsData.GetConcept(id);
    if(concept.id != 0){
        var output = await recursiveFetchLocal(id, connectionList, compositionList);
        var mainString = concept?.type?.characterValue ?? "top";
        returnOutput[mainString] = output;
        var FinalReturn: any = {};
    }

    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * Recursively fetches and reconstructs composition data from interconnected concepts.
 *
 * This internal helper function traverses the concept graph depth-first, following
 * connections from parent to child concepts, and rebuilds the JSON structure.
 * It handles both leaf nodes (primitive values) and branch nodes (nested objects/arrays).
 *
 * @param id - The ID of the current concept being processed
 * @param connectionList - Complete list of connections in the composition
 * @param compositionList - List of concept IDs that have child connections
 * @param visitedConcepts - Array tracking visited concepts to prevent circular references
 *
 * @returns A promise that resolves to the reconstructed JSON value (object, array, or primitive)
 *
 * @remarks
 * - For leaf concepts (not in compositionList), returns the characterValue directly
 * - For branch concepts, recursively processes all child connections
 * - Strips "the_" prefix from type names when building JSON keys
 * - Handles both object properties (string keys) and array elements (numeric keys)
 * - Implements cycle detection via visitedConcepts to prevent infinite loops
 * - Ensures type information is loaded for each concept if not already present
 * - Returns empty string for circular references
 *
 * @example
 * ```typescript
 * // Internal usage example (called by GetCompositionLocal)
 * const connections = await LocalConnectionData.GetConnectionsOfCompositionLocal(100);
 * const compositionList = [100, 101, 102]; // IDs with children
 *
 * const result = await recursiveFetchLocal(100, connections, compositionList);
 * // Returns: { name: "John", address: { city: "Boston" } }
 *
 * // Handles arrays
 * // If concept types are "the_0", "the_1", "the_2", result is an array
 * // Returns: ["item1", "item2", "item3"]
 * ```
 *
 * @see {@link GetCompositionLocal} - Public function that uses this helper
 * @see {@link LocalConceptsData.GetConcept} - Fetches individual concepts
 * @see {@link LocalConnectionData.GetConnectionsOfCompositionLocal} - Fetches connections
 */
 async function recursiveFetchLocal(id:number, connectionList:LConnection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};
    var arroutput: any = [];
    var concept = await LocalConceptsData.GetConcept(id);

    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
        }
    }

    var mainString = concept?.type?.characterValue ?? "top";

    if(!compositionList.includes(id)){
        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        for(var i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                var toConceptId = connectionList[i].toTheConceptId;

                var toConcept = await LocalConceptsData.GetConcept(toConceptId);
                if(toConcept.id != 0){
                    if(toConcept?.type == null){

                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                    }
                }

                var regex = "the_";


                var localmainString = toConcept?.type?.characterValue ?? "top";

                var localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }