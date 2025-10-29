import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { getServerJwtToken } from "../auth/AuthService";

export function GetRequestHeader(contentType:string ='application/json', 
    Accept: string = 'application/json'
){
    let token = TokenStorage.BearerAccessToken || getServerJwtToken();
    var headers = {
        'Content-Type':contentType,
        'Authorization': "Bearer " + token,
        'Accept': Accept,
    };
    
    return headers;
}

export function GetRequestHeaderWithAuthorization(contentType:string ='application/json', 
token: string = "",Accept: string = 'application/json', 
){
    if(token == ""){
        token = TokenStorage.BearerAccessToken || getServerJwtToken();
    }
    var headers = {
        'Content-Type':contentType,
        'Authorization': "Bearer " + token,
        'Accept': Accept,
    };
    
    return headers;
}