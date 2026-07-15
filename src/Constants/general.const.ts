import type { Concept, Connection } from "../app";



const channelName = 'Freeschema_mftsccs_browser_channel'
let broadcastChannelInstance: BroadcastChannel | null = null;

function getBroadcastChannel(): BroadcastChannel {
    if (!broadcastChannelInstance) {
        broadcastChannelInstance = new BroadcastChannel(channelName);
    }

    return broadcastChannelInstance;
}

export const broadcastChannel = {
    addEventListener(type: "message", listener: (event: MessageEvent) => void) {
        getBroadcastChannel().addEventListener(type, listener as EventListener);
    },
    removeEventListener(type: "message", listener: (event: MessageEvent) => void) {
        getBroadcastChannel().removeEventListener(type, listener as EventListener);
    },
    postMessage(message: any) {
        getBroadcastChannel().postMessage(message);
    },
    close() {
        if (broadcastChannelInstance) {
            broadcastChannelInstance.close();
            broadcastChannelInstance = null;
        }
    }
};

export interface InnerActions {
    concepts: Concept[], 
    connections: Connection[]
}
