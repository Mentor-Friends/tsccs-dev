import { GetConcept } from "../../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../../Api/GetAllConnectionsOfComposition";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { TranslateLocalToReal } from "../../Api/Translate/TranslateLocalToReal";
import { GetComposition } from "../GetComposition";
import { handleServiceWorkerException, sendMessage, serviceWorker } from "../../app";

/**
 * Retrieves a complete composition structure from local storage (IndexedDB).
 *
 * This function fetches a composition using local-only data, building a hierarchical
 * structure from local connections and concepts. If the concept has been synced to the
 * backend, it can automatically fall back to fetching from the server.
 *
 * **Process:**
 * 1. Fetches all local connections for the composition
 * 2. Identifies all connected concept IDs
 * 3. Retrieves the main concept from LocalConceptsData
 * 4. If concept not found locally, checks if it's been synced (TranslateLocalToReal)
 * 5. Falls back to server GetComposition if concept is synced
 * 6. Recursively builds composition tree from local data
 * 7. Organizes output by concept type
 *
 * **Local vs Server:**
 * - Prioritizes local data (IndexedDB)
 * - Automatic fallback to server if concept synced
 * - Uses LocalConnectionData for connections
 * - Uses LocalConceptsData for concepts
 *
 * **Output Format (JUSTDATA):**
 * Returns an object keyed by the main concept's type:
 * ```
 * {
 *   "Person": {
 *     name: "Alice",
 *     email: {...},
 *     projects: {...}
 *   }
 * }
 * ```
 *
 * @param id - The concept ID (can be negative for local or positive for synced)
 *
 * @returns Promise resolving to composition data organized by concept type
 *
 * @example
 * // Get local composition
 * const localComp = await GetCompositionLocal(-12345);
 * console.log(localComp["Project"]);
 * // Returns all data connected to this local project
 *
 * @example
 * // Get synced concept (automatically falls back to server)
 * const syncedComp = await GetCompositionLocal(-67890);
 * // If concept synced to server, fetches from there
 *
 * @throws Re-throws errors for handling by caller
 *
 * @see {@link GetCompositionLocalWithId} for composition with ID and data wrapper
 * @see {@link GetComposition} for server-only composition retrieval
 * @see {@link recursiveFetchLocal} for the recursive building logic
 */
export async function GetCompositionLocal(id:number){
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('GetCompositionLocal', { id })
                return res.data
            } catch (error) {
                console.error('GetCompositionLocal error sw: ', error)
                handleServiceWorkerException(error)
            }
        }

        let connectionList:LConnection[] = [];
        let returnOutput: any = {};
        connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList:number[] = [];
    
        for(let i=0; i<connectionList.length; i++){
            if(!compositionList.includes(connectionList[i].ofTheConceptId)){
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
    
        let concept = await LocalConceptsData.GetConcept(id);
        if(concept.id == 0){
           let realConcept:Concept = await TranslateLocalToReal(id);
           if(realConcept.id > 0){
            return await GetComposition(realConcept.id);
           }
        }
        let output = await recursiveFetchLocal(id, connectionList, compositionList);
        let mainString = concept?.type?.characterValue ?? "top";
        returnOutput[mainString] = output;
        return returnOutput;
    }
    catch(error){
        throw error;
    }

}

/**
 * Retrieves a local composition with ID and data wrapper (DATAID format).
 *
 * This is a variant of GetCompositionLocal that returns the composition data
 * wrapped in an object that includes both the data and the concept ID. This format
 * is useful for tracking which concept the data belongs to.
 *
 * **Output Format (DATAID):**
 * ```
 * {
 *   data: {
 *     "Person": {
 *       name: "Alice",
 *       email: {...}
 *     }
 *   },
 *   id: 12345
 * }
 * ```
 *
 * **Differences from GetCompositionLocal:**
 * - Returns { data, id } wrapper object
 * - Same local data retrieval process
 * - Same recursive building logic
 * - No automatic server fallback
 *
 * @param id - The concept ID (negative for local, positive for synced)
 *
 * @returns Promise resolving to object with { data, id } structure
 *
 * @example
 * const result = await GetCompositionLocalWithId(-12345);
 * console.log(result.id);           // -12345
 * console.log(result.data.Project); // Composition data
 *
 * @throws Re-throws errors for handling by caller
 *
 * @see {@link GetCompositionLocal} for standard format without ID wrapper
 * @see {@link GetCompositionWithId} for server version
 */
export async function GetCompositionLocalWithId(id:number){
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('GetCompositionLocalWithId', { id })
                return res.data
            } catch (error) {
                console.error('GetCompositionLocalWithId error sw: ', error)
                handleServiceWorkerException(error)
            }
        }

        let connectionList:LConnection[] = [];
        let returnOutput: any = {};
        let FinalReturn: any = {};
    
        connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList:number[] = [];
        for(let i=0; i<connectionList.length; i++){
            if(!compositionList.includes(connectionList[i].ofTheConceptId)){
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = await LocalConceptsData.GetConcept(id);
        if(concept.id != 0){
            let output = await recursiveFetchLocal(id, connectionList, compositionList);
            let mainString = concept?.type?.characterValue ?? "top";
            returnOutput[mainString] = output;
        }
    
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
    
        return FinalReturn;
    }
    catch(error){
        throw error;
    }

}


/**
 * Recursively builds a composition tree from local connections and concepts.
 *
 * This internal helper function traverses the connection graph depth-first,
 * building a nested object structure that represents the composition hierarchy.
 * It prevents infinite loops by tracking visited concepts.
 *
 * **Algorithm:**
 * 1. Fetches the current concept
 * 2. Resolves its type information
 * 3. Checks if concept is in compositionList (has children)
 * 4. If no children: returns characterValue (leaf node)
 * 5. If has children: recursively processes all connections
 * 6. Builds nested object keyed by type names
 * 7. Tracks visited concepts to prevent circular references
 *
 * **Type Key Processing:**
 * - Removes "the_" prefix from type names
 * - Numeric keys create arrays
 * - String keys create nested objects
 *
 * @param id - Current concept ID being processed
 * @param connectionList - Array of all connections in the composition
 * @param compositionList - Array of concept IDs that have child connections
 * @param visitedConcepts - Array tracking visited IDs to prevent infinite loops
 *
 * @returns Promise resolving to the composition structure (object or string)
 *
 * @example
 * // Internal use - called by GetCompositionLocal
 * const result = await recursiveFetchLocal(-123, connections, [- 123, -456], []);
 * // Returns nested structure like:
 * // { name: "Alice", email: "alice@example.com", projects: {...} }
 */
 async function recursiveFetchLocal(id:number, connectionList:LConnection[], compositionList:number[], visitedConcepts: number[] = []){

    let output : any= {};
    let arroutput: any = [];
    let concept = await LocalConceptsData.GetConcept(id);
    if(concept.id != 0){
        if(concept.type == null){

            let toConceptTypeId: number  = concept.typeId;
            let toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
        }
    }

    let mainString = concept?.type?.characterValue ?? "top";

    if(!compositionList.includes(id)){
        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        for(let i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                let toConceptId = connectionList[i].toTheConceptId;

                let toConcept = await LocalConceptsData.GetConcept(toConceptId);
                if(toConcept.id != 0){
                    if(toConcept?.type == null){

                        let toConceptTypeId: number  = toConcept.typeId;
                        let toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                    }
                }

                let regex = "the_";


                let localmainString = toConcept?.type?.characterValue ?? "top";

                let localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }