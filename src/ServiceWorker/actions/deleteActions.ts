import { Actions } from ".";
import { DeleteConceptById, DeleteConceptLocal, DeleteConnectionById, DeleteConnectionByType, DeleteUser } from "../../app";
import { DeleteConnectionByIdBulk } from "../../Services/DeleteConnection";
import { DeleteConnectionByTypeBulk } from "../../Services/DeleteConnectionByType";

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

    DeleteUser: async(payload: any)=>{
        const data = await DeleteUser(payload.id)
        return { success: true, data }
    },
    DeleteConnectionByType: async (payload: any) => {
        const data = await DeleteConnectionByType(
            payload.id,
            payload.linker
        )
        return { success: true, data }
    },

    DeleteConnectionByTypeBulk: async (payload: any) => {
        const data = await DeleteConnectionByTypeBulk(
            payload.id,
            payload.linkers
        )
        return { success: true, data }
    },
    DeleteConnectionByIdBulk: async (payload: any) => {
        const data = await DeleteConnectionByIdBulk(
            payload.ids
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