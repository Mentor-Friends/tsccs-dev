import { FreeschemaQuery, Logger } from "../../app";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

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
        Logger.logUpdate(logData);

    }
    catch(ex:any){
        console.log("This is the freeschema query error others", ex);
        HandleInternalError(ex, queryUrl);
        UpdatePackageLogWithError(logData, 'FreeschemaQueryApi', ex);
    }
}