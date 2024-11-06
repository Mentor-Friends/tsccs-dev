import { Actions } from ".";
import { GetCompositionByIdData, GetCompositionData } from "../../Services/GetComposition";
import { GetLinkData } from "../../Services/GetLink";

export const getActions: Actions = {
    GetLink: async (payload: any) => {
        const data = await GetLinkData(
            payload.id,
            payload.linker,
            payload.inpage,
            payload.page
          );
        return { success: true, data }
    },
    GetComposition: async (payload: any) => {
        const data = await GetCompositionData(
            payload.id
          );
        return { success: true, data }
    },
    GetCompositionById: async (payload: any) => {
        const data = await GetCompositionByIdData(
            payload.id
          );
        return { success: true, data }
    },
}