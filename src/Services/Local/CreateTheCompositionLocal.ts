import { handleServiceWorkerException, InnerActions, Logger, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept";
import {CreateTheConnectionLocal} from "./CreateTheConnectionLocal";
import {MakeTheInstanceConceptLocal} from "./MakeTheInstanceConceptLocal";

/**
 * This function converts a json data to concept connection and also preserves its relation.
 * @param json The json data that needs to be converted to the concept connection system
 * @param ofTheConceptId If in case that this composition is part of other composition then this must be the connecting concept.
 * @param ofTheConceptUserId If in case that this composition is part of other composition then this must be the user Id of the  connecting concept.
 * @param mainKey If in case that this composition is part of other composition then this must be the main composition
 * @param userId The user Id of the user creating the composition.
 * @param accessId The accessId of the user creating the composition.
 * @param sessionInformationId Session of the user.
 * @param automaticSync for future use.
 * @returns the main concept of this composition.
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

