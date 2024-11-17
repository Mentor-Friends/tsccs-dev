import { Actions } from ".";
import { CreateTheCompositionLocal, MakeTheInstanceConcept, MakeTheTypeConcept, MakeTheTypeConceptLocal } from "../../app";
import CreateTheComposition from "../../Services/CreateTheComposition";
import CreateTheConceptLocal from "../../Services/Local/CreateTheConceptLocal";
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
    MakeTheTypeConcept: async (payload: any) => {
        const data = await MakeTheTypeConcept(
            payload.typeString,
            payload.sessionId,
            payload.sessionUserId,
            payload.userId,
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
            payload.referentId
        )
        return { success: true, data }
    },
    MakeTheTypeConceptLocal: async (payload: any) => {
        const data = await MakeTheTypeConceptLocal(
            payload.typeString,
            payload.sessionId,
            payload.sessionUserId,
            payload.userId
        )
        return { success: true, data }
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
            payload.referentId
        )
        return { success: true, data }
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
            payload.automaticSync
        )
        return { success: true, data }
    }
}