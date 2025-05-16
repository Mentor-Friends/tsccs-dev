import { Connection } from "../DataStructures/Connection";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConceptByCharacterAndCategory } from "./ConceptFinding/GetConceptByCharacterAndCategory";
import { GetConnectionToTheConcept } from "../Api/GetConnectionToTheConcept";
import { GetConceptBulk } from "../app";

export async function GetRelation(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
    let output: any[] = [];
    let  concept:Concept = await GetTheConcept(id);
    let relatedConceptString = await GetConceptByCharacterAndCategory(relation);
    let relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      let prefetch :number[] = [];
      let connections:Connection[] = [];
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
        for(var i=0; i<connections.length; i++){
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
    return  output;
}

export async function GetRelationRaw(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
  var output: Concept[] = [];
  var  concept:Concept = await GetTheConcept(id);
  var relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  var relatedConcept = relatedConceptString as Concept;
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
      for(var i=0; i<connections.length; i++){
        prefetch.push(connections[i].toTheConceptId);
      }
    }
   output = await GetConceptBulk(prefetch);
  }
  return  output;
}
