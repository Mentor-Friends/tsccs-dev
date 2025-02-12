import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

export function GetRequestHeader(contentType:string ='application/json', 
    Accept: string = 'application/json'
){
    let headers = {};
    let token:string = TokenStorage.BearerAccessToken;
    if(token != ""){
        headers = {
            'Content-Type':contentType,
            'Authorization': "Bearer " + TokenStorage.BearerAccessToken,
            'Accept': Accept,
        };
    }
    else{
        headers = {
            'Content-Type':contentType,
            'Accept': Accept
        };
    }
    
    return headers;
}

export function GetRequestHeaderWithAuthorization(contentType:string ='application/json', 
token: string = "",Accept: string = 'application/json', 
){
    if(token == ""){
        token = TokenStorage.BearerAccessToken;
    }
    let headers = {};
    if(token != ""){
        headers = {
            'Content-Type':contentType,
            'Authorization': "Bearer " + token,
            'Accept': Accept
        };
    }
    else{
        headers = {
            'Content-Type':contentType,
            'Accept': Accept
        };
    }

    
    return headers;
}

export function GetOnlyTokenHeader(){
    let token = TokenStorage.BearerAccessToken;
    const myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer ' + token)
    return myHeaders;
}