import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { HandleInternalError } from "./Common/ErrorPosting";


/**
 * This function is used to create a connection that is internal(inside of a composition)
 * @param ofTheConceptId Start of the connection
 * @param userId user id fo the user creating the connection
 * @param toTheConceptId the end of the connection
 * @param typeId this is the type of the connection
 * @returns 
 */
export  function createTheConnection(ofTheConceptId:number, userId:number, toTheConceptId:number,
     typeId: number
    ):Connection{  
            var orderId: number = 1;
            var localUserId : number = userId;
            var accessId : number = 4;
            var connection = new Connection(0,ofTheConceptId,toTheConceptId,localUserId,typeId, orderId, accessId);
            if(ofTheConceptId == toTheConceptId){
                connection.ofTheConceptId = 0;
                connection.toTheConceptId = 1;
                return connection;
            }
        try{

            connection.isTemp = true;
            connection.id = Math.floor(Math.random() * 100000000);
            SyncData.AddConnection(connection);
        }
        catch(error){
            HandleInternalError(error);
        }
        return connection;

        
      
}