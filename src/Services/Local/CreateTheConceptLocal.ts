import { handleServiceWorkerException, InnerActions, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { Logger } from "../../Middleware/logger.service";

/**
 * Creates a concept in local storage (IndexedDB) without syncing to the backend.
 *
 * This is the primary function for creating offline-first concepts. The concept is stored
 * locally in IndexedDB and memory, but NOT immediately sent to the backend. Sync happens
 * later via the LocalSyncData class.
 *
 * **Virtual ID System:**
 * - Generates a negative ID (e.g., -12345) to indicate local/virtual status
 * - id and ghostId are initially equal and both negative
 * - After backend sync: id becomes positive (real backend ID)
 * - ghostId remains negative (preserves original local ID)
 * - Mapping is stored in LocalGhostIdTree for future lookups
 *
 * **Sync Process:**
 * 1. Create locally with negative ID
 * 2. Use LocalSyncData to sync to backend
 * 3. Backend returns positive ID
 * 4. Update local concept with positive ID
 * 5. Preserve negative ID as ghostId
 * 6. Store mapping in LocalGhostIdTree
 *
 * **Special Case:**
 * If referent is "the", returns a special concept with id=1 (system concept).
 *
 * @param referent - The character value (text/name) of the concept.
 *                  This is the human-readable content (e.g., "Draft Note", "Local Task")
 * @param typecharacter - The type name as a string (e.g., "the_note", "the_person").
 *                       Used for display and classification.
 * @param userId - The ID of the user creating this concept. Used for ownership.
 * @param categoryId - The category classification ID for further classification within type.
 * @param typeId - The type classification ID. Must correspond to typecharacter.
 * @param accessId - Access control level (e.g., 1=Public, 2=Private).
 *                  Usually matches the user's access level.
 * @param isComposition - Set to true if this concept represents a composition root.
 *                       Defaults to false.
 * @param referentId - Optional reference to another concept ID. Used for instance relationships.
 *                    Defaults to 0 (no reference).
 * @param actions - Action tracking object that accumulates created concepts and connections.
 *                 Used for batch operations and rollback. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Concept object with negative ID
 *
 * @example
 * // Create a local draft note
 * const draftNote = await CreateTheConceptLocal(
 *   "Meeting Notes - Draft",  // referent
 *   "the_note",               // typecharacter
 *   101,                      // userId
 *   1,                        // categoryId
 *   3,                        // typeId
 *   2                         // accessId (Private)
 * );
 * console.log(draftNote.id); // -12345 (negative = local)
 * console.log(draftNote.ghostId); // -12345 (same initially)
 *
 * @example
 * // Create with composition flag
 * const project = await CreateTheConceptLocal(
 *   "Local Project",
 *   "the_project",
 *   101,
 *   1,
 *   5,
 *   2,
 *   true  // isComposition = true
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * const concept1 = await CreateTheConceptLocal("Item 1", "the_item", 101, 1, 4, 2, false, 0, actions);
 * const concept2 = await CreateTheConceptLocal("Item 2", "the_item", 101, 1, 4, 2, false, 0, actions);
 * console.log(actions.concepts.length); // 2
 * // All created concepts tracked in actions array
 *
 * @throws Logs errors and re-throws for handling by caller
 *
 * @see {@link GetTheConceptLocal} for retrieving local concepts
 * @see {@link LocalSyncData} for syncing local concepts to backend
 * @see {@link CreateTheConcept} for creating server-synced concepts directly
 */
export default async function CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number, typeId:number,
accessId:number, isComposition: boolean = false, referentId:number|null = 0, actions: InnerActions = {concepts: [], connections: []}){
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('CreateTheConceptLocal', { referent, typecharacter, userId, categoryId, typeId, accessId, isComposition, referentId })
                if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
                if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
                return res.data
            } catch (error) {
                console.error('CreateTheConceptLocal error sw: ', error)
                handleServiceWorkerException(error)
            }
        }

        //let id = -Math.floor(Math.random() * 100000000);
        let id = await LocalId.getConceptId();
        // console.log("this is the getting id type connection", id);

        let isNew: boolean = true;
        let created_on:Date = new Date();
        let updated_on:Date = new Date();
        if(referent == "the"){
            let concept = new Concept(1,999,5,5, referentId, referent, accessId, isNew,created_on,updated_on,typecharacter);
            return concept;
        }

        let concept = new Concept(id,userId,typeId,categoryId,referentId, referent, accessId, isNew,created_on,updated_on,typecharacter );
        concept.isTemp = true;
        concept.isComposition = isComposition;
        LocalConceptsData.AddConcept(concept);
        actions.concepts.push(concept)
        //storeToDatabase("localconcept",concept);

        // Add Log
        // Logger.logInfo(startTime, userId, "create", "unknown", "unknown", 200, concept, "createTheConceptLocal", ['referent', 'typecharacter', 'composition', 'userId', 'categoryId', 'typeId', 'accessId', 'sessionInformationId', 'isComposition', 'referentId'], undefined)

        return concept;
    }
    catch(error){
        Logger.logError(startTime, userId, "create", "unknown", "unknown", 500, undefined, "createTheConceptLocal", [referent, typecharacter, userId, categoryId, typeId, accessId, isComposition], undefined)

        throw error;
    }


}