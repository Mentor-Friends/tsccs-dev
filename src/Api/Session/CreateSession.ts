import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { SessionData } from "../../app";

export async function CreateSession(sessionData: SessionData){
    try{
        var header = GetRequestHeader();
        const body = JSON.stringify(sessionData);
        const response = await fetch(BaseUrl.CreateSessionId(),{
            method: 'POST',
            headers:header,
            body: body
        });
        if(response.ok){
            return response.json();
        }
        console.log("Creating session failed", await response.json());
        return null;
    }
    catch(ex){
        console.log("Creating session failed", ex);
        return null;
    }
}