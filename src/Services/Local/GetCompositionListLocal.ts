import { handleServiceWorkerException, sendMessage, serviceWorker } from "../../app";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetCompositionLocal, GetCompositionLocalWithId } from "./GetCompositionLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";

/**
 * Retrieves all compositions of a specific type from local storage.
 *
 * **Process Flow**:
 * 1. Finds the type concept by compositionName (e.g., "the_project")
 * 2. Queries all concepts with that typeId belonging to the user
 * 3. Fetches full composition for each concept
 * 4. Returns array of complete compositions
 *
 * @param compositionName - The type name of compositions to retrieve (e.g., "the_project", "the_person")
 * @param userId - User ID to filter compositions by ownership
 * @returns Array of composition objects (empty array if type not found)
 * @throws Error if lookup or composition fetching fails
 *
 * @example
 * // Get all local projects for a user
 * const projects = await GetCompositionListLocal("the_project", 101);
 * // Returns: [{id: -1, data: {...}}, {id: -2, data: {...}}]
 */
export  async function GetCompositionListLocal(compositionName: string,userId:number){
   if (serviceWorker) {
      try {
         const res: any = await sendMessage('GetCompositionListLocal', { compositionName, userId })
         return res.data
      } catch (error) {
         console.error('GetCompositionListLocal error sw: ', error)
         handleServiceWorkerException(error)
      }
   }

   try{
      let concept = await GetConceptByCharacterLocal(compositionName);
      let CompositionList :any = [];
      if(concept.id != 0){
       let conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
       for(let i=0; i< conceptList.length; i++){
         let compositionJson= await GetCompositionLocal(conceptList[i].id);
            CompositionList.push(compositionJson);
       }
      }
       return CompositionList;
   }
   catch(error){
      throw error;
   }

}

/**
 * Retrieves all compositions of a specific type with DATAID format (includes concept ID).
 *
 * Same as GetCompositionListLocal but returns compositions in data-id wrapper format,
 * which includes both the composition data and its concept ID for easier reference.
 *
 * @param compositionName - The type name of compositions to retrieve
 * @param userId - User ID to filter compositions by ownership
 * @returns Array of composition objects in {id, data} format
 * @throws Error if lookup or composition fetching fails
 *
 * @example
 * // Get all local projects with IDs
 * const projects = await GetCompositionListLocalWithId("the_project", 101);
 * // Returns: [{id: -1, data: {the_name: "Project A"}}, {id: -2, data: {...}}]
 */
export  async function GetCompositionListLocalWithId(compositionName: string, userId: number){
   if (serviceWorker) {
      try {
         const res: any = await sendMessage('GetCompositionListLocalWithId', { compositionName, userId })
         return res.data
      } catch (error) {
         console.error('GetCompositionListLocalWithId error sw: ', error)
         handleServiceWorkerException(error)
      }
   }

   try{
      let concept = await GetConceptByCharacterLocal(compositionName);
      let CompositionList :any = [];
      if(concept.id != 0){
       let conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
   
       for(let i=0; i< conceptList.length; i++){
         let compositionJson= await GetCompositionLocalWithId(conceptList[i].id);
            CompositionList.push(compositionJson);
       }
      }
       return CompositionList;
   }
   catch(error){
      throw error;
   }

}





