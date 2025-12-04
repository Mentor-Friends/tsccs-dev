import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { getUserDetails } from "../User/UserFromLocalStorage";

export function GetRequestHeader(
    contentType: string | null = 'application/json', 
    accept: string = 'application/json'
) {
    const headers: Record<string, string> = {};
    const token = TokenStorage.BearerAccessToken;
    const xSessionId = TokenStorage.sessionId?.toString();
    
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
    headers['X-Session-id'] = xSessionId;
    return headers;
}


export function GetRequestHeaderWithAuthorization(contentType:string ='application/json', 
token: string = "",Accept: string = 'application/json', 
){
    if(token == ""){
        token = TokenStorage.BearerAccessToken;
    }
    let headers = {};
    let sessionId = TokenStorage.sessionId?.toString();
    if(token != ""){
        headers = {
            'Content-Type':contentType,
            'Authorization': "Bearer " + token,
            'Accept': Accept,
            'X-Session-id': sessionId
        };
    }
    else{
        headers = {
            'Content-Type':contentType,
            'Accept': Accept,
            'X-Session-id': sessionId
        };
    }

    
    return headers;
}

export function GetOnlyTokenHeader(): Headers{
    let token = TokenStorage.BearerAccessToken;
    let sessionId = TokenStorage.sessionId?.toString();
    if(token == ""){
        let userDetails = getUserDetails();
        if(userDetails.token != ""){
            TokenStorage.BearerAccessToken = userDetails.token;
            token = userDetails.token;
        }
    }
    let myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer ' + token)
    myHeaders.append('X-Session-Id', sessionId)
    return myHeaders;
}