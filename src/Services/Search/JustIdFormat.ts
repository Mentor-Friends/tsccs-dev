/**
 * @module JustIdFormat
 * @description Provides formatting functions for JustId format output, which includes simplified ID-based data structures
 */

import { Connection } from "../../app";
import { CountInfo } from "../../DataStructures/Count/CountInfo";
import { removeThePrefix } from "../Common/RegexFunction";
import GetTheConcept from "../GetTheConcept";

/**
 * Converts connections to single-level objects in JustId format, preparing simplified data for stitching.
 * Creates lightweight objects with ID and essential data properties.
 *
 * @async
 * @param {Connection[]} connections - Array of Connection objects to process
 * @param {any[]} compositionData - Array/dictionary that stores composition data indexed by concept ID
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction processing
 * @returns {Promise<any[]>} A promise that resolves to the updated compositionData with JustId structure
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = [];
 * const reverse = [];
 * const result = await FormatFunctionDataForDataJustId(connections, compositionData, reverse);
 * // result = { 123: { user: { name: { id: 1, data: "John", created_on: timestamp } } } }
 * ```
 *
 * @remarks
 * Format: JustId - Lightweight formatting with minimal data
 * This function:
 * - Creates simplified data structure with ID, data value, and timestamp
 * - Handles numeric linkers as arrays
 * - Uses linker character or concept type (with prefix removed) as key
 * - Skips "_s_" type linkers
 * - Supports reverse connections with "_reverse" suffix
 * - Optimized for list views and reduced data transfer
 */
