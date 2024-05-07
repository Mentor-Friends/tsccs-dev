import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import { DeleteConnectionById } from "./DeleteConnection";
import GetTheConcept from "./GetTheConcept";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

export async function CreateConnectionBetweenTwoConcepts(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false, count:boolean = false){

        var userId:number = ofTheConcept.userId;
        var orderUserId: number = userId;
        var securityId: number = 999;
        var securityUserId: number = userId;
        var accessId: number = 4;
        var accessUserId: number = userId;
        var sessionInformationId = 999;
        var sessionInformationUserId = 999;
        if(both){
            let prefix1: string = toTheConcept.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  
            if(count){
               await CountRelationship(linkerAdd1, toTheConcept, userId);
              }
              console.log("this is the backward linker", backwardLinker);
              console.log("this is the backward concept", toTheConcept);
            var connectionConceptReverse = await MakeTheInstanceConcept("connection",backwardLinker,false,999,999,999);
            let newConnection = new Connection(0,toTheConcept.id, ofTheConcept.id,toTheConcept.userId, ofTheConcept.userId, toTheConcept.userId,
               connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
            SyncData.AddConnection(newConnection);
        }
        let prefix: string = ofTheConcept.type?.characterValue + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if(count){
         await CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        var connectionConcept = await MakeTheInstanceConcept("connection",forwardLinker,false,999,999,999);
        let newConnection = new Connection(0,ofTheConcept.id, toTheConcept.id,ofTheConcept.userId, toTheConcept.userId, ofTheConcept.userId,
           connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
        SyncData.AddConnection(newConnection);
        }


export async function CountRelationship(linker: string, concept:Concept, passedUserId: number | null = null){
   var concept1:Concept = concept; 
   var userId:number = passedUserId ?? concept.userId;
   var orderUserId: number = userId;
   var securityId: number = 999;
   var securityUserId: number = userId;
   var accessId: number = 4;
   var accessUserId: number = userId;
   var sessionInformationId = 999;
   var sessionInformationUserId = 999;
   var forwardLinkerCount:string = linker + "_count";
   var forwardLinkerCountString = concept.type?.characterValue +  "_s" + "_" + forwardLinkerCount;
   var forwardLinkerCountConcept = await MakeTheInstanceConcept("connection",forwardLinkerCountString,false,userId,accessId,sessionInformationId);

   var connectionsString = await GetConnectionOfTheConcept(forwardLinkerCountConcept.id, concept.id, userId, 10, 1);
   var connections = connectionsString as Connection[];
   var prefetch :number[] = [];
   var countConceptList:Concept[] = [];
   var countConcept = CreateDefaultConcept();
   for(var i=0; i<connections.length; i++){
     let toConcept = await GetTheConcept(connections[i].toTheConceptId);
     countConceptList.push(toConcept);
   }
   if(countConceptList.length < 1){
       countConcept = await MakeTheInstanceConcept("count", "1", false, userId, accessId,sessionInformationId);

   }
   else{
      var oldcountConcept = countConceptList[0];
      let count:number = 0;
      try{
         count = Number(oldcountConcept.characterValue);
      }
      catch(ex){
         count = 0;
      }
      count = count + 1;
      countConcept = await MakeTheInstanceConcept("count", count.toString(), false, userId, accessId, sessionInformationId );
      for(let i=0; i<connections.length; i++){
         DeleteConnectionById(connections[i].id);
      }
   
   }
   let newConnection = new Connection(0,concept1.id, countConcept.id,concept1.userId, countConcept.userId, concept1.userId,
      forwardLinkerCountConcept.id, forwardLinkerCountConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
   await SyncData.AddConnection(newConnection);


}