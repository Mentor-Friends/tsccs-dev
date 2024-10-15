import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection, GetConceptBulk, GetConnectionBulk, GetTheConcept } from "../../app";
import { GetCompositionFromConnectionsWithDataIdInObject, GetConnectionDataPrefetch } from "../GetCompositionBulk";

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string="", caller:any = null){
  let conceptIds: number[] = [];
  let linkers: number [] = [];
  let connections: number[] = [];
  let reverse: number[] = [];
  let mainCompositionId: number = searchQuery[0].composition;
  let conceptsConnections: any = {} ;
  let result: any = {};
  try{
    if(caller?.isDataLoaded){
        conceptsConnections.compositionIds = caller.conceptIds?.slice();
        conceptsConnections.internalConnections = caller.internalConnections?.slice();
        conceptsConnections.linkers = caller.linkers?.slice();
        conceptsConnections.reverse = caller.reverse?.slice();
        result = conceptsConnections;
        conceptIds = result.compositionIds ;
        connections = result.internalConnections ;
        linkers = result.linkers;
        reverse = result.reverse;

    }
    else{
        conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
         caller.conceptIds = conceptsConnections.compositionIds?.slice();
         caller.internalConnections = conceptsConnections.internalConnections?.slice();
         caller.linkers = conceptsConnections.linkers?.slice();
         caller.reverse = conceptsConnections.reverse?.slice();
         caller.isDataLoaded = true;
         result = conceptsConnections;

         conceptIds = result.compositionIds ;
         connections = result.internalConnections ;
         linkers = result.linkers;
         reverse = result.reverse;
    }

    



      
    console.log("this is the input to data layer", linkers, conceptIds, connections, mainCompositionId);
    let out = await DataIdBuildLayer(linkers, conceptIds, connections, reverse, mainCompositionId);
    return out;
  }
  catch(e){
    console.log("this is the error in the search link multiple", e);
    throw e;
  }


}


export async function DataIdBuildLayer(linkers: number [], conceptIds: number[], connections: number[], reverse:number[], mainCompositionId: number){
  let prefetchConnections = await GetConnectionDataPrefetch(linkers);
  let concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
  let out = await FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
  return out;
}


export async function FormatFromConnectionsAltered(connections:Connection[], compositionData: any[], mainComposition: number, reverse: number [] = []){
  let startTime = new Date().getTime();
  let mainData: any = {};
  let myConcepts: number[] = [];
  for(let i=0 ; i< connections.length; i++){
    myConcepts.push(connections[i].toTheConceptId);
    myConcepts.push(connections[i].ofTheConceptId)
    myConcepts.push(connections[i].typeId);
  }
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

export async function FormatConceptsAndConnections(connections: Connection[], compositionData: any[], mainComposition: number[], reverse: number [] = []){
  let mainData: any[] = [] ;
  let myConcepts: number[] = [];
  for(let i=0 ; i< connections.length; i++){
    myConcepts.push(connections[i].toTheConceptId);
    myConcepts.push(connections[i].ofTheConceptId)
    myConcepts.push(connections[i].typeId);
  }
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
        let newData = compositionData[connections[i].toTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
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
        let newData = compositionData[connections[i].ofTheConceptId];
        let linkerConcept = await GetTheConcept(connections[i].typeId);
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

  for(let i=0 ; i< mainComposition.length; i++){
    let mymainData = compositionData[mainComposition[i]];
    console.log(mainData, mymainData);
    mainData.push(mymainData);
    
  }
  return mainData;

}


export async function FormatFromConnectionsAlteredArray(connections:Connection[], compositionData: any[], conceptIds: number[] , mainComposition: number[], reverse: number [] = []){
  let startTime = new Date().getTime();
  let mainData: any[] = [] ;
  let myConcepts: number[] = [];
  for(let i=0 ; i< connections.length; i++){
    myConcepts.push(connections[i].toTheConceptId);
    myConcepts.push(connections[i].ofTheConceptId)
    myConcepts.push(connections[i].typeId);
  }
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
  for(let i=0 ; i< mainComposition.length; i++){
    let mymainData = compositionData[mainComposition[i]];
    console.log(mainData, mymainData);
    mainData.push(mymainData);
    
  }
  return mainData;
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


