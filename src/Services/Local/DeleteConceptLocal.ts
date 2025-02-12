import { handleServiceWorkerException, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetTheConceptLocal } from "./GetTheConceptLocal";

export async function DeleteConceptLocal(id:number){
    if (serviceWorker) {
      try {
        const res: any = await sendMessage('DeleteConceptLocal', {id})
        return res.data
      } catch (error) {
        console.error('DeleteConceptLocal error sw: ', error)
        handleServiceWorkerException(error)
      }
    }
    let concept: Concept = await GetTheConceptLocal(id);
    LocalConceptsData.RemoveConcept(concept);
}