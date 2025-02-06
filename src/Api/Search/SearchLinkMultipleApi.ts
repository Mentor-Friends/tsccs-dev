import { Logger } from "../../app";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

export async function SearchLinkMultipleApi(searchQuery: SearchQuery[], token: string=""){
    const logData : any = Logger.logfunction("SearchLinkMultipleApi", arguments);
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

            Logger.logUpdate(logData);
            return result;

        }
        else{
            HandleHttpError(response);
            console.log("This is the searching multiple error", response.status);
            Logger.logError(startTime, "unknown", "search", "unknown", undefined, response.status, response, "SearchLinkMultipleApi", [searchQuery, token], "unknown", undefined )
            return [];

        }

    }
    catch(ex:any){
        console.log("This is the searching multiple error", ex);
        Logger.logError(startTime, "unknown", "search", "unknown", undefined, 500, ex, "SearchLinkMultipleApi", [searchQuery, token], "unknown", undefined )
        HandleInternalError(ex, queryUrl);
        UpdatePackageLogWithError(logData, 'SearchLinkMultipleApi', ex);
    }
}