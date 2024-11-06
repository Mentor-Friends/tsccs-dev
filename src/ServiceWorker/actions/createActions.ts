import { Actions } from ".";
import { CreateTheCompositionData } from "../../Services/CreateTheComposition";

export const createActions: Actions = {
    CreateTheComposition: async (payload: any) => {
        const data = await CreateTheCompositionData(
            payload.json,
            payload.ofTheConceptId,
            payload.ofTheConceptUserId,
            payload.mainKey,
            payload.userId,
            payload.accessId,
            payload.sessionInformationId
          );
        return { success: true, data }
    }
}