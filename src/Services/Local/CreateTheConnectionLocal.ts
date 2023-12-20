import { Connection } from "../../DataStructures/Connection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { genHexString } from "./../GenerateHexNumber";

export default function CreateTheConnectionLocal(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number, sessionInformationId: number, sessionInformationUserId: number
    ){  
        var orderId: number = 1;
        var orderUserId: number = ofTheConceptUserId;
        var typeUserId: number = ofTheConceptUserId;
        var userId : number = ofTheConceptUserId;
        var securityId: number = 0;
        var securityUserId: number = ofTheConceptUserId;
        var accessId : number = 4;
        var accessUserId: number = ofTheConceptUserId;
        if(ofTheConceptId != toTheConceptId){
            var connection = new Connection(0,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
                typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            connection.isTemp = true;
            connection.id = genHexString(10);
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
        }
      
}