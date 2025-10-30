/**
 * API module for retrieving all linker connections originating from a specific concept.
 * This module fetches outbound linker connections where the specified concept acts as the source,
 * enabling navigation and analysis of concept relationships in the forward direction.
 *
 * @module Api/GetAllLinkerConnectionsFromTheConcept
 * @see https://documentation.freeschema.com for more information on the Concept Connection System
 */

import { Connection } from "../DataStructures/Connection";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { BaseUrl } from "../app";

/**
 * Retrieves all linker connections that originate from a specific concept.
 * This function fetches connections where the specified concept is the source (from-concept),
 * allowing you to discover all concepts that this concept links to or relates with.
 *
 * Linker connections represent directed relationships in the concept graph, and this function
 * specifically returns outbound connections where the given concept acts as the origin point.
 * This is essential for graph traversal, relationship discovery, and understanding how a
 * concept connects to other parts of the knowledge graph.
 *
 * @param conceptId - The unique identifier of the concept whose outbound linker connections should be retrieved
 *
 * @returns A promise that resolves to an array of Connection objects originating from the specified concept
 *
 * @example
 * ```typescript
 * // Get all connections from concept 789
 * const outboundConnections = await GetAllLinkerConnectionsFromTheConcept(789);
 *
 * // Discover what this concept links to
 * outboundConnections.forEach(connection => {
 *   console.log(`Concept 789 links to concept ${connection.toConceptId}`);
 * });
 *
 * // Use for graph navigation
 * async function traverseFromConcept(conceptId: number) {
 *   const connections = await GetAllLinkerConnectionsFromTheConcept(conceptId);
 *   return connections.map(conn => conn.toConceptId);
 * }
 * ```
 *
 * @remarks
 * This function uses a GET request with the concept ID as a query parameter.
 * Unlike some other API functions, it does not automatically add connections to ConnectionData,
 * allowing the caller to decide how to handle the returned connections.
 *
 * The function returns an empty array if the request fails or if no connections are found.
 * Errors are logged with the prefix 'Get all linker connection from the concepts error'.
 *
 * @throws Will throw an error if the network request fails or if the server returns an error response
 *
 * @see GetAllLinkerConnectionsToTheConcept for retrieving inbound connections to a concept
 * @see Connection for the connection data structure
 */
export async function GetAllLinkerConnectionsFromTheConcept(conceptId:number){
  var connections: Connection[] = [];

    try{
        const start = new Date().getTime();
          var header = GetRequestHeader('application/x-www-form-urlencoded');
          const response = await fetch(BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`,{
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
            console.log("Get all linker connection from the concepts error", "cannot get respone" );
            HandleHttpError(response);

          }
           return connections;
  }
  catch (error) {
      if (error instanceof Error) {
        console.log('Get all linker connection from the concepts error: ', error.message);
      } else {
        console.log('Get all linker connection from the concepts error(Unexpected): ', error);
      }
      throw error;
    }
}