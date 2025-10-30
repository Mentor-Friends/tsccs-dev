/**
 * API module for viewing internal concept data and connections.
 * Retrieves detailed internal structure including connections for specified concepts.
 *
 * @module Api/View/ViewInternalDataApi
 * @see https://documentation.freeschema.com for reference
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { Connection, CreateDefaultConcept, GetConceptBulk } from "../../app";

/**
 * Retrieves internal data and connections for a list of concept IDs.
 * This function fetches the internal composition structure of concepts, including all
 * sub-concepts and their interconnections, providing a complete view of concept internals.
 *
 * In the Concept Connection System, concepts can contain other concepts as part of their
 * internal structure (composition). This function retrieves those internal concepts and
 * the connections between them, returning a dictionary mapping concept IDs to their
 * internal connection lists.
 *
 * @param ids - Array of concept IDs to retrieve internal data for
 * @returns A promise that resolves to a dictionary mapping concept IDs to their internal connections,
 *          or an empty connection list if the request fails
 *
 * @example
 * ```typescript
 * // View internal data for multiple concepts
 * const conceptIds = [100, 101, 102];
 * const internalData = await ViewInternalDataApi(conceptIds);
 *
 * // Access connections for a specific concept
 * const concept100Connections = internalData[100];
 * if (concept100Connections) {
 *   console.log('Concept 100 has', concept100Connections.length, 'internal connections');
 * }
 *
 * // Process all internal structures
 * for (const [conceptId, connections] of Object.entries(internalData)) {
 *   console.log(`Concept ${conceptId}:`, connections);
 * }
 * ```
 *
 * @remarks
 * - Returns an object where keys are concept IDs and values are arrays of Connection objects
 * - Automatically fetches and caches all sub-concepts via GetConceptBulk
 * - Returns an empty connection list on error
 * - HTTP errors are handled through HandleHttpError but do not throw
 * - Requires authentication via GetRequestHeader
 * - Errors are logged to console and re-thrown for caller handling
 *
 * @see GetConceptBulk for bulk concept retrieval
 * @see Connection for the connection data structure
 */
export async function ViewInternalDataApi(ids: number[]){
    let connectionList: Connection[] = [];
    try{
        var header = GetRequestHeader();

          const response = await fetch(BaseUrl.ViewInternalDataUrl(),{
              method: 'POST',
              headers: header,
              body: JSON.stringify(ids)
          });
          if(response.ok){
            let conceptString = await response.json() ;
            let connectionDictionary : any = {};
            for(let i=0; i < conceptString.length; i++){
                let conceptList: number[] = conceptString[i].concepts;
                connectionList = conceptString[i].connections;
                let id = conceptString[i].id;
                GetConceptBulk(conceptList);
                connectionDictionary[id] = connectionList;
            }

            return connectionDictionary;

          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("View Internal Data error", response.status);
            HandleHttpError(response);
            }
      return connectionList;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the view internal data error message: ', error.message);
        } else {
          console.log(' This is the view internal data unexpected error: ', error);
        }
        throw error;
      }
}