export async function FormatFunctionDataForDataJustId(connections:Connection[], compositionData: any[], reverse: number [] = []){
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
                        [mytype] : value
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
                    // let data = {
                    //   "id": toTheConcept.id,
                    //   [mytype] : value
                    // }
                    let data:any = {};
                    data[mytype] = {
                        "id": toTheConcept.id,
                        "data": value,
                        "created_on": connections[i].entryTimeStamp

                    }
                    if(isNaN(Number(dataCharacter))){
                        if(dataCharacter.includes("_s_")){
                            // do nothing
                        }
                        else{
                            if(typeof newData[key] == "string"){
                              newData[key] = {};
                            }
                            if(isComp){
                                newData[key][dataCharacter] = data[mytype];

                            }
                            else{
                                newData[key][dataCharacter] = data;

                            }
  
                        }
                    }
                    else{
                      if(Array.isArray(newData[key])){
                        newData[key].push(data[mytype]);
      
                      }else{
                        newData[key] = [];
                        newData[key].push(data[mytype]);
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
 * Formats concepts and connections for list views in JustId format, stitching together multiple compositions.
 * Creates lightweight list view with ID, data, and timestamp for each concept.
 *
 * @async
 * @param {Connection[]} connections - Array of type connections (external connections) to process
 * @param {any[]} compositionData - Dictionary format with all built compositions indexed by ID
 * @param {number[]} mainComposition - Array of main composition IDs that build the tree
 * @param {number[]} [reverse=[]] - Array of connection IDs for reverse direction (to -> from)
 * @param {any[]} CountDictionary - Dictionary containing count information for connections by concept ID
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted main compositions with JustId structure
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [...];
 * const compositionData = { 123: { user: "data" } };
 * const mainIds = [123];
 * const countDict = { 123: { count: 5, connectionType: "follows" } };
 * const result = await FormatFromConnectionsAlteredArrayExternalJustId(
 *   connections,
 *   compositionData,
 *   mainIds,
 *   [],
 *   countDict
 * );
 * // result = [{ id: 123, user: { id: 1, data: "value", created_on: timestamp }, follows_count: 5 }]
 * ```
 *
 * @remarks
 * Format: JustId - Used for list views with lightweight ID-based structure
 * This function:
 * - Processes type connections to link compositions
 * - Creates objects with id, data, and created_on properties
 * - Handles both "_s_" (array) and regular (object) linker types
 * - Supports reverse connections with "_reverse" suffix
 * - Adds count information from CountDictionary (e.g., "follows_count")
 * - Optimized for performance with minimal data payload
 * - Useful for paginated lists and mobile applications
 */
export async function FormatFromConnectionsAlteredArrayExternalJustId(connections:Connection[], compositionData: any[],  mainComposition: number[], reverse: number [] = [], CountDictionary: any[]){
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
                        let data =  compositionData[connections[i].ofTheConceptId]
                        if(data){
                          data["id"] =  ofTheConcept.id;
                          data["created_on"] = ofTheConcept.entryTimeStamp;
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


                    AddCount(ofTheConcept.id, CountDictionary, newData);
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
                        let mytype = toTheConcept?.type?.characterValue ?? "none";
                      let myData = compositionData[connections[i].toTheConceptId];
                        if(myData){
                          let testData:any = {};
                          testData[mytype] = {
                            "data": myData[mytype],
                            "id": toTheConcept.id,
                            "created_on": connections[i].entryTimeStamp
                          };
                            if(Array.isArray(newData[key])){
                                if(isComp){
                                    newData[key].push(myData[linkerConceptValue]);

                                }else{
                                    newData[key].push(myData);

                                }
                            }
                            else{
                        
                                  if(Array.isArray(newData[key][linkerConceptValue])){
                                    newData[key][linkerConceptValue].push(testData);
                                  }
                                  else{
                  
                                    if(linkerConceptValue.includes("_s_")){
                                        newData[key][linkerConceptValue] = [];
                                        if(isComp){
                                            newData[key][linkerConceptValue].push(testData[mytype]);

                                        }
                                        else{
                                            newData[key][linkerConceptValue].push(testData);

                                        }
                                    }
                                    else{
                                        if(isComp){
                                            newData[key][linkerConceptValue] = testData[mytype];

                                        }else{
                                            newData[key][linkerConceptValue] = testData;
                                            


                                        }
                                    }
                                    
                                  }
                            }

                            AddCount(toTheConcept.id, CountDictionary, testData);

                        }


                          

          
              
                    }
                    catch(ex){
                      console.log("this is error", ex);
                    }
                  }
                  
            
                }
              }
          
            }
            console.log("this is the main compositions", mainComposition);
            for(let i=0 ; i< mainComposition.length; i++){
              let mymainData: any = {};
              console.log("this is the main compositions DATA", compositionData[mainComposition[i]]);
              
              mymainData = compositionData[mainComposition[i]];
              if(mymainData){
                mymainData["id"] = mainComposition[i];
          
              }
              mainData.push(mymainData);
              
            }
            return mainData;
}


/**
 * Adds count information to the concept data based on the CountDictionary.
 * Appends a "_count" suffix to the connection type name.
 *
 * @param {number} ofTheConceptId - The ID of the concept to add count information for
 * @param {any} CountDictionary - Dictionary containing count information indexed by concept ID
 * @param {any} newData - The data object to add count information to
 *
 * @example
 * ```typescript
 * const conceptId = 123;
 * const countDict = { 123: { connectionType: "follows", count: 42 } };
 * const data = { user: "data" };
 * AddCount(conceptId, countDict, data);
 * // data now includes: { user: "data", follows_count: 42 }
 * ```
 *
 * @remarks
 * This function mutates the newData object by adding a count property
 * The count property name format is: "{connectionType}_count"
 * If the concept ID is not in CountDictionary, no changes are made
 */
export function AddCount(ofTheConceptId: number, CountDictionary: any, newData:any){
                      // algorith for count addition
              if(ofTheConceptId in CountDictionary){
                let countInfo: CountInfo = CountDictionary[ofTheConceptId];
                console.log("this is the count info",countInfo);

                if(countInfo){
                  let connType = countInfo.connectionType + "_count";
                  newData[connType] = countInfo.count;
                  console.log("this is the data updated", newData);
                }
              }
}
          