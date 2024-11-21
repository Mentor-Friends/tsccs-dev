import { Connection, GetTheConcept } from "../../app";

/**
 * ######### Format is normal ######### used for listing. This only provides type connections.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns 
 */
export async function FormatConceptsAndConnectionsNormalList(connections: Connection[],compositionData: any[],  mainComposition: number[], reverse: number [] = []){
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
  
      let ofTheConcept = await GetTheConcept(connections[i].ofTheConceptId);
      let toTheConcept = await GetTheConcept(connections[i].toTheConceptId);
      if(reverseFlag == true){
  
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          let newData: any;
          let key = toTheConcept.type?.characterValue ?? "self";
  
          if(connections[i].toTheConceptId in compositionData){
            newData = compositionData[connections[i].toTheConceptId]
          }
          else{
            newData = {};
            newData[key] = {};
            compositionData[connections[i].toTheConceptId] = newData;
  
          }
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          try{
            let reverseCharater = linkerConcept.characterValue + "_reverse";
              if(Array.isArray(newData[key][reverseCharater])){
                newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
              }
              else{
                if(linkerConcept.characterValue.includes("_s_")){
                  newData[key][linkerConcept.characterValue] = [];
                  newData[key][linkerConcept.characterValue].push(ofTheConcept.characterValue);
                }
                else{
                  newData[key][linkerConcept.characterValue] = ofTheConcept.characterValue;
                }
              }
  
    
          }
          catch(ex){
            console.log("this is error", ex);
          }
        }
      }
      else
      {
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          let newData: any;
  
          let key = ofTheConcept.type?.characterValue ?? "self";
  
          if(connections[i].ofTheConceptId in compositionData){
            newData = compositionData[connections[i].ofTheConceptId]
          }
          else{
            newData = {};
            newData[key] = {};
            compositionData[connections[i].ofTheConceptId] = newData;
          }
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          try{
    
              if(Array.isArray(newData[key][linkerConcept.characterValue])){
                newData[key][linkerConcept.characterValue].push(toTheConcept.characterValue);
              }
              else{
                if(linkerConcept.characterValue.includes("_s_")){
                  newData[key][linkerConcept.characterValue] = [];
                  newData[key][linkerConcept.characterValue].push(toTheConcept.characterValue);
                }
                else{
                  newData[key][linkerConcept.characterValue] = toTheConcept.characterValue;
                }
  
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
export async function FormatFromConnectionsAlteredArrayExternal(connections:Connection[], compositionData: any[], mainComposition: number[], reverse: number [] = []){
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
      let ofTheConcept = await GetTheConcept(connections[i].ofTheConceptId);
      let toTheConcept = await GetTheConcept(connections[i].toTheConceptId);
      if(reverse.includes(connections[i].id)){
        reverseFlag = true;
      }
      if(reverseFlag == true){
  
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
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
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          let newData: any;
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          let key = ofTheConcept.type?.characterValue ?? "self";
  
          if(connections[i].ofTheConceptId in compositionData){
            newData = compositionData[connections[i].ofTheConceptId]
          }
          else{
            newData = {};
            newData[key] = {};
            compositionData[connections[i].ofTheConceptId] = newData;
          }
          try{
    
              if(Array.isArray(newData[key][linkerConcept.characterValue])){
                newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
              }
              else{
                let type = toTheConcept?.type?.characterValue ?? "none";
                let value = toTheConcept.characterValue;
                let data = {
                    "id": toTheConcept.id,
                    "data": {
                        type : value
                    }
                }
                if(linkerConcept.characterValue.includes("_s_")){
                    newData[key][linkerConcept.characterValue] = [];
                    newData[key][linkerConcept.characterValue].push(data);
                }
                else{
                    newData[key][linkerConcept.characterValue] = data;
                }
                
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
  
  