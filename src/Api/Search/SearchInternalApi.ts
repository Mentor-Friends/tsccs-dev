import { BaseUrl, SearchStructure } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Searches internal compositions with authentication using query parameters.
 * Performs authenticated search within a composition's internal data structure.
 *
 * @param search - Search structure containing composition, search text, internal composition, type, pagination
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of search results or empty array on error
 *
 * @example
 * const results = await SearchInternalApi({
 *   composition: 123,
 *   search: "example",
 *   internalComposition: 456,
 *   type: "text",
 *   inpage: 10,
 *   page: 1
 * }, "auth-token");
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
        HandleInternalError(ex, queryUrl);
    }


}

/**
 * Searches internal compositions without authentication.
 * Similar to SearchInternalApi but for public/unauthenticated searches.
 *
 * @param search - Search structure containing composition, search text, internal composition, type, pagination
 * @returns Array of search results or empty array on error
 */
export async function SearchInternalAllApi(search: SearchStructure){
    var header = GetRequestHeaderWithAuthorization("application/json", "");
    let queryUrl = BaseUrl.SearchInternalWithCcsUrl();
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
        HandleInternalError(ex, queryUrl);
    }


}