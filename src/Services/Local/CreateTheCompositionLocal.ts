/**
 * Local Composition Creation Module
 *
 * This module provides functionality to recursively create complex, nested concept compositions
 * from JSON objects in the local storage layer. It transforms JSON structures into interconnected
 * concepts and connections, preserving the hierarchical relationships.
 *
 * @module CreateTheCompositionLocal
 */

import { LConcept } from "../../DataStructures/Local/LConcept";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept";
import {CreateTheConnectionLocal} from "./CreateTheConnectionLocal";
import {MakeTheInstanceConceptLocal} from "./MakeTheInstanceConceptLocal";

/**
 * Recursively creates a composition of concepts and connections from a JSON object.
 *
 * This function traverses a JSON object tree and converts each key-value pair into concepts
 * with appropriate connections. It handles nested objects by recursively processing them,
 * creating a graph structure that mirrors the original JSON hierarchy.
 *
 * The function distinguishes between:
 * - Primitive values (string/number): Creates leaf concepts with the value as characterValue
 * - Complex values (object/array): Creates composition concepts and recursively processes children
 *
 * @param json - The JSON object to convert into a concept composition
 * @param ofTheConceptId - The ID of the parent concept (null for root level)
 * @param ofTheConceptUserId - The user ID of the parent concept (null for root level)
 * @param mainKey - The ID of the main/root composition concept (null for root level)
 * @param userId - The user creating the composition (defaults to 999)
 * @param accessId - Access control ID for created concepts (defaults to 999)
 * @param sessionInformationId - Session ID for tracking (defaults to 4)
 *
 * @returns A promise that resolves to the main/root LConcept of the created composition
 *
 * @remarks
 * - First invocation (when ofTheConceptId is null) creates the root concept
 * - Subsequent recursive calls create child concepts connected to their parents
 * - Uses `MakeTheInstanceConceptLocal` to create individual concepts
 * - Uses `CreateTheConnectionLocal` to establish parent-child relationships
 * - Maintains the structure through the mainKey parameter across recursive calls
 * - Handles both object properties and array elements
 *
 * @example
 * ```typescript
 * // Create a composition from a nested JSON structure
 * const userData = {
 *   name: "John Doe",
 *   age: 30,
 *   address: {
 *     street: "123 Main St",
 *     city: "Boston"
 *   }
 * };
 *
 * const mainConcept = await CreateTheCompositionLocal(
 *   userData,
 *   null,  // ofTheConceptId
 *   null,  // ofTheConceptUserId
 *   null,  // mainKey
 *   123,   // userId
 *   4,     // accessId
 *   999    // sessionInformationId
 * );
 *
 * // Result: Creates concepts for "name", "age", "address", "street", "city"
 * // with appropriate connections forming a tree structure
 * console.log(mainConcept.id); // Root concept ID
 * ```
 *
 * @see {@link MakeTheInstanceConceptLocal} - Creates individual concepts
 * @see {@link CreateTheConnectionLocal} - Creates connections between concepts
 * @see {@link CreateDefaultLConcept} - Creates default empty concept
 * @see {@link GetCompositionLocal} - Related function for retrieving compositions
 */
export async function CreateTheCompositionLocal(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null)
{
    var localUserId:number = userId ?? 999;
    var localAccessId: number = accessId ?? 999;
    var localSessionId: number = sessionInformationId ?? 4;
    var MainKeyLocal: number = mainKey ?? 0;
    var MainConcept = CreateDefaultLConcept();
    for (const key in json) {
        if(typeof json[key] != 'string' && typeof json[key] != 'number' ){
            if(ofTheConceptId == null && ofTheConceptUserId == null){

                var localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId);
                var concept = conceptString as LConcept;
                MainConcept = concept;
                localMainKey = concept.id;
                MainKeyLocal = concept.id;

                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
    
            }
            else{
                var ofThe:number = ofTheConceptId ?? 999;
                var ofTheUser:number = ofTheConceptUserId ?? 999;
                var localMainKey = MainKeyLocal;
                var conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId  );
                var concept = conceptString as LConcept;
                await CreateTheConnectionLocal(ofThe, concept.id, localMainKey);
                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
            }
        }
        else{
            var ofThe:number = ofTheConceptId ?? 999;
            var ofTheUser:number = ofTheConceptUserId ?? 999;
            var localMainKey = MainKeyLocal;
            var conceptString = await MakeTheInstanceConceptLocal(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
            var concept = conceptString as LConcept;
            await CreateTheConnectionLocal(ofThe, concept.id, localMainKey);

        }

      }
      return MainConcept;
}

