/**
 * Internal Search API module for querying concepts within nested compositions.
 * This module provides specialized search functionality for searching concepts that exist
 * within internal (nested) compositions, enabling hierarchical concept retrieval in the
 * Concept Connection System.
 *
 * @module Api/Search/SearchInternalApi
 * @see https://documentation.freeschema.com for internal composition structure and search patterns
 */

import { BaseUrl, SearchStructure } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Searches for concepts within internal (nested) compositions with authentication.
 * This function enables searching for concepts that are part of internal compositions,
 * which are compositions nested within other compositions. It performs a GET request
 * with query parameters to search both the parent composition and internal composition.
 *
 * @param search - SearchStructure object containing all search parameters including composition, internal composition, type, search text, and pagination
 * @param token - Optional authentication token for authorized access (defaults to empty string for public queries)
 * @returns Promise resolving to an array of matching concepts from the internal composition, or empty array on error
 *
 * @example
 * ```typescript
 * // Search for concepts in an internal composition
 * const searchParams: SearchStructure = {
 *   composition: "parent-composition-123",
 *   internalComposition: "nested-composition-456",
 *   type: "Task",
 *   search: "urgent",
 *   inpage: 15,
 *   page: 1
 * };
 * const results = await SearchInternalApi(searchParams, "auth-token-789");
 * console.log(`Found ${results.length} urgent tasks in nested composition`);
 * ```
 *
 * @example
 * ```typescript
 * // Search in a deeply nested composition structure
 * const searchParams: SearchStructure = {
 *   composition: "organization",
 *   internalComposition: "department.team.projects",
 *   type: "Project",
 *   search: "active",
 *   inpage: 10,
 *   page: 1
 * };
 * const activeProjects = await SearchInternalApi(searchParams, authToken);
 * ```
 *
 * @remarks
 * This function is specifically designed for hierarchical concept structures where
 * compositions can contain other compositions. It's particularly useful for:
 * - Searching within organizational hierarchies
 * - Querying nested data structures
 * - Accessing concepts in private or protected sub-compositions
 * - Filtering results within specific composition contexts
 *
 * Error handling:
 * - HTTP errors are logged with status and handled via HandleHttpError
 * - Network errors are caught, logged, and re-thrown
 * - Returns empty array on HTTP errors to prevent null reference issues
 *
 * Query construction:
 * - All parameters are URL-encoded as query strings
 * - The URL pattern: ?composition=X&search=Y&internalComposition=Z&type=T&inpage=N&page=P
 * - Uses authenticated CCS endpoint for secure access
 *
 * @see SearchAllConcepts for searching in top-level compositions
 * @see FreeschemaQueryApi for complex nested queries
 */
export async function SearchInternalApi(search: SearchStructure, token: string = ""){
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    let queryUrl = BaseUrl.SearchInternalWithAuthenticatedCcsUrl();
    queryUrl = queryUrl + '?composition=' + search.composition + '&search=' + search.search  + '&internalComposition=' + search.internalComposition + '&type=' + search.type + '&inpage=' + search.inpage + '&page=' + search.page;
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
            console.log("This is the searching internal error", response.status);
            HandleHttpError(response);
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching internal error", ex);
        throw ex;
    }


}