/**
 * Local Composition List Retrieval Module
 *
 * This module provides functionality to retrieve multiple compositions of the same type
 * from local storage. It enables batch retrieval of all compositions that match a specific
 * type and belong to a particular user.
 *
 * @module GetCompositionListLocal
 */

import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetCompositionLocal, GetCompositionLocalWithId } from "./GetCompositionLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";

/**
 * Retrieves all compositions of a specific type for a given user.
 *
 * This function finds all concept instances of a specified type (by name) that belong
 * to a particular user, then fetches and reconstructs each composition as JSON.
 * The result is an array of composition objects.
 *
 * @param compositionName - The character/name of the composition type to retrieve (e.g., "the_user")
 * @param userId - The ID of the user whose compositions to retrieve
 *
 * @returns A promise that resolves to an array of composition JSON objects
 *
 * @remarks
 * - First looks up the type concept by its character value
 * - Then queries all concepts of that type belonging to the user
 * - Fetches complete composition data for each matching concept
 * - Returns an empty array if the type concept doesn't exist
 * - Each element in the returned array is a complete composition object
 *
 * @example
 * ```typescript
 * // Retrieve all user compositions for user 123
 * const users = await GetCompositionListLocal("the_user", 123);
 *
 * // Output might look like:
 * // [
 * //   { "the_user": { name: "John", age: 30 } },
 * //   { "the_user": { name: "Jane", age: 25 } },
 * //   { "the_user": { name: "Bob", age: 35 } }
 * // ]
 *
 * console.log(`Found ${users.length} users`);
 * users.forEach(user => {
 *   console.log(user.the_user.name);
 * });
 *
 * // Retrieve all product compositions
 * const products = await GetCompositionListLocal("the_product", 123);
 * ```
 *
 * @see {@link GetCompositionListLocalWithId} - Similar function that includes concept IDs
 * @see {@link GetCompositionLocal} - Retrieves a single composition
 * @see {@link GetConceptByCharacterLocal} - Looks up type concept by name
 * @see {@link LocalConceptsData.GetConceptsByTypeIdAndUser} - Queries concepts by type and user
 */
export  async function GetCompositionListLocal(compositionName: string,userId:number){
   var concept = await GetConceptByCharacterLocal(compositionName);
   var CompositionList :any = [];
   if(concept){
    var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionLocal(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}

/**
 * Retrieves all compositions of a specific type with their IDs included in results.
 *
 * Similar to GetCompositionListLocal, but each composition in the returned array
 * includes both the composition data and its root concept ID. This is useful when
 * you need to perform operations on the compositions and need to track their IDs.
 *
 * @param compositionName - The character/name of the composition type to retrieve
 * @param userId - The ID of the user whose compositions to retrieve
 *
 * @returns A promise that resolves to an array of objects with 'data' and 'id' properties
 *
 * @remarks
 * - Each element in the array has structure: { data: {composition}, id: conceptId }
 * - Useful for update or delete operations where you need the concept ID
 * - Uses GetCompositionLocalWithId internally for each composition
 * - Returns empty array if the type concept doesn't exist
 *
 * @example
 * ```typescript
 * // Retrieve all users with their IDs
 * const usersWithIds = await GetCompositionListLocalWithId("the_user", 123);
 *
 * // Output structure:
 * // [
 * //   { data: { "the_user": { name: "John" } }, id: 1001 },
 * //   { data: { "the_user": { name: "Jane" } }, id: 1002 }
 * // ]
 *
 * // Update each user
 * for (const userObj of usersWithIds) {
 *   console.log(`Updating user ${userObj.id}`);
 *   const userData = userObj.data.the_user;
 *   await updateComposition(userObj.id, { ...userData, updated: true });
 * }
 *
 * // Filter and process
 * const specificUser = usersWithIds.find(u =>
 *   u.data.the_user.name === "John"
 * );
 * if (specificUser) {
 *   console.log(`John's ID is ${specificUser.id}`);
 * }
 * ```
 *
 * @see {@link GetCompositionListLocal} - Similar function without IDs
 * @see {@link GetCompositionLocalWithId} - Retrieves single composition with ID
 * @see {@link UpdateCompositionLocal} - Uses this format for updates
 */
export  async function GetCompositionListLocalWithId(compositionName: string, userId: number){
   var concept = await GetConceptByCharacterLocal(compositionName);
   var CompositionList :any = [];
   if(concept){
    var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionLocalWithId(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}




