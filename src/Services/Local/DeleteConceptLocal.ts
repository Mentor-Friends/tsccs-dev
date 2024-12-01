import { sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetTheConceptLocal } from "./GetTheConceptLocal";

export async function DeleteConceptLocal(id:number){
    if (serviceWorker) {
        const res: any = await sendMessage('DeleteConceptLocal', {id})
        // console.log('data received from sw', res)
        return res.data
      }
    let concept: Concept = await GetTheConceptLocal(id);
    LocalConceptsData.RemoveConcept(concept);
}