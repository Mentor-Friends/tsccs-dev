/**
 * API module for tracking URL visits within user sessions.
 * Records individual page/URL visits as part of session activity tracking.
 *
 * @module Api/Session/CreateSessionVisit
 * @see https://documentation.freeschema.com for reference
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";

/**
 * Records a URL visit within an existing session for activity tracking.
 * This function creates a session visit record that tracks which URLs a user
 * accesses during their session, useful for analytics and navigation tracking.
 *
 * Session visits help build a complete picture of user activity by recording
 * each page or resource accessed during a session in the Concept Connection System.
 *
 * @param sessionId - The unique identifier of the session to associate this visit with
 * @param url - The URL that was visited (page path or full URL)
 * @returns A promise that resolves to the created visit response, or null if creation fails
 *
 * @example
 * ```typescript
 * // Track a page visit within a session
 * const visit = await CreateSessionVisit(456, '/concepts/dashboard');
 * if (visit) {
 *   console.log('Visit tracked:', visit);
 * }
 *
 * // Track multiple visits in sequence
 * await CreateSessionVisit(456, '/concepts/search');
 * await CreateSessionVisit(456, '/concepts/create');
 * await CreateSessionVisit(456, '/concepts/view/123');
 * ```
 *
 * @remarks
 * - Returns null if the visit creation fails
 * - HTTP errors are handled through HandleHttpError
 * - Requires authentication via GetRequestHeader
 * - Uses URL-encoded form data for the request body
 * - Error details are logged to console for debugging
 * - Errors are re-thrown for caller handling
 *
 * @see CreateSession for creating the initial session
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
        console.log("Creating session url failed", await response.json());
        HandleHttpError(response);
        return null;
    }
    catch(ex){
        console.log("Creating session url failed", ex);
        throw ex;
    }
}