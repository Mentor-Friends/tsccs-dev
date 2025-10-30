/**
 * Composition Retrieval and Reconstruction Service
 *
 * This module provides comprehensive functionality for retrieving compositions (structured
 * concept graphs) and reconstructing them into JSON objects. It's the deserialization
 * counterpart to CreateTheComposition, converting graph structures back into hierarchical
 * data structures.
 *
 * The module offers multiple variants for different use cases:
 * - Basic composition retrieval (from API or memory)
 * - Composition with metadata (ID, timestamps)
 * - Composition with sub-composition IDs included
 * - Bulk operations and optimization strategies
 *
 * @module GetComposition
 */

import { GetConcept } from "../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData"

/**
 * Retrieves a composition from the API and reconstructs it as a JSON object.
 *
 * This function fetches all connections that make up a composition from the API,
 * then recursively reconstructs the original hierarchical structure. It's the primary
 * function for deserializing compositions that were created using CreateTheComposition.
 *
 * The returned object has the composition's type as the root key, containing the
 * nested data structure.
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with the composition data
 *
 * @example
 * ```typescript
 * // Retrieve a user profile composition
 * const composition = await GetComposition(12345);
 * console.log(composition);
 * // Output:
 * // {
 * //   "user_profile": {
 * //     "name": "Alice Johnson",
 * //     "age": "30",
 * //     "address": {
 * //       "street": "123 Main St",
 * //       "city": "Springfield"
 * //     }
 * //   }
 * // }
 * ```
 *
 * @example
 * ```typescript
 * // Access specific fields in the composition
 * const bookData = await GetComposition(789);
 * const book = bookData["book"];
 * console.log("Title:", book.title);
 * console.log("Author:", book.author);
 * console.log("ISBN:", book.isbn);
 * ```
 *
 * @remarks
 * - Fetches all connections from the API (not from local cache)
 * - Recursively reconstructs the hierarchical structure
 * - The root key is the type of the root concept (e.g., "book", "user_profile")
 * - Numeric keys indicate array-like structures
 * - Leaf nodes contain their characterValue as strings
 * - Uses GetAllConnectionsOfComposition API for data fetching
 * - For better performance with cached data, use GetCompositionFromMemory
 *
 * @see {@link GetCompositionFromMemory} for cached/memory-based retrieval
 * @see {@link GetCompositionWithId} for including composition metadata
 * @see {@link CreateTheComposition} for the inverse operation (JSON to composition)
 * @see {@link recursiveFetch} for the reconstruction algorithm
 */
