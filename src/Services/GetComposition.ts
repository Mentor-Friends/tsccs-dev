import { GetConcept } from "../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData"



export async function GetComposition(id:number){
    var connectionList:Connection[] = [];
    var returnOutput: any = {};
    console.log("trying to get "+ id );
    await GetAllConnectionsOfComposition(id);
    connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = ConceptsData.GetConcept(id);
    if(concept == null && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }
    var output = await recursiveFetch(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "top";
    returnOutput[mainString] = output;
    return returnOutput;
}


 async function recursiveFetch(id:number, connectionList:Connection[], compositionList:number[]){

    var output : any= {};
    var arroutput: any = [];
    var concept = ConceptsData.GetConcept(id);
    if(concept == null && id != null && id != undefined){
     var conceptString = await  GetConcept(id);
     concept = conceptString as Concept;
    }

    if(concept){
        if(concept.type == null){
            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = ConceptsData.GetConcept(toConceptTypeId);
            console.log("this is the to concept type");
            console.log(toConceptType);
            concept.type = toConceptType;
            if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                var conceptString = await  GetConcept(toConceptTypeId);
                toConceptType = conceptString as Concept;
                concept.type = toConceptType;
               }
        }
    }

    var mainString = concept?.type?.characterValue ?? "top";

    if(!compositionList.includes(id)){
        return concept?.characterValue;
    }
    else{

        for(var i=0; i<connectionList.length; i++){

            if(connectionList[i].ofTheConceptId == id){
                var toConceptId = connectionList[i].toTheConceptId;

                var toConcept = ConceptsData.GetConcept(toConceptId);
                if(toConcept == null && toConceptId != null && toConceptId != undefined){
                 var conceptString = await  GetConcept(toConceptId);
                 toConcept = conceptString as Concept;
                }
                if(toConcept){
                    if(toConcept?.type == null){
                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = ConceptsData.GetConcept(toConceptTypeId);
                        console.log("this is the to concept type");
                        console.log(toConceptType);
                        toConcept.type = toConceptType;
                        if(toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined){
                            var conceptString = await  GetConcept(toConceptTypeId);
                            toConceptType = conceptString as Concept;
                            toConcept.type = toConceptType;
                           }
                    }
                }

                var regex = "the_";


                var localmainString = toConcept?.type?.characterValue ?? "top";
                console.log("after to concept");
                console.log(toConcept);
                var localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetch(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetch(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }