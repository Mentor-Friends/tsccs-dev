import { GetConcept } from "../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData"
import { GetTheConcept, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";


export async function GetCompositionById(id:number): Promise<{connectionList: Connection[], compositionList: number[]}> {
    let returnOutput: {connectionList: Connection[], compositionList: number[]} = {connectionList: [], compositionList: []};
    try {
        if (serviceWorker) {
            try {
                const res: any = await sendMessage('GetCompositionById', {id})
                return res.data
            } catch (error) {
                console.error('GetCompositionById error sw: ', error)
                handleServiceWorkerException(error)
            }
        }
        let connectionListString = await GetAllConnectionsOfComposition(id);
        returnOutput.connectionList = connectionListString as Connection[];
    
        for(let i=0; i< returnOutput.connectionList.length; i++){
            if(!returnOutput.compositionList.includes(returnOutput.connectionList[i].ofTheConceptId)){
                returnOutput.compositionList.push(returnOutput.connectionList[i].ofTheConceptId);
            }
        }
        return returnOutput;
    } catch (error) {
        console.error('GetCompositionById error: ', error)
        return returnOutput
    }
}

/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns 
 */
export async  function RecursiveFetchBuildLayer(id:number, connectionList: Connection[], compositionList: number[]){
    let returnOutput: any = {};
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}


/**
 * ## format DATAID ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns 
 */
export async  function RecursiveFetchBuildLayerDataId(id:number, connectionList: Connection[], compositionList: number[]){
    let returnOutput: any = {};
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
   let FinalReturn: any = {};
   FinalReturn['created_at'] = concept.entryTimeStamp;
   FinalReturn['data'] = returnOutput;
   FinalReturn['id'] = id;
    return FinalReturn;
}


/**
 * ## format Normal ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns 
 */
export async  function RecursiveFetchBuildLayerNormal(id:number, connectionList: Connection[], compositionList: number[]){
    let returnOutput: any = {};
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchConceptNormal(concept, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * This just requires the id
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns 
 */
export async function GetComposition(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetComposition', {id})
            return res.data
        } catch (error) {
            console.error('GetComposition error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    let connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    console.log("this is the connection list online", connectionList);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

export async function GetCompositionWithAllIds(id:number){
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    let connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchWithSubCompositions(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * ### Format JUSTDATA ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns 
 */
export async function GetCompositionFromMemory(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromMemory', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromMemory error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}


/**
 * ### Format Normal ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns 
 */
export async function GetCompositionFromMemoryNormal(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromMemoryNormal', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromMemoryNormal error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    let compositionList:number[] = [];
    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        let conceptString = await  GetConcept(id);
        concept = conceptString as Concept;
    }
    let output = await recursiveFetchConceptNormal(concept, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}


/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id 
 * @returns 
 */
export async function GetCompositionWithIdFromMemory(id:number){
    const logData : any = Logger.logfunction("GetCompositionWithIdFromMemory", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionWithIdFromMemory', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionWithIdFromMemory error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let FinalReturn: any = {};

    let connectionList:Connection[] = [];
    let returnOutput: any = {};
   // connectionList = await ConnectionData.GetConnectionsOfConcept(id);
   try{
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    let compositionList:number[] = [];
    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput[mainString] = output;
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
   }
   catch(error){
    console.log("this is the exception in GetCompositionWithIdFromMemory", id);
    UpdatePackageLogWithError(logData, 'GetCompositionWithIdFromMemory', error);
   }
   Logger.logUpdate(logData);
   return FinalReturn;

}

/**
 * ### Format Normal ####
 * Gets data just from memory
 * @param id 
 * @returns 
 */
export async function GetCompositionFromMemoryWithConnections(id:number, connectionList:Connection[]){
    const logData : any = Logger.logfunction("GetCompositionFromMemoryWithConnections", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionFromMemoryWithConnections', {id, connectionList})
            return res.data
        } catch (error) {
            console.error('GetCompositionFromMemoryWithConnections error sw: ', error)
            handleServiceWorkerException(error)
        }
    }

    let returnOutput: any = {};
   // connectionList = await ConnectionData.GetConnectionsOfConcept(id);

    let compositionList:number[] = [];
    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    Logger.logUpdate(logData);
    return FinalReturn;
}

/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id 
 * @returns 
 */
export async function GetCompositionWithIdFromMemoryFromConnection(id:number, connectionList: Connection[]){
    const logData : any = Logger.logfunction("GetCompositionWithIdFromMemoryFromConnection", [id]);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionWithIdFromMemory', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionWithIdFromMemory error sw: ', error)
            handleServiceWorkerException(error)
        }
    }

    let returnOutput: any = {};
   // connectionList = await ConnectionData.GetConnectionsOfConcept(id);

    let compositionList:number[] = [];
    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
    console.log("this is the output", output, concept);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    Logger.logUpdate(logData);
    return FinalReturn;
}

/**
 * ### Format DATAIDDATE ####
 * ### experimental ####
 * This is the new format that needs to work with a single or max two loops
 * @param id the id whose composition needs to be created
 * @returns 
 */
export async function GetCompositionWithIdFromMemoryNew(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionWithIdFromMemoryNew', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionWithIdFromMemoryNew error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
     connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    let compositionList:number[] = [];
    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }
    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
        console.log("this concept you cannot find ", id);
        let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let startTime = new Date().getTime();

    //console.log("this is the connection list which has to be looped", connectionList);
    let output = await recursiveFetchConceptSingleLoop(concept, connectionList, compositionList);
    console.log("this is the time for the data to be made", new Date().getTime() - startTime);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput = output;
    let FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    return FinalReturn;
}

/**
 * ### Format DATAIDDATE ##### 
 * ### This just returns composition from memory and not from anywhere else.
 * @param id 
 * @returns 
 */
export async function GetCompositionWithIdAndDateFromMemory(id:number){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionWithIdAndDateFromMemory', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionWithIdAndDateFromMemory error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    FinalReturn['created_at'] = concept.entryTimeStamp;


    return FinalReturn;
}

export async function GetCompositionWithIdFromMemoryFromConnections(id:number, connectionList:Connection[]=[]){
    let returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * #### Format DATAID ####
 * ## This will return the composition even if it is not in the local memory ##
 * @param id 
 * @returns 
 */
export async function GetCompositionWithId(id:number){
    const logData : any = Logger.logfunction("GetCompositionWithId", arguments);
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetCompositionWithId', {id})
            return res.data
        } catch (error) {
            console.error('GetCompositionWithId error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    let connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    let compositionList:number[] = [];

    for(let i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    let concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    let output = await recursiveFetch(id, connectionList, compositionList);
    let mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    Logger.logUpdate(logData);
    return FinalReturn;
}

/**
 * ## Format justdata ###
 * ## This contains a concept in the parameter so that you dont have to again find the concept ## 
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns 
 */
export async function recursiveFetchConcept(concept:Concept, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){
    //Logger.logfunction(recursiveFetchConcept, [concept.id]);
    let output : any= {};
    let arroutput: any = [];
    let id = concept.id;
    let mainString = concept?.type?.characterValue ?? "";
    if(!compositionList.includes(id)){

        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        for(let i=0; i<connectionList.length; i++){
            if(connectionList[i].ofTheConceptId == id){

                if(id != connectionList[i].toTheConceptId){
                    let toConceptId = connectionList[i].toTheConceptId;
            
                    let toConcept = await ConceptsData.GetConcept(toConceptId);
                    if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                    let conceptString = await  GetConcept(toConceptId);
                    toConcept = conceptString as Concept;
                    }


                    if(toConcept.id != 0){
                        if(toConcept?.type == null ){

                            let toConceptTypeId: number  = toConcept.typeId;
                            let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                            toConcept.type = toConceptType;
                            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                                let conceptString = await  GetConcept(toConceptTypeId);
                                toConceptType = conceptString as Concept;
                                toConcept.type = toConceptType;
                            }
                        }
                    }

                    let regex = "the_";


                    let localmainString = toConcept?.type?.characterValue ?? "";

                    let localKey = localmainString.replace(regex, "");
                    if(isNaN(Number(localKey)) ){

                        if(localKey){
                            const result = await recursiveFetchConcept(toConcept, connectionList, compositionList,visitedConcepts);
                            output[localKey] = result;
                        }

                    }
                    else{

                        const result = await recursiveFetchConcept(toConcept, connectionList, compositionList,visitedConcepts);
                        arroutput[localKey] = result;
                        output = arroutput;

                    }



                } 
                else{
                    console.log("this is the faulty connection ", connectionList[i]);
                }
            }


        }

    }


     return output;

 }


 /**
 * ## Format Normal ###
 * ## This contains a concept in the parameter so that you dont have to again find the concept ## 
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns 
 */
export async function recursiveFetchConceptNormal(concept:Concept, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){
    const logData : any = Logger.logfunction("recursiveFetchConceptNormal", [concept]);
    let startTime = new Date().getTime();
    let output : any= {};
    let arroutput: any = [];
    let id = concept.id;
    output["id"] = id;
    let mainString = concept?.type?.characterValue ?? "";
    if(!compositionList.includes(id)){
        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        for(let i=0; i<connectionList.length; i++){
            if(connectionList[i].ofTheConceptId == id){

                if(id != connectionList[i].toTheConceptId){
                    let toConceptId = connectionList[i].toTheConceptId;
            
                    let toConcept = await ConceptsData.GetConcept(toConceptId);
                    if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                    let conceptString = await  GetConcept(toConceptId);
                    toConcept = conceptString as Concept;
                    }


                    if(toConcept.id != 0){
                        if(toConcept?.type == null ){

                            let toConceptTypeId: number  = toConcept.typeId;
                            let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                            toConcept.type = toConceptType;
                            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                                let conceptString = await  GetConcept(toConceptTypeId);
                                toConceptType = conceptString as Concept;
                                toConcept.type = toConceptType;
                            }
                        }
                    }

                    let regex = "the_";


                    let localmainString = toConcept?.type?.characterValue ?? "";

                    let localKey = localmainString.replace(regex, "");
                    if(isNaN(Number(localKey)) ){

                        if(localKey){
                            const result = await recursiveFetchConcept(toConcept, connectionList, compositionList,visitedConcepts);
                            output[localKey] = result;
                        }

                    }
                    else{

                        const result = await recursiveFetchConcept(toConcept, connectionList, compositionList,visitedConcepts);
                        arroutput[localKey] = result;
                        output = arroutput;

                    }



                } 
                else{
                    console.log("this is the faulty connection ", connectionList[i]);
                }
            }


        }

    }

    Logger.logUpdate(logData);
   // console.log("second loop normal", new Date().getTime() - startTime);
     return output;

 }


 /**
  * ## experimental ##
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns 
 */
export async function recursiveFetchConceptSingleLoop(concept:Concept, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    let output : any= {};
    let id = concept.id;
    let startTime = new Date().getTime();

    let mainString = concept?.type?.characterValue ?? "";
    if(!compositionList.includes(id)){
        let myString:string = mainString;
        let returnoutput = { [myString] : concept?.characterValue };
        return returnoutput;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        for(let i=0; i<connectionList.length; i++){
                let newData = await GetTheConcept(connectionList[i].ofTheConceptId);
                let toConcept = await GetTheConcept(connectionList[i].toTheConceptId);
                connectionList[i].ofConcept = newData;
                connectionList[i].toConcept = toConcept;
                let ofKey = newData.id;
                let toConceptKey = toConcept?.type?.characterValue ?? "";
                let regex = "the_";


                let localmainString = toConceptKey;
        
                let localToKey = localmainString.replace(regex, "");
                if(output[ofKey] == undefined || output[ofKey] == null){
                    output[ofKey] = {};
                }
                output[ofKey][localToKey] = toConcept.characterValue;


                
        }

    }
    let finalOutput:any = {};
    for(let i=0 ; i<connectionList.length; i++ ){
        let ofConcept = connectionList[i].ofConcept;
        let toConcept = connectionList[i].toConcept;

        let ofConceptKey = ofConcept?.type?.characterValue ?? "";
        let toConceptKey = toConcept?.type?.characterValue ?? "";
        let regex = "the_";


        let localmainString = toConceptKey;

        let localToKey = localmainString.replace(regex, "");
        if(finalOutput[ofConcept.id] == undefined || finalOutput[ofConcept.id] == null){
            finalOutput[ofConcept.id] = {};
        }
        let internalOutput = finalOutput[ofConcept.id];

        if(internalOutput[ofConceptKey] == undefined || internalOutput[ofConceptKey] == null){
            internalOutput[ofConceptKey] = {};
        }

        if(output[connectionList[i].ofTheConceptId] != undefined && output[connectionList[i].toTheConceptId] != undefined){

            internalOutput[ofConceptKey][localToKey]= output[toConcept.id];
        }
        else{

            internalOutput[ofConceptKey][localToKey] = toConcept.characterValue;
        }
    }
    return finalOutput[concept.id];

 }


/**
 * ## Format justdata ##
 * @param id 
 * @param connectionList 
 * @param compositionList 
 * @param visitedConcepts 
 * @returns 
 */
export async function recursiveFetch(id:number, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    let output : any= {};

    let arroutput: any = [];
    if(id == 0){
        return null;
    }
    let concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    if(concept.id != 0){
        if(concept.type == null){

            let toConceptTypeId: number  = concept.typeId;
            let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                let conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    let mainString = concept?.type?.characterValue ?? "";
    if(!compositionList.includes(id)){

        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }

        for(let i=0; i<connectionList.length; i++){

            let insideTime = new Date().getTime();
            if(connectionList[i].ofTheConceptId == id){
                if(id != connectionList[i].toTheConceptId){
                    let toConceptId = connectionList[i].toTheConceptId;
            
                    let toConcept = await ConceptsData.GetConcept(toConceptId);
                    if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                    let conceptString = await  GetConcept(toConceptId);
                    toConcept = conceptString as Concept;
                    }


                    if(toConcept.id != 0){
                        if(toConcept?.type == null ){

                            let toConceptTypeId: number  = toConcept.typeId;
                            let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                            toConcept.type = toConceptType;
                            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                                let conceptString = await  GetConcept(toConceptTypeId);
                                toConceptType = conceptString as Concept;
                                toConcept.type = toConceptType;
                            }
                        }
                    }

                    let regex = "the_";


                    let localmainString = toConcept?.type?.characterValue ?? "";

                    let localKey = localmainString.replace(regex, "");
                    if(isNaN(Number(localKey)) ){

                        if(localKey){
                            const result = await recursiveFetch(toConceptId, connectionList, compositionList,visitedConcepts);
                            output[localKey] = result;
                        }

                    }
                    else{

                        const result = await recursiveFetch(toConceptId, connectionList, compositionList,visitedConcepts);
                        arroutput[localKey] = result;
                        output = arroutput;

                    }



                } 
                else{
                    console.log("this is the faulty connection ", connectionList[i]);
                }
            }


        }

    }


     return output;

 }

 export async function recursiveFetchWithSubCompositions(id:number, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    let output : any= {};
    let arroutput: any = [];
    if(id == 0){
        return null;
    }
    let concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     let conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if(concept.id != 0){
        if(concept.type == null){

            let toConceptTypeId: number  = concept.typeId;
            let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                let conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    let mainString = concept?.type?.characterValue ?? "";

    if(!compositionList.includes(id)){
        return concept?.characterValue;
    }
    else{
        if(visitedConcepts.includes(id)){
            return "";
          }
          else{
            visitedConcepts.push(id);
          }
        output["id"] = id;
        for(let i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                let toConceptId = connectionList[i].toTheConceptId;

                let toConcept = await ConceptsData.GetConcept(toConceptId);
                if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                 let conceptString = await  GetConcept(toConceptId);
                 toConcept = conceptString as Concept;
                }
                if(toConcept){
                    if(toConcept?.type == null){

                        let toConceptTypeId: number  = toConcept.typeId;
                        let toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                        if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                            let conceptString = await  GetConcept(toConceptTypeId);
                            toConceptType = conceptString as Concept;
                            toConcept.type = toConceptType;
                           }
                    }
                }

                let regex = "the_";


                let localmainString = toConcept?.type?.characterValue ?? "";

                let localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }