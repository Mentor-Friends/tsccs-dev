import { handleServiceWorkerException, InnerActions, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import CreateTheConceptLocal from "./CreateTheConceptLocal";

/**
 * Gets or creates a local concept - implements get-or-create pattern.
 *
 * Checks LocalConceptsData for existing concept matching referent and typeId.
 * If found, returns existing concept. If not found, creates new local concept.
 *
 * **Special Case**: If typeCharacter is "the", sets categoryId to 1 (system category).
 *
 * @param referent - The character value/name of the concept
 * @param typeCharacter - Type name string (e.g., "the_name")
 * @param userId - User ID creating the concept
 * @param categoryId - Category classification ID
 * @param typeId - Type classification ID
 * @param actions - Action tracking for batch operations
 * @returns Existing or newly created Concept
 *
 * @example
 * const concept = await MakeTheConceptLocal("Active", "the_status", 101, 1, 5);
 * // Returns existing "Active" status or creates new one
 */
export default async function MakeTheConceptLocal(referent:string, typeCharacter:string, userId:number, categoryId:number,
typeId:number, actions: InnerActions = {concepts: [], connections: []}){
    if (serviceWorker) {
      try {
        const res: any = await sendMessage("MakeTheConceptLocal", {
          referent, typeCharacter, userId, categoryId, typeId, actions
        });
        if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
        if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
        return res.data;
      } catch (error) {
        console.error("MakeTheConceptLocal error sw: ", error);
        handleServiceWorkerException(error);
      }
    }

    let conceptString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeId);
    let concept = conceptString as Concept;
    let accessId = 4;
    if(typeCharacter == "the"){
        categoryId = 1;
    }
    if(concept.id == 0){

       conceptString = await  CreateTheConceptLocal(referent,typeCharacter,userId,categoryId,typeId,accessId, undefined, null, actions );
        concept = conceptString as Concept;
    }

    return concept;


}