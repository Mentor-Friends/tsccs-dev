/**
 * @fileoverview Concept deletion service for the CCS-JS system.
 * This module provides comprehensive functionality for deleting concepts from the system,
 * including removal from all cache structures (binary trees, type trees, character trees),
 * local database cleanup, and backend synchronization.
 * @module Services/DeleteConcept
 */

import DeleteTheConcept from "../Api/DeleteTheConcept";
import { BinaryCharacterTree } from "../DataStructures/BinaryCharacterTree";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { BinaryTypeTree } from "../DataStructures/BinaryTypeTree";
import { removeFromDatabase } from "../Database/NoIndexDb";
import GetTheConcept from "./GetTheConcept";

/**
 * Deletes a concept from the entire CCS-JS system, including all caches and the backend.
 *
 * This function performs a comprehensive deletion of a concept by removing it from multiple
 * data structures and storage layers:
 * 1. Retrieves the concept to get its metadata (typeId, characterValue)
 * 2. Removes the concept from the main BinaryTree index
 * 3. Removes it from the BinaryTypeTree (type-based indexing)
 * 4. Removes it from the BinaryCharacterTree (character-based indexing)
 * 5. Removes it from the local IndexedDB database
 * 6. Deletes it from the backend server
 *
 * This ensures complete cleanup across all layers of the application, maintaining data
 * consistency and preventing orphaned references. The deletion is performed in a specific
 * order to ensure safe removal from all dependent structures.
 *
 * @param id - The unique identifier of the concept to delete
 * @param token - Optional authentication token for backend deletion. If not provided,
 *                the function will attempt deletion without authentication
 * @returns A promise that resolves to a boolean indicating whether the backend deletion was successful
 *
 * @example
 * ```typescript
 * // Delete a concept with authentication
 * import { DeleteConceptById } from './DeleteConcept';
 *
 * const conceptId = 12345;
 * const authToken = "user-auth-token-xyz";
 *
 * const isDeleted = await DeleteConceptById(conceptId, authToken);
 * if (isDeleted) {
 *   console.log("Concept successfully deleted from all systems");
 * } else {
 *   console.log("Backend deletion failed, but local caches cleared");
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete a concept without authentication token
 * const conceptId = 67890;
 * const result = await DeleteConceptById(conceptId);
 * console.log(`Deletion status: ${result}`);
 * ```
 *
 * @example
 * ```typescript
 * // Delete multiple concepts in sequence
 * const conceptIds = [123, 456, 789];
 * const authToken = "user-token";
 *
 * for (const id of conceptIds) {
 *   const deleted = await DeleteConceptById(id, authToken);
 *   if (!deleted) {
 *     console.error(`Failed to delete concept ${id}`);
 *   }
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete concept with error handling
 * try {
 *   const conceptId = 999;
 *   const isDeleted = await DeleteConceptById(conceptId, "auth-token");
 *
 *   if (isDeleted) {
 *     // Update UI to reflect deletion
 *     updateConceptList();
 *   }
 * } catch (error) {
 *   console.error("Error during concept deletion:", error);
 * }
 * ```
 *
 * @remarks
 * Important implementation details and considerations:
 *
 * **Deletion Order:**
 * The function follows a specific deletion sequence:
 * 1. First retrieves concept data (needed for type and character indices)
 * 2. Removes from main binary tree (ID-based index)
 * 3. Removes from type tree (type-based index)
 * 4. Removes from character tree (character-based index)
 * 5. Removes from local database (IndexedDB)
 * 6. Finally deletes from backend server
 *
 * **Cache Consistency:**
 * - Removes the concept from all three binary tree structures
 * - BinaryTree: Main ID-based concept index
 * - BinaryTypeTree: Type-categorized concept index
 * - BinaryCharacterTree: Character/name-based concept index
 * - This ensures no dangling references remain in any cache
 *
 * **Local Database:**
 * - Uses removeFromDatabase to clear from IndexedDB
 * - This is synchronous local storage cleanup
 * - Ensures offline-first capability remains consistent
 *
 * **Backend Synchronization:**
 * - Calls DeleteTheConcept API to remove from server
 * - Uses optional authentication token
 * - Returns backend deletion status
 * - Local cleanup happens regardless of backend success
 *
 * **Error Handling:**
 * - If GetTheConcept fails, the function will throw
 * - Tree removal operations are awaited but may not throw
 * - Backend deletion status is returned but doesn't affect local cleanup
 * - Consider wrapping in try-catch for production use
 *
 * **Side Effects:**
 * - Permanently removes concept from all storage layers
 * - Cannot be undone without re-creating the concept
 * - May orphan connections that reference this concept
 * - Consider deleting associated connections first
 *
 * **Performance:**
 * - Multiple async operations performed sequentially
 * - May take longer for concepts with complex relationships
 * - Consider using connection cleanup functions before deletion
 *
 * @see {@link DeleteTheConcept} for backend deletion API
 * @see {@link GetTheConcept} for concept retrieval
 * @see {@link BinaryTree} for main concept indexing
 * @see {@link BinaryTypeTree} for type-based indexing
 * @see {@link BinaryCharacterTree} for character-based indexing
 * @see {@link DeleteConnectionById} for deleting associated connections
 */
export  async function DeleteConceptById(id:number, token:string = ""){
    var concept = await GetTheConcept(id);
    await BinaryTree.removeNodeFromTree(id);
    var typeId = concept.typeId;
    var character = concept.characterValue;
    await BinaryTypeTree.removeTypeConcept(typeId,id);
    await BinaryCharacterTree.removeNodeByCharacter(character,id);
    removeFromDatabase("concept",id);
    let isDeleted = await DeleteTheConcept(id, token);
    return isDeleted;
}