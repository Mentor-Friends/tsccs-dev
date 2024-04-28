import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";

export async function SearchAllConcepts(type:string, search:string, composition:string, token:string, inpage: number = 10, page:number =1){
    var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded', token);
    var urlencoded = new URLSearchParams();
    urlencoded.append("type", type);
    urlencoded.append("search", search);
    urlencoded.append("composition", composition);
    urlencoded.append("inpage", inpage.toString());
    urlencoded.append("page", page.toString());
    const queryUrl = BaseUrl.SearchCompositionsUrl() + "?" + urlencoded.toString();
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
            return [];
        }

    }
    catch(ex){
        console.log("This is the searching error", ex);
        return [];
    }


}