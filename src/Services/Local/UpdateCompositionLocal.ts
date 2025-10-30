/**
 * Local Composition Update Module
 *
 * This module provides functionality to update existing compositions in local storage
 * by patching them with new data. It handles the complex process of modifying a graph
 * structure, including replacing existing concepts, creating new ones, and managing
 * connections while maintaining data integrity.
 *
 * @module UpdateCompositionLocal
 */

import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
import InsertUniqueNumber from '../../Helpers/UniqueInsert'
import {
  CheckAllConnectionsConnectedInConnectionArray,
  CheckAllConnectionsConnectedInLConnectionArray,
  CheckIfTypeConceptsExistsInArray,
  CheckIfTypeLConceptsExistsInArray,
} from '../../Helpers/CheckIfExists'

import {
  RemoveConceptFromList,
  RemoveConnectionFromList,
} from '../../Helpers/RemoveFromArray'
import { PatcherStructure } from '../../DataStructures/PatcherStructure'
import { CreateDefaultConcept } from './../CreateDefaultConcept';
import { GetAllConnectionsOfComposition } from '../../Api/GetAllConnectionsOfComposition';
import GetTheConcept from './../GetTheConcept';
import MakeTheInstanceConcept from './../MakeTheInstanceConcept';
import { createTheConnection }  from './../CreateTheConnection';
import { DeleteConnectionById } from './../DeleteConnection';
import { SyncData } from '../../DataStructures/SyncData';
import { Composition } from '../../DataStructures/Composition/Composition';
import { CreateTheCompositionLocal } from './CreateTheCompositionLocal';
import { MakeTheInstanceConceptLocal } from './MakeTheInstanceConceptLocal';
import { CreateDefaultLConcept, CreateTheConnectionLocal, LConcept, LConnection } from '../../app';
import { convertFromConceptToLConcept, convertFromConnectionToLConnection } from '../Conversion/ConvertConcepts';

/**
 * Updates an existing composition by patching it with new data.
 *
 * This function performs a sophisticated update operation on a composition by:
 * 1. Fetching the current composition structure from the backend
 * 2. Identifying concepts that need to be replaced (same type, different value)
 * 3. Creating new concepts for the patch data
 * 4. Removing old connections and concepts that are being replaced
 * 5. Creating new connections for the updated structure
 * 6. Triggering synchronization with the backend
 *
 * The function handles both simple property updates and complex nested composition updates.
 *
 * @param patcherStructure - Object containing update instructions
 * @param patcherStructure.compositionId - ID of the root composition to update
 * @param patcherStructure.ofTheCompositionId - ID of immediate parent (for nested updates)
 * @param patcherStructure.patchObject - The new data to patch into the composition
 * @param patcherStructure.userId - ID of the user performing the update
 * @param patcherStructure.sessionId - Session tracking ID
 * @param patcherStructure.accessId - Access control ID
 *
 * @returns A promise that resolves when the update is complete
 *
 * @remarks
 * - Fetches latest composition data from backend to ensure consistency
 * - Identifies existing concepts by type and marks them for deletion
 * - Creates new concepts with the updated values
 * - Establishes proper connections between parent and new concepts
 * - Deletes old connections associated with replaced concepts
 * - Triggers online synchronization via SyncData.SyncDataOnline()
 * - Handles both primitive values and nested compositions (objects/arrays)
 * - For nested compositions, recursively creates the structure
 * - Converts backend Concept/Connection types to local LConcept/LConnection types
 *
 * @example
 * ```typescript
 * // Update a user's name and age
 * const patcher: PatcherStructure = {
 *   compositionId: 12345,        // User composition ID
 *   ofTheCompositionId: null,    // No immediate parent (root level)
 *   patchObject: {
 *     name: "Jane Doe",          // Updated name
 *     age: 31                    // Updated age
 *   },
 *   userId: 123,
 *   sessionId: 999,
 *   accessId: 4
 * };
 *
 * await UpdateCompositionLocal(patcher);
 * // Result: Old name/age concepts replaced with new ones
 *
 * // Update nested property
 * const nestedPatcher: PatcherStructure = {
 *   compositionId: 12345,
 *   ofTheCompositionId: 12350,   // Address composition ID
 *   patchObject: {
 *     city: "New York"            // Update city within address
 *   },
 *   userId: 123,
 *   sessionId: 999,
 *   accessId: 4
 * };
 *
 * await UpdateCompositionLocal(nestedPatcher);
 *
 * // Update with complex nested structure
 * const complexPatcher: PatcherStructure = {
 *   compositionId: 12345,
 *   ofTheCompositionId: null,
 *   patchObject: {
 *     address: {                  // Nested composition
 *       street: "123 Main St",
 *       city: "Boston"
 *     }
 *   },
 *   userId: 123,
 *   sessionId: 999,
 *   accessId: 4
 * };
 *
 * await UpdateCompositionLocal(complexPatcher);
 * ```
 *
 * @see {@link PatcherStructure} - Structure defining update parameters
 * @see {@link MakeTheInstanceConceptLocal} - Creates new concepts during update
 * @see {@link CreateTheCompositionLocal} - Handles nested composition creation
 * @see {@link CreateTheConnectionLocal} - Creates connections for new concepts
 * @see {@link DeleteConnectionById} - Removes old connections
 * @see {@link SyncData.SyncDataOnline} - Synchronizes changes with backend
 */
