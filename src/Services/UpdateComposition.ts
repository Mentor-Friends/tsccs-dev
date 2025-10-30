/**
 * @fileoverview Composition update service for the CCS-JS system.
 * This module provides comprehensive functionality for updating composition structures,
 * managing the complex process of patching objects into compositions, handling nested
 * compositions, updating caches, and synchronizing changes with the backend.
 * @module Services/UpdateComposition
 */

  import { Connection } from '../DataStructures/Connection';
  import { Concept } from '../DataStructures/Concept';
  import InsertUniqueNumber from '../Helpers/UniqueInsert'
  import {
    CheckAllConnectionsConnectedInConnectionArray,
    CheckIfTypeConceptsExistsInArray,
  } from '../Helpers/CheckIfExists'

  import {
    RemoveConceptFromList,
    RemoveConnectionFromList,
  } from '../Helpers/RemoveFromArray'
import { PatcherStructure } from '../DataStructures/PatcherStructure'
import { CreateDefaultConcept } from './CreateDefaultConcept';
import { GetAllConnectionsOfComposition } from '../Api/GetAllConnectionsOfComposition';
import GetTheConcept from './GetTheConcept';
import MakeTheInstanceConcept from './MakeTheInstanceConcept';
import { createTheConnection }  from './CreateTheConnection';
import { DeleteConnectionById } from './DeleteConnection';
import { SyncData } from '../DataStructures/SyncData';
import { CompositionBinaryTree } from '../DataStructures/Composition/CompositionBinaryTree';
import { Composition } from '../DataStructures/Composition/Composition';
import {CreateTheCompositionWithCache} from './Composition/CreateCompositionCache';

  /**
   * Updates an existing composition by patching new data into it while maintaining cache consistency.
   *
   * This is a core function in the CCS-JS system that handles the complex process of updating
   * compositions. It performs the following operations:
   * 1. Retrieves the current composition and all its connections from the backend
   * 2. Processes the patch object to create new concepts and connections
   * 3. Identifies and removes outdated concepts and connections
   * 4. Updates the composition cache and binary tree structure
   * 5. Synchronizes changes with the backend
   *
   * The function handles both simple value updates and complex nested composition updates.
   * It ensures data consistency by managing connection deletions, concept replacements, and
   * cache invalidation across distributed servers.
   *
   * @param patcherStructure - Structure containing all necessary information for the update operation
   *                           including compositionId, patchObject, userId, sessionId, and accessId
   * @returns A promise that resolves to the updated composition cache data, or null if the composition
   *          cannot be found or updated. The returned data includes the updated concepts, connections,
   *          and subcompositions.
   *
   * @example
   * ```typescript
   * // Update a simple composition with new values
   * import UpdateComposition from './UpdateComposition';
   * import { PatcherStructure } from '../DataStructures/PatcherStructure';
   *
   * const patcher: PatcherStructure = {
   *   compositionId: 123,
   *   patchObject: { name: "Updated Name", age: 30 },
   *   userId: 456,
   *   sessionId: 999,
   *   accessId: 4
   * };
   *
   * const result = await UpdateComposition(patcher);
   * console.log(result); // Updated composition data
   * ```
   *
   * @example
   * ```typescript
   * // Update a nested composition
   * const patcher: PatcherStructure = {
   *   compositionId: 123,
   *   ofTheCompositionId: 789, // Parent concept ID for nested update
   *   patchObject: {
   *     profile: {
   *       firstName: "John",
   *       lastName: "Doe"
   *     },
   *     settings: {
   *       theme: "dark"
   *     }
   *   },
   *   userId: 456,
   *   sessionId: 999,
   *   accessId: 4
   * };
   *
   * const result = await UpdateComposition(patcher);
   * ```
   *
   * @example
   * ```typescript
   * // Handle local concept conversion (negative ID to positive ID)
   * const patcher: PatcherStructure = {
   *   compositionId: -123, // Local concept ID
   *   patchObject: { status: "active" },
   *   userId: 456,
   *   sessionId: 999,
   *   accessId: 4
   * };
   *
   * const result = await UpdateComposition(patcher);
   * // Function will convert local ID to server ID before updating
   * ```
   *
   * @remarks
   * Complex behavior and important considerations:
   *
   * **Local Concept Handling:**
   * - If compositionId is negative (local concept), the function attempts to find the persisted version
   * - Returns null if the local concept hasn't been synced to the server yet
   *
   * **Cache Management:**
   * - Marks the composition as "updating" to signal distributed servers to invalidate their cache
   * - Rebuilds the composition cache with all updated concepts and connections
   * - Updates the CompositionBinaryTree for fast access
   *
   * **Connection Management:**
   * - Identifies existing concepts that match the new concepts being added
   * - Removes old connections to those concepts before creating new ones
   * - Deletes connections in bulk for efficiency
   *
   * **Nested Compositions:**
   * - Supports updating subcompositions via the ofTheCompositionId parameter
   * - Creates new composition concepts for object/array values
   * - Recursively processes nested structures
   *
   * **Synchronization:**
   * - Calls SyncData.SyncDataOnline() to push changes to the backend
   * - Ensures consistency across distributed system
   *
   * **Performance Considerations:**
   * - Fetches all connections from backend for latest data
   * - Processes deletions and additions in batch
   * - Uses caching to minimize redundant database queries
   *
   * @see {@link PatcherStructure} for the structure of the patcher parameter
   * @see {@link CreateTheCompositionWithCache} for creating nested compositions
   * @see {@link GetTheConcept} for concept retrieval
   * @see {@link MakeTheInstanceConcept} for creating new concept instances
   * @see {@link createTheConnection} for creating connections between concepts
   * @see {@link DeleteConnectionById} for connection deletion
   * @see {@link SyncData.SyncDataOnline} for backend synchronization
   */
  export default async function UpdateComposition(
    patcherStructure: PatcherStructure,
  ) {
     // get all the default userId, sessionId, accessId passed by the patcherStructure
  const userId = patcherStructure.userId
  const sessionId = patcherStructure.sessionId
  const accessId = patcherStructure.accessId
  let connectionList: Connection[] = []
  const conceptList: Concept[] = []
  let composition: Concept = CreateDefaultConcept()
  let parentConcept: Concept = CreateDefaultConcept()
  const toDeleteConcepts: Concept[] = []
  // the main composition Id that has the data that needs to be patched
  let compositionId = patcherStructure.compositionId

  // if you want to edit the subcompositions of the composition then you have to pass to this
  const ofTheConceptId = patcherStructure.ofTheCompositionId
  let toDeleteConnections: Connection[] = []
  if(compositionId < 0){
    let localConcept = await GetTheConcept(compositionId, userId);
    if(localConcept.id > 0){
      compositionId = localConcept.id;
    }
    else{
      return null;
    }
  }


  // get all connections from the backend because it needs latest data
  const connectionListString = await GetAllConnectionsOfComposition(compositionId)
  connectionList = connectionListString as Connection[]
  const conceptIdList: number[] = []
  const compositionCache = new Composition()
  const compositionList: number[] = []
  compositionCache.id = compositionId
  // put this in the upper section before updating because this will tell all other distributed
  //servers to destroy the copy of the composition that they have as new composition is coming up
  compositionCache.isUpdating()

  // get all the connections that are inside of the composition and store them in
  let allConcepts = [];
  for (let i = 0; i < connectionList.length; i++) {
    InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId)
    InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId)
    InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId)
    allConcepts.push(connectionList[i].ofTheConceptId);
  }
  compositionCache.subcompositions = compositionList
  compositionCache.connections = connectionList
  // get all the concepts that are inside of the composition and store them in a conceptList
  for (let i = 0; i < conceptIdList.length; i++) {
    const conceptString = await GetTheConcept(conceptIdList[i])
    const concept = conceptString as Concept
    if (compositionId == conceptIdList[i]) {
      composition = concept
    }
    if (ofTheConceptId == conceptIdList[i]) {
      parentConcept = concept
    }
    conceptList.push(concept)
  }

  // now trying to patch the new object into the composition
  const object = patcherStructure.patchObject
  for (const key in object) {
    let insertingConcept: Concept = CreateDefaultConcept();
    const value = object[key]
    let localConcept = composition

    // if the immedidate parent exists in the composition (i.e. for multilevel composition)
    if (parentConcept.id > 0) {
      localConcept = parentConcept
    }

    if(Array.isArray(value) || typeof value == 'object'){

      insertingConcept = await MakeTheInstanceConcept(key, "", true, composition.userId, 4, 999);
      compositionCache.subcompositions.push(insertingConcept.id);
            // check if the concept exists in the concept list because if it exists then we have to delete old connection
            const ExistingConcepts: Concept[] = CheckIfTypeConceptsExistsInArray(
              conceptList,
              insertingConcept,
            )
            // if the existing concept then start the process for deleting the concept in the list
            for(let i=0 ; i< ExistingConcepts.length; i++){
              if (ExistingConcepts[i].id > 0) {
                const deletingConnections: Connection[] =
                  CheckAllConnectionsConnectedInConnectionArray(
                    compositionCache.connections,
                    ExistingConcepts[i].id,
                  )
                toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                toDeleteConcepts.push(ExistingConcepts[i]);
              }
          
            }
      await CreateTheCompositionWithCache(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999,compositionCache);



    }
    else{
      // make the new concept in the object
      insertingConcept =  await MakeTheInstanceConcept(
        key,
        value,
        false,
        userId,
        accessId,
        sessionId,
      )
    


      // check if the concept exists in the concept list because if it exists then we have to delete old connection
      const ExistingConcepts: Concept[] = CheckIfTypeConceptsExistsInArray(
        conceptList,
        insertingConcept,
      )
      // if the existing concept then start the process for deleting the concept in the list
      for(let i=0 ; i< ExistingConcepts.length; i++){
        if (ExistingConcepts[i].id > 0) {
          const deletingConnections: Connection[] =
            CheckAllConnectionsConnectedInConnectionArray(
              compositionCache.connections,
              ExistingConcepts[i].id,
            )

          toDeleteConnections = toDeleteConnections.concat(deletingConnections);
          toDeleteConcepts.push(ExistingConcepts[i]);
        }
    
      }

    }
        // create the connection between the new concept and the old composition
          const connectionString = await createTheConnection(
            localConcept.id,
            localConcept.userId,
            insertingConcept.id,
            insertingConcept.userId,
            composition.id,
            sessionId,
            userId,
          )
          const connection = connectionString as Connection
          conceptList.push(insertingConcept)
          compositionCache.connections.push(connection);
  }
    // now you have to delete the connection in bulk
    for (let j = 0; j < toDeleteConnections.length; j++) {
      // remove from the cache list
      RemoveConnectionFromList(compositionCache.connections, toDeleteConnections[j])
      // delete the connection in the backend
      DeleteConnectionById(toDeleteConnections[j].id)
    }



    // also delete the existing concept from the cache.

    for (let k = 0; k < toDeleteConcepts.length; k++) {
      // remove concept from the cache concept list
      RemoveConceptFromList(conceptList, toDeleteConcepts[k])
    }
  // now create a composition cache object to cache it into node server
  compositionCache.concepts = compositionCache.concepts.concat(conceptList);
  compositionCache.mainConcept = composition
  compositionCache.id = composition.id
  // // create a cache
 await compositionCache.updateCache()
  // update it the binary tree
  CompositionBinaryTree.addCompositionToTree(compositionCache)
  await SyncData.SyncDataOnline()
  let x =  compositionCache.GetDataCache()
  return x;
  }
  