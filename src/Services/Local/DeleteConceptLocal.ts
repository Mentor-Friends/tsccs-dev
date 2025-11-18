import { handleServiceWorkerException, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetTheConceptLocal } from "./GetTheConceptLocal";

/**
 * Deletes a concept from local storage (IndexedDB).
 *
 * This function removes a concept from LocalConceptsData, effectively deleting it
 * from the local IndexedDB cache. This is a local-only delete - it does NOT sync
 * the deletion to the backend.
 *
 * **Important Notes:**
 * - Only deletes from local storage (IndexedDB)
 * - Does NOT delete from backend server
 * - Does NOT automatically delete related connections
 * - For full deletion including backend, use DeleteConceptById
 * - Works with both negative (local) and positive (synced) IDs
 *
 * **Use Cases:**
 * - Cleaning up local draft concepts
 * - Removing concepts before they're synced
 * - Local cache management
 * - Testing and development
 *
 * **Process:**
 * 1. Fetches the concept via GetTheConceptLocal
 * 2. Removes it from LocalConceptsData
 * 3. Updates IndexedDB
 *
 * @param id - The concept ID to delete (negative for local, positive for synced)
 *
 * @returns Promise that resolves when deletion is complete
 *
 * @example
 * // Delete a local concept
 * await DeleteConceptLocal(-12345);
 * console.log("Local concept deleted");
 *
 * @example
 * // Delete after checking existence
 * const concept = await GetTheConceptLocal(-67890);
 * if (concept.id !== 0) {
 *   await DeleteConceptLocal(concept.id);
 *   console.log("Deleted:", concept.characterValue);
 * }
 *
 * @see {@link DeleteConceptById} for full deletion including backend
 * @see {@link GetTheConceptLocal} for retrieving concepts before deletion
 * @see {@link LocalConceptsData.RemoveConcept} for the underlying removal operation
 */
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