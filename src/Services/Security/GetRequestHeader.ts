import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

export function GetRequestHeader(contentType:string ='application/json', 
    Accept: string = 'application/json'
){

    var headers = {
        'Content-Type':contentType,
        'Authorization': "Bearer " + TokenStorage.BearerAccessToken,
        'Accept': Accept,
    };
    
    return headers;
}

export function GetRequestHeaderWithAuthorization(contentType:string ='application/json', 
token: string = "",Accept: string = 'application/json', 
){
    if(token == ""){
        token = TokenStorage.BearerAccessToken;
    }
    var headers = {
        'Content-Type':contentType,
        'Authorization': "Bearer " + token,
        'Accept': Accept,
    };
    
    return headers;
}