import { Connection } from "../../DataStructures/Connection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { Logger } from "../../Middleware/logger.service";
import { Concept, handleServiceWorkerException, InnerActions, LocalSyncData, MakeTheTypeConceptLocal, sendMessage, serviceWorker } from "../../app";

/**
 * Creates a connection in local storage (IndexedDB) without syncing to the backend.
 *
 * This is the primary function for creating offline-first connections. The connection is stored
 * locally in IndexedDB and memory, but NOT immediately sent to the backend. Sync happens
 * later via LocalSyncData.SyncDataOnline().
 *
 * **Virtual ID System:**
 * - Generates a negative ID (e.g., -67890) to indicate local/virtual status
 * - id and ghostId are initially equal and both negative
 * - After backend sync: id becomes positive (real backend ID)
 * - ghostId remains negative (preserves original local ID)
 * - Mapping is stored in backend and LocalGhostIdTree
 *
 * **Connection Types:**
 * - **Internal Connections**: orderId < 3 (within a composition)
 *   - typeId is typically the composition ID
 * - **External Connections**: orderId >= 999 (between different entities)
 *   - typeId is a type concept ID
 *   - typeString provides human-readable type name
 *
 * **Self-Connection Prevention:**
 * If ofTheConceptId equals toTheConceptId, returns an empty connection (prevents loops).
 *
 * @param ofTheConceptId - Source concept ID (FROM). The connection originates here.
 *                        Can be negative (local) or positive (server) ID.
 * @param toTheConceptId - Target concept ID (TO). The connection points here.
 *                        Can be negative (local) or positive (server) ID.
 * @param typeId - The type classification for this connection.
 *                - For internal connections: composition ID
 *                - For external connections: type concept ID
 * @param orderId - Order identifier for sorting multiple connections.
 *                 - < 3: Internal connection
 *                 - >= 999: External connection
 *                 - Defaults to 1
 * @param typeString - Human-readable type name (e.g., "the_person_email").
 *                    Used primarily for external connections. Defaults to empty string.
 * @param userId - The ID of the user creating this connection. Defaults to 999 (system).
 * @param actions - Action tracking object that accumulates created concepts and connections.
 *                 Used for batch operations and rollback. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Connection object with negative ID.
 *         Returns empty connection (all IDs = 0) if self-connection attempted.
 *
 * @example
 * // Create internal connection (within composition)
 * const internalConn = await CreateTheConnectionLocal(
 *   projectId,    // -12345
 *   taskId,       // -67890
 *   compositionId,// -11111
 *   1,            // orderId < 3 = internal
 *   "",           // no typeString needed
 *   101           // userId
 * );
 * console.log(internalConn.id); // -99999 (negative = local)
 *
 * @example
 * // Create external connection (between entities)
 * const externalConn = await CreateTheConnectionLocal(
 *   personId,           // 123
 *   emailId,            // 456
 *   emailTypeId,        // 789
 *   1000,               // orderId >= 999 = external
 *   "the_person_email", // typeString for external
 *   101
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * await CreateTheConnectionLocal(id1, id2, typeId, 1, "", 101, actions);
 * await CreateTheConnectionLocal(id2, id3, typeId, 1, "", 101, actions);
 * console.log(actions.connections.length); // 2
 * // All created connections tracked for potential rollback
 *
 * @example
 * // Self-connection prevention
 * const selfConn = await CreateTheConnectionLocal(123, 123, 5, 1);
 * console.log(selfConn.id); // 0 (empty connection, prevented)
 *
 * @throws Logs errors and re-throws for handling by caller
 *
 * @see {@link CreateConnection} for simplified connection creation with concepts
 * @see {@link LocalSyncData} for syncing local connections to backend
 * @see {@link createTheConnection} for creating server-synced connections directly
 */