export  async function UpdateCompositionLocal(
  patcherStructure: PatcherStructure,
) {
   // get all the default userId, sessionId, accessId passed by the patcherStructure
const userId = patcherStructure.userId
const sessionId = patcherStructure.sessionId
const accessId = patcherStructure.accessId
let connectionList: LConnection[] = []
const conceptList: LConcept[] = []
let composition: LConcept = CreateDefaultLConcept()
let parentConcept: LConcept = CreateDefaultLConcept()
const toDeleteConcepts: LConcept[] = []
// the main composition Id that has the data that needs to be patched
const compositionId = patcherStructure.compositionId

// if you want to edit the subcompositions of the composition then you have to pass to this
const ofTheConceptId = patcherStructure.ofTheCompositionId
let toDeleteConnections: LConnection[] = []

// get all connections from the backend because it needs latest data
const connectionListString = await GetAllConnectionsOfComposition(compositionId)
let connectionListOriginal = connectionListString as Connection[]
for(let i=0 ;i < connectionListOriginal.length; i++){
    connectionList.push(convertFromConnectionToLConnection(connectionListOriginal[i]));
}
const conceptIdList: number[] = []
const compositionList: number[] = []
// put this in the upper section before updating because this will tell all other distributed
//servers to destroy the copy of the composition that they have as new composition is coming up

// get all the connections that are inside of the composition and store them in
let allConcepts = [];
for (let i = 0; i < connectionList.length; i++) {
  InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId)
  InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId)
  InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId)
  allConcepts.push(connectionList[i].ofTheConceptId);
}

// get all the concepts that are inside of the composition and store them in a conceptList
for (let i = 0; i < conceptIdList.length; i++) {
  const conceptString = await GetTheConcept(conceptIdList[i])
  const concept = conceptString as Concept
  if (compositionId == conceptIdList[i]) {
    composition = convertFromConceptToLConcept(concept)
  }
  if (ofTheConceptId == conceptIdList[i]) {
    parentConcept = convertFromConceptToLConcept(concept)
  }
  conceptList.push(convertFromConceptToLConcept(concept))
}

// now trying to patch the new object into the composition
const object = patcherStructure.patchObject
for (const key in object) {
  let insertingConcept: LConcept = CreateDefaultLConcept();
  const value = object[key]
  let localConcept = composition

  // if the immedidate parent exists in the composition (i.e. for multilevel composition)
  if (parentConcept.id > 0) {
    localConcept = parentConcept
  }

  if(Array.isArray(value) || typeof value == 'object'){
    insertingConcept = await MakeTheInstanceConceptLocal(key, "", true, composition.userId, 4, 999);
    await CreateTheCompositionLocal(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999);
  }
  else{
    // make the new concept in the object
    insertingConcept =  await MakeTheInstanceConceptLocal(
      key,
      value,
      false,
      userId,
      accessId,
      sessionId,
    )
  }


    // check if the concept exists in the concept list because if it exists then we have to delete old connection
    const ExistingConcepts: LConcept[] = CheckIfTypeLConceptsExistsInArray(
      conceptList,
      insertingConcept,
    )

    // if the existing concept then start the process for deleting the concept in the list
    for(let i=0 ; i< ExistingConcepts.length; i++){
      if (ExistingConcepts[i].id > 0) {
        const deletingConnections: LConnection[] =
          CheckAllConnectionsConnectedInLConnectionArray(
            connectionList,
            ExistingConcepts[i].id,
          )

        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
        toDeleteConcepts.push(ExistingConcepts[i]);
      }
  
    }



    


    // create the connection between the new concept and the old composition
    const connectionString =  await CreateTheConnectionLocal(
      localConcept.id,
      insertingConcept.id,
      composition.id,
      2
    )
    const connection = connectionString as LConnection
    conceptList.push(insertingConcept)

  }
  // now you have to delete the connection in bulk
  for (let j = 0; j < toDeleteConnections.length; j++) {
    // remove from the cache list
    // delete the connection in the backend
    DeleteConnectionById(toDeleteConnections[j].id)
  }


SyncData.SyncDataOnline()
}
