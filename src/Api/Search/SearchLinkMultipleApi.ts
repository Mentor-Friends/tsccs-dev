import { Logger } from "../../app";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

export async function SearchLinkMultipleApi(searchQuery: SearchQuery[], token: string=""){
    let startTime = performance.now()
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
            // Add Log
            // Logger.logInfo(startTime, "unknown", "search", "unknown", undefined, 200, result, "SearchLinkMultipleApi", ['searchQuery', 'token'], "unknown", undefined )
            return result;

        }
        else{
            HandleHttpError(response);
            console.log("This is the searching multiple error", response.status);
            Logger.logWarning(startTime, "unknown", "search", "unknown", undefined, response.status, response, "SearchLinkMultipleApi", ['searchQuery', 'token'], "unknown", undefined )
            return [];

        }

    }
    catch(ex:any){
        console.log("This is the searching multiple error", ex);
        Logger.logWarning(startTime, "unknown", "search", "unknown", undefined, 500, ex, "SearchLinkMultipleApi", ['searchQuery', 'token'], "unknown", undefined )
        HandleInternalError(ex, queryUrl);
    }
}