import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/NoIndexDb";

export  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, 
     typeId: number,orderId:number = 1,
    ){  
        var accessId : number = 4;
        let randomid = Math.floor(Math.random() * 100000000);
        let realOfTheConceptId = 0;
        let realToTheConceptId = 0;
        let realTypeId = 0;
        realOfTheConceptId = ofTheConceptId;
        realToTheConceptId = toTheConceptId;
        realTypeId = typeId;
        let connection = new LConnection(0,0,0,0,0,0);
        if(ofTheConceptId != toTheConceptId){
             connection = new LConnection(0, ofTheConceptId, toTheConceptId, typeId, orderId, accessId);
            connection.isTemp = true;
            connection.id = Math.floor(Math.random() * 100000000);
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
        }
        return connection;

      
}