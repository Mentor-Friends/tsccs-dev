import { Connection } from "../DataStructures/Connection";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConceptByCharacterAndCategory } from "./ConceptFinding/GetConceptByCharacterAndCategory";
import { GetConceptBulk, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";
import { GetConnectionToTheConcept } from "../Api/GetConnectionToTheConcept";

export async function GetRelation(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
  const logData : any = Logger.logfunction("GetRelation",arguments) || {};
  if (serviceWorker) {
    logData.serviceWorker = true;
    try {
      const res: any = await sendMessage('GetRelation', {id, relation, inpage, page, reverse})
      Logger.logUpdate(logData);
      return res.data
    } catch (error) {
      console.error('GetRelation error sw: ', error)
      UpdatePackageLogWithError(logData, 'GetRelation', error);
      handleServiceWorkerException(error)
    }
  }
    let output: any[] = [];
    let  concept:Concept = await GetTheConcept(id);
    let relatedConceptString = await GetConceptByCharacterAndCategory(relation);
    let relatedConcept = relatedConceptString as Concept;
    let connections:Connection[] = [];
    if(relatedConcept.id > 0){

      if(reverse){
        let connectionsString = await GetConnectionToTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
        connections = connectionsString as Connection[];
        let prefetch :number[] = [];
        for(var i=0; i<connections.length; i++){
          prefetch.push(connections[i].ofTheConceptId);
        }
        await GetAllConnectionsOfCompositionBulk(prefetch);
        for(let i=0; i<connections.length; i++){
          let ofTheConceptId = connections[i].ofTheConceptId;
          let ofConcept = await GetTheConcept(ofTheConceptId);
          let newComposition = await GetCompositionWithIdAndDateFromMemory(ofConcept.id);
          output.push(newComposition);
        }
      }
      else{
        let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
        connections = connectionsString as Connection[];
        let prefetch :number[] = [];
        for(let i=0; i<connections.length; i++){
          prefetch.push(connections[i].toTheConceptId);
        }
        await GetAllConnectionsOfCompositionBulk(prefetch);
        for(let i=0; i<connections.length; i++){
          let toConceptId = connections[i].toTheConceptId;
          let toConcept = await GetTheConcept(toConceptId);
          let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
          output.push(newComposition);
        }
      }

    }
    Logger.logUpdate(logData);
    return  output;
}

export async function GetRelationRaw(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
  const logData : any = Logger.logfunction("GetRelationRaw",arguments) || {};
  if (serviceWorker) {
    logData.serviceWorker = true;
    try {
      const res: any = await sendMessage('GetRelationRaw', {id, relation, inpage, page, reverse})
      Logger.logUpdate(logData); 
      return res.data
    } catch (error) {
      console.error('GetRelationRaw error sw: ', error)
      UpdatePackageLogWithError(logData, 'GetRelationRaw', error);
      handleServiceWorkerException(error)
    }
  }
  let output: Concept[] = [];
  let  concept:Concept = await GetTheConcept(id);
  let relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  let relatedConcept = relatedConceptString as Concept;
  let connections:Connection[] = [];
  let prefetch :number[] = [];
  if(relatedConcept.id > 0){
    if(reverse){
      let connectionsString = await GetConnectionToTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
      for(var i=0; i<connections.length; i++){
        prefetch.push(connections[i].ofTheConceptId);
      }
    }
    else{
      let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
      for(let i=0; i<connections.length; i++){
        prefetch.push(connections[i].toTheConceptId);
      }
    }
    output = await GetConceptBulk(prefetch);

  }
  Logger.logUpdate(logData);
  return  output;
}
