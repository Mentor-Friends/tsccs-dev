import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import {MakeTheTypeConceptLocal} from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { InnerActions } from "../../Constants/general.const";
import { Connection, handleServiceWorkerException, LocalSyncData, Logger, sendMessage, serviceWorker } from "../../app";
import { UpdatePackageLogWithError } from "../Common/ErrorPosting";


/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the 
 * concept connection system. This function is the building block of the concept connection system.
 * This function automatically passes the concept to be synced to the background. Next time you sync the data this concept will also be created in the backend.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also 
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param accessId this is the accessId of the creator. By default should be 4.
 * @param sessionInformationId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @param actions InnerActions Array for capturing concepts and connection
 * @returns a concept which is either newly created or an older concept that already exists.
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