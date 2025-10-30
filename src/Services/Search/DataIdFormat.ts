/**
 * @module DataIdFormat
 * @description Provides formatting functions for DATA-ID format output, which includes both data and ID information for each concept
 */

import { Connection, GetTheConcept } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";

/**
 * Converts connections to single-level objects in DATA-ID format, preparing data for stitching.
 * Creates objects with both ID and data properties for each concept.
 *
 * @async
 * @param {Connection[]} connections - Array of Connection objects to process
 * @param {any[]} compositionData - Array/dictionary that stores composition data indexed by concept ID
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction processing
 * @returns {Promise<any[]>} A promise that resolves to the updated compositionData with ID and data structure
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = [];
 * const reverse = [102];
 * const result = await FormatFunctionDataForData(connections, compositionData, reverse);
 * // result = { 123: { user: { name: { id: 1, data: { type: "John" } } } } }
 * ```
 *
 * @remarks
 * Format: DATA-ID - First pass formatting with ID information
 * This function:
 * - Processes connections in order without sorting
 * - Creates nested data structure with explicit ID and data fields
 * - Handles numeric linkers as arrays
 * - Uses linker character or concept type (with prefix removed) as key
 * - Skips "_s_" type linkers
 * - Supports reverse connections with "_reverse" suffix
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
 * Formats concepts and connections for list views in DATA-ID format, stitching together multiple compositions.
 * Each result includes concept ID, nested data object, and creation timestamp.
 *
 * @async
 * @param {Connection[]} connections - Array of type connections (external connections) to process
 * @param {any[]} compositionData - Dictionary format with all built compositions indexed by ID
 * @param {any} newCompositionData - New composition data to be populated (unused parameter)
 * @param {number[]} mainComposition - Array of main composition IDs that build the tree
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction (to -> from)
 * @param {any[]} CountDictionary - Dictionary containing count information for connections
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted main compositions with DATA-ID structure
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = { 123: { user: "data" } };
 * const mainIds = [123];
 * const result = await FormatFromConnectionsAlteredArrayExternal(
 *   connections,
 *   compositionData,
 *   {},
 *   mainIds,
 *   [],
 *   {}
 * );
 * // result = [{ id: 123, data: {...}, created_on: timestamp }]
 * ```
 *
 * @remarks
 * Format: DATA-ID - Used for list views with full ID and data information
 * This function:
 * - Processes type connections to link compositions
 * - Creates objects with id, data, and created_on properties
 * - Handles both "_s_" (array) and regular (object) linker types
 * - Supports reverse connections with "_reverse" suffix
 * - Includes creation timestamp for each linked concept
 * - Returns array of formatted main compositions
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
 * Converts connections to initial single-level concept objects in DATA-ID format.
 * This is the first pass that creates the basic concept structure before data nesting.
 *
 * @async
 * @param {Connection[]} connections - Array of Connection objects to process
 * @param {any[]} compositionData - Array/dictionary that stores composition data indexed by concept ID
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction processing
 * @returns {Promise<any[]>} A promise that resolves to the updated compositionData with initial structure
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = [];
 * const reverse = [];
 * const result = await FormatFunctionData(connections, compositionData, reverse);
 * // result = { 123: { user: {} }, 456: { post: {} } }
 * ```
 *
 * @remarks
 * Format: DATA-ID - Initial pass for concept creation
 * This function:
 * - Creates empty concept structures indexed by ID
 * - Sets up the foundation for subsequent data population
 * - Handles "_s_" type linkers by storing basic concept info
 * - Does not add nested data (handled by FormatFunctionDataForData)
 * - Supports reverse connections
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
