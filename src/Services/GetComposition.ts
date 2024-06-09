import { GetConcept } from "../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData"



export async function GetComposition(id:number){
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

export async function GetCompositionFromMemory(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
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


export async function GetCompositionWithIdFromMemory(id:number){
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
    FinalReturn['created_on'] = concept.entryTimeStamp;


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
                        const result = await recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetch(toConceptId, connectionList, compositionList,visitedConcepts);
                    arroutput[localKey] = result;
                    output = arroutput;

                }



            }     
        }
    }


     return output;

 }

 export async function recursiveFetchWithSubCompositions(id:number, connectionList:Connection[], compositionList:number[]){

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