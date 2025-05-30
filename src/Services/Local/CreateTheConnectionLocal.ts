import { Connection } from "../../DataStructures/Connection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { Logger } from "../../Middleware/logger.service";
import { Concept, handleServiceWorkerException, InnerActions, LocalSyncData, MakeTheTypeConceptLocal, sendMessage, serviceWorker } from "../../app";

/**
 * This function creates a connection for the concept connection system. This connection will only be created in real sense
 * once the data is synced using LocalSyncData.SyncDataOnline()
 * Here id and ghostId are created which are negative(these are virtual ids). After they are synced then they become real ids 
 * The real ids are then associated with these ghost ids in node server (backend) and also in the local memory.
 * @param ofTheConceptId Of the concept Id for the connection
 * @param toTheConceptId To the concept Id for the connection
 * @param typeId Type of the connection, should be the composition id for internal connection and type concept in case 
 * of external connection.
 * @param orderId current context is that for internal connections the order id is less than 3 and for external connections greater than 999
 * @param typeString this is the typeString in the case of external connections.
 * @returns a connection that is created and stored in the local system.
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