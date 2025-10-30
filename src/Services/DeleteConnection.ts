/**
 * @fileoverview Connection deletion service for the CCS-JS system.
 * This module provides functionality for deleting connections between concepts, supporting both
 * individual and bulk deletion operations. It handles removal from cache structures, local
 * database, and backend synchronization to maintain system consistency.
 * @module Services/DeleteConnection
 */

import DeleteTheConnectionBulkApi from "../Api/DeleteConnectionApiBulk";
import DeleteTheConnection from "../Api/DeleteTheConnection";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionTypeTree } from "../DataStructures/ConnectionBinaryTree/ConnectionTypeTree";
import { removeFromDatabase } from "../Database/NoIndexDb";
import {GetConnectionById} from "./GetConnections";

/**
 * Deletes a single connection from the entire CCS-JS system.
 *
 * This function performs comprehensive deletion of a connection by removing it from:
 * 1. The backend server via API call
 * 2. The local IndexedDB database
 * 3. The ConnectionBinaryTree (main ID-based index)
 * 4. The ConnectionTypeTree (type-based index)
 *
 * The function first retrieves the connection to obtain its metadata (particularly the typeId),
 * then performs deletion across all storage and indexing layers to maintain consistency.
 *
 * @param id - The unique identifier of the connection to delete
 * @param token - Optional authentication token for backend deletion. If empty, will attempt
 *                deletion without authentication
 * @returns A promise that resolves to a boolean indicating whether the backend deletion was successful
 *
 * @example
 * ```typescript
 * // Delete a connection with authentication
 * import { DeleteConnectionById } from './DeleteConnection';
 *
 * const connectionId = 12345;
 * const authToken = "user-auth-token-xyz";
 *
 * const isDeleted = await DeleteConnectionById(connectionId, authToken);
 * if (isDeleted) {
 *   console.log("Connection deleted successfully");
 * } else {
 *   console.log("Backend deletion failed, but local cleanup completed");
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete connection without authentication token
 * const result = await DeleteConnectionById(54321);
 * console.log(`Deletion status: ${result}`);
 * ```
 *
 * @example
 * ```typescript
 * // Delete connection as part of composition update
 * const oldConnections = [123, 456, 789];
 *
 * for (const connId of oldConnections) {
 *   await DeleteConnectionById(connId, userToken);
 * }
 * ```
 *
 * @remarks
 * **Deletion Process:**
 * - Retrieves connection first to access typeId for tree removal
 * - Backend deletion is performed before local cleanup
 * - Local cleanup occurs regardless of backend deletion success
 * - Returns backend deletion status
 *
 * **Cache Consistency:**
 * - Removes from ConnectionBinaryTree (main index)
 * - Removes from ConnectionTypeTree (type-based index)
 * - Ensures no dangling references in memory
 *
 * **Data Persistence:**
 * - Removes from IndexedDB for offline consistency
 * - Backend deletion provides server-side cleanup
 *
 * @see {@link DeleteTheConnection} for backend deletion API
 * @see {@link GetConnectionById} for connection retrieval
 * @see {@link DeleteConnectionByIdBulk} for bulk deletion operations
 * @see {@link ConnectionBinaryTree} for main connection indexing
 * @see {@link ConnectionTypeTree} for type-based indexing
 */
export  async function DeleteConnectionById(id:number, token:string=""){
    let isDeleted:boolean = false;
    var connection = await GetConnectionById(id);
    isDeleted = await DeleteTheConnection(id, token);
   removeFromDatabase("connection",id);
   ConnectionBinaryTree.removeNodeFromTree(id);
   ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
   return isDeleted;
}

