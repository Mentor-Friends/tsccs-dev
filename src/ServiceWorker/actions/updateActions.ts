import { Actions } from ".";
import { UpdateCompositionLocal } from "../../Services/Local/UpdateCompositionLocal";

export const updateActions: Actions = {
    // local
    UpdateCompositionLocal: async (payload: any) => {
        await UpdateCompositionLocal(payload.patcherStructure, payload.actions)
        return {success: true}
    }
}