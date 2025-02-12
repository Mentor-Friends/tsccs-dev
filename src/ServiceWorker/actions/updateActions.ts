import { Actions } from ".";
import { UpdateComposition } from "../../app";
import { UpdateCompositionLocal } from "../../Services/Local/UpdateCompositionLocal";

export const updateActions: Actions = {
    UpdateComposition: async (payload: any) => {
        await UpdateComposition(payload.patcherStructure)
        return {success: true}
    },
    // local
    UpdateCompositionLocal: async (payload: any) => {
        await UpdateCompositionLocal(payload.patcherStructure, payload.actions)
        return {success: true}
    }
}