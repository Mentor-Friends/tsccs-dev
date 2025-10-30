/**
 * API module for creating user session records.
 * Tracks user sessions for analytics and activity monitoring purposes.
 *
 * @module Api/Session/CreateSession
 * @see https://documentation.freeschema.com for reference
 */

import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { SessionData } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a new session record in the backend for tracking user activity.
 * Sessions are used to monitor user interactions, track analytics, and maintain
 * activity logs within the Concept Connection System.
 *
 * This function initiates a new session with the provided session data, which
 * typically includes user information, timestamps, and session metadata.
 *
 * @param sessionData - The session data object containing session initialization information
 * @returns A promise that resolves to the created session response, or null if creation fails
 *
 * @example
 * ```typescript
 * // Create a new user session
 * const sessionInfo: SessionData = {
 *   userId: 123,
 *   startTime: new Date().toISOString(),
 *   userAgent: navigator.userAgent
 * };
 *
 * const session = await CreateSession(sessionInfo);
 * if (session) {
 *   console.log('Session created:', session.sessionId);
 * } else {
 *   console.log('Session creation failed');
 * }
 * ```
 *
 * @remarks
 * - Returns null if the session creation fails
 * - HTTP errors are handled through HandleHttpError
 * - Requires authentication via GetRequestHeader
 * - Error details are logged to console for debugging
 * - Errors are re-thrown for caller handling
 *
 * @see CreateSessionVisit for tracking URL visits within a session
 * @see SessionData for the session data structure
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
        console.log("Creating session failed", await response.json());
        HandleHttpError(response);
        return null;
    }
    catch(ex){
        console.log("Creating session failed", ex);
        throw ex;
    }
}