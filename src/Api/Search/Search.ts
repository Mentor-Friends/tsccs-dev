/**
 * Search API module for querying concepts across compositions.
 * This module provides the primary search functionality for the Concept Connection System,
 * enabling users to search for concepts by type, name, and composition with pagination support.
 *
 * @module Api/Search/Search
 * @see https://documentation.freeschema.com for search query patterns and best practices
 */

import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Searches for concepts across specified compositions with pagination.
 * This is the primary search function for retrieving concepts based on type,
 * search text, and composition. It performs a GET request with URL-encoded
 * parameters to find matching concepts in the CCS database.
 *
 * @param type - The concept type to search for (e.g., "Person", "Organization", "Document")
 * @param search - The search text to match against concept names or properties
 * @param composition - The composition ID or name to search within
 * @param token - Authentication token for authorized access
 * @param inpage - Number of results per page (defaults to 10)
 * @param page - Page number for pagination, starting from 1 (defaults to 1)
 * @returns Promise resolving to an array of matching concepts, or empty array on error
 *
 * @example
 * ```typescript
 * // Search for Person concepts in a specific composition
 * const results = await SearchAllConcepts(
 *   "Person",
 *   "John",
 *   "my-composition-123",
 *   "auth-token-456",
 *   20,  // 20 results per page
 *   1    // first page
 * );
 * console.log(`Found ${results.length} matching persons`);
 * ```
 *
 * @example
 * ```typescript
 * // Search with default pagination
 * const results = await SearchAllConcepts(
 *   "Document",
 *   "report",
 *   "documents-composition",
 *   authToken
 * );
 * // Returns first 10 results by default
 * ```
 *
 * @remarks
 * This function uses URL-encoded parameters for the GET request, which is ideal for
 * simple search operations. For more complex queries, consider using FreeschemaQueryApi.
 *
 * Error handling:
 * - HTTP errors are handled via HandleHttpError and logged
 * - Network errors are caught, logged, and re-thrown
 * - Returns empty array on HTTP errors, throws exception on network errors
 *
 * Pagination:
 * - Results are paginated server-side
 * - Use 'inpage' to control page size
 * - Use 'page' to navigate through results
 * - Page numbers start at 1, not 0
 *
 * @see FreeschemaQueryApi for complex queries
 * @see SearchInternalApi for searching within internal compositions
 * @see SearchWithLinker for linked concept searches
 */
export async function SearchAllConcepts(type:string, search:string, composition:string, token:string, inpage: number = 10, page:number =1){
    var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded', token);
    var urlencoded = new URLSearchParams();
    urlencoded.append("type", type);
    urlencoded.append("search", search);
    urlencoded.append("composition", composition);
    urlencoded.append("inpage", inpage.toString());
    urlencoded.append("page", page.toString());
    const queryUrl = BaseUrl.SearchCompositionsUrl() + "?" + urlencoded.toString();
    try{
        const response = await fetch(queryUrl,{
            method: 'GET',
            headers: header
        });
        if(response.ok){
            let result = await response.json();
            return result;

        }
        else{
            HandleHttpError(response);
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching error", ex);
        throw ex;
    }


}