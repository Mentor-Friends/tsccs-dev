import { BaseUrl, SearchStructure } from "../../app";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

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
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching internal error", ex);
        return [];
    }


}