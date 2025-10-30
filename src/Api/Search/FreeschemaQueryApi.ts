/**
 * Freeschema Query API module for executing flexible schema-based queries.
 * This module provides functionality to query concepts using the Freeschema query language,
 * which allows for dynamic and flexible data retrieval from the Concept Connection System.
 *
 * @module Api/Search/FreeschemaQueryApi
 * @see https://documentation.freeschema.com for Freeschema query syntax and examples
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";
import { FreeschemaQuery } from "../../DataStructures/Search/FreeschemaQuery";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Executes a Freeschema query to retrieve concepts from the CCS backend.
 * This function sends a POST request with a FreeschemaQuery object to perform
 * flexible, schema-independent queries on the concept database. The Freeschema
 * query language enables complex filtering, nested searches, and dynamic property
 * access across different concept types.
 *
 * @param query - The FreeschemaQuery object containing query parameters, filters, and search criteria
 * @param token - Optional authentication token for authorized access (defaults to empty string for public queries)
 * @returns Promise resolving to an array of matching concepts, or empty array on error
 *
 * @example
 * ```typescript
 * // Search for concepts with specific properties
 * const query: FreeschemaQuery = {
 *   type: "Person",
 *   filters: { age: { $gt: 18 } },
 *   limit: 10
 * };
 * const results = await FreeschemaQueryApi(query, "auth-token-123");
 * console.log(`Found ${results.length} matching concepts`);
 * ```
 *
 * @remarks
 * This function handles both HTTP errors and internal exceptions gracefully:
 * - HTTP errors are logged and handled via HandleHttpError
 * - Internal errors are caught and reported via HandleInternalError
 * - Returns empty array on any failure to prevent null reference errors
 *
 * The Freeschema query system is particularly useful for:
 * - Cross-composition searches
 * - Dynamic property filtering
 * - Complex relationship traversal
 * - Type-independent queries
 *
 * @see SearchAllConcepts for simpler search operations
 * @see SearchWithLinker for linked concept searches
 */
export async function FreeschemaQueryApi(query: FreeschemaQuery, token: string=""){
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    const queryUrl = BaseUrl.FreeschemaQueryUrl();
    const body = JSON.stringify(query);
    try{
        const response = await fetch(queryUrl,{
            method: 'POST',
            headers: header,
            body: body
        });
        if(response.ok){
            let result = await response.json();
            return result;

        }
        else{
            HandleHttpError(response);
            console.log("This is the freeschema query error", response.status);
            return [];

        }

    }
    catch(ex:any){
        console.log("This is the freeschema query error others", ex);
        HandleInternalError(ex, queryUrl);
    }
}