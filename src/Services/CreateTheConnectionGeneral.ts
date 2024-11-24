import { Connection } from "../DataStructures/Connection";
import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { FreeSchemaResponse } from "../DataStructures/Responses/ErrorResponse";
import { SyncData } from "../DataStructures/SyncData";

export async  function CreateTheConnectionGeneral(ofTheConceptId:number, ofTheConceptUserId:number, toTheConceptId:number,
     typeId: number, orderId: number = 1, accessId = 4
    ){  
        if(ofTheConceptId > 0 && toTheConceptId > 0){
            var userId : number = ofTheConceptUserId;
            var id = await ReservedConnectionIds.getId();
            var connection = new Connection(id,ofTheConceptId,toTheConceptId,userId,typeId,
                 orderId,  accessId);
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
        else{
            throw new FreeSchemaResponse("cannot create connection because id are negative ", false, 400, "");
        }

        
      
}