/**
 * Search With Linker API module for executing linked searches across related concepts.
 * This module provides functionality to search for concepts with automatic link resolution,
 * enabling efficient retrieval of connected concepts and their relationships in the
 * Concept Connection System. The linker functionality automatically resolves and includes
 * related concepts based on defined relationships.
 *
 * @module Api/Search/SearchWithLinker
 * @see https://documentation.freeschema.com for linker patterns and relationship traversal
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Executes multiple search queries with automatic link resolution and relationship traversal.
 * This function searches for concepts while automatically resolving and including linked
 * concepts based on defined relationships. The linker functionality intelligently follows
 * concept connections, providing a complete view of related data in a single API call.
 *
 * @param searchQuery - Array of SearchQuery objects defining search criteria and relationship paths to follow
 * @param token - Optional authentication token for authorized access (defaults to empty string for public queries)
 * @returns Promise resolving to an array of search results with linked concepts resolved, or empty array on error
 *
 * @example
 * ```typescript
 * // Search for a person and automatically include their related concepts
 * const queries: SearchQuery[] = [
 *   {
 *     type: "Person",
 *     search: "John Doe",
 *     composition: "users",
 *     inpage: 1,
 *     page: 1
 *   }
 * ];
 * // The linker will automatically include related organizations, posts, etc.
 * const results = await SearchWithLinker(queries, "auth-token-123");
 * console.log("Person with all linked data:", results);
 * ```
 *
 * @example
 * ```typescript
 * // Search for multiple concepts with link resolution
 * const queries: SearchQuery[] = [
 *   {
 *     type: "Project",
 *     search: "Alpha",
 *     composition: "projects",
 *     inpage: 5,
 *     page: 1
 *   },
 *   {
 *     type: "Team",
 *     search: "Engineering",
 *     composition: "teams",
 *     inpage: 5,
 *     page: 1
 *   }
 * ];
 * // Results will include projects with linked tasks, team members, etc.
 * const linkedResults = await SearchWithLinker(queries, token);
 * ```
 *
 * @remarks
 * The SearchWithLinker function differs from SearchLinkMultipleApi by automatically
 * resolving concept relationships and including linked concepts in the results.
 * This is particularly useful for:
 * - Retrieving complete object graphs in one call
 * - Following relationship chains automatically
 * - Reducing the need for multiple follow-up queries
 * - Building comprehensive views of related data
 *
 * Link resolution behavior:
 * - Automatically follows defined relationships between concepts
 * - Includes linked concepts in the response
 * - Respects composition boundaries and access controls
 * - Optimizes server-side to prevent N+1 query problems
 *
 * Performance considerations:
 * - More comprehensive than simple searches but single round-trip
 * - Server-side optimization for relationship traversal
 * - May return larger payloads due to included linked concepts
 * - Ideal for reducing client-side data fetching complexity
 *
 * Error handling:
 * - HTTP errors are logged with status and handled via HandleHttpError
 * - Network errors are caught, logged, and re-thrown
 * - Returns empty array on HTTP errors to maintain consistent error handling
 * - Link resolution errors are handled gracefully server-side
 *
 * Use cases:
 * - Building detailed profile views with all related data
 * - Dashboard displays requiring multiple related entities
 * - Report generation needing complete relationship graphs
 * - Mobile applications minimizing network requests
 *
 * @see SearchLinkMultipleApi for batch searches without automatic link resolution
 * @see SearchAllConcepts for simple single-concept searches
 * @see FreeschemaQueryApi for custom relationship queries
 */
export async function SearchWithLinker(searchQuery: SearchQuery[], token: string=""){
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    const queryUrl = BaseUrl.SearchLinkMultipleAll();
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
            console.log("This is the searching error", response.status);
            HandleHttpError(response);
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching error", ex);
        throw ex;
    }
}