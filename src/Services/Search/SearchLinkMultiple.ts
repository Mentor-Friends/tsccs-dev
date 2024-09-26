import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection, GetConceptBulk, GetConnectionBulk, GetTheConcept } from "../../app";
import { GetCompositionFromConnectionsWithDataIdInObject, GetConnectionDataPrefetch } from "../GetCompositionBulk";

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string=""){
  let concepts:any[] = [];
  try{
    let startTime = new Date().getTime();

    let conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
    let mainCompositionId = searchQuery[0].composition;
    const result = conceptsConnections;
    let conceptIds = result.compositionIds;
    let connections = result.internalConnections;
    let linkers = result.linkers;
    let reverse = result.reverse;
    const [prefetchConnections, concepts] = await Promise.all([
      GetConnectionDataPrefetch(linkers),
      GetCompositionFromConnectionsWithDataIdInObject(conceptIds,connections)
  ]);
    let out = await FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
    console.log("this is the end time for searching data", new Date().getTime() - startTime);
    return out;
  }
  catch(e){
    console.log("this is the error in the search link multiple", e);
    throw e;
  }


}




export async function FormatFromConnections(linkers:number[], compositionData: any[], mainComposition: number, reverse: number [] = []){
  let mainData: any = {};
  let connections = await GetConnectionBulk(linkers);
  let myConcepts: number[] = [];
  for(let i=0 ; i< connections.length; i++){
    myConcepts.push(connections[i].toTheConceptId);
    myConcepts.push(connections[i].ofTheConceptId)
    myConcepts.push(connections[i].typeId);
  }
  await GetConceptBulk(myConcepts);
  connections.sort(function(x: Connection, y:Connection){
    return y.id - x.id;
  })
  for(let i=0 ; i< connections.length; i++){
    let reverseFlag = false;
    if(reverse.includes(connections[i].id)){
      reverseFlag = true;
    }
    if(reverseFlag == true){

      if(compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]){
        let mydata = compositionData[connections[i].toTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
        let newData = mydata?.data;
        let key = Object.keys(newData)[0];
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

  
        }
        catch(ex){
          console.log("this is error", ex);
        }
      }
    }
    else
    {
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


