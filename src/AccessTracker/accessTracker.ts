import { BaseUrl } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

type CountMap = Record<number, number>;

export class AccessTracker {
    private static conceptsData: CountMap = {};
    private static connectionsData: CountMap = {};
    private static TimeToSync: number = 300000;
    private static nextSyncTime: number = Date.now(); 
        
    static {
        console.log(`[INIT] Next Sync Time set to: ${new Date(this.nextSyncTime).toISOString()}`);
        this.startAutoSync();
    }

    /**
     * Increments the count for a specific conceptId.
     */
    public static incrementConcept(conceptId: number): void {
        this.conceptsData[conceptId] = (this.conceptsData[conceptId] || 0) + 1;
        this.saveDataToLocalStorage()
    }

    /**
     * Increments the count for a specific connectionId.
     */
    public static incrementConnection(connectionId: number): void {
        this.connectionsData[connectionId] = (this.connectionsData[connectionId] || 0) + 1;
        this.saveDataToLocalStorage()
    }

    /**
     * Retrieves the top N concepts by their counts.
     */
    public static getTopConcepts(n: number): [number, number][] {
    return Object.entries(this.conceptsData)
        .map(([key, value]) => [parseInt(key), value])
        .sort((a, b) => b[1] - a[1])
        .slice(0, n) as [number, number][];
    }

    /**
     * Retrieves the top N connections by their counts.
     */
    public static getTopConnections(n: number): [number, number][] {
        return Object.entries(this.connectionsData)
        .map(([key, value]) => [parseInt(key), value])
        .sort((a, b) => b[1] - a[1])
        .slice(0, n) as [number, number][];
    }

    /**
     * Saves the concept and connection data to localStorage.
     */
    public static saveDataToLocalStorage(): void {
        const data = {
            concepts: this.conceptsData,
            connections: this.connectionsData
        };
        localStorage.setItem('trackerData', JSON.stringify(data));
    }

    /**
     * Loads the concept and connection data from localStorage.
     */
    public static loadDataFromLocalStorage(): void {
        const savedData = localStorage.getItem('trackerData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.conceptsData = data.concepts || {};
            this.connectionsData = data.connections || {};
        }
    }

    /**
     * Syncs the concept and connection data with the server.
     */
    public static async syncToServer(accessToken: string): Promise<void> {
        try {
            console.log(`Sync started at ${new Date().toISOString()} with token: ${accessToken}`);
            // Ensure conceptsData and connectionsData are not undefined or null
            const conceptsToSend = this.conceptsData && Object.keys(this.conceptsData).length > 0 ? this.conceptsData : {};
            const connectionsToSend = this.connectionsData && Object.keys(this.connectionsData).length > 0 ? this.connectionsData : {};

            const response = await fetch(`http://localhost:5000/api/v1/access-tracker/sync-access-tracker`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                concepts: conceptsToSend,
                connections: connectionsToSend
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to sync data to the server.');
            }

            const serverData = await response.json();
            this.conceptsData = serverData.concepts;
            this.connectionsData = serverData.connections;
            this.saveDataToLocalStorage();
            console.log(`Sync successful at ${new Date().toISOString()}`);
            this.setNextSyncTime();
        } catch (error) {
            console.error('Sync error:', error);
        }
    }

    /**
     * Sets the next sync time based on the current time and sync interval.
     */
    private static setNextSyncTime(): void {
        // Calculate next sync time (current time + TimeToSync interval)
        this.nextSyncTime = Date.now() + this.TimeToSync;
        console.log(`Next sync scheduled at: ${new Date(this.nextSyncTime).toISOString()}`); // Log next sync time
    }

    /**
     * Starts auto-syncing to the server every specified time interval.
     * This will automatically call `syncToServer` every 5 minutes
     */
    private static startAutoSync(): void {
        const tokenString = TokenStorage.BearerAccessToken;

        if (tokenString) {
        console.log("[AUTO-SYNC] Auto-sync initialized.");
        this.syncNow().catch(console.error);
        }

        setInterval(() => {
        const currentTime = Date.now();
        console.log(`[CHECK] Current Time: ${new Date(currentTime).toISOString()}`);

        if (currentTime >= this.nextSyncTime) {
            console.log(`[SYNC TRIGGER] Time to sync! Triggering sync at: ${new Date(currentTime).toISOString()}`);
            this.syncNow().catch(console.error);
        } else {
            console.log(`[WAIT] Not time to sync yet. Next Sync Time: ${new Date(this.nextSyncTime).toISOString()}`);
        }
        }, 1000); // Check every second
    }


    /**
     * Sync immediately (called by setInterval when time to sync has arrived).
     */
    private static async syncNow(): Promise<void> {
        const tokenString = TokenStorage.BearerAccessToken;
        if (tokenString) {
          console.log(`[MANUAL SYNC] Sync manually triggered at: ${new Date().toISOString()}`);
          await this.syncToServer(tokenString);
        } else {
          console.warn("[MANUAL SYNC] No valid access token found. Sync aborted.");
        }
    }
    
}