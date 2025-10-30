/**
 * Search Link Multiple API module for executing batch searches across multiple queries.
 * This module provides functionality to search for concepts using multiple search queries
 * in a single API call, optimizing performance for applications that need to retrieve
 * related or linked concepts efficiently.
 *
 * @module Api/Search/SearchLinkMultipleApi
 * @see https://documentation.freeschema.com for batch search patterns and optimization techniques
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Executes multiple search queries in a single API call to retrieve linked concepts.
 * This function sends an array of SearchQuery objects to the backend, which processes
 * all queries and returns the combined results. This is significantly more efficient
 * than making individual API calls for each query, especially when searching for
 * related or linked concepts.
 *
 * @param searchQuery - Array of SearchQuery objects, each containing search parameters for a specific query
 * @param token - Optional authentication token for authorized access (defaults to empty string for public queries)
 * @returns Promise resolving to an array of search results (one result set per query), or empty array on error
 *
 * @example
 * ```typescript
 * // Search for multiple related concepts simultaneously
 * const queries: SearchQuery[] = [
 *   {
 *     type: "Person",
 *     search: "John",
 *     composition: "users",
 *     inpage: 10,
 *     page: 1
 *   },
 *   {
 *     type: "Organization",
 *     search: "Company",
 *     composition: "organizations",
 *     inpage: 5,
 *     page: 1
 *   },
 *   {
 *     type: "Document",
 *     search: "contract",
 *     composition: "documents",
 *     inpage: 20,
 *     page: 1
 *   }
 * ];
 * const results = await SearchLinkMultipleApi(queries, "auth-token-123");
 * console.log(`Retrieved ${results.length} result sets`);
 * ```
 *
 * @example
 * ```typescript
 * // Search for a person and their associated data in one call
 * const linkedQueries: SearchQuery[] = [
 *   { type: "Person", search: "Alice", composition: "main", inpage: 1, page: 1 },
 *   { type: "Post", search: "Alice", composition: "social", inpage: 10, page: 1 },
 *   { type: "Comment", search: "Alice", composition: "social", inpage: 10, page: 1 }
 * ];
 * const [person, posts, comments] = await SearchLinkMultipleApi(linkedQueries, token);
 * ```
 *
 * @remarks
 * This function is optimized for scenarios where you need to:
 * - Retrieve multiple related concepts in a single request
 * - Reduce network round-trips and improve performance
 * - Maintain consistency across related queries (all executed at the same time)
 * - Search for linked or connected concepts efficiently
 *
 * Performance benefits:
 * - Single HTTP connection instead of multiple
 * - Reduced network latency
 * - Server-side query optimization
 * - Atomic execution of all queries
 *
 * Error handling:
 * - HTTP errors are logged with status and handled via HandleHttpError
 * - Network errors are caught, logged, and re-thrown
 * - Returns empty array on HTTP errors to prevent null reference issues
 * - If any query fails, the entire operation returns an empty array
 *
 * Query execution:
 * - All queries are executed server-side
 * - Results maintain the same order as input queries
 * - Each query can have different pagination settings
 * - Each query is independent but executed atomically
 *
 * @see SearchWithLinker for alternative batch search with linker functionality
 * @see SearchAllConcepts for single concept searches
 * @see FreeschemaQueryApi for complex queries
 */
export async function SearchLinkMultipleApi(searchQuery: SearchQuery[], token: string=""){
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    const queryUrl = BaseUrl.SearchLinkMultipleAllApiUrl();
    const body = JSON.stringify(searchQuery);
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
            console.log("This is the searching multiple error", response.status);
            HandleHttpError(response);
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching multiple error", ex);
        throw ex;
    }
}