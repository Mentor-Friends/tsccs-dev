import { Actions } from ".";
import { RecursiveSearchApiRaw, SearchLinkMultipleAll } from "../../app";

export const searchActions: Actions = {
    SearchLinkMultipleAll: async (payload: any) => {
        const data = await SearchLinkMultipleAll(
            payload.searchQuery,
            payload.token,
            payload.caller,
            payload.format
          );
        return { success: true, data }
    },
    RecursiveSearchApiRaw: async (payload: any) => {
        const data = await RecursiveSearchApiRaw(
            payload.composition,
            payload.listLinkers,
            payload.textSearch
        )
        return { success: true, data }
    }
}