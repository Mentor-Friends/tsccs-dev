/**
 * Connection creation API module for the Concept Connection System.
 * This module handles the creation of connections (edges) between concepts in the CCS
 * knowledge graph. Connections define relationships and associations between concepts,
 * forming the network structure that enables knowledge mapping and traversal.
 *
 * @module Api/Create/CreateTheConnectionApi
 * @see https://documentation.freeschema.com for connection structure and relationship types
 */

import { CreateTheConnectionUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates one or more connections between concepts in the Concept Connection System.
 * This function sends a batch of connection data to the CCS API to establish
 * relationships between concepts. Connections are the edges in the knowledge graph
 * that link concepts together, enabling navigation and semantic relationships.
 *
 * @param connectionData - An array of Connection objects to be created. Each connection
 *                         defines a relationship between two concepts with directional
 *                         and metadata properties
 * @returns A promise that resolves to a Connection object. Note that the function
 *          returns a default connection instance initialized at the start, and the
 *          actual API response is processed but not returned in success cases
 *
 * @example
 * ```typescript
 * const connections = [
 *   new Connection(userId, ofTheConceptId, toTheConceptId, typeId, ...),
 *   new Connection(userId, anotherConceptId, targetConceptId, typeId, ...)
 * ];
 * await CreateTheConnectionApi(connections);
 * ```
 *
 * @remarks
 * This function supports batch connection creation by accepting an array of
 * Connection objects. The API processes all connections in a single request,
 * which is more efficient than creating connections individually.
 *
 * The function has an asymmetric return pattern:
 * - On success: Returns the default connection instance created at function start
 * - On error: Logs the error and handles it through HandleHttpError
 *
 * The connection data is serialized to JSON and sent with authentication headers
 * obtained from GetRequestHeader(). All network and HTTP errors are logged to
 * the console with descriptive prefixes for debugging.
 *
 * @throws Will throw an error if the HTTP request fails, after logging error details
 *         and processing through HandleHttpError
 * @see Connection for the connection data structure
 * @see GetRequestHeader for authentication details
 * @see HandleHttpError for error handling
 * @see https://documentation.freeschema.com for connection types and semantics
 */
export async function CreateTheConnectionApi(connectionData: Connection[]){
  let result = new Connection(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    try{


        var header = GetRequestHeader();
        var jsonData = JSON.stringify(connectionData);
            const response = await fetch(BaseUrl.CreateTheConnectionUrl(),{
                method: 'POST',
                headers:header,
                body: jsonData
            });
            if(response.ok){
              const result = await response.json();

            }
            else{
              console.log('Create the connection error message: ', response);
              HandleHttpError(response);
            }
            return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the connection error message: ', error.message);
        } else {
          console.log(' Create the connection unexpected error: ', error);
        }
        throw error;
      }
}