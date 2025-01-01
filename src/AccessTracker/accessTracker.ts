import { BaseUrl, ConceptsData, ConnectionData, Logger } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

type CountMap = Record<number, number>;

export class AccessTracker {
    private static conceptsData: CountMap = {};
    private static connectionsData: CountMap = {};
    private static readonly SYNC_INTERVAL_MS = 120 * 1000; // 120 Sec
    private static nextSyncTime: number = Date.now(); 
    public static activateStatus:boolean = false;
    private static readonly accessData = "Access Data"
        
    static {        
        this.startAutoSync();
    }

    /**
     * Increments the count for a specific conceptId.
     */
    public static incrementConcept(conceptId: number): void {
        try{
            if(conceptId){
                this.conceptsData[conceptId] = (this.conceptsData[conceptId] || 0) + 1;
            }
        } catch(error){
            console.error("Failed on increment concept");
        }
    }

    /**
     * Increments the count for a specific connectionId.
     */
    public static incrementConnection(connectionId: number): void {
        try{
            if(connectionId){
                this.connectionsData[connectionId] = (this.connectionsData[connectionId] || 0) + 1;
            }
        } catch(error){
            console.error("Failed on increment connection");
        }

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
        
        localStorage?.setItem(this.accessData, JSON.stringify(data));
    }

    /**
     * Loads the concept and connection data from localStorage.
     */
    public static loadDataFromLocalStorage(): void {
        const savedData = localStorage?.getItem(this.accessData);
        if (savedData) {
            const data = JSON.parse(savedData);
            this.conceptsData = data.concepts || {};
            this.connectionsData = data.connections || {};
        }
    }

    public static async sendToServer(){
        try{
            const accessToken = TokenStorage.BearerAccessToken
            if(!accessToken) return;
            await this.syncToServer(accessToken)
        } catch(error) {
            console.error("Failed to process Access Tracker Sync with Server");
        }

    }

    /**
     * Syncs the concept and connection data with the server.
     */
    public static async syncToServer(accessToken: string): Promise<void> {
        try {
            if (!Object.keys(this.conceptsData).length && !Object.keys(this.connectionsData).length) {
                return;
            }
    
            // Ensure conceptsData and connectionsData are not undefined or null
            const conceptsToSend = this.conceptsData && Object.keys(this.conceptsData).length > 0 ? this.conceptsData : {};
            const connectionsToSend = this.connectionsData && Object.keys(this.connectionsData).length > 0 ? this.connectionsData : {};

            console.log("Access Tracker Sent to SERVER..", conceptsToSend, connectionsToSend);

            const response = await fetch(BaseUrl.PostPrefetchConceptConnections(), {
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

            this.conceptsData = {}
            this.connectionsData = {}
            
            this.setNextSyncTime();

            // Logger.log("INFO", "Sync access tracker to server")
            
        } catch (error) {
            console.error('Sync error:', error);
        }
    }

    /**
     * Sets the next sync time based on the current time and sync interval.
     */
    private static setNextSyncTime(): void {
        // Calculate next sync time (current time + time interval)
        this.nextSyncTime = Date.now() + this.SYNC_INTERVAL_MS;
        // Logger.log("INFO", "Setip access tracker next time to sync to server")
    }

    /**
     * Starts auto-syncing to the server every specified time interval.
     * This will automatically call `syncToServer` every 5 minutes
     */
    private static startAutoSync(): void {

        const tokenString = TokenStorage.BearerAccessToken;

        if (tokenString) {
            this.syncNow().catch(console.error);
        }
        
        setInterval(() => {
            const currentTime = Date.now();
            // console.log(`[CHECK] Current Time: ${new Date(currentTime).toISOString()}`);

            if (this.nextSyncTime && currentTime >= this.nextSyncTime) {
                // console.log(`[SYNC TRIGGER] Time to sync! Triggering sync at: ${new Date(currentTime).toISOString()}`);
                this.syncNow().catch(console.error);
            }
        }, 60000); // Check every 60 Seconds
    }


    /**
     * Sync immediately called by setInterval when time to sync has arrived.
     */
    private static async syncNow(): Promise<void> {
        const tokenString = TokenStorage.BearerAccessToken;
        
        if (tokenString) {
          await this.syncToServer(tokenString);
        } else {
          console.warn("[MANUAL SYNC] No valid access token found. Sync aborted.");
        }
    }

    /**
     * Fetch suggested concepts from the server with proper error handling.
     */
    public static async GetSuggestedConcepts(top?:number) {
        try {
            const accessToken = TokenStorage.BearerAccessToken;

            // Construct the URL with the top parameter if it exists
            const url = new URL(BaseUrl.GetSuggestedConcepts());
            if (top !== undefined) {
                url.searchParams.append('top', top.toString());
            }

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Failed to load concepts: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
            }
            
            const concepts = await response.json() || [];

            await this.addConceptToBinaryTree(concepts.data)
            return concepts;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching suggested concepts:', error.message);
                throw new Error('Unable to fetch suggested concepts. Please try again later.');
            } else {
                console.error('An unexpected error occurred:', error);
                throw new Error('An unexpected error occurred while fetching suggested concepts.');
            }
        }
    }


    /**
     * Fetch suggested connections from the server with proper error handling.
     */
    public static async GetSuggestedConnections(top?:number) {
        try {
            const accessToken = TokenStorage.BearerAccessToken;
            
            // Construct the URL with the top parameter if it exists
            const url = new URL(BaseUrl.GetSuggestedConnections());
            if (top !== undefined) {
                url.searchParams.append('top', top.toString());
            }

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Failed to load connections: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
            }

            const connections = await response.json() || [];
            
            await this.addConnectionToBinaryTree(connections.data)
            return connections;
        } catch (error:any) {
            if (error instanceof Error) {
                console.error('Error fetching suggested Connections:', error.message);
                throw new Error('Unable to fetch suggested connections. Please try again later.');
            } else {
                console.error('An unexpected error occurred:', error);
                throw new Error('An unexpected error occurred while fetching suggested Connections.');
            }
        }
    }

    /**
     * Add Concepts to Binary Tree
     */
    private static async addConceptToBinaryTree(conceptsDataArray:[]){
        try{
            conceptsDataArray.forEach(conceptObject => {
                ConceptsData.AddConcept(conceptObject);
            });
        } catch(error) {
            console.error("Error on adding Concepts Data into tree");
        }
    }

    /**
     * Add Concepts to Binary Tree
     */
    private static async addConnectionToBinaryTree(connectionsDataArray:[]){
        try{
            connectionsDataArray.forEach(connectionObject => {
                ConnectionData.AddConnection(connectionObject);
            });
        } catch(error) {
            console.error("Error on adding Connections Data into tree");
        }
    }

}