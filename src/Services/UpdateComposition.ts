import { Connection } from "../DataStructures/Connection";
import { Concept } from "../DataStructures/Concept";
import InsertUniqueNumber from "../Helpers/UniqueInsert";
import {
  CheckAllConnectionsConnectedInConnectionArray,
  CheckIfTypeConceptsExistsInArray,
} from "../Helpers/CheckIfExists";

import {
  RemoveConceptFromList,
  RemoveConnectionFromList,
} from "../Helpers/RemoveFromArray";
import { PatcherStructure } from "../DataStructures/PatcherStructure";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import { GetAllConnectionsOfComposition } from "../Api/GetAllConnectionsOfComposition";
import GetTheConcept from "./GetTheConcept";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";
import { createTheConnection } from "./CreateTheConnection";
import { DeleteConnectionById } from "./DeleteConnection";
import { SyncData } from "../DataStructures/SyncData";
import { CompositionBinaryTree } from "../DataStructures/Composition/CompositionBinaryTree";
import { Composition } from "../DataStructures/Composition/Composition";
import { CreateTheCompositionWithCache } from "./Composition/CreateCompositionCache";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";

// function to update the cache composition
export default async function UpdateComposition(
  patcherStructure: PatcherStructure
) {
  Logger.logfunction("UpdateComposition");
  if (serviceWorker) {
    try {
      const res: any = await sendMessage("UpdateComposition", {
        patcherStructure,
      });
      return res.data;
    } catch (error) {
      console.error("UpdateComposition sw error: ", error);
      handleServiceWorkerException(error);
    }
  }
  // get all the default userId, sessionId, accessId passed by the patcherStructure
  const userId = patcherStructure.userId;
  const sessionId = patcherStructure.sessionId;
  const accessId = patcherStructure.accessId;
  let connectionList: Connection[] = [];
  const conceptList: Concept[] = [];
  let composition: Concept = CreateDefaultConcept();
  let parentConcept: Concept = CreateDefaultConcept();
  const toDeleteConcepts: Concept[] = [];
  // the main composition Id that has the data that needs to be patched
  let compositionId = patcherStructure.compositionId;

  // if you want to edit the subcompositions of the composition then you have to pass to this
  const ofTheConceptId = patcherStructure.ofTheCompositionId;
  let toDeleteConnections: Connection[] = [];
  if (compositionId < 0) {
    let localConcept = await GetTheConcept(compositionId, userId);
    if (localConcept.id > 0) {
      compositionId = localConcept.id;
    } else {
      return null;
    }
  }

  // get all connections from the backend because it needs latest data
  const connectionListString = await GetAllConnectionsOfComposition(
    compositionId
  );
  connectionList = connectionListString as Connection[];
  const conceptIdList: number[] = [];
  const compositionCache = new Composition();
  const compositionList: number[] = [];
  compositionCache.id = compositionId;
  // put this in the upper section before updating because this will tell all other distributed
  //servers to destroy the copy of the composition that they have as new composition is coming up
  compositionCache.isUpdating();

  // get all the connections that are inside of the composition and store them in
  let allConcepts = [];
  for (let i = 0; i < connectionList.length; i++) {
    InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId);
    InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId);
    InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId);
    allConcepts.push(connectionList[i].ofTheConceptId);
  }
  compositionCache.subcompositions = compositionList;
  compositionCache.connections = connectionList;
  // get all the concepts that are inside of the composition and store them in a conceptList
  for (let i = 0; i < conceptIdList.length; i++) {
    const conceptString = await GetTheConcept(conceptIdList[i]);
    const concept = conceptString as Concept;
    if (compositionId == conceptIdList[i]) {
      composition = concept;
    }
    if (ofTheConceptId == conceptIdList[i]) {
      parentConcept = concept;
    }
    conceptList.push(concept);
  }

  // now trying to patch the new object into the composition
  const object = patcherStructure.patchObject;
  for (const key in object) {
    let insertingConcept: Concept = CreateDefaultConcept();
    const value = object[key];
    let localConcept = composition;

    // if the immedidate parent exists in the composition (i.e. for multilevel composition)
    if (parentConcept.id > 0) {
      localConcept = parentConcept;
    }

    if (Array.isArray(value) || typeof value == "object") {
      insertingConcept = await MakeTheInstanceConcept(
        key,
        "",
        true,
        composition.userId,
        4,
        999
      );
      compositionCache.subcompositions.push(insertingConcept.id);
      // check if the concept exists in the concept list because if it exists then we have to delete old connection
      const ExistingConcepts: Concept[] = CheckIfTypeConceptsExistsInArray(
        conceptList,
        insertingConcept
      );
      // if the existing concept then start the process for deleting the concept in the list
      for (let i = 0; i < ExistingConcepts.length; i++) {
        if (ExistingConcepts[i].id > 0) {
          const deletingConnections: Connection[] =
            CheckAllConnectionsConnectedInConnectionArray(
              compositionCache.connections,
              ExistingConcepts[i].id
            );
          toDeleteConnections = toDeleteConnections.concat(deletingConnections);
          toDeleteConcepts.push(ExistingConcepts[i]);
        }
      }
      await CreateTheCompositionWithCache(
        object[key],
        insertingConcept.id,
        insertingConcept.userId,
        composition.id,
        composition.userId,
        4,
        999,
        compositionCache
      );
    } else {
      // make the new concept in the object
      insertingConcept = await MakeTheInstanceConcept(
        key,
        value,
        false,
        userId,
        accessId,
        sessionId
      );

      // check if the concept exists in the concept list because if it exists then we have to delete old connection
      const ExistingConcepts: Concept[] = CheckIfTypeConceptsExistsInArray(
        conceptList,
        insertingConcept
      );
      // if the existing concept then start the process for deleting the concept in the list
      for (let i = 0; i < ExistingConcepts.length; i++) {
        if (ExistingConcepts[i].id > 0) {
          const deletingConnections: Connection[] =
            CheckAllConnectionsConnectedInConnectionArray(
              compositionCache.connections,
              ExistingConcepts[i].id
            );

          toDeleteConnections = toDeleteConnections.concat(deletingConnections);
          toDeleteConcepts.push(ExistingConcepts[i]);
        }
      }
    }
    // create the connection between the new concept and the old composition
    const connectionString = createTheConnection(
      localConcept.id,
      localConcept.userId,
      insertingConcept.id,
      composition.id
    );
    const connection = connectionString as Connection;
    conceptList.push(insertingConcept);
    compositionCache.connections.push(connection);
  }
  // now you have to delete the connection in bulk
  for (let j = 0; j < toDeleteConnections.length; j++) {
    // remove from the cache list
    RemoveConnectionFromList(
      compositionCache.connections,
      toDeleteConnections[j]
    );
    // delete the connection in the backend
    DeleteConnectionById(toDeleteConnections[j].id);
  }

  // also delete the existing concept from the cache.

  for (let k = 0; k < toDeleteConcepts.length; k++) {
    // remove concept from the cache concept list
    RemoveConceptFromList(conceptList, toDeleteConcepts[k]);
  }
  // now create a composition cache object to cache it into node server
  compositionCache.concepts = compositionCache.concepts.concat(conceptList);
  compositionCache.mainConcept = composition;
  compositionCache.id = composition.id;
  // // create a cache
  await compositionCache.updateCache();
  // update it the binary tree
  CompositionBinaryTree.addCompositionToTree(compositionCache);
  SyncData.SyncDataOnline();
  let x = compositionCache.GetDataCache();
  return x;
}
