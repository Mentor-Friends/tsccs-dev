import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection, GetConnectionBulk, GetTheConcept } from "../../app";
import { GetCompositionFromConnectionsWithDataIdInObject } from "../GetCompositionBulk";

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string=""){
  let concepts:any[] = [];
  let conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
  let mainCompositionId = searchQuery[0].composition;
  const result = conceptsConnections;
  let conceptIds = result.compositionIds;
  let connections = result.internalConnections;
  let linkers = result.linkers;
  let reverse = result.reverse;
  concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds,connections);
  let out = await FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
  return out;
}

export async function FormatFromConnections(linkers:number[], compositionData: any[], mainComposition: number, reverse: number [] = []){
  let mainData: any = {};
  let connections = await GetConnectionBulk(linkers);
  for(let i=0 ; i< connections.length; i++){
    let reverseFlag = false;
    if(reverse.includes(connections[i].id)){
      console.log("this includes", connections[i]);
      reverseFlag = true;
    }
    if(reverse){

      console.log("in the reerse condition", connections[i]);
      if(compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]){
        console.log("in the reerse condition inside", connections[i]);
        let mydata = compositionData[connections[i].toTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
        let newData = mydata?.data;
        let key = Object.keys(newData)[0];
        console.log("in the reerse key inside", key);
        try{
          let reverseCharater = linkerConcept.characterValue + "_reverse";
          if(typeof newData === "string"){
            newData = {};
          }
            if(Array.isArray(newData[key][reverseCharater])){
              newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
            }
            else{
              if(typeof newData[key] === "string"){
  
                newData[key] = {};
              }
  
              newData[key][reverseCharater] = [];
              newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
            }

            console.log("this is the reverse new Data", newData);
  
        }
        catch(ex){
          console.log("this is error", ex);
        }
      }
    }
    else{
      if(compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]){
        let mydata = compositionData[connections[i].ofTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
        let newData = mydata?.data;
        let key = Object.keys(newData)[0];
        try{
  
          if(typeof newData === "string"){
            newData = {};
          }
            if(Array.isArray(newData[key][linkerConcept.characterValue])){
              newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
            }
            else{
              if(typeof newData[key] === "string"){
  
                newData[key] = {};
              }
  
              newData[key][linkerConcept.characterValue] = [];
              newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
            }
  
        }
        catch(ex){
          console.log("this is error", ex);
        }
  
      }
    }

  }
  mainData = compositionData[mainComposition];
  return mainData;
}


