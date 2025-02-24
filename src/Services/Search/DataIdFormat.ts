import { Connection, GetTheConcept } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";

    /**
   * ## Format DATA-ID ##
   * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
   * This is then passed on further for stiching.
   * @param connections 
   * @param compositionData 
   * @param reverse 
   * @returns 
   */
    export async function FormatFunctionDataForData(connections:Connection[], compositionData: any[], reverse: number [] = []){
      let myConcepts: number[] = [];
        for(let i=0 ; i< connections.length; i++){
          myConcepts.push(connections[i].toTheConceptId);
          myConcepts.push(connections[i].ofTheConceptId)
          myConcepts.push(connections[i].typeId);
        }
        for(let i=0 ; i< connections.length; i++){
          let reverseFlag = false;
          let ofTheConcept = await GetTheConcept(connections[i].ofTheConceptId);
          let toTheConcept = await GetTheConcept(connections[i].toTheConceptId);
          if(reverse.includes(connections[i].id)){
            reverseFlag = true;
          }
          if(reverseFlag == true){
      
            if(ofTheConcept.id != 0 && toTheConcept.id != 0){
              let newData: any;
              let linkerConcept = await GetTheConcept(connections[i].typeId);
              let key = toTheConcept.type?.characterValue ?? "self";
              if(connections[i].toTheConceptId in compositionData){
                
                newData = compositionData[connections[i].toTheConceptId]
                if(!(key in newData)){
                  newData[key] = {};
                }
              }
              else{
                newData = {};
                newData[key] = {};
                compositionData[connections[i].toTheConceptId] = newData;
              }
              try{
                let mytype = ofTheConcept?.type?.characterValue ?? "none";
                let value = ofTheConcept.characterValue;
                let dataCharacter = linkerConcept.characterValue;
                
                // if there is not connection type defined then put the type of the destination concept.
                if(dataCharacter == ""){
                  dataCharacter = mytype;
                  dataCharacter = removeThePrefix(dataCharacter);
                }
                let data = {
                    "id": ofTheConcept.id,
                    "data": {
                        [mytype] : value
                    }
                }
                let reverseCharater = dataCharacter + "_reverse";
  
                    if(reverseCharater.includes("_s_")){
                      // do nothing
                  }
                  else{
                      if(typeof newData[key] == "string"){
                        newData[key] = {};
                      }
                      newData[key][reverseCharater] = data;
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
                if(!(key in newData)){
                  newData[key] = {};
                }
              }
              else{
                newData = {};
                newData[key] = {};
                compositionData[connections[i].ofTheConceptId] = newData;
              }
              try{
                let mytype = toTheConcept?.type?.characterValue ?? "none";
                let value = toTheConcept.characterValue;
                let dataCharacter = linkerConcept.characterValue;
                let isComp = false;
                // if there is not connection type defined then put the type of the destination concept.
                if (dataCharacter == "")
                {
                    dataCharacter = mytype;
                    dataCharacter = removeThePrefix(dataCharacter);
                    isComp = true;
                }
                let data = {
                  "id": toTheConcept.id,
                  "data": {
                      [mytype] : value
                  }
                }
                if(isNaN(Number(dataCharacter))){
                  if(dataCharacter.includes("_s_")){
                    // do nothing
                }
                else{
                    if(typeof newData[key] == "string"){
                      newData[key] = {};
                    }
                    newData[key][dataCharacter] = data;
                }

                }
                else{
                  if(Array.isArray(newData[key])){
                    newData[key].push(data);
      
                  }else{
                    newData[key] = [];
                    newData[key].push(data);
                  }
                }

  
              }
              catch(ex){
                console.log("this is error", ex);
              }
        
            }
          }
      
        }
        return compositionData;
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
export async function FormatFromConnectionsAlteredArrayExternal(connections:Connection[], compositionData: any[], newCompositionData: any, mainComposition: number[], reverse: number [] = [],CountDictionary: any[] ){
  let startTime = new Date().getTime();
    let mainData: any[] = [] ;
    let myConcepts: number[] = [];
    for(let i=0 ; i< connections.length; i++){
      myConcepts.push(connections[i].toTheConceptId);
      myConcepts.push(connections[i].ofTheConceptId)
      myConcepts.push(connections[i].typeId);
    }
    for(let i=0 ; i< connections.length; i++){
      let reverseFlag = false;
      let ofTheConcept = await GetTheConcept(connections[i].ofTheConceptId);
      let toTheConcept = await GetTheConcept(connections[i].toTheConceptId);
      if(reverse.includes(connections[i].id)){
        reverseFlag = true;
      }
      if(reverseFlag == true){
  
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          if(toTheConcept.id in compositionData){
            let newData: any;
            let linkerConcept = await GetTheConcept(connections[i].typeId);
            let key = toTheConcept.type?.characterValue ?? "self";
            let flag: boolean = false;
            if(connections[i].toTheConceptId in compositionData){
              flag = true;

            }
            if(connections[i].toTheConceptId in compositionData){
              newData = compositionData[connections[i].toTheConceptId]
              let newType = typeof newData[key];
              if(newType == "string"){
                newData[key] = {};
              }
            }
            else{
              newData = {};
              newData[key] = {};
              compositionData[connections[i].toTheConceptId] = newData;
            }
            try{
              let isComp = compositionData[connections[i].ofTheConceptId];
              if(isComp){
                let data = {
                  "id": ofTheConcept.id,
                  "data": compositionData[connections[i].ofTheConceptId],
                  "created_on": connections[i].entryTimeStamp
                }
                let reverseCharater = linkerConcept.characterValue + "_reverse";
                  if(Array.isArray(newData[key][reverseCharater])){
                    newData[key][reverseCharater].push(data);
                  }
                  else{

                    if(reverseCharater.includes("_s_")){

                      newData[key][reverseCharater] = [];
                      newData[key][reverseCharater].push(data);
                  }
                  else{
                      newData[key][reverseCharater] = data;
                  }
    
    
                  }
              }

    
      
            }
            catch(ex){
              console.log("this is error", ex);
            }
          }
        }
      }
      else
      {
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          if(ofTheConcept.id in compositionData){
            let newData: any;
            let linkerConcept = await GetTheConcept(connections[i].typeId);
            let key = ofTheConcept.type?.characterValue ?? "self";
            let flag: boolean = false;
            if(connections[i].toTheConceptId in compositionData){
              flag = true;
  
            }
            if(connections[i].ofTheConceptId in compositionData){
              newData = compositionData[connections[i].ofTheConceptId]
              let newType = typeof newData[key];
              if(newType == "string"){
                newData[key] = {};
              }
            }
            else{
              newData = {};
              newData[key] = {};
              compositionData[connections[i].ofTheConceptId] = newData;
            }
            let isComp = true;
            let linkerConceptValue = linkerConcept.characterValue;
            if(linkerConceptValue == ""){
              linkerConceptValue = toTheConcept.characterValue;
              isComp = true;
            }
            if(linkerConceptValue == ""){
              linkerConceptValue = toTheConcept?.type?.characterValue ?? "";
            }
            try{
              let mytype = toTheConcept?.type?.characterValue ?? "none";
              let myData = compositionData[connections[i].toTheConceptId];
              if(myData){
                let data = {
                  "id": toTheConcept.id,
                  "data": compositionData[connections[i].toTheConceptId],
                  "created_on": connections[i].entryTimeStamp
              }
              if(Array.isArray(newData[key])){
                if(isComp){
                  newData[key].push(myData);
                }
                else{
                  newData[key].push(myData);
                }
              }
              else{
                if(Array.isArray(newData[key][linkerConceptValue])){
                  newData[key][linkerConcept.characterValue].push(data);
                }
                else{

                  if(linkerConceptValue.includes("_s_")){
                      newData[key][linkerConceptValue] = [];
                      newData[key][linkerConceptValue].push(data);
                  }
                  else{
                      newData[key][linkerConceptValue] = data;
                  }
                  
                }
              }
        

              }
  
      
            }
            catch(ex){
              console.log("this is error", ex);
            }
          }
          
    
        }
      }
  
    }
    for(let i=0 ; i< mainComposition.length; i++){
      let mymainData: any = {};
      mymainData["id"] = mainComposition[i];
      mymainData["data"] = compositionData[mainComposition[i]];
      mainData.push(mymainData);
      
    }
    return mainData;
  }


  
  /**
   * ## Format DATA-ID ##
   * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
   * This is then passed on further for stiching.
   * @param connections 
   * @param compositionData 
   * @param reverse 
   * @returns 
   */
  export async function FormatFunctionData(connections:Connection[], compositionData: any[], reverse: number [] = []){
    let myConcepts: number[] = [];
    for(let i=0 ; i< connections.length; i++){
      myConcepts.push(connections[i].toTheConceptId);
      myConcepts.push(connections[i].ofTheConceptId)
      myConcepts.push(connections[i].typeId);
    }

    for(let i=0 ; i< connections.length; i++){
      let reverseFlag = false;
      let ofTheConcept = await GetTheConcept(connections[i].ofTheConceptId);
      let toTheConcept = await GetTheConcept(connections[i].toTheConceptId);
      if(reverse.includes(connections[i].id)){
        reverseFlag = true;
      }
      if(reverseFlag == true){
  
        if(ofTheConcept.id != 0 && toTheConcept.id != 0){
          let newData: any;
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          let key = toTheConcept.type?.characterValue ?? "self";
          if(connections[i].toTheConceptId in compositionData){
            newData = compositionData[connections[i].toTheConceptId]
          }
          else{
            newData = {};
            newData[key] = {};
            compositionData[connections[i].toTheConceptId] = newData;
          }
          try{
            let mytype = ofTheConcept?.type?.characterValue ?? "none";
            let value = ofTheConcept.characterValue;
            let reverseCharater = linkerConcept.characterValue + "_reverse";

                if(reverseCharater.includes("_s_")){
                  if(!(ofTheConcept.id in compositionData)){
                    compositionData[ofTheConcept.id] = {};
                  }
                  compositionData[ofTheConcept.id][mytype] = value;

                }
                compositionData[toTheConcept.id] = {};


  
    
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
            let mytype = toTheConcept?.type?.characterValue ?? "none";
            let value = toTheConcept.characterValue;
                if(linkerConcept.characterValue.includes("_s_")){
                  if(!(toTheConcept.id in compositionData)){
                    compositionData[toTheConcept.id] = {};
                  }
                  compositionData[toTheConcept.id][mytype] = value;
                }
                compositionData[ofTheConcept.id] = {};

          }
          catch(ex){
            console.log("this is error", ex);
          }
    
        }
      }
  
    }
    return compositionData;
  }
