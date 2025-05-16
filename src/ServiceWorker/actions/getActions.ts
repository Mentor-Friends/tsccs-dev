import { Actions } from ".";
import { GetCompositionConnectionsBetweenTwoConcepts } from "../../Api/GetCompositionConnectionsBetweenTwoConcepts";
import { GetConcept } from "../../Api/GetConcept";
import { ConceptsData, ConnectionData, GetAllTheConnectionsByTypeAndOfTheConcept, GetCompositionList, GetCompositionListAllWithId, GetCompositionListLocal, GetCompositionListLocalWithId, GetCompositionListWithId, GetCompositionLocal, GetCompositionLocalWithId, GetConceptBulk, GetConceptByCharacter, GetConceptByCharacterAndCategoryLocal, GetConceptByCharacterAndType, GetLink, GetRelation, GetRelationRaw, GetTheConcept } from "../../app";
import { broadcastChannel } from "../../Constants/general.const";
import { FindConnectionsOfCompositionsBulkInMemory } from "../../Services/FindConnectionsOfCompositionBulkInMemory";
import {
  GetComposition,
  GetCompositionById,
  GetCompositionFromMemory,
  GetCompositionFromMemoryNormal,
  GetCompositionFromMemoryWithConnections,
  GetCompositionWithId,
  GetCompositionWithIdAndDateFromMemory,
  GetCompositionWithIdFromMemory,
  GetCompositionWithIdFromMemoryNew,
} from "../../Services/GetComposition";
import { GetCompositionFromConnectionsWithDataId, GetCompositionFromConnectionsWithDataIdFromConnections, GetCompositionFromConnectionsWithDataIdIndex, GetCompositionFromConnectionsWithIndex, GetCompositionFromConnectionsWithIndexFromConnections, GetConnectionDataPrefetch } from "../../Services/GetCompositionBulk";
import { GetConceptByCharacterUpdated } from "../../Services/GetConceptByCharacter";
import { AddTypeConcept } from "../../Services/GetTheConcept";
import { GetTheConceptLocal } from "../../Services/Local/GetTheConceptLocal";
import { GetLinkListener } from "../../WrapperFunctions/GetLinkObservable";

