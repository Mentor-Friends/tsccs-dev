import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { SessionData } from "../../app";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a new session for tracking user activity.
 * Records session metadata including user agent, IP, and timestamp.
 *
 * @param sessionData - SessionData object containing session information
 * @returns Session object with generated ID, or null on error
 *
 * @example
 * const session = await CreateSession({
 *   userAgent: navigator.userAgent,
 *   ipAddress: "192.168.1.1",
 *   userId: 123
 * });
 */
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