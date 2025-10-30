/**
 * Module for retrieving composition connections between two concepts in the CCS system.
 * Composition connections represent hierarchical or structural relationships where one concept is composed of or contains another.
 *
 * @module Api/GetCompositionConnectionsBetweenTwoConcepts
 * @see https://documentation.freeschema.com for composition connection details
 */

import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves all composition connections that exist between two specific concepts.
 * Composition connections define structural relationships where concepts are part of or contained within other concepts.
 *
 * @param ofConceptId - The ID of the source concept (the concept that has the composition relationship)
 * @param toConcept - The ID of the target concept (the concept being composed or contained)
 * @param mainKey - The main key identifier used for additional filtering or context
 * @returns A promise that resolves to an array of Connection objects representing the composition relationships
 *
 * @example
 * ```typescript
 * // Get composition connections from concept 100 to concept 200
 * const connections = await GetCompositionConnectionsBetweenTwoConcepts(100, 200, 1);
 * connections.forEach(conn => {
 *   console.log(`Connection ID: ${conn.id}`);
 * });
 * ```
 *
 * @remarks
 * This function:
 * - Sends FormData with concept IDs and main key to the API
 * - Automatically caches all retrieved connections in ConnectionData
 * - Returns an empty array if the request fails rather than throwing
 * - Logs errors but doesn't propagate them unless an exception occurs
 *
 * The connections are bidirectional composition relationships that help build
 * hierarchical concept structures in the CCS system.
 *
 * @see Connection for the structure of connection objects
 * @see ConnectionData.AddConnection for how connections are cached
 * @see BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl for the API endpoint
 */
export async function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId:number, toConcept:number, mainKey:number){
  var connectionList: Connection[] = [];
    
    try{

        var formdata = new FormData();
        formdata.append("ofConceptId", ofConceptId.toString());
        formdata.append("mainKey", mainKey.toString());
        formdata.append("toConceptId", toConcept.toString());
        var header = GetRequestHeader();
        const response = await fetch(BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(),{
          method: 'POST',
          headers: header,
          body: formdata
        });
        if(response.ok){
          const result = await response.json();
          for(var i=0; i< result.length; i++){
              ConnectionData.AddConnection(result[i]);
              connectionList.push(result[i]);
          }
        }
        else{
          console.log("Get composition connection between two concepts", response.status);
          HandleHttpError(response);
        }

  
        return connectionList;
      }
      catch (error) {
        if (error instanceof Error) {
          console.log('Get composition connection between two concepts error message: ', error.message);
        } else {
          console.log('Get composition connection between two concepts unexpected error: ', error);
        }
        throw error;
      }
  }