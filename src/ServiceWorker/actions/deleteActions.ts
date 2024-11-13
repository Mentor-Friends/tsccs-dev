import { Actions } from ".";
import { DeleteConceptLocal, DeleteConnectionById } from "../../app";

export const deleteActions: Actions = {
    DeleteConnectionById: async (payload: any) => {
        const data = await DeleteConnectionById(
            payload.id
        )
        return { success: true, data }
    },

    // local
    DeleteConceptLocal: async (payload: any) => {
        const data = await DeleteConceptLocal(
            payload.id
        )
        return { success: true, data }
    },
}