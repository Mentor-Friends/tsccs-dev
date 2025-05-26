import { Concept, MakeTheTypeConceptApi } from "../app";
import { Connection } from "../DataStructures/Connection";
import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";

export async  function CreateTheConnectionGeneral(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number, toTheConceptUserId:number,
     typeId: number,  sessionInformationId: number, sessionInformationUserId: number, orderId: number = 1, accessId = 4, passedUserId:number = 999,
    ){  
        let orderUserId: number = ofTheConceptUserId;
        let typeUserId: number = ofTheConceptUserId;
        let userId : number = ofTheConceptUserId;

        if(passedUserId != 999){
            userId = passedUserId;
        }
        let securityId: number = 0;
        let securityUserId: number = ofTheConceptUserId;
        let accessUserId: number = ofTheConceptUserId;
        let id = await ReservedConnectionIds.getId();
        let connection = new Connection(id,ofTheConceptId,toTheConceptId, ofTheConceptUserId,toTheConceptUserId,userId,typeId,
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


export async function CreateConnection(ofTheConcept:Concept, toTheConcept:Concept, connectionTypeString: string){
    let typeConcept = await MakeTheTypeConceptApi(connectionTypeString, 999);
    let userId : number = ofTheConcept.userId;
    return await CreateTheConnectionGeneral(ofTheConcept.id, ofTheConcept.userId, toTheConcept.id, toTheConcept.userId, typeConcept.id, 999,999, 1000, 4, userId);
}