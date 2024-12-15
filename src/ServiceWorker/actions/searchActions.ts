import { Actions } from ".";
import { RecursiveSearchApi, RecursiveSearchApiNewRawFullLinker, RecursiveSearchApiRaw, RecursiveSearchApiRawFullLinker, RecursiveSearchApiWithInternalConnections, SearchLinkMultipleAll } from "../../app";

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

    // Recursive Search
    RecursiveSearchApi: async (payload: any) => {
        const data = await RecursiveSearchApi(
            payload.composition,
            payload.listLinkers,
            payload.textSearch
        )
        return { success: true, data }
    },

    RecursiveSearchApiWithInternalConnections: async (payload: any) => {
        const data = await RecursiveSearchApiWithInternalConnections(
            payload.composition,
            payload.listLinkers,
            payload.textSearch
        )
        return { success: true, data }
    },
    RecursiveSearchApiRaw: async (payload: any) => {
        const data = await RecursiveSearchApiRaw(
            payload.composition,
            payload.listLinkers,
            payload.textSearch
        )
        return { success: true, data }
    },
    RecursiveSearchApiRawFullLinker: async (payload: any) => {
        const data = await RecursiveSearchApiRawFullLinker(
            payload.composition,
            payload.fullLinkers,
            payload.textSearch
        )
        return { success: true, data }
    },
    RecursiveSearchApiNewRawFullLinker: async (payload: any) => {
        const data = await RecursiveSearchApiNewRawFullLinker(
            payload.composition,
            payload.fullLinkers,
            payload.textSearch
        )
        return { success: true, data }
    },
    
}