export async function GetComposition(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * Retrieves a composition with sub-composition IDs embedded in the structure.
 *
 * Similar to GetComposition, but includes "id" fields for all sub-compositions
 * within the returned JSON structure. This is useful when you need to reference
 * or update specific parts of the composition later.
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with the composition data including IDs
 *
 * @example
 * ```typescript
 * // Get composition with IDs for updating specific nodes
 * const composition = await GetCompositionWithAllIds(12345);
 * console.log(composition);
 * // Output includes id fields:
 * // {
 * //   "user_profile": {
 * //     "id": 12345,
 * //     "address": {
 * //       "id": 12346,
 * //       "street": "123 Main St"
 * //     }
 * //   }
 * // }
 * ```
 *
 * @remarks
 * - Each sub-composition node includes its concept ID
 * - Uses recursiveFetchWithSubCompositions instead of recursiveFetch
 * - Useful for selective updates or references to composition parts
 *
 * @see {@link GetComposition} for standard retrieval without IDs
 * @see {@link recursiveFetchWithSubCompositions} for the reconstruction algorithm
 */
export async function GetCompositionWithAllIds(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetchWithSubCompositions(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * Retrieves a composition from local memory cache without API calls.
 *
 * This optimized version retrieves composition data from the local ConnectionData
 * cache rather than making API calls. It's significantly faster but requires that
 * the connections have been previously cached (e.g., via bulk prefetch operations).
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with the composition data
 *
 * @example
 * ```typescript
 * // After bulk prefetch, retrieve from memory
 * await GetAllConnectionsOfCompositionBulk([123, 456, 789]);
 *
 * // Now quickly retrieve from cache
 * const comp1 = await GetCompositionFromMemory(123);
 * const comp2 = await GetCompositionFromMemory(456);
 * const comp3 = await GetCompositionFromMemory(789);
 * // Much faster than individual API calls
 * ```
 *
 * @remarks
 * - Only works if connections are already cached in ConnectionData
 * - Returns empty or incomplete data if connections aren't cached
 * - Use after bulk prefetch operations for optimal performance
 * - Much faster than GetComposition for batch operations
 *
 * @see {@link GetComposition} for API-based retrieval
 * @see {@link GetAllConnectionsOfCompositionBulk} for bulk prefetching
 */
export async function GetCompositionFromMemory(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * Retrieves a composition from memory with metadata wrapper.
 *
 * Returns composition data wrapped in an object that includes the root concept's
 * ID and creation timestamp along with the data. This is useful for tracking
 * when compositions were created and referencing them by ID.
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with id, created_at, and data fields
 *
 * @example
 * ```typescript
 * const result = await GetCompositionWithIdFromMemory(12345);
 * console.log(result);
 * // Output:
 * // {
 * //   id: 12345,
 * //   created_at: "1/15/2024 3:45:30 PM",
 * //   data: {
 * //     "book": {
 * //       "title": "Example Book",
 * //       "author": "Jane Doe"
 * //     }
 * //   }
 * // }
 * ```
 *
 * @remarks
 * - Requires connections to be cached in memory
 * - Includes root concept's entryTimeStamp as created_at
 * - Data structure: { id, created_at, data }
 *
 * @see {@link GetCompositionFromMemory} for unwrapped retrieval
 * @see {@link GetCompositionWithId} for API-based version
 */
export async function GetCompositionWithIdFromMemory(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * Retrieves a composition from memory with ID and timestamp metadata.
 *
 * Similar to GetCompositionWithIdFromMemory but with a slightly different
 * field order in the returned object. This variant exists for backward
 * compatibility with different parts of the codebase.
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with data, id, and created_at fields
 *
 * @remarks
 * - Field order: data, id, created_at (vs id, created_at, data in other variant)
 * - Otherwise identical to GetCompositionWithIdFromMemory
 *
 * @see {@link GetCompositionWithIdFromMemory} for the primary variant
 */
export async function GetCompositionWithIdAndDateFromMemory(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    FinalReturn['created_at'] = concept.entryTimeStamp;


    return FinalReturn;
}

/**
 * Reconstructs a composition from a provided list of connections.
 *
 * This specialized function allows you to reconstruct a composition when you
 * already have the connections in memory. Useful for optimized bulk operations
 * where connections have been fetched once and reused for multiple compositions.
 *
 * @param id - The ID of the root concept of the composition
 * @param connectionList - Pre-fetched array of Connection objects
 *
 * @returns A promise that resolves to an object with id, created_at, and data fields
 *
 * @example
 * ```typescript
 * // Fetch connections once for multiple compositions
 * const connections = await GetAllConnectionsOfCompositionBulk([123, 456]);
 *
 * // Reconstruct multiple compositions from the same connection set
 * const comp1 = await GetCompositionWithIdFromMemoryFromConnections(123, connections);
 * const comp2 = await GetCompositionWithIdFromMemoryFromConnections(456, connections);
 * ```
 *
 * @remarks
 * - Most efficient when connections are shared across compositions
 * - Extracts composition list from provided connections
 * - No API or cache lookups for connections
 *
 * @see {@link GetCompositionFromConnectionsWithDataId} for newer variant
 */
export async function GetCompositionWithIdFromMemoryFromConnections(id:number, connectionList:Connection[]){
   // var connectionList:Connection[] = [];
    var returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * Reconstructs a composition from connections with optional pre-computed composition list.
 *
 * An optimized variant that accepts an optional pre-computed list of composition IDs,
 * avoiding the need to extract it from connections. This is the most efficient variant
 * for bulk operations.
 *
 * @param id - The ID of the root concept of the composition
 * @param connectionList - Pre-fetched array of Connection objects
 * @param compositionList - Optional pre-computed array of composition concept IDs (default: empty array)
 *
 * @returns A promise that resolves to an object with id, created_at, and data fields
 *
 * @remarks
 * - Most efficient variant when composition list is pre-computed
 * - If compositionList is empty, computes it from connections
 * - Useful in high-performance scenarios with many compositions
 *
 * @see {@link GetCompositionWithIdFromMemoryFromConnections} for basic variant
 */
export async function GetCompositionWithIdFromMemoryFromConnectionsNew(id:number, connectionList:Connection[], compositionList:number[] = []){
   // var connectionList:Connection[] = [];
    var returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * Retrieves a composition from API with metadata wrapper.
 *
 * Similar to GetComposition but includes the composition ID and wraps the data
 * in a structured object. Uses API calls rather than memory cache.
 *
 * @param id - The ID of the root concept of the composition
 *
 * @returns A promise that resolves to an object with data and id fields
 *
 * @example
 * ```typescript
 * const result = await GetCompositionWithId(12345);
 * console.log("Composition ID:", result.id);
 * console.log("Data:", result.data);
 * ```
 *
 * @remarks
 * - Fetches from API, not from cache
 * - Includes composition ID in return structure
 * - Data structure: { data, id }
 *
 * @see {@link GetComposition} for unwrapped version
 * @see {@link GetCompositionWithIdFromMemory} for cached version
 */
export async function GetCompositionWithId(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * Recursively reconstructs a composition structure from connections.
 *
 * This is the core algorithm that traverses connections and rebuilds the hierarchical
 * JSON structure from the graph representation. It handles both object-like structures
 * (with string keys) and array-like structures (with numeric keys).
 *
 * The algorithm works by:
 * 1. Checking if the concept is a leaf node (not in compositionList) - returns its value
 * 2. For composition nodes, iterating through all outgoing connections
 * 3. Recursively processing each connected concept
 * 4. Building either an object or array based on key type
 * 5. Preventing infinite loops by tracking visited concepts
 *
 * @param id - The ID of the concept to process
 * @param connectionList - All connections in the composition
 * @param compositionList - Array of concept IDs that are composition nodes (not leaves)
 * @param visitedConcepts - Internal tracker to prevent circular reference loops (default: empty array)
 *
 * @returns A promise that resolves to the reconstructed data structure (object, array, or primitive value)
 *
 * @example
 * ```typescript
 * // This function is typically called internally by GetComposition functions
 * // Manual usage:
 * const connections = await GetAllConnectionsOfComposition(12345);
 * const compositionList = extractCompositionList(connections);
 * const result = await recursiveFetch(12345, connections, compositionList);
 * ```
 *
 * @remarks
 * - Strips "the_" prefix from concept type names when used as keys
 * - Numeric keys create array-like structures, string keys create object structures
 * - Leaf nodes (not in compositionList) return their characterValue
 * - Returns empty string for circular references (visited concepts)
 * - Fetches concept type information if not cached
 * - Handles null/undefined concept types gracefully
 * - Returns null for id=0
 *
 * @see {@link GetComposition} which uses this function
 * @see {@link recursiveFetchWithSubCompositions} for variant that includes IDs
 */
export async function recursiveFetch(id:number, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};
    var arroutput: any = [];
    if(id == 0){
        return null;
    }
    var concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                var conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    var mainString = concept?.type?.characterValue ?? "";
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
            
                var toConcept = await ConceptsData.GetConcept(toConceptId);
                if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                 var conceptString = await  GetConcept(toConceptId);
                 toConcept = conceptString as Concept;
                }


                if(toConcept){
                    if(toConcept?.type == null){

                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                        if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                            var conceptString = await  GetConcept(toConceptTypeId);
                            toConceptType = conceptString as Concept;
                            toConcept.type = toConceptType;
                           }
                    }
                }

                var regex = "the_";
              //  console.log("To the concept", connectionList[i].id,connectionList[i].ofTheConceptId, connectionList[i].toTheConceptId, connectionList[i].typeId, toConcept.id, toConcept.typeId, toConcept.characterValue, toConcept.type?.characterValue);

                var localmainString = toConcept?.type?.characterValue ?? "";

                var localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetch(toConceptId, connectionList, compositionList,visitedConcepts);
                    arroutput[localKey] = result;
                    output = arroutput;

                }



            }     
        }
    }


     return output;

 }

/**
 * Recursively reconstructs a composition with concept IDs embedded in the structure.
 *
 * Similar to recursiveFetch but adds an "id" field to each sub-composition node in the
 * returned structure. This enables tracking which concept ID corresponds to each part
 * of the reconstructed data.
 *
 * @param id - The ID of the concept to process
 * @param connectionList - All connections in the composition
 * @param compositionList - Array of concept IDs that are composition nodes
 * @param visitedConcepts - Internal tracker to prevent circular loops (default: empty array)
 *
 * @returns A promise that resolves to the reconstructed structure with embedded IDs
 *
 * @remarks
 * - Each composition node includes an "id" field
 * - Otherwise identical to recursiveFetch
 * - Used by GetCompositionWithAllIds
 *
 * @see {@link recursiveFetch} for the standard version
 * @see {@link GetCompositionWithAllIds} which uses this function
 */
 export async function recursiveFetchWithSubCompositions(id:number, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};
    var arroutput: any = [];
    if(id == 0){
        return null;
    }
    var concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                var conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    var mainString = concept?.type?.characterValue ?? "";

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
        output["id"] = id;
        for(var i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                var toConceptId = connectionList[i].toTheConceptId;

                var toConcept = await ConceptsData.GetConcept(toConceptId);
                if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                 var conceptString = await  GetConcept(toConceptId);
                 toConcept = conceptString as Concept;
                }
                if(toConcept){
                    if(toConcept?.type == null){

                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                        if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                            var conceptString = await  GetConcept(toConceptTypeId);
                            toConceptType = conceptString as Concept;
                            toConcept.type = toConceptType;
                           }
                    }
                }

                var regex = "the_";


                var localmainString = toConcept?.type?.characterValue ?? "";

                var localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }