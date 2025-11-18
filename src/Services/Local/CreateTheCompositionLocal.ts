import { handleServiceWorkerException, InnerActions, Logger, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept";
import {CreateTheConnectionLocal} from "./CreateTheConnectionLocal";
import {MakeTheInstanceConceptLocal} from "./MakeTheInstanceConceptLocal";

/**
 * Converts a JSON object into a local composition structure with concepts and connections.
 *
 * This powerful function recursively transforms any JSON object into the concept-connection
 * system, creating local concepts for each key-value pair and establishing connections
 * between them to preserve the hierarchical structure.
 *
 * **JSON to Composition Conversion:**
 * - JSON keys become type concepts (e.g., "name", "email")
 * - JSON string/number values become instance concepts
 * - Nested objects/arrays create sub-compositions
 * - Connections preserve parent-child relationships
 * - All data stored locally (IndexedDB) for offline use
 *
 * **Recursive Process:**
 * 1. Iterates through each key in JSON object
 * 2. For nested objects/arrays: Creates composition concept + recurse
 * 3. For primitive values: Creates instance concept
 * 4. Creates connections from parent to child concepts
 * 5. Returns the main/root concept
 *
 * **Example Transformation:**
 * ```javascript
 * Input JSON:
 * {
 *   name: "Alice",
 *   email: "alice@example.com",
 *   address: {
 *     city: "NYC",
 *     zip: "10001"
 *   }
 * }
 *
 * Creates:
 * - Concept: "name" (type) → "Alice" (instance)
 * - Concept: "email" (type) → "alice@example.com" (instance)
 * - Concept: "address" (composition concept)
 *   - Concept: "city" → "NYC"
 *   - Concept: "zip" → "10001"
 * - Connections linking all concepts in hierarchy
 * ```
 *
 * @param json - The JSON object/array to convert to composition structure.
 *              Can be any depth of nesting.
 * @param ofTheConceptId - Parent concept ID if this is a sub-composition.
 *                        Null for root composition. Used for connecting to parent.
 * @param ofTheConceptUserId - User ID of the parent concept.
 *                            Used for ownership tracking in nested structures.
 * @param mainKey - The main composition ID (root concept ID).
 *               Used as typeId for internal connections. Null for root.
 * @param userId - User ID of the creator. Defaults to 999 (system).
 * @param accessId - Access control level. Defaults to 999 (system).
 * @param sessionInformationId - Session ID. Defaults to 999 (system).
 * @param automaticSync - Reserved for future automatic sync feature.
 *                       Currently not fully implemented.
 * @param actions - Action tracking object that accumulates all created concepts
 *                 and connections for batch operations. Defaults to empty arrays.
 *
 * @returns Promise resolving to the main/root Concept of the composition
 *
 * @example
 * // Simple flat object
 * const json = { name: "Alice", age: 30 };
 * const mainConcept = await CreateTheCompositionLocal(
 *   json,
 *   null,  // No parent
 *   null,
 *   null,
 *   101,   // userId
 *   2,     // accessId
 *   999
 * );
 * console.log(mainConcept.id); // Root concept ID
 *
 * @example
 * // Nested object with action tracking
 * const actions = { concepts: [], connections: [] };
 * const userData = {
 *   profile: {
 *     firstName: "Alice",
 *     lastName: "Smith"
 *   },
 *   settings: {
 *     theme: "dark"
 *   }
 * };
 * const root = await CreateTheCompositionLocal(
 *   userData,
 *   null, null, null,
 *   101, 2, 999,
 *   false,
 *   actions
 * );
 * console.log(actions.concepts.length); // Total concepts created
 * console.log(actions.connections.length); // Total connections created
 *
 * @throws Logs errors but does not throw. Returns created concepts even on partial failure.
 *
 * @see {@link MakeTheInstanceConceptLocal} for individual concept creation
 * @see {@link CreateTheConnectionLocal} for connection creation
 * @see {@link GetCompositionLocal} for retrieving created compositions
 */
export async function CreateTheCompositionLocal(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null, automaticSync: boolean  = false, actions: InnerActions = {concepts: [], connections: []})
{
    const logData : any = Logger.logfunction("CreateTheCompositionLocal") || {};
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('CreateTheCompositionLocal', {json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId, actions })
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            Logger.logUpdate(logData);  
            return res.data
        } catch (error) {
            console.error('CreateTheCompositionLocal error sw: ', error)
            UpdatePackageLogWithError(logData, 'CreateTheCompositionLocal', error);
            handleServiceWorkerException(error)
        }
    }
      
    let localUserId:number = userId ?? 999;
    let localAccessId: number = accessId ?? 999;
    let localSessionId: number = sessionInformationId ?? 999;
    let MainKeyLocal: number = mainKey ?? 0;
    let MainConcept = CreateDefaultLConcept();
    for (const key in json) {
        if(typeof json[key] != 'string' && typeof json[key] != 'number' ){
            if(ofTheConceptId == null && ofTheConceptUserId == null){

                let localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId, undefined, actions);
                let concept = conceptString as Concept;
                MainConcept = concept;
                localMainKey = concept.id;
                MainKeyLocal = concept.id;
                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, undefined, actions );
    
            }
            else{
                let ofThe:number = ofTheConceptId ?? 999;
                let ofTheUser:number = ofTheConceptUserId ?? 999;
                let localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId, undefined, actions );
                let concept = conceptString as Concept;
                await CreateTheConnectionLocal(ofThe, concept.id, localMainKey, undefined, undefined, undefined, actions);
                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, undefined, actions );
            }
        }
        else{
            let ofThe:number = ofTheConceptId ?? 999;
            let ofTheUser:number = ofTheConceptUserId ?? 999;
            let localMainKey = MainKeyLocal;
            let conceptString = await MakeTheInstanceConceptLocal(key, json[key].toString(), false, localUserId, localAccessId, localSessionId, undefined, actions);
            let concept = conceptString as Concept;
            await CreateTheConnectionLocal(ofThe, concept.id, localMainKey, undefined, undefined, undefined, actions);

        }

      }
    // Add Log
    // Logger.logInfo(startTime, userId || "unknown", "create", "unknown", undefined, 200, MainConcept, "CreateTheCompositionLocal", 
    //     ['json', 'ofTheConceptId', 'ofTheConceptUserId', 'mainKey', 'userId', 'accessId', 'sessionInformationId', 'automaticSync' ], 
    //     "unknown", 
    //     undefined 
    // )
      
    Logger.logUpdate(logData);
      return MainConcept;
}

