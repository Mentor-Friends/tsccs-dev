import { GetConcept } from "../../Api/GetConcept";
import { GetAllConnectionsOfComposition } from "../../Api/GetAllConnectionsOfComposition";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { TranslateLocalToReal } from "../../Api/Translate/TranslateLocalToReal";
import { GetComposition } from "../GetComposition";
import { sendMessage, serviceWorker } from "../../app";



export async function GetCompositionLocal(id:number){
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('GetCompositionLocal', { id })
            // console.log('data received from sw', res)
            return res.data
          }

        let connectionList:LConnection[] = [];
        let returnOutput: any = {};
        connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList:number[] = [];
    
        for(let i=0; i<connectionList.length; i++){
            if(!compositionList.includes(connectionList[i].ofTheConceptId)){
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
    
        let concept = await LocalConceptsData.GetConcept(id);
        if(concept.id == 0){
           let realConcept:Concept = await TranslateLocalToReal(id);
           if(realConcept.id > 0){
            return await GetComposition(realConcept.id);
           }
        }
        let output = await recursiveFetchLocal(id, connectionList, compositionList);
        let mainString = concept?.type?.characterValue ?? "top";
        returnOutput[mainString] = output;
        return returnOutput;
    }
    catch(error){
        throw error;
    }

}

export async function GetCompositionLocalWithId(id:number){
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('GetCompositionLocalWithId', { id })
            // console.log('data received from sw', res)
            return res.data
          }

        let connectionList:LConnection[] = [];
        let returnOutput: any = {};
        let FinalReturn: any = {};
    
        connectionList = await LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList:number[] = [];
        for(let i=0; i<connectionList.length; i++){
            if(!compositionList.includes(connectionList[i].ofTheConceptId)){
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = await LocalConceptsData.GetConcept(id);
        if(concept.id != 0){
            let output = await recursiveFetchLocal(id, connectionList, compositionList);
            let mainString = concept?.type?.characterValue ?? "top";
            returnOutput[mainString] = output;
        }
    
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
    
        return FinalReturn;
    }
    catch(error){
        throw error;
    }

}


 async function recursiveFetchLocal(id:number, connectionList:LConnection[], compositionList:number[], visitedConcepts: number[] = []){

    let output : any= {};
    let arroutput: any = [];
    let concept = await LocalConceptsData.GetConcept(id);
    if(concept.id != 0){
        if(concept.type == null){

            let toConceptTypeId: number  = concept.typeId;
            let toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

            concept.type = toConceptType;
        }
    }

    let mainString = concept?.type?.characterValue ?? "top";

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
                let toConceptId = connectionList[i].toTheConceptId;

                let toConcept = await LocalConceptsData.GetConcept(toConceptId);
                if(toConcept.id != 0){
                    if(toConcept?.type == null){

                        let toConceptTypeId: number  = toConcept.typeId;
                        let toConceptType = await LocalConceptsData.GetConcept(toConceptTypeId);

                        toConcept.type = toConceptType;
                    }
                }

                let regex = "the_";


                let localmainString = toConcept?.type?.characterValue ?? "top";

                let localKey = localmainString.replace(regex, "");

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