/**
 * @module GetMaximumConnectionSyncTime
 * @description Utility for finding maximum sync times in the Concept Connection System (CCS).
 * This module provides functionality to determine the most recent synchronization time
 * from a collection of connections, enabling efficient incremental synchronization and
 * tracking of data freshness across the distributed concept system.
 */

import { Connection } from "../DataStructures/Connection";

/**
 * Finds the maximum (most recent) local sync time from an array of connections.
 *
 * This function iterates through all provided connections and identifies the most
 * recent localSyncTime value. This is useful for incremental synchronization operations
 * where you need to know when the last sync occurred to fetch only newer data.
 *
 * The function compares Date objects and returns the maximum timestamp, which can
 * then be used as a "since" parameter in subsequent sync operations to fetch only
 * connections that have been modified after this time.
 *
 * @param connections - Array of Connection objects to examine for sync times
 *
 * @returns The most recent Date found in the connections' localSyncTime fields,
 *          or Date(0) (January 1, 1970) if no connections or all have earlier times
 *
 * @remarks
 * - Initializes maxTime to Date(0) (Unix epoch: January 1, 1970, 00:00:00 UTC)
 * - Compares Date objects directly using > operator
 * - Returns Date(0) if connections array is empty
 * - Useful for implementing incremental sync strategies
 * - localSyncTime represents when the connection was last synchronized locally
 *
 * @example
 * ```typescript
 * // Get max sync time from user's connections
 * const userConnections = await GetConnectionsForUser(123);
 * const lastSyncTime = GetMaximumConnectionSyncTime(userConnections);
 * console.log("Last sync occurred at:", lastSyncTime);
 *
 * // Use for incremental sync
 * const connections = await GetAllConnections();
 * const maxTime = GetMaximumConnectionSyncTime(connections);
 * // Fetch only newer connections
 * const newConnections = await GetConnectionsSince(maxTime);
 *
 * // Check if any connections exist
 * const emptyArray: Connection[] = [];
 * const emptyMaxTime = GetMaximumConnectionSyncTime(emptyArray);
 * console.log(emptyMaxTime.getTime()); // 0 (epoch)
 *
 * // Track sync status
 * const connections = await GetConceptConnections(456);
 * const lastSync = GetMaximumConnectionSyncTime(connections);
 * const hoursSinceSync = (Date.now() - lastSync.getTime()) / (1000 * 60 * 60);
 * console.log(`Last synced ${hoursSinceSync} hours ago`);
 * ```
 *
 * @see {@link Connection} - Connection data structure with localSyncTime property
 */
export function GetMaximumConnectionSyncTime(connections: Connection[]){
    var maxTime: Date = new Date(0);
    for(var i=0;i<connections.length; i++){
        if(connections[i].localSyncTime > maxTime){
            maxTime = connections[i].localSyncTime;
        }
    }
    return maxTime;
}