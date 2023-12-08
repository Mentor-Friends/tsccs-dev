import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

export async function CreateConnectionBetweenTwoConcepts(concept1Data: Concept, concept2Data: Concept, linker:string, both:boolean = false){

        var userId:number = concept1Data.userId;
        var orderUserId: number = userId;
        var securityId: number = 999;
        var securityUserId: number = userId;
        var accessId: number = 4;
        var accessUserId: number = userId;
        var sessionInformationId = 999;
        var sessionInformationUserId = 999;
        if(both){
            let prefix1: string = concept1Data.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  

            var connectionConceptReverse = await MakeTheInstanceConcept("connection",backwardLinker,false,999,999,999);
            var newConnection = new Connection(0,concept2Data.id, concept1Data.id,concept2Data.userId, concept1Data.userId, concept2Data.userId,
               connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
            SyncData.AddConnection(newConnection);
        }
        let prefix: string = concept1Data.type?.characterValue + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;

        var connectionConcept = await MakeTheInstanceConcept("connection",forwardLinker,false,999,999,999);
        var newConnection = new Connection(0,concept1Data.id, concept2Data.id,concept1Data.userId, concept2Data.userId, concept1Data.userId,
           connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
        SyncData.AddConnection(newConnection);
        }