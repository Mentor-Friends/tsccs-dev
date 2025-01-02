import { Connection } from "../DataStructures/Connection";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConceptByCharacterAndCategory } from "./ConceptFinding/GetConceptByCharacterAndCategory";
import { handleServiceWorkerException, sendMessage, serviceWorker } from "../app";

export async function GetRelation(id:number, relation:string, inpage:number=10, page:number=1){
  if (serviceWorker) {
    try {
      const res: any = await sendMessage('GetRelation', {id, relation, inpage, page})
      return res.data
    } catch (error) {
      console.error('GetRelation error sw: ', error)
      handleServiceWorkerException(error)
    }
  }
    let output: any[] = [];
    let  concept:Concept = await GetTheConcept(id);
    let relatedConceptString = await GetConceptByCharacterAndCategory(relation);
    let relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      let connections = connectionsString as Connection[];
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
    return  output;
}

export async function GetRelationRaw(id:number, relation:string, inpage:number=10, page:number=1){
  if (serviceWorker) {
    try {
      const res: any = await sendMessage('GetRelationRaw', {id, relation, inpage, page})
      return res.data
    } catch (error) {
      console.error('GetRelationRaw error sw: ', error)
      handleServiceWorkerException(error)
    }
  }
  let output: Concept[] = [];
  let  concept:Concept = await GetTheConcept(id);
  let relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  let relatedConcept = relatedConceptString as Concept;
  if(relatedConcept.id > 0){
    let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
    let connections = connectionsString as Connection[];
    let prefetch :number[] = [];
    for(let i=0; i<connections.length; i++){
      prefetch.push(connections[i].toTheConceptId);
    }
    for(let i=0; i<connections.length; i++){
      let toConceptId = connections[i].toTheConceptId;
      let toConcept = await GetTheConcept(toConceptId);
      output.push(toConcept);
    }
  }
  return  output;
}
