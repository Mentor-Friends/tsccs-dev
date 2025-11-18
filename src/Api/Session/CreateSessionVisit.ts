import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

/**
 * Records a URL visit within an existing session.
 * Tracks page navigation and user journey through the application.
 *
 * @param sessionId - ID of the session to associate the visit with
 * @param url - URL being visited
 * @returns Session visit object or null on error
 *
 * @example
 * await CreateSessionVisit(456, "/dashboard/profile");
 */
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
        else{
            console.log("Creating session url failed", await response.json());
            HandleHttpError(response);
            return null;
        }

    }
    catch(ex){
        console.log("Creating session url failed", ex);
        HandleInternalError(ex, BaseUrl.CreateSessionVisitUrl());
    }
}