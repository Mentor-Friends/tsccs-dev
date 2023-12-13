import { Connection } from "../DataStructures/Connection";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetComposition, GetCompositionWithId } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";

export async function GetLink(id:number, linker:string){
    var output: any[] = [];
    var  concept:Concept = await GetTheConcept(id);
    var linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
    var relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
    var relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      var connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId);
      var connections = connectionsString as Connection[];
      for(var i=0; i<connections.length; i++){
        let toConceptId = connections[i].toTheConceptId;
        let toConcept = await GetTheConcept(toConceptId);
        let newComposition = await GetCompositionWithId(toConcept.id);
        output.push(newComposition);
      }
    }
    return  output;
}