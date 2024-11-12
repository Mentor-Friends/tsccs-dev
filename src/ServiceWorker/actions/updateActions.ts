import { Actions } from ".";
import { UpdateCompositionLocal } from "../../Services/Local/UpdateCompositionLocal";

export const updateActions: Actions = {
    UpdateCompositionLocal: async (payload: any) => {
        await UpdateCompositionLocal(payload.patcherStructure)
        return {success: true}
    }
}