import { FreeschemaQuery, Logger } from "../../app";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { QueryCacheManager } from "../../WrapperFunctions/QueryCacheManager";

/**
 * Executes a freeschema query for flexible, schema-free data retrieval.
 * Supports custom query structures with filters, pagination, and nested queries.
 *
 * @param query - FreeschemaQuery object containing query parameters, filters, and nested queries
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Query results array or empty array on error
 *
 * @example
 * const results = await FreeschemaQueryApi({
 *   type: "person",
 *   filters: [{ field: "name", operator: "like", value: "John" }],
 *   inpage: 10,
 *   page: 1
 * }, "auth-token");
 */
export async function FreeschemaQueryApi(query: FreeschemaQuery, token: string=""){
    const logData : any = Logger.logfunction("FreeschemaQueryApi", arguments);
    var header = GetRequestHeaderWithAuthorization("application/json", token);
    const queryUrl = BaseUrl.FreeschemaQueryUrl();
    const body = JSON.stringify(query);
    const hash = await QueryCacheManager.getHash(query);
    const cached = query.cache !== false ? QueryCacheManager.get(hash) : null;
    if(cached){
        // Return cached data immediately, revalidate in the background
        fetch(queryUrl, {
            method: 'POST',
            headers: header,
            body: body
        }).then(async (response: any) => {
            if (response.ok) {
                const fresh = await response.json();
                QueryCacheManager.set(hash, fresh);
            } else {
                HandleHttpError(response);
            }
        }).catch((ex: any) => {
            HandleInternalError(ex, queryUrl);
            UpdatePackageLogWithError(logData, 'FreeschemaQueryApi', ex);
        });
        return cached;
    }
    try{
        const response = await fetch(queryUrl,{
            method: 'POST',
            headers: header,
            body: body
        });
        if(response.ok){
            let result = await response.json();
            QueryCacheManager.set(hash, result);
            Logger.logUpdate(logData);
            return result;
        }
        else{
            HandleHttpError(response);
            return [];
        }
    }
    catch(ex:any){
        HandleInternalError(ex, queryUrl);
        UpdatePackageLogWithError(logData, 'FreeschemaQueryApi', ex);
    }
}


