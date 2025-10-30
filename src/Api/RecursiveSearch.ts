/**
 * API module for performing recursive searches through concept compositions.
 * Enables complex queries that traverse concept relationships and compositions.
 *
 * @module Api/RecursiveSearch
 * @see https://documentation.freeschema.com for reference
 */

import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { SearchQuery } from "../DataStructures/SearchQuery";
import { GetCompositionFromConnectionsWithDataId } from "../Services/GetCompositionBulk";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Performs a recursive search through concept compositions using specified filters.
 * This function searches through the network of concepts, following composition relationships
 * and filtering by linker types and text content.
 *
 * Recursive search is a powerful feature of the Concept Connection System that allows
 * navigation through complex concept hierarchies. It can find all concepts within a composition,
 * filtered by specific relationship types (linkers) and text search terms.
 *
 * @param composition - The composition ID to search within (0 for global search)
 * @param listLinkers - Array of linker type strings to filter connections (e.g., ['is_a', 'has_property'])
 * @param textSearch - Text string to search for within concept names/properties
 * @returns A promise that resolves to an array of concepts matching the search criteria
 *
 * @example
 * ```typescript
 * // Search for all concepts within composition 100 that have 'is_a' relationships
 * const results = await RecursiveSearchApi(100, ['is_a']);
 *
 * // Search for concepts containing "person" in composition 200
 * const personResults = await RecursiveSearchApi(200, [], 'person');
 *
 * // Combined search with linkers and text
 * const filtered = await RecursiveSearchApi(300, ['has_property', 'located_at'], 'building');
 * ```
 *
 * @remarks
 * - Returns an empty array if the search fails or no results are found
 * - The function retrieves both internal and external connections
 * - Results are processed through GetCompositionFromConnectionsWithDataId to build full concept objects
 * - HTTP errors are handled through HandleHttpError
 * - Errors are logged and re-thrown for caller handling
 *
 * @see SearchQuery for the query data structure
 * @see GetCompositionFromConnectionsWithDataId for result processing
 */
export  async function RecursiveSearchApi(composition:number = 0, listLinkers:string[] = [], textSearch:string = ""){
  var concepts:any[] = [];

try{
    var searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.textSearch = textSearch;
    var raw = JSON.stringify(searchQuery);
    var Connections :Connection [] = []; 
    var myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(),{
        method: 'POST',
        headers: myHeaders,
        body: raw
    });
    if(response.ok){
      const result = await response.json();
      var conceptIds = result.compositionIds;
      var connections = result.internalConnections;
      var externalConnections = result.externalConnections;
      concepts = await GetCompositionFromConnectionsWithDataId(conceptIds,connections);
    }
    else{
      console.log("recursive search error ", response.status);
      HandleHttpError(response);
    }
    return concepts;

}

catch (error) {
    if (error instanceof Error) {
      console.log('recursive search error message: ', error.message);
    } else {
      console.log('recursive search unexpected error: ', error);
    }
    throw error;
  }
}
