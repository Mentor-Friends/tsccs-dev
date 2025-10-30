/**
 * Composition Creation Service
 *
 * This module provides functionality for converting JSON objects into interconnected
 * concept structures (compositions) in the Concept Connection System. It recursively
 * traverses JSON structures and creates corresponding concepts and connections,
 * effectively serializing complex data structures into the graph database.
 *
 * This enables storing and retrieving structured data like user profiles, documents,
 * or any hierarchical data within the CCS framework.
 *
 * @module CreateTheComposition
 */

import { Concept } from "../DataStructures/Concept";
import { SyncData } from "../DataStructures/SyncData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import {createTheConnection} from "./CreateTheConnection";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

/**
 * Recursively converts a JSON object into a composition of interconnected concepts.
 *
 * This function is the core serialization mechanism for storing structured data in CCS.
 * It traverses a JSON object recursively, creating concepts for each key-value pair and
 * establishing connections between them to preserve the hierarchical structure.
 *
 * The function handles both object structures (which become nested compositions) and
 * primitive values (which become leaf concepts with character values). The resulting
 * structure can be later reconstructed using GetComposition functions.
 *
 * The recursion works as follows:
 * - Object/nested structures: Create a concept for the key, recurse into the value
 * - Primitive values (string/number): Create a concept with the key as type and value as characterValue
 * - Root level: If no parent concept is provided, creates a new root concept
 *
 * @param json - The JSON object to convert into a composition
 * @param ofTheConceptId - The ID of the parent concept to connect to (null for root level)
 * @param ofTheConceptUserId - The user ID of the parent concept (null for root level)
 * @param mainKey - The ID of the root concept, used as connection type throughout the composition
 * @param userId - The user ID to assign to all created concepts (default: 999)
 * @param accessId - The access level for created concepts (default: 4)
 * @param sessionInformationId - The session ID for tracking this operation (default: 999)
 *
 * @returns A promise that resolves to the main (root) Concept of the created composition
 *
 * @example
 * ```typescript
 * // Create a user profile composition
 * const userProfile = {
 *   name: "Alice Johnson",
 *   age: 30,
 *   address: {
 *     street: "123 Main St",
 *     city: "Springfield",
 *     country: "USA"
 *   },
 *   hobbies: ["reading", "hiking", "photography"]
 * };
 *
 * const rootConcept = await CreateTheComposition(
 *   userProfile,
 *   null,  // No parent, this is root
 *   null,
 *   null,
 *   999,   // User ID
 *   4,     // Access level
 *   999    // Session ID
 * );
 *
 * console.log("Profile composition created:", rootConcept.id);
 * // Can later retrieve with: GetComposition(rootConcept.id)
 * ```
 *
 * @example
 * ```typescript
 * // Add a nested composition to an existing concept
 * const parentConcept = await GetTheConcept(456);
 * const metadata = {
 *   created: "2024-01-15",
 *   modified: "2024-01-20",
 *   version: 2
 * };
 *
 * const metadataConcept = await CreateTheComposition(
 *   metadata,
 *   parentConcept.id,
 *   parentConcept.userId,
 *   parentConcept.id,  // Use parent as mainKey
 *   parentConcept.userId
 * );
 * ```
 *
 * @remarks
 * - Creates concepts for each JSON key, using the key as the concept's type
 * - Primitive values (strings, numbers) are stored as characterValue in leaf concepts
 * - Nested objects and arrays are recursively converted into sub-compositions
 * - All concepts are connected using the mainKey (root concept ID) as the connection type
 * - Uses temporary connections (via createTheConnection) with random IDs
 * - Default values: userId=999, accessId=4, sessionInformationId=999
 * - The function modifies SyncData by adding all created concepts and connections
 * - Complex objects become type concepts with isComposition=true
 * - Primitive values become instance concepts with isComposition=false
 *
 * @see {@link GetComposition} for reconstructing compositions back to JSON
 * @see {@link MakeTheInstanceConcept} for individual concept creation
 * @see {@link createTheConnection} for connection creation logic
 */
export default  async function CreateTheComposition(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null)
{
    var localUserId:number = userId ?? 999;
    var localAccessId: number = accessId ?? 4;
    var localSessionId: number = sessionInformationId ?? 999;
    var MainKeyLocal: number = mainKey ?? 0;
    var MainConcept = CreateDefaultConcept();
    for (const key in json) {
        if((typeof json[key] != 'string' && typeof json[key] != 'number') ){
            if(ofTheConceptId == null && ofTheConceptUserId == null){

                var localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId);
                var concept = conceptString as Concept;
                MainConcept = concept;
                localMainKey = concept.id;
                MainKeyLocal = concept.id;

                await CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
    
            }
            else{
                var ofThe:number = ofTheConceptId ?? 999;
                var ofTheUser:number = ofTheConceptUserId ?? 999;
                var localMainKey = MainKeyLocal;
                var conceptString = await MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId  );
                var concept = conceptString as Concept;
                MainConcept = concept;
                await createTheConnection(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                await CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
            }
        }
        else{
            var ofThe:number = ofTheConceptId ?? 999;
            var ofTheUser:number = ofTheConceptUserId ?? 10267;
            var localMainKey = MainKeyLocal;
            var conceptString = await MakeTheInstanceConcept(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
            var concept = conceptString as Concept;
            await createTheConnection(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);

        }

      }
      return MainConcept;
}

