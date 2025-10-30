/**
 * Module for retrieving incoming connections to a specific concept.
 * Provides paginated access to connections where a concept is the target (toTheConcept).
 *
 * @module Api/GetConnectionToTheConcept
 * @see https://documentation.freeschema.com for connection direction details
 */

import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves all connections pointing to a specific concept with pagination support.
 * Returns connections where the specified concept is the target (toTheConcept).
 *
 * @param typeId - The type ID to filter connections by connection type
 * @param toTheConceptId - The ID of the target concept whose incoming connections to retrieve
 * @param userId - The user ID for access control and filtering
 * @param inpage - Number of connections per page (default: 10)
 * @param page - Page number for pagination, 1-indexed (default: 1)
 * @returns A promise that resolves to an array of Connection objects
 *
 * @example
 * ```typescript
 * // Get first 10 connections of type 3 pointing to concept 200 for user 1
 * const connections = await GetConnectionToTheConcept(3, 200, 1);
 * console.log(`Found ${connections.length} incoming connections`);
 *
 * // Get second page with 20 connections per page
 * const moreConnections = await GetConnectionToTheConcept(3, 200, 1, 20, 2);
 * ```
 *
 * @remarks
 * Connection Direction:
 * This function retrieves "incoming" or "to" connections where the specified
 * concept is the target. In the CCS graph model, these represent relationships
 * directed toward or pointing to the concept.
 *
 * Use Cases:
 * - Finding all concepts that reference a specific concept
 * - Discovering backlinks or reverse relationships
 * - Building bidirectional relationship navigation
 * - Analyzing concept dependencies
 *
 * Pagination:
 * - Uses 1-based page numbering (page 1 is the first page)
 * - Results are limited by the inpage parameter
 * - Useful for large result sets to avoid loading all connections at once
 *
 * Filtering:
 * - typeId filters connections by their type/relationship kind
 * - userId enables user-specific visibility and access control
 *
 * The function does NOT automatically cache results in ConnectionData,
 * unlike GetConnection or GetConnectionBulk. It returns the raw API response.
 *
 * @see Connection for the structure of connection objects
 * @see GetConnectionOfTheConcept for retrieving outgoing connections
 * @see GetConnectionBulk for bulk connection retrieval with caching
 */
export async function GetConnectionToTheConcept(typeId: number, toTheConceptId:number, userId:number, inpage:number=10, page:number=1 ){
  let connectionList:Connection[] = []; 
  try{
        var urlencoded = new URLSearchParams();
        urlencoded.append("typeId", `${typeId}`);
        urlencoded.append("toTheConceptId", `${toTheConceptId}`);
        urlencoded.append("userId", `${userId}`);
        urlencoded.append("inpage", `${inpage}`);
        urlencoded.append("page", `${page}`);
        var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsToConceptUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(response.ok){
              connectionList = await response.json() as Connection[];
            }
            else{
              console.log("Get connection of concept error", response.status);
              HandleHttpError(response);
            }
            return connectionList;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get connection of concept  error message: ', error.message);
        } else {
          console.log('Get connection of concept unexpected error: ', error);
        }
        throw error;
      }
}