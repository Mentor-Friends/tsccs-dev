import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { getUserDetails } from "../User/UserFromLocalStorage";

export function GetRequestHeader(contentType:string ='application/json', 
    Accept: string = 'application/json'
){
    let headers = {};
    let sessionId = TokenStorage.sessionId?.toString();
    let token:string = TokenStorage.BearerAccessToken;
    if(token != ""){
        headers = {
            'Content-Type':contentType,
            'Authorization': "Bearer " + TokenStorage.BearerAccessToken,
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