import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

export function GetRequestHeader(
    contentType: string = 'application/json', 
    accept: string = 'application/json'
) {
    const headers: Record<string, string> = {};
    const token = TokenStorage.BearerAccessToken;
    
    console.log("this is the token", token)
    // Add Authorization if token is available
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    // Add Content-Type only if specified (important for FormData)
    if (contentType) {
        headers['Content-Type'] = contentType;
    }

    // Always include Accept header if provided
    if (accept) {
        headers['Accept'] = accept;
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