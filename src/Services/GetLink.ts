import { Connection } from "../DataStructures/Connection";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetComposition, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";

export async function GetLink(id:number, linker:string, inpage:number=10, page:number=1){
    var output: any[] = [];
    var  concept:Concept = await GetTheConcept(id);
    var linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
    var relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
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
        console.log("this is the to concept id ",toConceptId);
        let toConcept = await GetTheConcept(toConceptId);
        let newComposition = await GetCompositionWithIdFromMemory(toConcept.id);
        output.push(newComposition);
      }
    }
    return  output;
}