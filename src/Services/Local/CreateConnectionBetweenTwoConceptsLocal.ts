import { Concept, CreateTheConnectionLocal, MakeTheInstanceConceptLocal, sendMessage, serviceWorker } from "../../app";
import { getCookie, LogData, Logger } from "../../Middleware/logger.service";
import { HandleInternalError } from "../Common/ErrorPosting";

export async function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false){
    try{
        let startTime = performance.now()
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
        /**
         * Start Log Service
         */
        console.log("CreateConnectionBetweenTwoConceptsLocal...");
            
        let sessionId:string = getCookie('SessionId');
        let dataLog:LogData= {
            requestStatus: 200,
            executionTime: `${(performance.now() - startTime).toFixed(3)}ms`,
            responseSize: `${JSON.stringify(newConnection).length}`,
            sessionId: sessionId,
            functionName: "CreateConnectionBetweenTwoConceptsLocal",
            functionParameters : ['ofTheConceptId', 'toTheConceptId', 'linker', 'both'],
        }
        Logger.log(
            "INFO",
            "From function CreateConnectionBetweenTwoConceptsLocal",
            dataLog
        )
        // Send logs to the server
        Logger.sendLogsToServer()

        /**
         * End of Log
         */
        return newConnection;
    }
    catch(ex){
        throw ex;
    }

}
