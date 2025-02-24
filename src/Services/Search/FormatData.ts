import { Connection, GetTheConcept } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";

  /**
   * 
   * ## Format Normal ##
   * This function takes in the connections and then converts the connections to the single level objects for further processing
   * This function is the builder of the arrays/ objects from the connections.
   */
  export async function formatFunction(connections: Connection[], compositionData: any, reverse: number[]){
    let myConcepts: number[] = [];
    for(let i=0 ; i< connections.length; i++){
      myConcepts.push(connections[i].toTheConceptId);
      myConcepts.push(connections[i].ofTheConceptId)
      myConcepts.push(connections[i].typeId);
    }

  
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
            let mytype = ofTheConcept?.type?.characterValue ?? "none";
            let value = ofTheConcept.characterValue;
            let data = {
                  [mytype] : value
          }
            let reverseCharater = linkerConcept.characterValue + "_reverse";

                if(linkerConcept.characterValue.includes("_s_")){
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


   /**
   * 
   * ## Format Normal ##
   * This function takes in the connections and then converts the connections to the single level objects for further processing
   * This function is the builder of the arrays/ objects from the connections.
   */
   export async function formatFunctionForData(connections: Connection[], compositionData: any, reverse: number[]){

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
            if(!(key in newData)){
              newData[key] = {};
            }
          }
          else{
            newData = {};
            newData[key] = {};
            compositionData[connections[i].toTheConceptId] = newData;
  
          }
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          try{
            let mytype = ofTheConcept?.type?.characterValue ?? "none";
            let value = ofTheConcept.characterValue;
            let dataCharacter = linkerConcept.characterValue;
            if (dataCharacter == "")
              {
                  dataCharacter = mytype;
                  dataCharacter = removeThePrefix(dataCharacter);
              }
            let data = {
                  [mytype] : value
          }
            let reverseCharater = dataCharacter + "_reverse";

                if(linkerConcept.characterValue.includes("_s_")){
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
          let linkerConcept = await GetTheConcept(connections[i].typeId);
          try{
            let mytype = toTheConcept?.type?.characterValue ?? "none";
            let value = toTheConcept.characterValue;
            let dataCharacter = linkerConcept.characterValue;
            let originalDataCharacter = linkerConcept.characterValue;
            let isComp = false;
            if (dataCharacter == "")
            {
                dataCharacter = mytype;
                dataCharacter = removeThePrefix(dataCharacter);
                isComp = true;
            }
            let data = {
                  [mytype] : value
                }

            if(isNaN(Number(dataCharacter))){
              if(linkerConcept.characterValue.includes("_s_")){
                // do nothing
              }
              else{
                if(typeof newData[key] == "string"){
                  newData[key] = {};
                }
                if(isComp){
                  newData[key][dataCharacter] = value;

                }
                else{
                  newData[key][dataCharacter] = data;

                }
              }
            }
            else{
              if(Array.isArray(newData[key])){
                newData[key].push(value);

              }else{
                newData[key] = [];
                newData[key].push(value);
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
 * ######### Format is normal ######### used for listing. This only provides type connections.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns 
 */
export async function FormatConceptsAndConnectionsNormalList(connections: Connection[] = [],compositionData: any[] = [],  mainComposition: number[] = [], newCompositionData: any, reverse: number [] = []){
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
          if(toTheConcept.id in compositionData){
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
              let data = compositionData[connections[i].ofTheConceptId];
              if(data){
                if(Array.isArray(newData[key][reverseCharater])){
                  newData[key][reverseCharater].push(data);

              }
              else{
                if(linkerConcept.characterValue.includes("_s_")){
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
  
            let key = ofTheConcept.type?.characterValue ?? "self";
            if(connections[i].ofTheConceptId in compositionData){
              newData = compositionData[connections[i].ofTheConceptId];
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
            let linkerConcept = await GetTheConcept(connections[i].typeId);
            let isComp = false;
            let linkerConceptValue = linkerConcept.characterValue;
            if(linkerConceptValue == ""){
              linkerConceptValue = toTheConcept.characterValue;
              isComp = true;
            }
            if(linkerConceptValue == ""){
              linkerConceptValue = toTheConcept?.type?.characterValue ?? "";
            }

            try{
                let data = compositionData[connections[i].toTheConceptId]
                if(data){
                  if(Array.isArray(newData[key])){
                    if(isComp){
                      newData[key].push(data[linkerConceptValue]);
  
                    }
                    else{
                      newData[key].push(data);
  
                    }
  
                  }
                  else{
                      if(Array.isArray(newData[key][linkerConceptValue])){
                        newData[key][linkerConceptValue].push(data);
                    }
                    else{
    
                      if(linkerConceptValue.includes("_s_")){
                        newData[key][linkerConceptValue] = [];
                        if(isComp){
                          newData[key][linkerConceptValue].push(data[linkerConceptValue]);
                        }
                        else{
                          newData[key][linkerConceptValue].push(data);
    
                        }
                      }
                      else{
                        if(isComp){
                          newData[key][linkerConceptValue] = data[linkerConceptValue];
    
                        }
                        else{
                          newData[key][linkerConceptValue] = data;
    
                        }
      
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
      let mymainData = compositionData[mainComposition[i]];
      if(mymainData){
        mymainData["id"] = mainComposition[i];
        mainData.push(mymainData);
      }

      
    }

    return mainData;
  
  }
