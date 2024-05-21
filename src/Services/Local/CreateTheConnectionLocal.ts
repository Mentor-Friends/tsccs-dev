import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { LocalSyncData } from "../../app";

export  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, 
     typeId: number,orderId:number = 1,
    ){  
        var accessId : number = 4;
        let randomid = Math.floor(Math.random() * 100000000);

        if(ofTheConceptId != toTheConceptId){
            var connection = new LConnection(randomid, ofTheConceptId, toTheConceptId, typeId, orderId, accessId);
            connection.isTemp = true;
            
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
            LocalSyncData.AddConnection(connection);
            return connection;
        }
      
}