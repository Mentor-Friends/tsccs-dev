import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalGhostIdTree } from "../../DataStructures/Local/LocalGhostIdTree";
import { Concept, CreateDefaultLConcept, GetTheConcept, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../../app";
import { convertFromConceptToLConcept } from "../Conversion/ConvertConcepts";

/**
 * Retrieves a concept by ID with support for both local (virtual) and server concepts.
 *
 * This is the primary function for fetching concepts in offline/local mode. It intelligently
 * handles three types of concept IDs and retrieves from appropriate sources:
 *
 * **ID Types Handled:**
 * 1. **Negative IDs (Virtual/Local)**: Concepts created locally not yet synced
 *    - Stored in LocalConceptsData (IndexedDB)
 *    - Return negative IDs
 *
 * 2. **Synced Virtual IDs**: Originally local concepts now synced to backend
 *    - Looked up via LocalGhostIdTree (maps negative to positive IDs)
 *    - Returns positive (real) ID with ghostId reference
 *
 * 3. **Positive IDs (Server)**: Real backend concepts
 *    - Fetched via GetTheConcept from backend
 *    - Converted to LConcept format
 *    - May have undefined ghostId
 *
 * **Retrieval Strategy:**
 * - If id < 0: Check LocalConceptsData → Check LocalGhostIdTree
 * - If id >= 0: Fetch from backend → Convert to LConcept
 * - Routes through service worker if enabled
 * - Returns default empty concept if not found
 *
 * **Ghost ID System:**
 * - ghostId: Original negative ID (preserved after sync)
 * - id: Current ID (negative if local, positive if synced)
 * - LocalGhostIdTree maintains the mapping
 *
 * @param id - The concept ID to retrieve. Can be:
 *            - Negative (e.g., -12345) for local-only concepts
 *            - Positive (e.g., 789) for server concepts
 *
 * @returns Promise resolving to a Concept object in LConcept format.
 *         Returns default concept (id=0) if not found.
 *
 * @example
 * // Get a local concept (negative ID)
 * const localConcept = await GetTheConceptLocal(-12345);
 * console.log(localConcept.id); // -12345
 * console.log(localConcept.characterValue); // "Draft Note"
 *
 * @example
 * // Get a synced concept (originally local, now on server)
 * const syncedConcept = await GetTheConceptLocal(-12345);
 * console.log(syncedConcept.id); // 789 (now positive, synced)
 * console.log(syncedConcept.ghostId); // -12345 (original ID preserved)
 *
 * @example
 * // Get a server concept
 * const serverConcept = await GetTheConceptLocal(456);
 * console.log(serverConcept.id); // 456
 * // Converted to LConcept format for consistency
 *
 * @throws Logs errors but returns default concept instead of throwing
 *
 * @see {@link CreateTheConceptLocal} for creating local concepts
 * @see {@link GetTheConcept} for fetching server concepts only
 * @see {@link convertFromConceptToLConcept} for format conversion
 */
export async function GetTheConceptLocal(id: number){
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('GetTheConceptLocal', {id})
                return res.data
            } catch (error) {
                console.error('GetTheConceptLocal error sw: ', error)
                handleServiceWorkerException(error)
            }
        }

        let lconcept: Concept = CreateDefaultLConcept();
        if(id < 0){
            lconcept =  await LocalConceptsData.GetConcept(id);
            if(lconcept.id == 0){
                let localNode = await LocalGhostIdTree.getNodeFromTree(id);
                if(localNode?.value){
                    let returnedConcept = localNode.value;
                    if(returnedConcept){
                        lconcept = returnedConcept as Concept;
                    }
                }
            }
    
        }
        else{
            let concept:Concept =  await GetTheConcept(id);
            lconcept = convertFromConceptToLConcept(concept);
        }
        // Add Log
        // Logger.logInfo(startTime, "unknown", "read", "unknown", undefined, 200, lconcept, "GetTheConceptLocal", [id], "unknown", undefined )
        return lconcept;
    }
    catch(error){
        Logger.logError(startTime, "unknown", "read", "unknown", undefined, 200, undefined, "GetTheConceptLocal", [id], "unknown", undefined )
        throw error;
    }


}