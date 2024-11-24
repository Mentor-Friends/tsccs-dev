import { Connection } from "../DataStructures/Connection";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { sendMessage, serviceWorker } from "../app";

export async function GetLink(id:number, linker:string, inpage:number=10, page:number=1){
  if (serviceWorker) {
    const res: any = await sendMessage('GetLink', {id, linker, inpage, page})
    console.log('data received from sw', res)
    return res.data
  }

    let output: any[] = [];
    let  concept:Concept = await GetTheConcept(id);
    let linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
    let relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
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


export async function GetLinkRaw(id:number, linker:string, inpage:number=10, page:number=1){
  let output: Concept[] = [];
  let  concept:Concept = await GetTheConcept(id);
  let linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
  let relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
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
