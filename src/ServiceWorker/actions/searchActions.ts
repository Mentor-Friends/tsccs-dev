import { Actions } from ".";
import { RecursiveSearchApi, RecursiveSearchApiNewRawFullLinker, RecursiveSearchApiRaw, RecursiveSearchApiRawFullLinker, RecursiveSearchApiWithInternalConnections, SearchLinkMultipleAll } from "../../app";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId, formatConnectionsV2 } from "../../Services/Search/SearchWithTypeAndLinker";
import { BuildWidgetFromCache, BuildWidgetFromId, BuildWidgetFromIdForLatest } from "../../Widgets/WidgetBuild";

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
            payload.textSearch,
            payload.fullLinkers
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
            payload.textSearch,
            payload.fullLinkers
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

    formatConnectionsDataId: async (payload: any) => {
        const data = await formatConnectionsDataId(
            payload.linkers,payload.conceptIds,payload.mainCompositionIds,payload.reverse,payload.countInfos,payload.order
        )
        return { success: true, data }
    },
    formatConnectionsJustId: async (payload: any) => {
        const data = await formatConnectionsJustId(
            payload.linkers,payload.conceptIds,payload.mainCompositionIds,payload.reverse,payload.countInfos,payload.order
        )
        return { success: true, data }
    },
    formatConnectionsV2: async (payload: any) => {
        const data = await formatConnectionsV2(
            payload.linkers,payload.conceptIds,payload.mainCompositionIds,payload.reverse,payload.countInfos,payload.order
        )
        return { success: true, data }
    }, 
    formatConnections: async (payload: any) => {
        const data = await formatConnections(
            payload.linkers,payload.conceptIds,payload.mainCompositionIds,payload.reverse,payload.countInfos
        )
        return { success: true, data }
    },

    BuildWidgetFromId: async (payload: any) => {
        const data = await BuildWidgetFromId(payload.id)
        return { success:true, data};
    },

    BuildWidgetFromIdForLatest: async (payload: any) => {
        const data = await BuildWidgetFromIdForLatest(payload.id)
        return { success:true, data};
    },

    BuildWidgetFromCache: async (payload: any) => {
        const data = await BuildWidgetFromCache(payload.id)
        return { success:true, data};
    },
    
}