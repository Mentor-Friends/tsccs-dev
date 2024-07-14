import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LocalGhostIdTree } from "../../DataStructures/Local/LocalGhostIdTree";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { Concept, ConceptsData, CreateDefaultConcept, LocalSyncData } from "../../app";

export async  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, 
     typeId: number,orderId:number = 1, typeString: string = ""
    ){  
        var accessId : number = 4;
        let randomid = -Math.floor(Math.random() * 100000000);
        let realOfTheConceptId = 0;
        let realToTheConceptId = 0;
        let realTypeId = 0;
        realOfTheConceptId = ofTheConceptId;
        realToTheConceptId = toTheConceptId;
        realTypeId = typeId;
        let connection = new LConnection(0,0,0,0,0,0);
        if(ofTheConceptId != toTheConceptId){
             connection = new LConnection(randomid, ofTheConceptId, toTheConceptId, typeId, orderId, accessId);
            connection.isTemp = true;
            connection.typeCharacter = typeString;
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
            LocalSyncData.AddConnection(connection);
        }
        return connection;

      
}