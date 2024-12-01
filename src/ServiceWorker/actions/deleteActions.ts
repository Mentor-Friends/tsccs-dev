import { Actions } from ".";
import { DeleteConceptById, DeleteConceptLocal, DeleteConnectionById, DeleteConnectionByType } from "../../app";

export const deleteActions: Actions = {
    DeleteConceptById: async (payload: any) => {
        const data = await DeleteConceptById(
            payload.id
        )
        return { success: true, data }
    },
    DeleteConnectionById: async (payload: any) => {
        const data = await DeleteConnectionById(
            payload.id
        )
        return { success: true, data }
    },
    DeleteConnectionByType: async (payload: any) => {
        const data = await DeleteConnectionByType(
            payload.id,
            payload.linker
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