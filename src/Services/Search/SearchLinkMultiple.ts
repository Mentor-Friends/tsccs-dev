import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { DATAID, JUSTDATA, NORMAL } from "../../Constants/FormatConstants";
import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection, GetConceptBulk, GetConnectionBulk, GetTheConcept, sendMessage, serviceWorker } from "../../app";
import { GetCompositionFromConnectionsInObject, GetCompositionFromConnectionsInObjectNormal, GetCompositionFromConnectionsWithDataIdInObject, GetCompositionFromConnectionsWithDataIdInObjectNew, GetConnectionDataPrefetch } from "../GetCompositionBulk";

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string="", caller:any = null, format:number = DATAID){
  if (serviceWorker) {
    const res: any = await sendMessage('SearchLinkMultipleAll', {searchQuery, token, caller, format})
    console.log('data received search from sw', res)
    return res.data
  }

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
        if(caller){
          caller.conceptIds = conceptsConnections.compositionIds?.slice();
          caller.internalConnections = conceptsConnections.internalConnections?.slice();
          caller.linkers = conceptsConnections.linkers?.slice();
          caller.reverse = conceptsConnections.reverse?.slice();
          caller.isDataLoaded = true;
        }

         result = conceptsConnections;

         conceptIds = result.compositionIds ;
         connections = result.internalConnections ;
         linkers = result.linkers;
         reverse = result.reverse;
    }

    



      
    let out = await DataIdBuildLayer(linkers, conceptIds, connections, reverse, mainCompositionId, format);
    return out;
  }
  catch(e){
    console.log("this is the error in the search link multiple", e);
    throw e;
  }


}

/**
 * ######### This layer builds the data. Format is dataid ##########
 * @param linkers list of ids that help us 
 * @param conceptIds this is all the concept ids that need  to be composited 
 * @param connections these are the internal connections of the compositions that help in creating individual compositions
 * @param reverse this is the list of connection ids that need to show reverse connections(to->from)
 * @param mainCompositionId this is the main centre point of this data.
 * @returns 
 */
export async function DataIdBuildLayer(linkers: number [], conceptIds: number[], connections: number[], reverse:number[], mainCompositionId: number, format: number = DATAID){
  let startTime = new Date().getTime();
  let prefetchConnections = await GetConnectionDataPrefetch(linkers);
  let concepts: any;
  let out: any;
  if(format == JUSTDATA){
    concepts = await GetCompositionFromConnectionsInObject(conceptIds, connections);
     out = await FormatFromConnections(linkers, concepts, mainCompositionId, reverse);

  } 
  else if (format == NORMAL){
     concepts = await GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
     out = await FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
  }
  else if(format == 100){
    concepts = await GetCompositionFromConnectionsWithDataIdInObjectNew(conceptIds, connections);


    out = await FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
  }
  else{
    concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
     out = await FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
 }

  return out;
}


/**
 * ## Format is DATAID ##
 * This  is altered format and is different from others because it passes all the connections prebuilt/prefetched
 * This will not let the connections to be again fetched from the memory.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is the id of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
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

/**
 * ######### Format is normal ######### used for listing.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns 
 */
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



/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns 
 */
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



/**
 * ########## Format works with JUSTDATA / NORMAL ########### used for single origin concept
 * @param linkers this is the list of linkers that 
 * @param compositionData 
 * @param mainComposition 
 * @param reverse list of connection ids that need to show reverse conneciton.
 * @returns 
 */
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
        let newData = mydata;
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
        let newData = mydata;
       // console.log("this is the new data", newData);
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


