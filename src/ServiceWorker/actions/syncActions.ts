import { Actions } from ".";
import { SyncData } from "../../app"



export const syncActions: Actions = {
    SyncDataOnline: async (payload: any) => {
        console.log('sync actions sw')
        await SyncData.SyncDataOnline();
        return { success: true, data: undefined }
    }
}