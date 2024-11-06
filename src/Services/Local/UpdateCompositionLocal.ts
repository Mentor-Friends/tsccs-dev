import { Connection } from "../../DataStructures/Connection";
import { Concept } from "../../DataStructures/Concept";
import InsertUniqueNumber from "../../Helpers/UniqueInsert";
import {
  CheckAllConnectionsConnectedInLConnectionArray,
  CheckIfTypeLConceptsExistsInArray,
} from "../../Helpers/CheckIfExists";

import { PatcherStructure } from "../../DataStructures/PatcherStructure";
import { GetAllConnectionsOfComposition } from "../../Api/GetAllConnectionsOfComposition";
import GetTheConcept from "./../GetTheConcept";
import { DeleteConnectionById } from "./../DeleteConnection";
import { CreateTheCompositionLocal } from "./CreateTheCompositionLocal";
import { MakeTheInstanceConceptLocal } from "./MakeTheInstanceConceptLocal";
import {
  CreateDefaultLConcept,
  CreateTheConnectionLocal,
  LConnection,
  LocalSyncData,
  sendMessage,
  serviceWoker,
} from "../../app";
import {
  convertFromConceptToLConcept,
  convertFromConnectionToLConnection,
} from "../Conversion/ConvertConcepts";

// function to update the cache composition
export async function UpdateCompositionLocal(
  patcherStructure: PatcherStructure
) {
  if (serviceWoker) {
    console.log("data receiving");
    const res: any = await sendMessage("UpdateCompositionLocal", {
      patcherStructure,
    });
    console.log('updated data from sw')
    console.log("data received from sw", res);
    return res.data;
  } else {
    return await UpdateCompositionLocalData(patcherStructure);
  }
}

export async function UpdateCompositionLocalData(
  patcherStructure: PatcherStructure
) {
  // get all the default userId, sessionId, accessId passed by the patcherStructure
  const userId = patcherStructure.userId;
  const sessionId = patcherStructure.sessionId;
  const accessId = patcherStructure.accessId;
  let connectionList: Connection[] = [];
  const conceptList: Concept[] = [];
  let composition: Concept = CreateDefaultLConcept();
  let parentConcept: Concept = CreateDefaultLConcept();
  const toDeleteConcepts: Concept[] = [];
  // the main composition Id that has the data that needs to be patched
  const compositionId = patcherStructure.compositionId;

  // if you want to edit the subcompositions of the composition then you have to pass to this
  const ofTheConceptId = patcherStructure.ofTheCompositionId;
  let toDeleteConnections: Connection[] = [];

  // get all connections from the backend because it needs latest data
  const connectionListString = await GetAllConnectionsOfComposition(
    compositionId
  );
  let connectionListOriginal = connectionListString as Connection[];
  for (let i = 0; i < connectionListOriginal.length; i++) {
    connectionList.push(
      convertFromConnectionToLConnection(connectionListOriginal[i])
    );
  }
  const conceptIdList: number[] = [];
  const compositionList: number[] = [];
  // put this in the upper section before updating because this will tell all other distributed
  //servers to destroy the copy of the composition that they have as new composition is coming up

  // get all the connections that are inside of the composition and store them in
  let allConcepts = [];
  for (let i = 0; i < connectionList.length; i++) {
    InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId);
    InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId);
    InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId);
    allConcepts.push(connectionList[i].ofTheConceptId);
  }

  // get all the concepts that are inside of the composition and store them in a conceptList
  for (let i = 0; i < conceptIdList.length; i++) {
    const conceptString = await GetTheConcept(conceptIdList[i]);
    const concept = conceptString as Concept;
    if (compositionId == conceptIdList[i]) {
      composition = convertFromConceptToLConcept(concept);
    }
    if (ofTheConceptId == conceptIdList[i]) {
      parentConcept = convertFromConceptToLConcept(concept);
    }
    conceptList.push(convertFromConceptToLConcept(concept));
  }

  // now trying to patch the new object into the composition
  const object = patcherStructure.patchObject;
  for (const key in object) {
    let insertingConcept: Concept = CreateDefaultLConcept();
    const value = object[key];
    let localConcept = composition;

    // if the immedidate parent exists in the composition (i.e. for multilevel composition)
    if (parentConcept.id > 0) {
      localConcept = parentConcept;
    }

    if (Array.isArray(value) || typeof value == "object") {
      insertingConcept = await MakeTheInstanceConceptLocal(
        key,
        "",
        true,
        composition.userId,
        4,
        999
      );
      await CreateTheCompositionLocal(
        object[key],
        insertingConcept.id,
        insertingConcept.userId,
        composition.id,
        composition.userId,
        4,
        999
      );
    } else {
      // make the new concept in the object
      insertingConcept = await MakeTheInstanceConceptLocal(
        key,
        value,
        false,
        userId,
        accessId,
        sessionId
      );
    }

    // check if the concept exists in the concept list because if it exists then we have to delete old connection
    const ExistingConcepts: Concept[] = CheckIfTypeLConceptsExistsInArray(
      conceptList,
      insertingConcept
    );
    // if the existing concept then start the process for deleting the concept in the list
    for (let i = 0; i < ExistingConcepts.length; i++) {
      if (ExistingConcepts[i].id > 0) {
        const deletingConnections: Connection[] =
          CheckAllConnectionsConnectedInLConnectionArray(
            connectionList,
            ExistingConcepts[i].id
          );

        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
        toDeleteConcepts.push(ExistingConcepts[i]);
      }
    }

    // create the connection between the new concept and the old composition
    const connectionString = await CreateTheConnectionLocal(
      localConcept.id,
      insertingConcept.id,
      composition.id,
      2
    );
    const connection = connectionString as LConnection;
    conceptList.push(insertingConcept);
  }
  // now you have to delete the connection in bulk
  for (let j = 0; j < toDeleteConnections.length; j++) {
    // remove from the cache list
    // delete the connection in the backend
    await DeleteConnectionById(toDeleteConnections[j].id);
  }

  await LocalSyncData.SyncDataOnline();
}
