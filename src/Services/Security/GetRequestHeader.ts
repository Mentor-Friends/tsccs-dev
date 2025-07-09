import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { getUserDetails } from "../User/UserFromLocalStorage";

export function GetRequestHeader(
    contentType: string = 'application/json', 
    accept: string = 'application/json'
) {
    const headers: Record<string, string> = {};
    const token = TokenStorage.BearerAccessToken;
    const xSessionId = TokenStorage.sessionId.toString();
    
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
    if(token != ""){
        headers = {
            'Content-Type':contentType,
            'Authorization': "Bearer " + token,
            'Accept': Accept,
            'X-Session-id': TokenStorage.sessionId.toString()
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

export function GetOnlyTokenHeader(): Headers{
    let token = TokenStorage.BearerAccessToken;
    if(token == ""){
        let userDetails = getUserDetails();
        if(userDetails.token != ""){
            TokenStorage.BearerAccessToken = userDetails.token;
            token = userDetails.token;
        }
    }
    let myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer ' + token)
    myHeaders.append('X-Session-Id', TokenStorage.sessionId.toString())
    return myHeaders;
}