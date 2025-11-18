import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import {MakeTheTypeConceptLocal} from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { InnerActions } from "../../Constants/general.const";
import { Connection, handleServiceWorkerException, LocalSyncData, Logger, sendMessage, serviceWorker } from "../../app";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";


/**
 * Creates or retrieves an instance concept locally - the core building block of the concept-connection system.
 *
 * This is THE fundamental function for creating concepts in local storage. It implements an intelligent
 * get-or-create pattern that checks for existing concepts before creating new ones, preventing duplicates
 * while supporting both unique instances and composition concepts.
 *
 * **Core Behaviors:**
 * 1. **Composition Mode (composition=true)**: Always creates a new concept
 *    - Used for containers/objects that need unique instances
 *    - Marks concept with isComposition flag
 *    - Example: Each "Project" is unique, even with same name
 *
 * 2. **Instance Mode (composition=false)**: Get-or-create pattern
 *    - Checks if concept with same type and value exists
 *    - Returns existing if found (deduplication)
 *    - Creates new only if not found
 *    - Example: "Published" status concept reused across items
 *
 * 3. **Long Text Handling**: Values >255 characters always create new
 *    - Prevents expensive lookups on large text
 *    - Each long text gets unique concept
 *
 * **Type String Processing:**
 * - **Best Practice**: Always pass type with "the_" prefix (e.g., "the_name", "the_email")
 * - Auto-correction: If missing, "the_" is automatically added internally
 *   - "name" → "the_name" (auto-corrected)
 *   - "email" → "the_email" (auto-corrected)
 *   - "the_status" → "the_status" (already correct)
 * - Creates type concept if it doesn't exist
 * - **Recommendation**: Use explicit "the_" prefix for code clarity and consistency
 *
 * **Sync and Storage:**
 * - Adds concept to LocalSyncData queue for backend sync
 * - Stores in LocalConceptsData (IndexedDB)
 * - Tracks in actions parameter for batch operations
 * - Assigns negative ID (virtual/local)
 *
 * **Process Flow:**
 * 1. Normalizes type string (adds "the_" prefix)
 * 2. Creates/retrieves type concept via MakeTheTypeConceptLocal
 * 3. If composition=true: Creates new concept immediately
 * 4. If referent length >255: Creates new concept
 * 5. If regular instance: Checks for existing by type+value
 * 6. Returns existing or creates new
 * 7. Attaches type information
 * 8. Adds to sync queue
 *
 * @param type - The type/key of the concept. **Should follow the format "the_xyz"**.
 *              Represents what kind of data this is.
 *              Examples: "the_name", "the_email", "the_status", "the_first_name"
 *
 *              **Note**: If you pass without "the_" prefix (e.g., "name"), the code will
 *              automatically add it internally (becomes "the_name"). However, best practice
 *              is to always include the "the_" prefix for clarity and consistency.
 *
 * @param referent - The actual value/content of the concept.
 *                  The human-readable data (e.g., "Alice", "alice@example.com", "Active").
 *                  Can be empty string for composition concepts.
 *
 * @param composition - Boolean flag determining creation behavior.
 *                     - true: Always creates new concept (unique instances)
 *                     - false: Get-or-create pattern (reuses existing)
 *                     Defaults to false.
 *
 * @param userId - The ID of the user creating this concept. Used for ownership and permissions.
 *
 * @param accessId - Access control level. Typically 4 (default internal access).
 *                  Controls who can view/modify this concept.
 *
 * @param sessionInformationId - Session identifier for tracking. Defaults to 999 (system).
 *                              Used for audit logging and session management.
 *
 * @param referentId - Optional reference to another concept ID.
 *                    Used when this concept is an instance of or refers to another concept.
 *                    Defaults to 0 (no reference).
 *
 * @param actions - Action tracking object that accumulates all created concepts and connections.
 *                 Used for batch operations, rollback, and sync management.
 *                 Structure: { concepts: Concept[], connections: Connection[] }
 *
 * @returns Promise resolving to the created or retrieved Concept object with:
 *         - Negative ID if newly created locally
 *         - Attached type information (concept.type)
 *         - All standard concept properties
 *
 * @example
 * // Create a reusable status concept (get-or-create)
 * const status = await MakeTheInstanceConceptLocal(
 *   "the_status",       // type (with "the_" prefix - best practice)
 *   "Active",           // value
 *   false,              // not composition - will reuse if exists
 *   101,                // userId
 *   4,                  // accessId
 *   999,                // sessionId
 *   0                   // no referent
 * );
 * // First call creates, subsequent calls return same concept
 *
 * @example
 * // Create a composition concept (always new)
 * const project = await MakeTheInstanceConceptLocal(
 *   "the_project",      // type (with "the_" prefix)
 *   "Project Alpha",    // value
 *   true,               // composition - always creates new
 *   101,
 *   4,
 *   999,
 *   0
 * );
 * // Each project is unique, even with same name
 * console.log(project.isComposition); // true
 *
 * @example
 * // Type prefix is added automatically if missing (but prefer explicit)
 * const email = await MakeTheInstanceConceptLocal(
 *   "email",            // Missing "the_" - will become "the_email" internally
 *   "alice@example.com",
 *   false,
 *   101, 4
 * );
 * console.log(email.typeCharacter); // "the_email" (auto-prefixed)
 *
 * // RECOMMENDED: Always include "the_" prefix explicitly
 * const emailBetter = await MakeTheInstanceConceptLocal(
 *   "the_email",        // Explicit prefix - clearer and more consistent
 *   "bob@example.com",
 *   false,
 *   101, 4
 * );
 *
 * @example
 * // Long text always creates new concept
 * const longDescription = "Lorem ipsum...".repeat(100); // >255 chars
 * const concept = await MakeTheInstanceConceptLocal(
 *   "the_description",  // type with "the_" prefix
 *   longDescription,
 *   false,              // Even with false, creates new due to length
 *   101, 4
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * await MakeTheInstanceConceptLocal("the_name", "Alice", false, 101, 4, 999, 0, actions);
 * await MakeTheInstanceConceptLocal("the_email", "alice@ex.com", false, 101, 4, 999, 0, actions);
 * console.log(actions.concepts.length); // 2 (plus any type concepts created)
 *
 * @example
 * // Deduplication in action
 * const status1 = await MakeTheInstanceConceptLocal("the_status", "Published", false, 101, 4);
 * const status2 = await MakeTheInstanceConceptLocal("the_status", "Published", false, 101, 4);
 * console.log(status1.id === status2.id); // true - same concept reused
 *
 * @throws Logs errors and re-throws for handling by caller.
 *        Common issues: Type concept creation failures, IndexedDB errors.
 *
 * @see {@link CreateTheConceptLocal} for the underlying creation function
 * @see {@link MakeTheTypeConceptLocal} for type concept creation/retrieval
 * @see {@link LocalConceptsData.GetConceptByCharacterAndTypeLocal} for existence check
 * @see {@link LocalSyncData.AddConcept} for sync queue management
 */
