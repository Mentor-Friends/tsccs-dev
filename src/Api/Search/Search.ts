import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";

/**
 * Searches for concepts matching specified criteria with pagination support.
 *
 * This is the primary search function for querying concepts in the system. It performs a
 * backend API search with multiple filter parameters and returns paginated results.
 *
 * **Search Capabilities:**
 * - Text-based search on concept character values
 * - Type filtering (search within specific concept types)
 * - Composition filtering (search within specific compositions)
 * - Pagination support (page size and page number)
 * - Authenticated requests (requires valid access token)
 *
 * **Use Cases:**
 * - Finding concepts by name or partial text match
 * - Filtering results by concept type (e.g., only "Person" concepts)
 * - Searching within a specific composition context
 * - Building paginated search UIs
 *
 * @param type - The type filter for the search. Can be a type name (e.g., "Person", "Document")
 *              or empty string to search all types. Used to narrow results to specific concept types.
 * @param search - The search query string. Searches against concept character values (names/titles).
 *                Can be partial matches depending on backend implementation.
 * @param composition - Composition context filter. Can be a composition ID or identifier to limit
 *                     search scope to concepts within a specific composition. Use empty string for global search.
 * @param token - The JWT authentication token. Required for authorized access to backend search API.
 *               Should be the BearerAccessToken from TokenStorage.
 * @param inpage - Number of results per page. Controls page size for pagination. Defaults to 10.
 *                Must be a positive integer.
 * @param page - The page number to retrieve (1-indexed). Defaults to 1 (first page).
 *              Use for pagination: page 1, page 2, etc.
 *
 * @returns Promise resolving to an array of matching Concept objects, or empty array on error/no results
 *
 * @example
 * // Simple search for all concepts containing "Alice"
 * const results = await SearchAllConcepts(
 *   "",              // all types
 *   "Alice",         // search term
 *   "",              // all compositions
 *   accessToken,     // auth token
 *   10,              // 10 per page
 *   1                // first page
 * );
 *
 * @example
 * // Search for "Person" type concepts with "Smith" in name
 * const people = await SearchAllConcepts(
 *   "Person",        // only Person types
 *   "Smith",         // search term
 *   "",              // all compositions
 *   accessToken,
 *   20,              // 20 per page
 *   1
 * );
 *
 * @example
 * // Paginated search - get second page
 * const page2 = await SearchAllConcepts(
 *   "",
 *   "Project",
 *   "",
 *   accessToken,
 *   10,
 *   2                // second page
 * );
 *
 * @throws Returns empty array on error. Errors are logged via HandleHttpError and HandleInternalError
 *
 * @see {@link SearchWithLinker} for search with relationship filtering
 * @see {@link SearchWithTypeAndLinker} for advanced search with type and linker filters
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
        HandleInternalError(ex, queryUrl);
    }


}