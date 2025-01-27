import { GetCompositionConnectionsBetweenTwoConcepts } from "../Api/GetCompositionConnectionsBetweenTwoConcepts";
import { Concept, Connection, CreateDefaultConcept, handleServiceWorkerException, Logger, MakeTheTypeConceptApi, sendMessage, serviceWorker } from "../app";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

/**
 * This function will give you all the connections between two concepts by their linker or fullLinker
 * @param ofTheConcept start of the connecction
 * @param toTheConcept end of the connection
 * @param linker the primitive linkers with type connection (16) these are the old type of linkers (if you want full linker then put this as empty string)
 * @param fullLinker fullLinker is the modern linker (if you want linker then put this as empty string)
 * @param forward if you want to get the forward relation in the primitive linker put true else for backward linker false.
 * @returns list of connections
 */
export async function GetConnectionBetweenTwoConceptsLinker(ofTheConcept: Concept, toTheConcept: Concept, linker: string, fullLinker: string, forward: boolean = true){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetConnectionBetweenTwoConceptsLinker', {ofTheConcept, toTheConcept, linker, fullLinker, forward})
            return res.data
        } catch (error) {
            console.error('GetConnectionBetweenTwoConceptsLinker sw error: ', error)
            handleServiceWorkerException(error)
        }
    }
    Logger.logfunction(GetConnectionBetweenTwoConceptsLinker);
    let typeConcept: Concept = CreateDefaultConcept();
    if(linker != ""){
        let typeLinker = "";
        if(forward){
            let prefix: string = ofTheConcept.type?.characterValue + "_s";
            let linkerAdd = linker + "_s";
            let forwardLinker = prefix + "_" + linkerAdd;
            typeLinker = forwardLinker;
        }
        else{
            let prefix1: string = toTheConcept.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  
            typeLinker = backwardLinker;
        }

        typeConcept = await MakeTheInstanceConcept("connection", typeLinker, false,999);

    }
    if(fullLinker != ""){
         typeConcept = await MakeTheTypeConceptApi(fullLinker, 999);
    }
    let connections: Connection[] = []
    if (!forward) 
        connections = await GetCompositionConnectionsBetweenTwoConcepts(toTheConcept.id, ofTheConcept.id, typeConcept.id);
    else connections = await GetCompositionConnectionsBetweenTwoConcepts(ofTheConcept.id, toTheConcept.id, typeConcept.id);
    return connections;
}