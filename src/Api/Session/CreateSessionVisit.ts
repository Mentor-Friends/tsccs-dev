import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

export async function CreateSessionVisit(sessionId: number, url: string){
    try{
        var header = GetRequestHeader("application/x-www-form-urlencoded");
        const urlencoded = new URLSearchParams();
        urlencoded.append("sessionId", sessionId.toString());
        urlencoded.append("url", url);
        const response = await fetch(BaseUrl.CreateSessionVisitUrl(),{
            method: 'POST',
            headers:header,
            body: urlencoded
        });
        if(response.ok){
            return response.json();
        }
        console.log("Creating session url failed", await response.json());
        HandleHttpError(response);
        return null;
    }
    catch(ex){
        console.log("Creating session url failed", ex);
        throw ex;
    }
}