import { Connection } from "../DataStructures/Connection";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConceptByCharacterAndCategory } from "../Api/SearchConcept/GetConceptByCharacterAndCategory";

export async function GetRelation(id:number, relation:string, inpage:number=10, page:number=1){
    var output: any[] = [];
    var  concept:Concept = await GetTheConcept(id);
    var relatedConceptString = await GetConceptByCharacterAndCategory(relation);
    var relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      var connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      var connections = connectionsString as Connection[];
      var prefetch :number[] = [];
      for(var i=0; i<connections.length; i++){
        prefetch.push(connections[i].toTheConceptId);
      }
      await GetAllConnectionsOfCompositionBulk(prefetch);
      for(var i=0; i<connections.length; i++){
        let toConceptId = connections[i].toTheConceptId;
        let toConcept = await GetTheConcept(toConceptId);
        let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
        output.push(newComposition);
      }
    }
    return  output;
}

export async function GetRelationRaw(id:number, relation:string, inpage:number=10, page:number=1){
  var output: Concept[] = [];
  var  concept:Concept = await GetTheConcept(id);
  var relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  var relatedConcept = relatedConceptString as Concept;
  if(relatedConcept.id > 0){
    var connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
    var connections = connectionsString as Connection[];
    var prefetch :number[] = [];
    for(var i=0; i<connections.length; i++){
      prefetch.push(connections[i].toTheConceptId);
    }
    for(var i=0; i<connections.length; i++){
      let toConceptId = connections[i].toTheConceptId;
      let toConcept = await GetTheConcept(toConceptId);
      output.push(toConcept);
    }
  }
  return  output;
}
