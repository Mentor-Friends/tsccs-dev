/**
 * @fileoverview Returner data structure for tracking referent relationships in the CCS-JS system.
 * @module DataStructures/Returner
 */

/**
 * Represents a returner entity that establishes a relationship between a user and a referent.
 *
 * @remarks
 * The Returner class is a lightweight data structure that links entities through referent
 * relationships. It tracks which user owns a particular referent reference and whether
 * the relationship is newly created. This is commonly used in bidirectional relationship
 * tracking within the concept composition system.
 *
 * @example
 * ```typescript
 * const returner = new Returner(
 *   1001,   // id
 *   2001,   // userId
 *   3001,   // referentId
 *   true    // isNew
 * );
 * console.log(returner.referentId); // 3001
 * ```
 */
export class Returner{
    /**
     * Unique identifier for this returner entity.
     */
    id: number;

    /**
     * ID of the user who owns this returner relationship.
     */
    userId: number;

    /**
     * ID of the referent being referenced by this returner.
     *
     * @remarks
     * The referentId typically points to another entity in the system,
     * establishing a directional relationship.
     */
    referentId: number;

    /**
     * Flag indicating whether this returner relationship is newly created.
     */
    isNew: boolean;

    /**
     * Creates a new Returner instance.
     *
     * @param id - Unique identifier for this returner
     * @param userId - ID of the user who owns this relationship
     * @param referentId - ID of the entity being referenced
     * @param isNew - Whether this is a newly created relationship
     *
     * @example
     * ```typescript
     * // Create a returner linking user 100 to referent 500
     * const returner = new Returner(1, 100, 500, false);
     *
     * // Check the relationship
     * if (!returner.isNew) {
     *   console.log(`Existing relationship to referent ${returner.referentId}`);
     * }
     * ```
     */
    constructor(id:number, userId:number, referentId: number, isNew:boolean){
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}