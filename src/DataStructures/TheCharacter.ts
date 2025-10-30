/**
 * @fileoverview Character data structure for the CCS-JS system.
 * @module DataStructures/TheCharacter
 */

/**
 * Represents a character entity in the system with associated user, security, access, and session information.
 *
 * @remarks
 * TheCharacter class encapsulates character data along with comprehensive metadata including
 * user ownership, security credentials, access control, and session tracking. Each character
 * maintains references to multiple user contexts for fine-grained authorization control.
 *
 * @example
 * ```typescript
 * const character = new TheCharacter(
 *   1001,                    // userId
 *   "A",                     // data
 *   5001,                    // securityId
 *   1001,                    // securityUserId
 *   6001,                    // accessId
 *   1001,                    // accessUserId
 *   7001,                    // sessionId
 *   1001,                    // sessionUserId
 *   "2025-10-30T12:00:00Z",  // entryTimestamp
 *   true                     // isNew
 * );
 * ```
 */
export class TheCharacter{
    /**
     * Unique identifier for the character.
     * @defaultValue 0
     */
    id: number = 0;

    /**
     * ID of the user who owns this character.
     */
    userId: number;

    /**
     * The actual character data (typically a single character string).
     */
    data: string;

    /**
     * Security level or security context identifier for this character.
     */
    securityId: number;

    /**
     * User ID associated with the security context.
     */
    securityUserId: number;

    /**
     * Access control identifier for this character.
     */
    accessId: number;

    /**
     * User ID associated with the access control.
     */
    accessUserId: number;

    /**
     * Session identifier tracking when this character was accessed.
     */
    sessionId: number;

    /**
     * User ID associated with the session.
     */
    sessionUserId: number;

    /**
     * Flag indicating whether this is a newly created character.
     * @defaultValue false
     */
    isNew: boolean = false;

    /**
     * Creates a new TheCharacter instance.
     *
     * @param userId - The ID of the user who owns this character
     * @param data - The character data (will be converted to string)
     * @param securityId - Security level or context identifier
     * @param securityUserId - User ID for the security context
     * @param accessId - Access control identifier
     * @param accessUserId - User ID for access control
     * @param sessionId - Session tracking identifier
     * @param sessionUserId - User ID for the session
     * @param entryTimestamp - Timestamp when the character was created/entered (currently unused in initialization)
     * @param isNew - Whether this is a newly created character
     *
     * @remarks
     * The data parameter is explicitly converted to a string using template literals.
     * The entryTimestamp parameter is accepted but not currently stored in the instance.
     *
     * @example
     * ```typescript
     * const char = new TheCharacter(
     *   1, "X", 100, 1, 200, 1, 300, 1, "2025-10-30", true
     * );
     * console.log(char.data); // "X"
     * console.log(char.isNew); // true
     * ```
     */
    constructor(userId:number, data:string, securityId: number, securityUserId: number, accessId:number, accessUserId: number,
    sessionId: number, sessionUserId: number, entryTimestamp: string, isNew: boolean){
        this.userId = userId;
        this.data = `${data}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.isNew = isNew;
    }





}