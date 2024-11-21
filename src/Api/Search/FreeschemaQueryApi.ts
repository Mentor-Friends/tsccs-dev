import { FreeschemaQuery } from "../../app";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

export async function FreeschemaQueryApi(query: FreeschemaQuery, token: string=""){
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

    }
    catch(ex:any){
        console.log("This is the freeschema query error others", ex);
        HandleInternalError(ex, queryUrl);
    }
}