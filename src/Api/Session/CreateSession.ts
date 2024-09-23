import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { SessionData } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";

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
        else{
            console.log("Creating session failed", await response.json());
            HandleHttpError(response);
            return null;
        }

    }
    catch(ex){
        console.log("Creating session failed", ex);
        HandleInternalError(ex, BaseUrl.CreateSessionId());
    }
}