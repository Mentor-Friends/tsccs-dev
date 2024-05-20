import { GetConcept } from "../../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../../Api/GetAllConnectionsOfComposition";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";



export async function GetCompositionLocal(id:number){
    var connectionList:LConnection[] = [];
    var returnOutput: any = {};
    connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await LocalConceptsData.GetConcept(id);
    var output = await recursiveFetchLocal(id, connectionList, compositionList);
    var mainString = concept?.type?.characterValue ?? "top";
    returnOutput[mainString] = output;
    return returnOutput;
}

export async function GetCompositionLocalWithId(id:number){
    var connectionList:LConnection[] = [];
    var returnOutput: any = {};
    connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
    var compositionList:number[] = [];

    for(var i=0; i<connectionList.length; i++){
        if(!compositionList.includes(connectionList[i].ofTheConceptId)){
            compositionList.push(connectionList[i].ofTheConceptId);
        }
    }

    var concept = await LocalConceptsData.GetConcept(id);
    if(concept.id != 0){
        var output = await recursiveFetchLocal(id, connectionList, compositionList);
        var mainString = concept?.type?.characterValue ?? "top";
        returnOutput[mainString] = output;
        var FinalReturn: any = {};
    }

    FinalReturn['data'] = returnOutput;
    FinalReturn['id'] = id;

    return FinalReturn;
}


 async function recursiveFetchLocal(id:number, connectionList:LConnection[], compositionList:number[]){

    var output : any= {};
    var arroutput: any = [];
    var concept = await LocalConceptsData.GetConcept(id);

    if(concept.id != 0){
        if(concept.type == null){

            var toConceptTypeId: number  = concept.typeId;
            var toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
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

                var toConcept = await LocalConceptsData.GetConcept(toConceptId);
                if(toConcept.id != 0){
                    if(toConcept?.type == null){

                        var toConceptTypeId: number  = toConcept.typeId;
                        var toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                    }
                }

                var regex = "the_";


                var localmainString = toConcept?.type?.characterValue ?? "top";

                var localKey = localmainString.replace(regex, "");

                if(isNaN(Number(localKey)) ){

                    if(localKey){
                        const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                        output[localKey] = result;
                    }

                }
                else{

                    const result = await recursiveFetchLocal(toConceptId, connectionList, compositionList);
                    arroutput[localKey] = result;
                    output = arroutput;

                }


            }     
        }
    }


     return output;

 }