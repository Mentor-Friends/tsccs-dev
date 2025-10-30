/**
 * @module MakeTheTimestamp
 * @description Creates timestamp concepts in the Concept Connection System (CCS).
 * This module provides a specialized function for creating concepts that represent
 * timestamps or time-based data. It ensures proper type prefixing and creates
 * concepts with standardized metadata for temporal tracking within the system.
 */

import { Concept } from "../DataStructures/Concept";
import { MakeTheTypeConceptApi } from "../app";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import MakeTheConcept from "./MakeTheConcept";
import {MakeTheTypeConcept} from "./MakeTheTypeConcept";

/**
 * Creates a timestamp concept with the specified type and referent.
 *
 * This function creates concepts specifically designed for representing timestamps
 * and temporal data in the CCS system. It follows a simplified creation flow compared
 * to MakeTheInstanceConcept, focusing on straightforward type-referent associations.
 *
 * The function automatically ensures the type string is prefixed with "the_" if not
 * already present, then creates the type concept and associates it with a new concept
 * containing the timestamp referent value.
 *
 * @param type - The type identifier for the timestamp concept (e.g., "created_at", "updated_at").
 *               Will be automatically prefixed with "the_" if not present.
 * @param referent - The timestamp value or temporal data (e.g., ISO date string, Unix timestamp)
 * @param userId - The ID of the user creating this timestamp concept
 * @param accessId - The access control ID determining visibility
 * @param sessionInformationId - The session ID for tracking this operation (default: 999)
 *
 * @returns Promise resolving to the created timestamp Concept
 *
 * @remarks
 * - Category ID is fixed at 4 for timestamp concepts
 * - Referent ID is set to 0 (no referent concept)
 * - Security ID is fixed at 999
 * - Session information ID is overridden to 999 regardless of parameter
 * - Access ID is overridden to 4 regardless of parameter
 * - All user IDs are derived from the userId parameter
 * - Type concept is created before the timestamp concept
 *
 * @example
 * ```typescript
 * // Create a timestamp for creation time
 * const createdAt = await MakeTheTimestamp(
 *   "created_at",
 *   new Date().toISOString(),
 *   1,
 *   100
 * );
 *
 * // Create a timestamp with explicit session
 * const updatedAt = await MakeTheTimestamp(
 *   "the_updated_at",
 *   Date.now().toString(),
 *   1,
 *   100,
 *   999
 * );
 *
 * // Create a custom temporal concept
 * const expiryTime = await MakeTheTimestamp(
 *   "expires_at",
 *   "2025-12-31T23:59:59Z",
 *   1,
 *   100
 * );
 * ```
 *
 * @see {@link MakeTheTypeConceptApi} - Creates or retrieves the type concept
 * @see {@link MakeTheConcept} - Creates the actual concept entity
 * @see {@link CreateDefaultConcept} - Creates a default concept structure
 */
export async function MakeTheTimestamp(type:string, referent:string, userId: number, 
    accessId:number, sessionInformationId: number=999){

        var sessionInformationId: number = 999;
        var categoryId: number = 4;
        var categoryUserId: number = userId; 
        var referentId: number = 0;
        var referentUserId: number = 999;
        var securityId: number = 999;
        var securityUserId: number = userId;
        var sessionInformationUserId: number = userId;
        // change this
        var accessId: number = 4;
        var accessUserId: number = userId;
        var stringToCheck: string = "";
        var startsWithThe = type.startsWith("the_");
        var typeConcept = CreateDefaultConcept();
        var concept: Concept;
        if(startsWithThe){
            stringToCheck = type;
        }
        else{
            stringToCheck = "the_" + type;
        }
    var typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
    typeConcept = typeConceptString  as Concept;
    var conceptString = await MakeTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
        referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

    concept = conceptString as Concept;
    return concept;
}