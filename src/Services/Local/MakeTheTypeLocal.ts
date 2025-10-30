/**
 * Local Type Concept Creation Module
 *
 * This module handles the creation of type concepts in the local storage layer.
 * Type concepts define the schema and categorization of other concepts in the system.
 * It supports hierarchical type creation through recursive processing of composite type names.
 *
 * @module MakeTheTypeLocal
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";
import { SplitStrings } from "../SplitStrings";
import MakeTheConceptLocal from "./MakeTheConceptLocal";

/**
 * Creates or retrieves a type concept with support for hierarchical type structures.
 *
 * This function ensures that a type concept exists in the local storage. If the type
 * doesn't exist, it creates it, handling both simple types and composite types.
 * Composite types (e.g., "the_category_type") are split and processed recursively
 * to establish proper type hierarchies.
 *
 * The function implements get-or-create logic to prevent duplicate type concepts
 * and maintains the type system's integrity through proper categorization.
 *
 * @param typeString - The name of the type to create or retrieve (e.g., "the_user", "the_product")
 * @param sessionId - Session information ID for tracking
 * @param sessionUserId - User ID associated with the session
 * @param userId - The ID of the user creating/owning the type
 *
 * @returns A promise that resolves to the type concept (existing or newly created)
 *
 * @remarks
 * - First checks if type concept already exists by character value
 * - If not found or invalid (id === 0), proceeds with creation logic
 * - For simple types: Creates with typeId 51 (base "the" type) and category 4
 * - For composite types: Splits on underscore and recursively creates category and type
 * - Example: "the_category_type" splits into "the_category" (category) and "type" (type)
 * - Uses accessId of 4 (default access level) for new types
 * - The base type "the" (typeId 51) is the root of the type hierarchy
 *
 * @example
 * ```typescript
 * // Create a simple type
 * const userType = await MakeTheTypeConceptLocal(
 *   "the_user",
 *   999,   // sessionId
 *   123,   // sessionUserId
 *   123    // userId
 * );
 * console.log(userType.characterValue); // "the_user"
 * console.log(userType.typeId); // 51 (the base "the" type)
 *
 * // Create a composite type (creates category and type recursively)
 * const productType = await MakeTheTypeConceptLocal(
 *   "the_ecommerce_product",
 *   999,
 *   123,
 *   123
 * );
 * // This creates:
 * // 1. "the_ecommerce" as category
 * // 2. "product" as type
 * // 3. "the_ecommerce_product" as final type
 *
 * // Subsequent calls return existing type (no duplicate)
 * const sameType = await MakeTheTypeConceptLocal("the_user", 999, 123, 123);
 * console.log(sameType.id === userType.id); // true
 * ```
 *
 * @see {@link GetConceptByCharacterLocal} - Checks if type already exists
 * @see {@link MakeTheConceptLocal} - Creates concepts with uniqueness check
 * @see {@link CreateTheConceptLocal} - Low-level concept creation
 * @see {@link SplitStrings} - Splits composite type names
 * @see {@link MakeTheInstanceConceptLocal} - Uses this to create types for instances
 */
export default async  function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number,
    )
{
    var accessId: number = 4;

    var existingConcept = await GetConceptByCharacterLocal(typeString);

    if(existingConcept){
        if(existingConcept.id == 0 || existingConcept.userId == 0){
            var splittedStringArray = SplitStrings(typeString);
            if(splittedStringArray[0] == typeString){
                var concept = await MakeTheConceptLocal(typeString,"the", userId,  4, 51);
                existingConcept = concept as LConcept;

            }   
            else{
                var categoryId:number = 1;
                var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );

                if(typeConcept){
                    
                    var concept = await CreateTheConceptLocal(typeString,splittedStringArray[1],  userId, categoryConcept.id, typeConcept.id, accessId );
                    existingConcept = concept as LConcept;
                }


            }
        }

    }
    return existingConcept;


}