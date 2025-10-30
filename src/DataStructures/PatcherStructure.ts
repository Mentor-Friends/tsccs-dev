/**
 * @fileoverview Defines the PatcherStructure class for patching/updating compositions.
 * @module DataStructures/PatcherStructure
 */

/**
 * Represents a structure for patching or updating composition data.
 * This class encapsulates all necessary information for performing partial updates
 * on compositions, including identification, permissions, and the actual patch data.
 *
 * @class PatcherStructure
 *
 * @example
 * ```typescript
 * const patcher = new PatcherStructure();
 * patcher.compositionId = 123;
 * patcher.userId = 1;
 * patcher.sessionId = 456;
 * patcher.accessId = 4;
 * patcher.ofTheCompositionId = 789;
 * patcher.patchObject = { name: "Updated Name", description: "New description" };
 * ```
 *
 * @example
 * ```typescript
 * // Patching a user profile composition
 * const profilePatcher = new PatcherStructure();
 * profilePatcher.compositionId = 100;
 * profilePatcher.userId = 25;
 * profilePatcher.patchObject = {
 *   email: "newemail@example.com",
 *   bio: "Updated bio"
 * };
 * ```
 */
export class PatcherStructure {
    /**
     * The ID of the composition to be patched.
     * Identifies which composition will receive the update.
     *
     * @type {number}
     * @default 0
     */
    compositionId: number = 0

    /**
     * The ID of the user performing the patch operation.
     * Used for access control and audit purposes.
     *
     * @type {number}
     * @default 999
     */
    userId: number = 999

    /**
     * The session ID associated with the patch operation.
     * Links the patch to a specific user session for tracking.
     *
     * @type {number}
     * @default 999
     */
    sessionId: number = 999

    /**
     * The access level ID for the patch operation.
     * Determines what level of access is required to perform this patch.
     *
     * @type {number}
     * @default 4
     */
    accessId: number = 4

    /**
     * The ID of the parent or related composition.
     * Used when patching within a composition hierarchy or relationship.
     *
     * @type {number}
     * @default 0
     */
    ofTheCompositionId: number = 0

    /**
     * The object containing the patch data.
     * Contains key-value pairs representing the fields to update and their new values.
     * Can be any structure depending on the composition being patched.
     *
     * @type {any}
     * @default {}
     *
     * @example
     * ```typescript
     * patchObject = {
     *   name: "New Name",
     *   age: 30,
     *   tags: ["tag1", "tag2"]
     * }
     * ```
     */
    patchObject: any = {}
  }
  