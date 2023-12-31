import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { genHexString } from "./GenerateHexNumber";

export default function createTheConnection(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
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
            connection.id = Math.floor(Math.random() * 100000000);
            SyncData.AddConnection(connection);
        }
      
}