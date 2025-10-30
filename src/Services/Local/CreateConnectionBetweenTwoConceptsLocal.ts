import { Concept, CreateTheConnectionLocal, handleServiceWorkerException, MakeTheInstanceConceptLocal, sendMessage, serviceWorker } from "../../app";
import { InnerActions } from "../../Constants/general.const";
import { Logger } from "../../Middleware/logger.service";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";

/**
 * Creates a named connection between two concepts with optional bidirectional linking.
 *
 * **Complex Naming Logic**:
 * - Forward connection type: "{ofType}_s_{linker}_s" (e.g., "person_s_knows_s")
 * - Backward connection type: "{toType}_s_{linker}_by" (e.g., "person_s_knows_by")
 * - Uses type.characterValue from concepts to build meaningful connection names
 *
 * **Bidirectional Mode (both=true)**:
 * - Creates two connections: A→B and B→A
 * - Forward: ofTheConcept → toTheConcept with "{ofType}_s_{linker}_s"
 * - Backward: toTheConcept → ofTheConcept with "{toType}_s_{linker}_by"
 *
 * @param ofTheConcept - Source concept (connection starts here)
 * @param toTheConcept - Target concept (connection points here)
 * @param linker - Relationship name (e.g., "knows", "works_at", "has")
 * @param both - If true, creates bidirectional connection (both A→B and B→A)
 * @param actions - Action tracking for batch operations
 * @returns The forward connection object
 * @throws Error if connection creation fails
 *
 * @example
 * // Create unidirectional "Alice knows Bob"
 * const conn = await CreateConnectionBetweenTwoConceptsLocal(
 *   aliceConcept,
 *   bobConcept,
 *   "knows",
 *   false
 * );
 * // Creates: person_s_knows_s connection from Alice to Bob
 *
 * @example
 * // Create bidirectional "Alice friends Bob" (both directions)
 * await CreateConnectionBetweenTwoConceptsLocal(
 *   aliceConcept,
 *   bobConcept,
 *   "friends",
 *   true
 * );
 * // Creates: person_s_friends_s (Alice→Bob) AND person_s_friends_by (Bob→Alice)
 */
export async function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false, actions: InnerActions = {concepts: [], connections: []}){
    const logData : any = Logger.logfunction("CreateConnectionBetweenTwoConceptsLocal", arguments) || {};
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            logData.serviceWorker = true;
            try {
                const res: any = await sendMessage('CreateConnectionBetweenTwoConceptsLocal', {ofTheConcept, toTheConcept, linker, both, actions})
                if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
                if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
                Logger.logUpdate(logData);
                return res.data
            } catch (error) {
                console.error('CreateConnectionBetweenTwoConceptsLocal sw error: ', error);
                UpdatePackageLogWithError(logData, 'CreateConnectionBetweenTwoConceptsLocal', error);
                handleServiceWorkerException(error);
            }
          }

        var userId:number = ofTheConcept.userId;

        if(both){
            let prefix1: string = toTheConcept.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  
            // if(count){
            //    await CountRelationship(linkerAdd1, toTheConcept, userId);
            //   }
            var connectionConceptReverse = await MakeTheInstanceConceptLocal("connection",backwardLinker,false,999,999,999, 0, actions);
            let pewCon = await CreateTheConnectionLocal(toTheConcept.id, ofTheConcept.id, connectionConceptReverse.id, 1000, undefined, undefined, actions)
        }
        let prefix: string = ofTheConcept.type?.characterValue + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        // if(count){
        // // await CountRelationship(linkerAdd, ofTheConcept, userId);
        // }
        
        var connectionConcept = await MakeTheInstanceConceptLocal("connection",forwardLinker,false,999,999,999, undefined, actions);
        let newConnection = await CreateTheConnectionLocal(ofTheConcept.id, toTheConcept.id, connectionConcept.id, 1000, undefined, undefined, actions)
        // Add Log
        // Logger.logInfo(
        //     startTime, 
        //     userId, 
        //     'create', 
        //     undefined, 
        //     undefined, 
        //     200, 
        //     newConnection, 
        //     'CreateConnectionBetweenTwoConceptsLocal',
        //     ['ofTheConceptId', 'toTheConceptId', 'linker', 'both'], 
        //     undefined,
        //     undefined
        // )
        Logger.logUpdate(logData);
        return newConnection;
    }
    catch(ex){
        // Add Log
        Logger.logError(startTime, ofTheConcept.userId, 'create', undefined, undefined, 500, ex, 'CreateConnectionBetweenTwoConceptsLocal',
            [ofTheConcept, toTheConcept, linker, both], 
            undefined,
            undefined
         )
        UpdatePackageLogWithError(logData, 'CreateConnectionBetweenTwoConceptsLocal', ex);
        throw ex;
    }

}