export async function MakeTheInstanceConceptLocal(type:string, referent:string, composition:boolean=false, userId: number,
    accessId:number, sessionInformationId: number=999, referentId: number = 0, actions: InnerActions = {concepts: [], connections: []}){
        if(composition == false) userId = 999;
        const logData : any = Logger.logfunction("MakeTheInstanceConceptLocal", arguments) || {};
        if (serviceWorker) {
            logData.serviceWorker = true;
            try {
                const res: any = await sendMessage('MakeTheInstanceConceptLocal', {type, referent, composition, userId, accessId, sessionInformationId, referentId, actions})
                if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
                if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
                Logger.logUpdate(logData);
                return res.data
            } catch (error) {
                console.error('MakeTheInstanceConceptLocal error sw: ', error);
                UpdatePackageLogWithError(logData, 'MakeTheInstanceConceptLocal', error);
                handleServiceWorkerException(error);
            }
        }

        try{
            let sessionInformationId: number = 999;
            let categoryId: number = 4;
            let sessionInformationUserId: number = userId;
            // change this
            let accessId: number = 4;
    
            let stringToCheck: string = "";
    
            let  stringLength:number = referent.length;
            let typeConcept;
            let concept: Concept;
            let startsWithThe = type.startsWith("the_");
    
            if(startsWithThe){
                stringToCheck = type;
            }
            else{
                stringToCheck = "the_" + type;
            }
            if(composition){
                let   typeConceptString = await MakeTheTypeConceptLocal(type, sessionInformationId, userId, userId, actions );
               typeConcept = typeConceptString as Concept;
                
               let conceptString = await CreateTheConceptLocal(referent,type,userId, categoryId, typeConcept.id,accessId,true, referentId, actions );
    
                concept = conceptString as Concept;
            }
            else if(stringLength > 255){
    
                let typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId, actions);
                typeConcept = typeConceptString  as Concept;
                let conceptString = await CreateTheConceptLocal(referent,stringToCheck,userId, categoryId, typeConcept.id,accessId, undefined, undefined, actions );
    
                concept = conceptString as Concept;
    
    
    
            }
            else{
                let typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId, actions);
                typeConcept = typeConceptString  as Concept;
                let conceptByCharTypeString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString as Concept;
                concept = conceptTypeCharacter;
                if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                    let conceptString = await CreateTheConceptLocal(referent, stringToCheck, userId, categoryId, typeConcept.id,accessId, undefined, undefined, actions );
                    concept = conceptString as Concept;
                }
            }
    
            concept.type = typeConcept;
            LocalSyncData.AddConcept(concept);
             
            actions.concepts.push(concept)
            Logger.logUpdate(logData);
            return concept;
        }
        catch(error){
            // Logger.logError(startTime, userId, "create", "Unknown", "Unknown", 500, undefined, "MakeTheInstanceConceptLocal",
            //     [type, referent, composition, userId, accessId, sessionInformationId, referentId],
            //     "UnknownUserAgent",
            //     []
            // );
            UpdatePackageLogWithError(logData, 'MakeTheInstanceConceptLocal', error);
            throw error;
        }


}