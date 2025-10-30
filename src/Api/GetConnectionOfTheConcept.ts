/**
 * Module for retrieving outgoing connections from a specific concept.
 * Provides paginated access to connections where a concept is the source (ofTheConcept).
 *
 * @module Api/GetConnectionOfTheConcept
 * @see https://documentation.freeschema.com for connection direction details
 */

import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetAllConnectionsOfConceptUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Retrieves all connections originating from a specific concept with pagination support.
 * Returns connections where the specified concept is the source (ofTheConcept).
 *
 * @param typeId - The type ID to filter connections by connection type
 * @param ofTheConceptId - The ID of the source concept whose outgoing connections to retrieve
 * @param userId - The user ID for access control and filtering
 * @param inpage - Number of connections per page (default: 10)
 * @param page - Page number for pagination, 1-indexed (default: 1)
 * @returns A promise that resolves to an array of Connection objects
 *
 * @example
 * ```typescript
 * // Get first 10 connections of type 5 from concept 100 for user 1
 * const connections = await GetConnectionOfTheConcept(5, 100, 1);
 * console.log(`Found ${connections.length} outgoing connections`);
 *
 * // Get second page with 20 connections per page
 * const moreConnections = await GetConnectionOfTheConcept(5, 100, 1, 20, 2);
 * ```
 *
 * @remarks
 * Connection Direction:
 * This function retrieves "outgoing" or "from" connections where the specified
 * concept is the source. In the CCS graph model, these represent relationships
 * initiated by or originating from the concept.
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
 * @see GetConnectionToTheConcept for retrieving incoming connections
 * @see GetConnectionBulk for bulk connection retrieval with caching
 */
export async function GetConnectionOfTheConcept(typeId: number, ofTheConceptId:number, userId:number, inpage:number=10, page:number=1 ){
  let connectionList:Connection[] = []; 
  try{
        var urlencoded = new URLSearchParams();
        urlencoded.append("typeId", `${typeId}`);
        urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
        urlencoded.append("userId", `${userId}`);
        urlencoded.append("inpage", `${inpage}`);
        urlencoded.append("page", `${page}`);
        var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsOfConceptUrl(),{
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