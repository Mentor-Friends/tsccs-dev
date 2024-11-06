import { Actions } from ".";
import { UpdateCompositionLocalData } from "../../Services/Local/UpdateCompositionLocal";

export const updateActions: Actions = {
    UpdateCompositionLocal: async (payload: any) => {
        await UpdateCompositionLocalData(payload.patcherStructure)
        return {success: true}
    }
}