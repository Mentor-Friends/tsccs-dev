import { BaseUrl } from "../../DataStructures/BaseUrl";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Searches concepts using multiple linker queries with authentication.
 * Allows complex searches by combining multiple search query conditions.
 *
 * @param searchQuery - Array of search query objects defining search criteria
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of matching search results or empty array on error
 *
 * @example
 * const results = await SearchWithLinker([
 *   { linker: "has_name", value: "John" },
 *   { linker: "has_age", value: "30" }
 * ], "auth-token");
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
            HandleHttpError(response)
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching error", ex);
        HandleInternalError(ex, queryUrl);
    }
}