export const getActions: Actions = {
  GetConcept: async (payload) => {
    const data = await GetConcept(payload.id)
    return { success: true, data }
  },
  GetTheConcept: async (payload) => {
    const data = await GetTheConcept(payload.id, payload.userId)
    return { success: true, data }
  },
  AddTypeConcept: async (payload) => {
    const data = await AddTypeConcept(payload.concept)
    return { success: true, data }
  },
  GetConceptBulk: async (payload) => {
    const data = await GetConceptBulk(payload.passedConcepts)
    return { success: true, data }
  },
  GetLink: async (payload: any) => {
    const data = await GetLink(
      payload.id,
      payload.linker,
      payload.inpage,
      payload.page
    );
    return { success: true, data };
  },
  GetRelation: async (payload: any) => {
    const data = await GetRelation(
      payload.id,
      payload.relation,
      payload.inpage,
      payload.page,
      payload.reverse
    );
    return { success: true, data };
  },
  GetRelationRaw: async (payload: any) => {
    const data = await GetRelationRaw(
      payload.id,
      payload.relation,
      payload.inpage,
      payload.page,
      payload.reverse
    );
    return { success: true, data };
  },
  GetComposition: async (payload: any) => {
    const data = await GetComposition(payload.id);
    return { success: true, data };
  },
  GetCompositionList: async (payload: any) => {
    const data = await GetCompositionList(payload.compositionName, payload.userId, payload.inpage, payload.page);
    return { success: true, data };
  },
  GetCompositionListWithId: async (payload: any) => {
    const data = await GetCompositionListWithId(payload.compositionName, payload.userId, payload.inpage, payload.page);
    return { success: true, data };
  },
  GetCompositionById: async (payload: any) => {
    const data = await GetCompositionById(payload.id);
    return { success: true, data };
  },
  GetCompositionWithId: async (payload: any) => {
    const data = await GetCompositionWithId(payload.id);
    return { success: true, data };
  },
  GetCompositionListAllWithId: async (payload) => {
    const data = await GetCompositionListAllWithId(payload.compositionName, payload.userId, payload.inpage, payload.page)
    return { success: true, data }
  },
  GetConceptByCharacter: async (payload) => {
    const data = await GetConceptByCharacter(payload.characterValue)
    return { success:true, data }
  },
  GetConceptByCharacterUpdated: async (payload) => {
    const data = await GetConceptByCharacterUpdated(payload.characterValue)
    return { success:true, data }
  },
  GetConceptByCharacterAndType: async (payload) => {
    const data = await GetConceptByCharacterAndType(payload.characterValue, payload.typeId)
    return { success:true, data }
  },
  GetCompositionFromConnectionsWithDataId: async (payload) => {
    const data = await GetCompositionFromConnectionsWithDataId(payload.conceptIds, payload.connectionIds)
    return { success: true, data }
  },
  GetCompositionFromConnectionsWithDataIdIndex: async (payload) => {
    const data = await GetCompositionFromConnectionsWithDataIdIndex(payload.conceptIds, payload.connectionIds)
    return { success: true, data }
  },
  GetCompositionConnectionsBetweenTwoConcepts: async (payload) => {
    const data = await GetCompositionConnectionsBetweenTwoConcepts(payload.ofConceptId, payload.toConcept, payload.mainKey)
    return { success: true, data }
  },
  GetConnectionDataPrefetch: async (payload) => {
    const data = await GetConnectionDataPrefetch(payload.connectionIds)
    return { success: true, data }
  },
  
  // memory
  GetCompositionWithIdFromMemory: async (payload) => {
    const data = await GetCompositionWithIdFromMemory(payload.id)
    return { success: true, data };
  },
  GetCompositionWithIdAndDateFromMemory: async (payload) => {
    const data = await GetCompositionWithIdAndDateFromMemory(payload.id)
    return { success: true, data };
  },
  GetCompositionFromMemory: async (payload) => {
    const data = await GetCompositionFromMemory(payload.id)
    return { success: true, data };
  },
  GetCompositionFromMemoryNormal: async (payload) => {
    const data = await GetCompositionFromMemoryNormal(payload.id)
    return { success: true, data };
  },
  GetCompositionWithIdFromMemoryNew: async (payload) => {
    const data = await GetCompositionWithIdFromMemoryNew(payload.id)
    return { success: true, data };
  },
  FindConnectionsOfCompositionsBulkInMemory: async (payload) => {
    const data = await FindConnectionsOfCompositionsBulkInMemory(payload.composition_ids)
    return { success: true, data };
  },

  GetAllTheConnectionsByTypeAndOfTheConcept: async (payload) => {
    const data = await GetAllTheConnectionsByTypeAndOfTheConcept(payload.id,
      payload.linker, payload.reverse)
    return { success: true, data };
  },

  GetCompositionFromMemoryWithConnections: async (payload) => {
    const data = await GetCompositionFromMemoryWithConnections(payload.id, payload.connectionList)
    return {success: true, data};
  },

  GetCompositionFromConnectionsWithIndexFromConnections: async (payload) =>{
    const data = await GetCompositionFromConnectionsWithIndexFromConnections(
      payload.conceptIds, payload.connectionIds)
    return { success: true, data };
  },

  GetCompositionFromConnectionsWithDataIdFromConnections: async (payload) => {
    const data = await GetCompositionFromConnectionsWithDataIdFromConnections(
      payload.conceptIds, payload.connectionIds
    )
    return { success: true, data };
  },

  // locals
  GetTheConceptLocal: async (payload: any) => {
    const data = await GetTheConceptLocal(payload.id);
    return { success: true, data };
  },
  GetCompositionLocal: async (payload: any) => {
    const data = await GetCompositionLocal(payload.id);
    return { success: true, data };
  },
  GetCompositionLocalWithId: async (payload: any) => {
    const data = await GetCompositionLocalWithId(payload.id);
    return { success: true, data };
  },
  GetCompositionListLocal: async (payload: any) => {
    const data = await GetCompositionListLocal(payload.compositionName, payload.userId);
    return { success: true, data };
  },
  GetCompositionListLocalWithId: async (payload: any) => {
    const data = await GetCompositionListLocalWithId(payload.compositionName, payload.userId);
    return { success: true, data };
  },
  GetConceptByCharacterAndCategoryLocal: async (payload: any) => {
    const data = await GetConceptByCharacterAndCategoryLocal(payload.character);
    return { success: true, data };
  },

  // Concept Data class methods
  ConceptsData__AddConcept: async (payload) => {
    const data = await ConceptsData.AddConcept(payload.concept)
    return { success: true, data };
  },
  ConceptsData__GetConcept: async (payload) => {
    const data = await ConceptsData.GetConcept(payload.id)
    return { success: true, data };
  },
  ConceptsData__GetConceptsByTypeIdAndUser: async (payload) => {
    const data = await ConceptsData.GetConceptsByTypeIdAndUser(payload.typeId, payload.userId)
    return { success: true, data };
  },

  // Connection Data class methods
  ConnectionData__GetConnectionByOfTheConceptAndType: async (payload) => {
    const data = await ConnectionData.GetConnectionByOfTheConceptAndType(payload.ofTheConceptId, payload.typeId)
    return { success: true, data };
  },
  ConnectionData__GetConnection: async (payload) => {
    const data = await ConnectionData.GetConnection(payload.id)
    return { success: true, data };
  },
  ConnectionData__GetConnectionsOfCompositionLocal: async (payload) => {
    const data = await ConnectionData.GetConnectionsOfCompositionLocal(payload.id)
    return { success: true, data };
  },
  ConnectionData__GetConnectionsOfConcept: async (payload) => {
    const data = await ConnectionData.GetConnectionsOfConcept(payload.id)
    return { success: true, data };
  },

  // listeners
  GetLinkListener: async (payload: any) => {
    let isSubscribed = false;
    return new Promise((resolve, reject) => {
      GetLinkListener(
        payload.id,
        payload.linker,
        payload.inpage,
        payload.page,
        payload.format
      )
        .subscribe((value: any) => {
          if (isSubscribed) {
            console.log("isSubscribed", isSubscribed);
            resolve({ success: true, data: value });
            isSubscribed = true;
          } else {
            console.log("is not isSubscribed", isSubscribed);
            // broadcast the data with its unique id
            broadcastChannel.postMessage({
              type: "GetLinkListener",
              payload: {
                id: payload?.listener?.listenerId,
                listenerId: payload?.listener?.listenerId,
                data: value,
              }
            });
          }
        })
        .catch((error: any) => {
          console.log("Error : ", error);
          reject("Error Occured");
        });
    });
  },
};
