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