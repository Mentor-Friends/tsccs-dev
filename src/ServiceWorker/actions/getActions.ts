import { Actions } from ".";
import { GetConcept } from "../../Api/GetConcept";
import { ConnectionData, GetAllConnectionsOfCompositionBulk, GetCompositionList, GetCompositionListLocal, GetCompositionListLocalWithId, GetCompositionListWithId, GetCompositionLocal, GetCompositionLocalWithId, GetConceptByCharacterAndCategoryLocal, GetConceptByCharacterAndType, GetConnectionBulk, GetConnectionById, GetConnectionOfTheConcept, GetLink, GetTheConcept } from "../../app";
import { broadcastChannel } from "../../Constants/general.const";
import {
  GetComposition,
  GetCompositionById,
  GetCompositionFromMemory,
  GetCompositionWithId,
  GetCompositionWithIdAndDateFromMemory,
  GetCompositionWithIdFromMemory,
} from "../../Services/GetComposition";
import { GetCompositionFromConnectionsWithDataId, GetCompositionFromConnectionsWithDataIdIndex } from "../../Services/GetCompositionBulk";
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
  GetConnectionById: async (payload) => {
    const data = await GetConnectionById(payload.id)
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
  GetConnectionBulk: async (payload) => {
    const data = await GetConnectionBulk(payload.connectionIds);
    return { success: true, data };
  },
  GetConceptByCharacterAndType: async (payload) => {
    const data = await GetConceptByCharacterAndType(payload.characterValue, payload.typeId)
    return { success:true, data }
  },
  GetConnectionOfTheConcept: async (payload) => {
    const data = await GetConnectionOfTheConcept(payload.typeId, payload.ofTheConceptId, payload.userId, payload.inpage, payload.page)
    return { success:true, data }
  },
  GetAllConnectionsOfCompositionBulk: async (payload) => {
    const data = await GetAllConnectionsOfCompositionBulk(payload.composition_ids)
    return { success: true, data }
  },
  GetCompositionFromConnectionsWithDataId: async (payload) => {
    const data = await GetCompositionFromConnectionsWithDataId(payload.conceptIds, payload.connectionIds)
    return { success: true, data }
  },
  GetCompositionFromConnectionsWithDataIdIndex: async (payload) => {
    const data = await GetCompositionFromConnectionsWithDataIdIndex(payload.conceptIds, payload.connectionIds)
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

  // locals
  GetTheConceptLocal: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetTheConceptLocal(payload.id);
    return { success: true, data };
  },
  GetCompositionLocal: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetCompositionLocal(payload.id);
    return { success: true, data };
  },
  GetCompositionLocalWithId: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetCompositionLocalWithId(payload.id);
    return { success: true, data };
  },
  GetCompositionListLocal: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetCompositionListLocal(payload.compositionName, payload.userId);
    return { success: true, data };
  },
  GetCompositionListLocalWithId: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetCompositionListLocalWithId(payload.compositionName, payload.userId);
    return { success: true, data };
  },
  GetConceptByCharacterAndCategoryLocal: async (payload: any) => {
    console.log("sync actions sw");
    const data = await GetConceptByCharacterAndCategoryLocal(payload.character);
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
    const data = await ConnectionData.GetConnection(payload.id)
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
          console.log("get link listener vaue", value);
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