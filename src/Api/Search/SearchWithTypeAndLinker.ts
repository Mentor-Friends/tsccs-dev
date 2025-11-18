import { BaseUrl, SearchQuery, SearchStructure } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

/**
 * Searches concepts by type with additional linker query filters.
 * Combines type-based search with linker queries for refined results.
 *
 * **Complex Logic**: Constructs URL with search structure parameters, then applies
 * linker queries as POST body for multi-dimensional filtering.
 *
 * @param searchStructure - Structure containing search text, type, pagination, and auth flag
 * @param searchQuery - Array of linker query objects for additional filtering
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of concepts matching both type and linker criteria, or empty array on error
 */
export async function SearchWithTypeAndLinkerApi(searchStructure:SearchStructure, searchQuery:SearchQuery[], token = ""){
    let queryUrl = BaseUrl.SearchAllTypeWithLinker(searchStructure.auth);
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    queryUrl = queryUrl + '?search=' + searchStructure.search  + '&type=' + searchStructure.type + '&inpage=' + searchStructure.inpage + '&page=' + searchStructure.page;
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
            HandleHttpError(response);
            console.log("This is the searching multiple error", response.status);
            return [];
    
        }
    }
    catch(ex: any){
        console.log("This is the searching SearchWithTypeAndLinker error", ex);
        HandleInternalError(ex, queryUrl);
    }


}