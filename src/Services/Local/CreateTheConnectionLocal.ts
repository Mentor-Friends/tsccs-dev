import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LocalGhostIdTree } from "../../DataStructures/Local/LocalGhostIdTree";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { Concept, ConceptsData, CreateDefaultConcept, LocalSyncData } from "../../app";

export async  function CreateTheConnectionLocal(ofTheConceptId:number, toTheConceptId:number, 
     typeId: number,orderId:number = 1,
    ){  
        var accessId : number = 4;
        let randomid = Math.floor(Math.random() * 100000000);
        let realOfTheConceptId = 0;
        let realToTheConceptId = 0;
        let isRealConnection = true;
        let realTypeId = 0;
        if(ofTheConceptId < 0 ){
            let ofTheConcept = await LocalConceptsData.GetConceptByGhostId(ofTheConceptId);
            console.log("tHIS IS THE OF THE CONCEPT IN CONNECTION", ofTheConcept);
            if(ofTheConcept.id != 0){
                if(ofTheConcept.id != ofTheConcept.ghostId){
                    realOfTheConceptId = ofTheConcept.id;
                }
                else{
                    realOfTheConceptId = ofTheConceptId;
                    LocalSyncData.AddConcept(ofTheConcept);
                }
            }
            else{
                isRealConnection = false;

                realOfTheConceptId = ofTheConceptId;
            }

        }
        else{
            realOfTheConceptId = ofTheConceptId;
        }

        if(toTheConceptId < 0 ){
            let toTheConcept = await LocalConceptsData.GetConceptByGhostId(toTheConceptId);
            console.log("tHIS IS THE TO THE CONCEPT IN CONNECTION", toTheConcept);
            if(toTheConcept.id != 0){

                if(toTheConcept.id != toTheConcept.ghostId){
                    realToTheConceptId = toTheConcept.id;
                }
                else{
                    realToTheConceptId = toTheConceptId;
                    LocalSyncData.AddConcept(toTheConcept);
                }
            }
            else{
                isRealConnection = false;

                realOfTheConceptId = toTheConceptId;
            }
        }
        else{
            realToTheConceptId = toTheConceptId;
        }
        
        if(typeId < 0 ){
            let typeConcept = await LocalConceptsData.GetConceptByGhostId(typeId);
             console.log("tHIS IS THE TYPE CONCEPT IN CONNECTION", typeConcept);
            if(typeConcept.id != 0){
                if(typeConcept.id != typeConcept.ghostId){
                    realTypeId = typeConcept.id;
                }
                else{
                    realTypeId = typeId;
                    LocalSyncData.AddConcept(typeConcept);
                }
            }
            else{
                isRealConnection = false;

                realTypeId = typeId;
            }

        }
        else{
            realTypeId = typeId;
        }



        if(realOfTheConceptId != realToTheConceptId){
            var connection = new LConnection(randomid, realOfTheConceptId, realToTheConceptId, realTypeId, orderId, accessId);
            connection.isTemp = true;
            console.log("this is the connection created", connection);
            LocalConnectionData.AddConnection(connection);
            storeToDatabase("localconnection", connection);
            console.log("this is the connection reality", isRealConnection);

            if(isRealConnection){
                LocalSyncData.AddConnection(connection);

            }
            return connection;
        }
      
}