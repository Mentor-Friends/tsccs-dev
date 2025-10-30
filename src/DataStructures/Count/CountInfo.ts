/**
 * @fileoverview Defines the CountInfo class for storing connection count information.
 * @module DataStructures/Count/CountInfo
 */

/**
 * Represents information about connection counts for a concept.
 * This class stores the count of connections of a specific type
 * associated with a particular concept, useful for analytics and statistics.
 *
 * @class CountInfo
 *
 * @example
 * ```typescript
 * const countInfo = new CountInfo();
 * countInfo.conceptId = 123;
 * countInfo.connectionTypeId = 456;
 * countInfo.connectionType = "likes";
 * countInfo.count = 42;
 * ```
 *
 * @example
 * ```typescript
 * // Tracking follower counts
 * const followerCount = new CountInfo();
 * followerCount.conceptId = 100; // User ID
 * followerCount.connectionType = "followers";
 * followerCount.count = 1523;
 * ```
 *
 * @example
 * ```typescript
 * // Multiple connection counts for a post
 * const likesCount = new CountInfo();
 * likesCount.conceptId = 200; // Post ID
 * likesCount.connectionType = "likes";
 * likesCount.count = 350;
 *
 * const commentsCount = new CountInfo();
 * commentsCount.conceptId = 200; // Same Post ID
 * commentsCount.connectionType = "comments";
 * commentsCount.count = 45;
 * ```
 */
export class CountInfo{
    /**
     * The ID of the concept for which connections are being counted.
     * Identifies the entity whose connections are being tracked.
     *
     * @type {number}
     * @default 0
     */
    conceptId: number = 0;

    /**
     * The ID of the connection type being counted.
     * Identifies which type of connection this count represents.
     *
     * @type {number}
     * @default 0
     */
    connectionTypeId: number = 0;

    /**
     * The string name/description of the connection type.
     * Human-readable identifier for the type of connection being counted.
     *
     * @type {string}
     * @default ""
     *
     * @example "likes", "follows", "comments", "shares"
     */
    connectionType: string = "";

    /**
     * The number of connections of this type.
     * The actual count value representing how many connections exist.
     *
     * @type {number}
     * @default 0
     */
    count: number = 0;
}