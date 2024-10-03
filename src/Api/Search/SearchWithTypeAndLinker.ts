import { BaseUrl, SearchQuery, SearchStructure } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";

export async function SearchWithTypeAndLinker(searchStructure:SearchStructure, searchQuery:SearchQuery[], token = ""){
    let queryUrl = BaseUrl.SearchAllTypeWithLinker();
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