import { Connection } from "../DataStructures/Connection";
import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";

export async  function CreateTheConnectionGeneral(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number, sessionInformationId: number, sessionInformationUserId: number, orderId: number = 1, accessId = 4
    ){  
        var orderUserId: number = ofTheConceptUserId;
        var typeUserId: number = ofTheConceptUserId;
        var userId : number = ofTheConceptUserId;
        var securityId: number = 0;
        var securityUserId: number = ofTheConceptUserId;
        var accessUserId: number = ofTheConceptUserId;
        var id = await ReservedConnectionIds.getId();
        var connection = new Connection(id,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
            typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        if(ofTheConceptId == toTheConceptId){
            connection.ofTheConceptId = 0;
            connection.toTheConceptId = 1;
            return connection;
        }
        // this will cause the connection to go and update the existing with the reserved id
        connection.toUpdate = true;
        connection.isTemp = false;
        SyncData.AddConnection(connection);
        return connection;
        
      
}