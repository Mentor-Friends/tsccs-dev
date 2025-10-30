/**
 * @fileoverview Referent information data structure for the CCS-JS system.
 * @module DataStructures/ReferentInfo
 */

/**
 * Represents referent information that links concept data with character data.
 *
 * @remarks
 * ReferentInfo serves as a bridge between concept entities and character entities in the
 * system. It maintains both the data IDs and the associated user IDs for each entity,
 * enabling cross-referencing and ownership tracking across different data types. This is
 * particularly useful for establishing semantic relationships between abstract concepts
 * and their concrete character representations.
 *
 * @example
 * ```typescript
 * const referentInfo = new ReferentInfo(
 *   1001,  // conceptDataId
 *   2001,  // conceptDataUserId
 *   3001,  // characterDataId
 *   2001   // characterDataUserId
 * );
 *
 * // Use for linking concept to character
 * console.log(`Concept ${referentInfo.conceptDataId} ` +
 *             `maps to Character ${referentInfo.characterDataId}`);
 * ```
 */
export class ReferentInfo{
    /**
     * Unique identifier for the concept data.
     */
    conceptDataId: number;

    /**
     * User ID associated with the concept data.
     *
     * @remarks
     * Tracks ownership of the concept entity.
     */
    conceptDataUserId: number;

    /**
     * Unique identifier for the character data.
     */
    characterDataId: number;

    /**
     * User ID associated with the character data.
     *
     * @remarks
     * Tracks ownership of the character entity. May differ from conceptDataUserId
     * when characters are shared across users.
     */
    characterDataUserId: number;

    /**
     * Creates a new ReferentInfo instance.
     *
     * @param conceptDataId - The ID of the concept data
     * @param conceptDataUserId - The user ID who owns the concept data
     * @param characterDataId - The ID of the character data
     * @param characterDataUserId - The user ID who owns the character data
     *
     * @remarks
     * Both concept and character entities maintain their own user ownership,
     * allowing for flexible sharing and access control scenarios.
     *
     * @example
     * ```typescript
     * // Create a referent linking concept 100 to character 200
     * const ref = new ReferentInfo(100, 1, 200, 1);
     *
     * // Verify the mapping
     * console.log(`Concept: ${ref.conceptDataId} -> Character: ${ref.characterDataId}`);
     * ```
     */
    constructor(conceptDataId:number, conceptDataUserId:number, characterDataId:number, characterDataUserId:number){
        this.conceptDataId = conceptDataId;
        this.conceptDataUserId = conceptDataUserId;
        this.characterDataId = characterDataId;
        this.characterDataUserId = characterDataUserId;
    }
}