import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";

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
        var connection = new Connection(0,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
            typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        SyncData.AddConnection(connection);
}