/**
 * Deletes multiple connections in bulk from the CCS-JS system.
 *
 * This function provides optimized bulk deletion of connections by:
 * 1. Making a single API call to delete all connections at once on the backend
 * 2. Removing each connection from the ConnectionBinaryTree cache
 * 3. Only processing positive IDs (skipping local/temporary connections)
 *
 * Bulk deletion is significantly more efficient than individual deletions when
 * removing multiple connections, as it reduces network overhead and API calls.
 * The function currently performs a lighter cleanup compared to single deletion,
 * focusing on the main binary tree index.
 *
 * @param ids - Array of connection IDs to delete. Can include negative (local) IDs which will be skipped
 * @returns A promise that resolves to a boolean indicating whether the bulk backend deletion was successful
 *
 * @example
 * ```typescript
 * // Delete multiple connections at once
 * import { DeleteConnectionByIdBulk } from './DeleteConnection';
 *
 * const connectionIds = [123, 456, 789, 1011];
 * const isDeleted = await DeleteConnectionByIdBulk(connectionIds);
 *
 * if (isDeleted) {
 *   console.log("All connections deleted successfully");
 * } else {
 *   console.log("Bulk deletion failed");
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete connections when updating composition
 * const oldConnectionIds = composition.connections
 *   .filter(conn => shouldDelete(conn))
 *   .map(conn => conn.id);
 *
 * if (oldConnectionIds.length > 0) {
 *   await DeleteConnectionByIdBulk(oldConnectionIds);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Delete connections with mixed local and persisted IDs
 * const connectionIds = [123, -456, 789, -1011];
 * // Only 123 and 789 will be deleted (positive IDs)
 * const result = await DeleteConnectionByIdBulk(connectionIds);
 * ```
 *
 * @example
 * ```typescript
 * // Handle bulk deletion with error checking
 * try {
 *   const idsToDelete = getConnectionsToRemove();
 *   const success = await DeleteConnectionByIdBulk(idsToDelete);
 *
 *   if (success) {
 *     updateUIAfterDeletion();
 *   } else {
 *     showErrorMessage("Failed to delete connections");
 *   }
 * } catch (error) {
 *   console.error("Error during bulk deletion:", error);
 * }
 * ```
 *
 * @remarks
 * Important implementation details:
 *
 * **Performance Optimization:**
 * - Single API call for all deletions (not one per connection)
 * - Significantly faster than multiple individual DeleteConnectionById calls
 * - Recommended for deleting 2 or more connections
 *
 * **Partial Cleanup:**
 * - Only removes from ConnectionBinaryTree, not ConnectionTypeTree
 * - Does not remove from local IndexedDB (commented out)
 * - Does not retrieve connection objects to save on queries
 * - This is intentional for performance but may leave some cache inconsistencies
 *
 * **ID Filtering:**
 * - Only processes positive IDs (id > 0)
 * - Negative IDs represent local/temporary connections not yet persisted
 * - Local connections don't exist on backend so they're skipped
 *
 * **Atomic Backend Operation:**
 * - Backend deletion is all-or-nothing via the bulk API
 * - If backend deletion succeeds, all local cleanup is performed
 * - If backend deletion fails, no local cleanup occurs
 *
 * **Use Cases:**
 * - Cleaning up connections when updating compositions
 * - Removing all connections to a deleted concept
 * - Batch operations in composition management
 * - Performance-critical deletion scenarios
 *
 * **Trade-offs:**
 * - Faster but less thorough cleanup than individual deletions
 * - May leave some entries in ConnectionTypeTree
 * - May leave some entries in IndexedDB
 * - Acceptable for most use cases where cache will be rebuilt
 *
 * **Commented Code:**
 * The function contains commented-out code for:
 * - Connection retrieval: `let connection = await GetConnectionById(id);`
 * - Database cleanup: `removeFromDatabase("connection",id);`
 * These may be intentionally disabled for performance reasons
 *
 * @see {@link DeleteTheConnectionBulkApi} for bulk backend deletion API
 * @see {@link DeleteConnectionById} for single connection deletion with full cleanup
 * @see {@link ConnectionBinaryTree} for main connection indexing
 * @see {@link ConnectionTypeTree} for type-based connection indexing
 */
export  async function DeleteConnectionByIdBulk(ids:number[]){
    let isDeleted = await DeleteTheConnectionBulkApi(ids);
    if(isDeleted){
        for(let i=0; i<ids.length; i++){
            let id= ids[i];
            if(id > 0){
            // let connection = await GetConnectionById(id);
            //removeFromDatabase("connection",id);
                ConnectionBinaryTree.removeNodeFromTree(id);
            }
        }
    }



   return isDeleted;
}