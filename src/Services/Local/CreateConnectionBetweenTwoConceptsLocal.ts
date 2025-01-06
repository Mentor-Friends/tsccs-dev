import { Concept, CreateTheConnectionLocal, handleServiceWorkerException, MakeTheInstanceConceptLocal, sendMessage, serviceWorker } from "../../app";
import { InnerActions } from "../../Constants/general.const";
import { Logger } from "../../Middleware/logger.service";

export async function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false, actions: InnerActions = {concepts: [], connections: []}){
    let startTime = performance.now()
    try{
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('CreateConnectionBetweenTwoConceptsLocal', {ofTheConcept, toTheConcept, linker, both, actions})
                if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
                if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
                return res.data
            } catch (error) {
                console.error('CreateConnectionBetweenTwoConceptsLocal sw error: ', error);
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
        
        return newConnection;
    }
    catch(ex){
        // Add Log
        Logger.logError(startTime, ofTheConcept.userId, 'create', undefined, undefined, 500, ex, 'CreateConnectionBetweenTwoConceptsLocal',
            [ofTheConcept, toTheConcept, linker, both], 
            undefined,
            undefined
         )
        throw ex;
    }

}
