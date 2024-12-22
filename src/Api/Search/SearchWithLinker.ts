import { BaseUrl } from "../../DataStructures/BaseUrl";
import {SearchQuery} from '../../DataStructures/SearchQuery';
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

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