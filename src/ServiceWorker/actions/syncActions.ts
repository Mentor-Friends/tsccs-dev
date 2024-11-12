import { Actions } from ".";
import { LocalSyncData, SyncData } from "../../app"



export const syncActions: Actions = {
    SyncData_SyncDataOnline: async (payload: any) => {
        console.log('sync actions sw')
        const data = await SyncData.SyncDataOnline();
        return { success: true, data }
    },
    LocalSyncData_SyncDataOnline: async (payload: any) => {
        console.log('sync actions sw')
        const data = await LocalSyncData.SyncDataOnline();
        return { success: true, data }
    }
}