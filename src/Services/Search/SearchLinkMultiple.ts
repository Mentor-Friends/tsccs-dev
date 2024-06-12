import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { GetConnectionBulk, GetTheConcept } from "../../app";
<<<<<<< HEAD
import {  GetCompositionFromConnectionsWithDataIdInObject } from "../GetCompositionBulk";
=======
import { GetCompositionFromConnectionsWithDataIdInObject } from "../GetCompositionBulk";
>>>>>>> 70182880e443124114673458e142acbe911fcab1

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string=""){
  var concepts:any[] = [];
  var conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
  let mainCompositionId = searchQuery[0].composition;
  const result = conceptsConnections;
  var conceptIds = result.compositionIds;
  var connections = result.internalConnections;
  var linkers = result.linkers;
  concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds,connections);
  let out = await FormatFromConnections(linkers, concepts, mainCompositionId);
  return out;
}

<<<<<<< HEAD

=======
>>>>>>> 70182880e443124114673458e142acbe911fcab1
export async function FormatFromConnections(linkers:number[], compositionData: any[], mainComposition: number){
  let mainData: any;
  let connections = await GetConnectionBulk(linkers);
  for(let i=0 ; i< connections.length; i++){
    if(compositionData[connections[i].ofTheConceptId]){
      let mydata = compositionData[connections[i].ofTheConceptId];
      let linkerConcept = await GetTheConcept(connections[i].typeId);
      let newData = mydata?.data;
      let key = Object.keys(newData)[0];
      if(Array.isArray(newData[key][linkerConcept.characterValue])){
        newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
      }
      else{
        newData[key][linkerConcept.characterValue] = [];
        newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
      }

    }
  }
  mainData = compositionData[mainComposition];
  return mainData;
}