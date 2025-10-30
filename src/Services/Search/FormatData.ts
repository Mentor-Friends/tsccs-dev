/**
 * @module FormatData
 * @description Provides functions to format connection data into structured composition objects for Normal format output
 */

import { Connection, GetTheConcept } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";

/**
 * Converts connections to single-level objects by processing concepts and their relationships.
 * This is the initial builder function that creates the foundation for composition arrays/objects.
 *
 * @async
 * @param {Connection[]} connections - Array of Connection objects to process
 * @param {any} compositionData - Dictionary object that stores composition data indexed by concept ID
 * @param {number[]} reverse - Array of connection IDs that should be processed in reverse direction
 * @returns {Promise<any>} A promise that resolves to the updated compositionData dictionary
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = {};
 * const reverse = [102];
 * const result = await formatFunction(connections, compositionData, reverse);
 * // result = { 123: { type: "value" }, 456: { type: "data" } }
 * ```
 *
 * @remarks
 * Format: Normal - First pass formatting
 * This function:
 * - Processes each connection to extract concepts
 * - Handles both forward (of->to) and reverse (to->of) directions
 * - Creates initial concept structures without nested data
 * - Special handling for "_s_" linker types (skipped in output)
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
 * Converts connections to single-level objects with nested data relationships.
 * This is the second pass that adds detailed data properties to the composition structure.
 *
 * @async
 * @param {Connection[]} connections - Array of Connection objects to process
 * @param {any} compositionData - Dictionary object that stores composition data indexed by concept ID
 * @param {number[]} reverse - Array of connection IDs that should be processed in reverse direction
 * @returns {Promise<any>} A promise that resolves to the updated compositionData dictionary with nested data
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = { 123: { user: {} } };
 * const reverse = [];
 * const result = await formatFunctionForData(connections, compositionData, reverse);
 * // result = { 123: { user: { name: { type: "John" } } } }
 * ```
 *
 * @remarks
 * Format: Normal - Second pass formatting with data nesting
 * This function:
 * - Sorts connections by ID in descending order
 * - Adds nested data properties to concepts
 * - Handles numeric vs string linker types differently
 * - Numeric linkers create arrays, string linkers create objects
 * - Uses linker character value as property key or removes prefix if empty
 * - Skips "_s_" type linkers in the output
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
 * Formats concepts and connections for list views in Normal format, stitching together multiple compositions.
 * This function handles type connections and builds a tree structure from multiple main compositions.
 *
 * @async
 * @param {Connection[]} [connections=[]] - Array of type connections (external connections) to process
 * @param {any[]} [compositionData=[]] - Dictionary format with all built compositions indexed by ID
 * @param {number[]} [mainComposition=[]] - Array of main composition IDs that build the tree
 * @param {any} newCompositionData - New composition data to be populated (unused parameter)
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction (to -> from)
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted main composition objects
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = { 123: { user: "data" }, 456: { post: "info" } };
 * const mainIds = [123, 456];
 * const result = await FormatConceptsAndConnectionsNormalList(
 *   connections,
 *   compositionData,
 *   mainIds,
 *   {},
 *   []
 * );
 * // result = [{ id: 123, user: "data" }, { id: 456, post: "info" }]
 * ```
 *
 * @remarks
 * Format: Normal - Used for listing multiple compositions
 * This function:
 * - Processes type connections to link compositions together
 * - Sorts connections by ID in descending order
 * - Handles both "_s_" (array) and regular (object) linker types
 * - Supports reverse connections with "_reverse" suffix
 * - Returns an array of main compositions with their linked data
 * - Useful for list views where multiple compositions need to be queried efficiently
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