export async  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number,
     typeId: number,orderId:number = 1, typeString: string = "", userId: number = 999, actions: InnerActions = {concepts: [], connections: []}
    ){  
        let startTime = performance.now()
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('CreateTheConnectionLocal', { ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId, actions })
                if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
                if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
                return res.data
            } catch (error) {
                console.log('CreateTheConnectionLocal error sw: ', error)
                handleServiceWorkerException(error)
            }
        }
        try{
            let accessId : number = 4;
            // let randomid = -Math.floor(Math.random() * 100000000);
            let randomid = await LocalId.getConnectionId();
             let realOfTheConceptId = 0;
             let realToTheConceptId = 0;
             let realTypeId = 0;
             realOfTheConceptId = ofTheConceptId;
             realToTheConceptId = toTheConceptId;
             realTypeId = typeId;
             let connection = new Connection(0,0,0,0,0,0,0);
             if(ofTheConceptId != toTheConceptId){
                  connection = new Connection(randomid, realOfTheConceptId, realToTheConceptId, userId, typeId, orderId, accessId);
                 connection.isTemp = true;
                 connection.typeCharacter = typeString;
                 LocalSyncData.AddConnection(connection);
                 LocalConnectionData.AddConnection(connection);
                 actions.connections.push(connection)
                 //storeToDatabase("localconnection", connection);
             }

            //  Add Log
            // Logger.logInfo(
            //     startTime, 
            //     userId, 
            //     "create",
            //     "Unknown",
            //     "Unknown",
            //     200,
            //     connection,
            //     "CreateTheConnectionLocal",
            //     ['ofTheConceptId', 'toTheConceptId', 'typeId', 'orderId', 'typeString', 'userId'],
            //     "UnknownUserAgent",
            //     []
            // );
            
            return connection;
        }
        catch(error){
            Logger.logError(startTime, userId, "create", "Unknown", "Unknown", 500, undefined, "CreateTheConnectionLocal",
                [ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId],
                "UnknownUserAgent",
                []
            );
            throw error;
        }


      
}


/**
 * Simplified connection creator that accepts concepts and a type string.
 *
 * This is a convenience wrapper around CreateTheConnectionLocal that:
 * 1. Accepts Concept objects instead of IDs
 * 2. Creates the connection type concept if it doesn't exist
 * 3. Extracts necessary IDs automatically
 * 4. Sets appropriate defaults for local connections
 *
 * **Advantages:**
 * - More intuitive API (pass concepts, not IDs)
 * - Automatic type concept creation/retrieval
 * - Less boilerplate code
 * - Type-safe with TypeScript
 *
 * **Process:**
 * 1. Creates/retrieves type concept from connectionTypeString
 * 2. Extracts userId from source concept
 * 3. Calls CreateTheConnectionLocal with extracted IDs
 * 4. Returns the created connection
 *
 * @param ofTheConcept - The source Concept object (FROM)
 * @param toTheConcept - The target Concept object (TO)
 * @param connectionTypeString - Type name as string (e.g., "the_person_email").
 *                              A type concept will be created if it doesn't exist.
 * @param actions - Action tracking object for batch operations. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Connection object
 *
 * @example
 * // Simple usage with concepts
 * const person = await CreateTheConceptLocal('Alice', 'the_person', 101, 1, 1, 2);
 * const email = await CreateTheConceptLocal('alice@example.com', 'the_email', 101, 1, 2, 2);
 *
 * const connection = await CreateConnection(person, email, 'the_person_email');
 * // Connection created with:
 * // - ofTheConceptId: person.id
 * // - toTheConceptId: email.id
 * // - typeId: auto-generated from 'the_person_email'
 * // - orderId: 1000 (external connection)
 *
 * @example
 * // With action tracking
 * const actions = { concepts: [], connections: [] };
 * const conn1 = await CreateConnection(concept1, concept2, 'links_to', actions);
 * const conn2 = await CreateConnection(concept2, concept3, 'links_to', actions);
 * console.log(actions.connections.length); // 2
 *
 * @see {@link CreateTheConnectionLocal} for the underlying implementation
 * @see {@link MakeTheTypeConceptLocal} for type concept creation
 */
export async function CreateConnection(ofTheConcept:Concept, toTheConcept:Concept, connectionTypeString: string, actions: InnerActions = {concepts: [], connections: []}){
    if (serviceWorker) {
            try {
            const res: any = await sendMessage('CreateConnection', { ofTheConcept, toTheConcept, connectionTypeString, actions })
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            return res.data
        } catch (error) {
            console.log('CreateConnection error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    
    let typeConcept = await MakeTheTypeConceptLocal(connectionTypeString, 999, 999,999);
    let userId : number = ofTheConcept.userId;
    return await CreateTheConnectionLocal(ofTheConcept.id, toTheConcept.id,  typeConcept.id, 1000,connectionTypeString, userId, actions );
}