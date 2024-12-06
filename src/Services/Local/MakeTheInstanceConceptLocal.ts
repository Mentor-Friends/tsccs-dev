import { Concept } from "../../DataStructures/Concept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import {MakeTheTypeConceptLocal} from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalSyncData, sendMessage, serviceWorker } from "../../app";
import { getCookie, LogData, Logger } from "../../Middleware/logger.service";

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
 * @returns a concept which is either newly created or an older concept that already exists.
 */
export async function MakeTheInstanceConceptLocal(type:string, referent:string, composition:boolean=false, userId: number, 
    accessId:number, sessionInformationId: number=999, referentId: number = 0){
        let startTime = performance.now()
        if (serviceWorker) {
            const res: any = await sendMessage('MakeTheInstanceConceptLocal', {type, referent, composition, userId, accessId, sessionInformationId, referentId})
            console.log('data received from sw', res)
            return res.data
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
                let   typeConceptString = await MakeTheTypeConceptLocal(type, sessionInformationId, userId, userId );
               typeConcept = typeConceptString as Concept;
                
               let conceptString = await CreateTheConceptLocal(referent,type,userId, categoryId, typeConcept.id,accessId,true, referentId );
    
                concept = conceptString as Concept;
            }
            else if(stringLength > 255){
    
                let typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptString = await CreateTheConceptLocal(referent,stringToCheck,userId, categoryId, typeConcept.id,accessId );
    
                concept = conceptString as Concept;
    
    
    
            }
            else{
                let typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptByCharTypeString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString as Concept;
                concept = conceptTypeCharacter;
                if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                    let conceptString = await CreateTheConceptLocal(referent, stringToCheck, userId, categoryId, typeConcept.id,accessId );
                    concept = conceptString as Concept;
                }
            }
    
            concept.type = typeConcept;
            LocalSyncData.AddConcept(concept);
            /**
             * Add to Logger
             */
            console.log("MakeTheInstanceConceptLocal...");
            
            let sessionId:string = getCookie('SessionId');
            let dataLog:LogData= {
                responseStatus: 200,
                responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(concept).length}`,
                sessionId: sessionId,
                functionName: "MakeTheInstanceConceptLocal",
                functionParameters : ['type', 'referent', 'composition', 'userId', 'accessId', 'sessionInformationId', 'referentId']
            }
            Logger.log(
                "INFO",
                "From function MakeTheInstanceConceptLocal",
                dataLog
            )
            // Send logs to the server
            // Logger.sendLogsToServer()
            /**
             * End of Logger
             */
            return concept;
        }
        catch(error){
            throw error;
        }


}