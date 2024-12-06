import { Actions } from ".";
import { CreateTheCompositionLocal, MakeTheInstanceConcept, MakeTheTimestamp, MakeTheTypeConcept, MakeTheTypeConceptLocal } from "../../app";
import CreateTheComposition from "../../Services/CreateTheComposition";
import CreateTheConceptLocal from "../../Services/Local/CreateTheConceptLocal";
import MakeTheConceptLocal from "../../Services/Local/MakeTheConceptLocal";
import { MakeTheInstanceConceptLocal } from "../../Services/Local/MakeTheInstanceConceptLocal";

export const createActions: Actions = {
    MakeTheInstanceConcept: async (payload: any) => {
        const data = await MakeTheInstanceConcept(
            payload.type,
            payload.referent,
            payload.composition,
            payload.userId,
            payload.passedAccessId,
            payload.passedSessionId,
            payload.referentId
        )
        return { success: true, data }
    },
    MakeTheConceptLocal: async (payload: any) => {
        const data = await MakeTheConceptLocal(
            payload.referent, 
            payload.typeCharacter, 
            payload.userId, 
            payload.categoryId, 
            payload.typeId, 
            payload.actions
        )
        return { success: true, data }
    },
    MakeTheTypeConcept: async (payload: any) => {
        const data = await MakeTheTypeConcept(
            payload.typeString,
            payload.sessionId,
            payload.sessionUserId,
            payload.userId,
        )
        return { success: true, data }
    },
    MakeTheTimestamp: async (payload: any) => {
        const data = await MakeTheTimestamp(
            payload.type, 
            payload.referent, 
            payload.userId, 
            payload.accessId, 
            payload.sessionInformationId
        )
        return { success: true, data }
    },
    CreateTheComposition: async (payload: any) => {
        const data = await CreateTheComposition(
            payload.json,
            payload.ofTheConceptId,
            payload.ofTheConceptUserId,
            payload.mainKey,
            payload.userId,
            payload.accessId,
            payload.sessionInformationId
          );
        return { success: true, data }
    },
    
    // local
    MakeTheInstanceConceptLocal: async (payload: any) => {
        const data = await MakeTheInstanceConceptLocal(
            payload.type,
            payload.referent,
            payload.composition,
            payload.userId,
            payload.accessId,
            payload.sessionInformationId,
            payload.referentId,
            payload.actions
        )
        return { success: true, data, actions: payload.actions }
    },
    MakeTheTypeConceptLocal: async (payload: any) => {
        const data = await MakeTheTypeConceptLocal(
            payload.typeString,
            payload.sessionId,
            payload.sessionUserId,
            payload.userId,
            payload.actions
        )
        return { success: true, data, actions: payload.actions }
    },
    CreateTheConceptLocal: async (payload) => {
        const data = await CreateTheConceptLocal(
            payload.referent, 
            payload.typecharacter, 
            payload.userId, 
            payload.categoryId, 
            payload.typeId, 
            payload.accessId, 
            payload.isComposition, 
            payload.referentId,
            payload.actions
        )
        return { success: true, data, actions: payload.actions }
    },
    CreateTheCompositionLocal: async (payload) => {
        const data = await CreateTheCompositionLocal(
            payload.json,
            payload.ofTheConceptId,
            payload.ofTheConceptUserId,
            payload.mainKey,
            payload.userId,
            payload.accessId,
            payload.sessionInformationId,
            payload.automaticSync,
            payload.actions
        )
        return { success: true, data, actions: payload.actions }
    }
}