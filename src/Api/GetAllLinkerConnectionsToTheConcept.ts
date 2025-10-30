/**
 * API module for retrieving all linker connections pointing to a specific concept.
 * This module fetches inbound linker connections where the specified concept acts as the target,
 * enabling discovery of what other concepts reference or link to the given concept.
 *
 * @module Api/GetAllLinkerConnectionsToTheConcept
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { Connection } from "../DataStructures/Connection";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { BaseUrl } from "../app";

/**
 * Retrieves all linker connections that point to a specific concept.
 * This function fetches connections where the specified concept is the target (to-concept),
 * allowing you to discover all concepts that link to or reference this concept.
 *
 * Linker connections represent directed relationships in the concept graph, and this function
 * specifically returns inbound connections where the given concept acts as the destination.
 * This is essential for reverse graph traversal, finding references, and understanding what
 * other concepts depend on or relate to the specified concept.
 *
 * @param conceptId - The unique identifier of the concept whose inbound linker connections should be retrieved
 *
 * @returns A promise that resolves to an array of Connection objects pointing to the specified concept
 *
 * @example
 * ```typescript
 * // Get all connections to concept 789
 * const inboundConnections = await GetAllLinkerConnectionsToTheConcept(789);
 *
 * // Discover what links to this concept
 * inboundConnections.forEach(connection => {
 *   console.log(`Concept ${connection.fromConceptId} links to concept 789`);
 * });
 *
 * // Find all references to a concept
 * async function findReferences(conceptId: number) {
 *   const connections = await GetAllLinkerConnectionsToTheConcept(conceptId);
 *   return connections.map(conn => conn.fromConceptId);
 * }
 *
 * // Check if a concept is referenced
 * async function isConceptReferenced(conceptId: number): Promise<boolean> {
 *   const connections = await GetAllLinkerConnectionsToTheConcept(conceptId);
 *   return connections.length > 0;
 * }
 * ```
 *
 * @remarks
 * This function uses a GET request with the concept ID as a query parameter.
 * Unlike some other API functions, it does not automatically add connections to ConnectionData,
 * allowing the caller to decide how to handle the returned connections.
 *
 * The function returns an empty array if the request fails or if no connections are found.
 * Errors are logged with the prefix 'Get all linker connection To the concepts error'.
 *
 * This function is the complement to GetAllLinkerConnectionsFromTheConcept - together they
 * provide complete bidirectional navigation of the concept graph.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see GetAllLinkerConnectionsFromTheConcept for retrieving outbound connections from a concept
 * @see Connection for the connection data structure
 */
export async function GetAllLinkerConnectionsToTheConcept(conceptId:number){
  var connections: Connection[] = [];

    try{
        const start = new Date().getTime();
          var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetAllLinkerConnectionToConceptUrl() + `?conceptId=${conceptId}`,{
              method: 'GET',
              headers: header,
          });
          if(response.ok){
            const result = await response.json();

            for(var i=0; i<result.length;i++){
             var connection = result[i] as Connection;
             connections.push(connection);
            }
          }
          else{
            console.log("Get all linker connection To the concepts error", "cannot get respone" );
            HandleHttpError(response);

          }
           return connections;
  }
  catch (error) {
      if (error instanceof Error) {
        console.log('Get all linker connection To the concepts error: ', error.message);
      } else {
        console.log('Get all linker connection To the concepts error(Unexpected): ', error);
      }
      throw error;
    }
}