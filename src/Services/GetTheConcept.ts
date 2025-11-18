import { AccessTracker } from "../AccessTracker/accessTracker";
import { GetConcept } from "../Api/GetConcept";
import { convertFromLConceptToConcept, GetUserGhostId, handleServiceWorkerException, LocalConceptsData, Logger, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import { CreateDefaultConcept } from "./CreateDefaultConcept";

const conceptCache = new Map<number, Promise<Concept>>();

/**
 * Retrieves a concept by its ID with intelligent caching and multi-source lookup.
 *
 * This is the primary function for fetching concepts in the system. It implements a sophisticated
 * multi-level retrieval strategy:
 *
 * **Retrieval Strategy:**
 * 1. Checks in-memory promise cache to prevent duplicate requests
 * 2. For negative IDs: Fetches from local IndexedDB (LocalConceptsData)
 * 3. For positive IDs: Checks local ConceptsData cache first
 * 4. If not in cache: Fetches from backend API
 * 5. Automatically resolves and attaches the concept's type information
 * 6. Routes through service worker if enabled for better performance
 *
 * **Features:**
 * - Promise caching prevents duplicate concurrent requests for the same concept
 * - Automatic type resolution (fetches and attaches type concept)
 * - Access tracking integration (increments access counter if enabled)
 * - Service worker support for background processing
 * - Error logging and performance monitoring
 * - Supports both server concepts (positive IDs) and local concepts (negative IDs)
 *
 * @param id - The unique identifier of the concept to retrieve.
 *            Positive IDs = server concepts, Negative IDs = local-only concepts
 * @param userId - The ID of the user requesting the concept. Used for access tracking
 *                and audit logging. Defaults to 999 (system/anonymous user)
 *
 * @returns Promise resolving to the Concept object if found, or a default empty Concept if not found
 *
 * @example
 * // Get a server concept
 * const concept = await GetTheConcept(12345, 101);
 * console.log(concept.characterValue); // "Alice Smith"
 * console.log(concept.type?.characterValue); // "Person" (auto-resolved)
 *
 * @example
 * // Get a local concept (negative ID)
 * const localConcept = await GetTheConcept(-5, 101);
 * console.log(localConcept.characterValue); // "Local Draft"
 *
 * @example
 * // Multiple concurrent calls use the same promise (efficient)
 * const [c1, c2, c3] = await Promise.all([
 *   GetTheConcept(123),
 *   GetTheConcept(123),  // Same ID - uses cached promise
 *   GetTheConcept(123)   // Same ID - uses cached promise
 * ]);
 * // Only one actual fetch is performed
 *
 * @throws Will log errors but returns a default empty concept instead of throwing
 *
 * @see {@link CreateTheConcept} for creating new concepts
 * @see {@link GetConceptBulk} for fetching multiple concepts efficiently
 * @see {@link AddTypeConcept} for manually adding type information to a concept
 */
export default async function GetTheConcept(id: number, userId: number = 999){
    let startTime = performance.now()
    //Logger.logfunction(GetTheConcept,arguments);

    if(AccessTracker.activateStatus){
        try {
            AccessTracker.incrementConcept(id)
        } catch {
            console.error("Error adding connection in access tracker");
            Logger.log("ERROR", "Error Adding Connection")
        }
    }

    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetTheConcept', {id, userId})
            return res.data as Concept
        } catch (error) {
            console.error('GetTheConcept sw error: ', error)
            handleServiceWorkerException(error)
        }
    }

    let concept = CreateDefaultConcept();

    // check the cache
    if (conceptCache.has(id)) return conceptCache.get(id) || concept;

    const getConcept = (async () => {
        try{
            if(id < 0){
            let lconcept:Concept = await LocalConceptsData.GetConceptByGhostId(id);
            return lconcept;
            }
            concept = await ConceptsData.GetConcept(id);
            if((concept == null || concept.id == 0) && id != null && id != undefined){
            let conceptString = await  GetConcept(id);
        
            concept = conceptString as Concept;
            }
            if( concept.id != 0){
        
                if(concept.type == null){
                    let conceptType = await ConceptsData.GetConcept(concept.typeId);
                    if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
                        let typeConceptString = await GetConcept(concept.typeId);
                        let typeConcept = typeConceptString as Concept;
                        concept.type = typeConcept;
                    }
                }
            }
            // Add Log
            // Logger.logInfo(startTime, userId, "read", "unknown", undefined, 200, concept, "GetTheConcept", ['id', 'userId'], "unknown", undefined )
            return concept;
        }
        catch(err){
            console.error("this is the error in the getting concept", err);
            // Add Log
            Logger.logError(startTime, userId, "read", "unknown", undefined, 500, err, "GetTheConcept", [id, userId], "unknown", undefined )
            throw err;
        }
        finally { 
            conceptCache.delete(id) //  remove from the cache
        }
    })()

    conceptCache.set(id, getConcept)
    return getConcept
}

/**
 * Fetches and attaches type information to a concept if not already present.
 *
 * This utility function ensures that a concept has its type information loaded and attached.
 * Every concept has a `typeId` that references another concept representing its type
 * (e.g., a person concept might have typeId=1 which points to a "Person" type concept).
 *
 * **Process:**
 * 1. Checks if concept.type is already set (if yes, does nothing)
 * 2. Attempts to fetch type concept from local cache (ConceptsData)
 * 3. If not in cache and typeId is valid: fetches from backend API
 * 4. Attaches the type concept to concept.type property
 * 5. Routes through service worker if enabled
 *
 * **Type Concept:**
 * A type concept is a special concept that represents a classification or category.
 * For example: "Person", "Document", "Organization" are type concepts.
 *
 * @param concept - The concept object to which type information should be added.
 *                 The concept must have a valid `typeId` property.
 *
 * @returns Promise that resolves when type information has been attached (or confirmed present)
 *
 * @example
 * const concept = await GetTheConcept(12345);
 * console.log(concept.type); // might be null
 *
 * await AddTypeConcept(concept);
 * console.log(concept.type?.characterValue); // "Person"
 *
 * @example
 * // Ensure multiple concepts have their types loaded
 * const concepts = await GetConceptBulk([1, 2, 3, 4, 5]);
 * await Promise.all(concepts.map(c => AddTypeConcept(c)));
 * // All concepts now have their type information
 *
 * @see {@link GetTheConcept} which automatically calls this function
 */
export  async function AddTypeConcept(concept:Concept){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('AddTypeConcept', {concept})
            return res.data as Concept
        } catch (error) {
            console.error('AddTypeConcept sw error: ', error)
            handleServiceWorkerException(error)
        }
    }
    if(concept.type == null){
        let conceptType = await ConceptsData.GetConcept(concept.typeId);
        if(conceptType.id == 0 && concept.typeId != 0 && concept.typeId != 999){
            let typeConceptString = await GetConcept(concept.typeId);
            let typeConcept = typeConceptString as Concept;
            concept.type = typeConcept;
        }
        else{
            concept.type = conceptType;
        }

    }
}