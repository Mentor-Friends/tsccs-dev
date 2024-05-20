import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { genHexString } from "./../GenerateHexNumber";

export default function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, 
     typeId: number,orderId:number = 1,
    ){  
        var accessId : number = 4;
        if(ofTheConceptId != toTheConceptId){
            var connection = new LConnection(0, ofTheConceptId, toTheConceptId, typeId, orderId, accessId);
            connection.isTemp = true;
            connection.id = Math.floor(Math.random() * 100000000);
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
        }
      
}