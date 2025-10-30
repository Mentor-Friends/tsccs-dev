/**
 * @fileoverview Text data structure for the CCS-JS system.
 * @module DataStructures/TheTexts
 */

/**
 * Represents a text entity in the system with comprehensive metadata and security tracking.
 *
 * @remarks
 * TheTexts class encapsulates text data along with user ownership, security credentials,
 * access control, session tracking, and timestamp information. This class is similar to
 * TheCharacter but designed for longer text strings and includes an entry timestamp for
 * temporal tracking. It provides complete audit trail capabilities through its multiple
 * user context references.
 *
 * @example
 * ```typescript
 * const text = new TheTexts(
 *   1001,                    // userId
 *   "Hello World",           // data
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
export class TheTexts{
    /**
     * Unique identifier for the text entity.
     * @defaultValue 0
     */
    id: number = 0;

    /**
     * ID of the user who owns this text.
     */
    userId: number;

    /**
     * The actual text data content.
     */
    data: string;

    /**
     * Security level or security context identifier for this text.
     */
    securityId: number;

    /**
     * User ID associated with the security context.
     */
    securityUserId: number;

    /**
     * Access control identifier for this text.
     */
    accessId: number;

    /**
     * User ID associated with the access control.
     */
    accessUserId: number;

    /**
     * Session identifier tracking when this text was accessed.
     */
    sessionId: number;

    /**
     * User ID associated with the session.
     */
    sessionUserId: number;

    /**
     * ISO 8601 timestamp indicating when this text entry was created or modified.
     */
    entryTimestamp: string;

    /**
     * Flag indicating whether this is a newly created text entry.
     */
    isNew: boolean;

    /**
     * Creates a new TheTexts instance.
     *
     * @param userId - The ID of the user who owns this text
     * @param data - The text content
     * @param securityId - Security level or context identifier
     * @param securityUserId - User ID for the security context
     * @param accessId - Access control identifier
     * @param accessUserId - User ID for access control
     * @param sessionId - Session tracking identifier
     * @param sessionUserId - User ID for the session
     * @param entryTimestamp - ISO 8601 timestamp when the text was created/entered
     * @param isNew - Whether this is a newly created text entry
     *
     * @remarks
     * Unlike TheCharacter, this constructor stores the entryTimestamp property,
     * making it suitable for temporal tracking and audit trails.
     *
     * @example
     * ```typescript
     * const text = new TheTexts(
     *   1, "Sample text", 100, 1, 200, 1, 300, 1,
     *   new Date().toISOString(), true
     * );
     * console.log(text.data); // "Sample text"
     * console.log(text.entryTimestamp); // "2025-10-30T12:00:00.000Z"
     * ```
     */
    constructor(userId:number, data:string, securityId: number, securityUserId: number, accessId:number, accessUserId: number,
    sessionId: number, sessionUserId: number, entryTimestamp: string, isNew: boolean){
        this.userId = userId;
        this.data = data;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.entryTimestamp = entryTimestamp;
        this.isNew = isNew;
    }





}