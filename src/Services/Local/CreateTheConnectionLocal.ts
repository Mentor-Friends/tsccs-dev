import { Connection } from "../../DataStructures/Connection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { getCookie, LogData, Logger } from "../../Middleware/logger.service";
import { LocalSyncData, sendMessage, serviceWorker } from "../../app";

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
     typeId: number,orderId:number = 1, typeString: string = "", userId: number = 999
    ){  
        let startTime = performance.now()
        if (serviceWorker) {
            const res: any = await sendMessage('CreateTheConnectionLocal', { ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId })
            console.log('data received from sw', res)
            return res.data
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
                 await LocalSyncData.AddConnection(connection);
                 LocalConnectionData.AddConnection(connection);
                 //storeToDatabase("localconnection", connection);
             }
             /**
             * Add to Logger
             */
            console.log("CreateTheConnectionLocal...");
            
            let sessionId:string = getCookie('SessionId');
            let dataLog:LogData= {
                requestStatus: 200,
                executionTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(connection).length}`,
                sessionId: sessionId,
                functionName: "CreateTheConnectionLocal",
                functionParameters : ['ofTheConceptId', 'toTheConceptId', 'typeId', 'orderId', 'typeString', 'userId']
            }
            Logger.log(
                "INFO",
                "From function MakeTheInstanceConceptLocal",
                dataLog
            )
            // Send logs to the server
            Logger.sendLogsToServer()
            /**
             * End of Logger
             */
             return connection;
        }
        catch(error){
            throw error;
        }


      
}