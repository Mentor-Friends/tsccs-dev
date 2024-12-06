import { Concept, Connection } from "../app";



const channelName = 'Freeschema_mftsccs_browser_channel'
export const broadcastChannel = new BroadcastChannel(channelName);

export interface InnerActions {
    concepts: Concept[], 
    connections: Connection[]
}