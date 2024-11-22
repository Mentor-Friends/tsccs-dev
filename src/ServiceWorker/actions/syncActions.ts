import { Actions } from ".";
import { LocalSyncData, SyncData } from "../../app"



export const syncActions: Actions = {
    SyncData__SyncDataOnline: async (payload: any) => {
        console.log('sync actions sw')
        const data = await SyncData.SyncDataOnline();
        return { success: true, data }
    },

    // local
    LocalSyncData__SyncDataOnline: async (payload: any) => {
        console.log('sync actions sw')
        const data = await LocalSyncData.SyncDataOnline(payload.transactionId);
        return { success: true, data }
    },
    LocalSyncData__initializeTransaction: async (payload: any) => {
        console.log('sync actions sw')
        const data = await LocalSyncData.initializeTransaction(payload.transactionId);
        return { success: true, data }
    },
    LocalSyncData__markTransactionActions: async (payload: any) => {
        console.log('sync actions sw')
        const data = await LocalSyncData.markTransactionActions(payload.transactionId, payload.actions);
        return { success: true, data, actions: payload.actions }
    },
    LocalSyncData__rollbackTransaction: async (payload: any) => {
        console.log('sync actions sw')
        const data = await LocalSyncData.rollbackTransaction(payload.transactionId, payload.actions);
        return { success: true, data, actions: payload.actions }
    },
}