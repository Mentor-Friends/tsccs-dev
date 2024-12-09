import { Concept, CreateTheConnectionLocal, MakeTheInstanceConceptLocal, sendMessage, serviceWorker } from "../../app";
import { getCookie, LogData, Logger } from "../../Middleware/logger.service";
import { HandleInternalError } from "../Common/ErrorPosting";

export async function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false){
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('CreateConnectionBetweenTwoConceptsLocal', {ofTheConcept, toTheConcept, linker, both})
            console.log('data received from sw', res)
            return res.data
          }

        console.log('of THe', ofTheConcept, 'to the', toTheConcept)
        var userId:number = ofTheConcept.userId;

        if(both){
            let prefix1: string = toTheConcept.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  
            // if(count){
            //    await CountRelationship(linkerAdd1, toTheConcept, userId);
            //   }
            var connectionConceptReverse = await MakeTheInstanceConceptLocal("connection",backwardLinker,false,999,999,999);
            let pewCon = await CreateTheConnectionLocal(toTheConcept.id, ofTheConcept.id, connectionConceptReverse.id, 1000)
        }
        let prefix: string = ofTheConcept.type?.characterValue + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        // if(count){
        // // await CountRelationship(linkerAdd, ofTheConcept, userId);
        // }
        var connectionConcept = await MakeTheInstanceConceptLocal("connection",forwardLinker,false,999,999,999);
        let newConnection = await CreateTheConnectionLocal(ofTheConcept.id, toTheConcept.id, connectionConcept.id, 1000)
        
        // Add Log
        Logger.logInfo(
            startTime, 
            userId, 
            'create', 
            undefined, 
            undefined, 
            200, 
            newConnection, 
            'CreateConnectionBetweenTwoConceptsLocal',
            ['ofTheConceptId', 'toTheConceptId', 'linker', 'both'], 
            undefined,
            undefined
        )
        return newConnection;
    }
    catch(ex){
        // Add Log
        Logger.logError(startTime, ofTheConcept.userId, 'create', undefined, undefined, 500, ex, 'CreateConnectionBetweenTwoConceptsLocal',
            ['ofTheConceptId', 'toTheConceptId', 'linker', 'both'], 
            undefined,
            undefined
         )
        throw ex;
    }

}
