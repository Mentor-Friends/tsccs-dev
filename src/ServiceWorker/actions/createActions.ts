import { Actions } from ".";
import CreateTheComposition from "../../Services/CreateTheComposition";
import { MakeTheInstanceConceptLocal } from "../../Services/Local/MakeTheInstanceConceptLocal";

export const createActions: Actions = {
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
    MakeTheInstanceConceptLocal: async (payload: any) => {
        const data = await MakeTheInstanceConceptLocal(
            payload.type,
            payload.referent,
            payload.composition,
            payload.userId,
            payload.accessId,
            payload.sessionInformationId,
            payload.referentId0
        )
        return { success: true, data }
    }
}