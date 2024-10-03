import { GetConcept } from "../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData"
import { GetConceptBulk, GetTheConcept } from "../app";



export async function GetComposition(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    console.log("this is the connection list online", connectionList);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

export async function GetCompositionWithAllIds(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetchWithSubCompositions(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    return returnOutput;
}

/**
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns 
 */
export async function GetCompositionFromMemory(id:number){
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    let compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
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


export async function GetCompositionWithIdFromMemory(id:number){
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
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
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    return FinalReturn;
}

export async function GetCompositionWithIdFromMemoryNew(id:number){
    let connectionList:Connection[] = [];
    let returnOutput: any = {};
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
    let output = await recursiveFetchConcept(concept, connectionList, compositionList);
   // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
     let mainString = concept?.type?.characterValue ?? "";
     returnOutput[mainString] = output;
    let FinalReturn: any = {};
    FinalReturn['created_at'] = concept.entryTimeStamp;
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    return FinalReturn;
}

export async function GetCompositionWithIdAndDateFromMemory(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;
    FinalReturn['created_at'] = concept.entryTimeStamp;


    return FinalReturn;
}

export async function GetCompositionWithIdFromMemoryFromConnections(id:number, connectionList:Connection[]){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);

    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

export async function GetCompositionWithId(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    var connectionListString = await GetAllConnectionsOfComposition(id);
    connectionList = connectionListString as Connection[];
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await ConceptsData.GetConcept(id);
    if(concept.id == 0 && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "";
    returnOutput[mainString] = output;
    var FinalReturn: any = {};
    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}

/**
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns 
 */
export async function recursiveFetchConcept(concept:Concept, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};
    var arroutput: any = [];
    let id = concept.id;
    var mainString = concept?.type?.characterValue ?? "";
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
        for(var i=0; i<connectionList.length; i++){
            if(connectionList[i].ofTheConceptId == id){

                if(id != connectionList[i].toTheConceptId){
                    var toConceptId = connectionList[i].toTheConceptId;
            
                    var toConcept = await ConceptsData.GetConcept(toConceptId);
                    if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                    var conceptString = await  GetConcept(toConceptId);
                    toConcept = conceptString as Concept;
                    }


                    if(toConcept.id != 0){
                        if(toConcept?.type == null ){

                            var toConceptTypeId: number  = toConcept.typeId;
                            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                            toConcept.type = toConceptType;
                            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                                var conceptString = await  GetConcept(toConceptTypeId);
                                toConceptType = conceptString as Concept;
                                toConcept.type = toConceptType;
                            }
                        }
                    }

                    var regex = "the_";


                    var localmainString = toConcept?.type?.characterValue ?? "";

                    var localKey = localmainString.replace(regex, "");
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
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns 
 */
export async function recursiveFetchConceptSingleLoop(concept:Concept, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};
    let id = concept.id;
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
        for(var i=0; i<connectionList.length; i++){
                let newData = await GetTheConcept(connectionList[i].ofTheConceptId);
                let toConcept = await GetTheConcept(connectionList[i].toTheConceptId);
                let ofKey = newData.id;
                let toConceptKey = toConcept?.type?.characterValue ?? "";
                var regex = "the_";


                var localmainString = toConceptKey;
        
                var localToKey = localmainString.replace(regex, "");
                if(output[ofKey] == undefined || output[ofKey] == null){
                    output[ofKey] = {};
                }
                output[ofKey][localToKey] = toConcept.characterValue;


                
        }

    }
    let finalOutput:any = {};
    for(let i=0 ; i<connectionList.length; i++ ){
        let ofConcept = await GetTheConcept(connectionList[i].ofTheConceptId);
        let toConcept = await GetTheConcept(connectionList[i].toTheConceptId);
        let ofConceptKey = ofConcept?.type?.characterValue ?? "";
        let toConceptKey = toConcept?.type?.characterValue ?? "";
        var regex = "the_";


        var localmainString = toConceptKey;

        var localToKey = localmainString.replace(regex, "");
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



export async function recursiveFetch(id:number, connectionList:Connection[], compositionList:number[], visitedConcepts: number[] = []){

    var output : any= {};

    var arroutput: any = [];
    if(id == 0){
        return null;
    }
    var concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                var conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    var mainString = concept?.type?.characterValue ?? "";
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

        for(var i=0; i<connectionList.length; i++){

            let insideTime = new Date().getTime();
            if(connectionList[i].ofTheConceptId == id){
                if(id != connectionList[i].toTheConceptId){
                    var toConceptId = connectionList[i].toTheConceptId;
            
                    var toConcept = await ConceptsData.GetConcept(toConceptId);
                    if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                    var conceptString = await  GetConcept(toConceptId);
                    toConcept = conceptString as Concept;
                    }


                    if(toConcept.id != 0){
                        if(toConcept?.type == null ){

                            var toConceptTypeId: number  = toConcept.typeId;
                            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                            toConcept.type = toConceptType;
                            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                                var conceptString = await  GetConcept(toConceptTypeId);
                                toConceptType = conceptString as Concept;
                                toConcept.type = toConceptType;
                            }
                        }
                    }

                    var regex = "the_";


                    var localmainString = toConcept?.type?.characterValue ?? "";

                    var localKey = localmainString.replace(regex, "");
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

    var output : any= {};
    var arroutput: any = [];
    if(id == 0){
        return null;
    }
    var concept = await ConceptsData.GetConcept(id);
    if((concept == null || concept.id == 0) && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                var conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    var mainString = concept?.type?.characterValue ?? "";

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
        for(var i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                var toConceptId = connectionList[i].toTheConceptId;

                var toConcept = await ConceptsData.GetConcept(toConceptId);
                if((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined){
                 var conceptString = await  GetConcept(toConceptId);
                 toConcept = conceptString as Concept;
                }
                if(toConcept){
                    if(toConcept?.type == null){

                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = await ConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                        if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                            var conceptString = await  GetConcept(toConceptTypeId);
                            toConceptType = conceptString as Concept;
                            toConcept.type = toConceptType;
                           }
                    }
                }

                var regex = "the_";


                var localmainString = toConcept?.type?.characterValue ?? "";

                var localKey = localmainString.replace(regex, "");

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