import { InnerActions, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import CreateTheConceptLocal from "./CreateTheConceptLocal";

export default async function MakeTheConceptLocal(referent:string, typeCharacter:string, userId:number, categoryId:number,
typeId:number, actions: InnerActions = {concepts: [], connections: []}){
    if (serviceWorker) {
        const res: any = await sendMessage("MakeTheConceptLocal", {
          referent, typeCharacter, userId, categoryId, typeId, actions
        });
        console.log("data received from sw", res);
        if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
        if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
        return res.data;
      }

    let conceptString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeId);
    let concept = conceptString as Concept;
    let accessId = 4;
    if(typeCharacter == "the"){
        categoryId = 1;
    }
    if(concept.id == 0){

       conceptString = await  CreateTheConceptLocal(referent,typeCharacter,userId,categoryId,typeId,accessId, undefined, undefined, actions );
        concept = conceptString as Concept;
    }

    return concept;


}