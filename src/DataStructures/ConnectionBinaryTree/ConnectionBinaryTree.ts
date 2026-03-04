import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";
import { dispatchIdEvent } from "../../app";

/**
 * ConnectionBinaryTree — In-memory connection store keyed by numeric connection ID.
 *
 * Backed by a Map<number, Connection> for O(1) lookups, inserts, and deletes.
 * The secondary index trees (ConnectionTypeTree, ConnectionOfTheTree) are
 * managed separately by ConnectionData and remain unchanged.
 *
 * All public method signatures are preserved for backward compatibility.
 * getNodeFromTree returns a { key, value } wrapper so callers that access
 * node.value continue to work without changes.
 */
export class ConnectionBinaryTree {
    /** Sentinel root — non-null when the map has data, null when empty. */
    static connectionroot: ConnectionNode | null = null;

    /** Primary data store: connection ID → Connection object */
    private static connectionMap: Map<number, Connection> = new Map();

    /**
     * Low-level add — stores the node's key/value in the Map.
     * Kept for API compatibility.
     * @param node - ConnectionNode with numeric key and Connection value
     */
    static addNodeToTree(node: ConnectionNode) {
        try {
            this.connectionMap.set(node.key, node.value);
            if (this.connectionroot === null) {
                this.connectionroot = node;
            }
        } catch (error) {
            console.log("This is the error in making the tree", error);
            throw error;
        }
    }

    /**
     * Adds a connection to the Map and dispatches an event for the
     * owning concept so UI listeners can react.
     *
     * The dispatchIdEvent(ofTheConceptId) was previously fired inside
     * ConnectionNode.addNode when the node was placed into a null slot.
     * We only fire it for new connections (not overwrites) to preserve
     * the original behavior.
     *
     * @param connection - The Connection to store
     */
    static addConnectionToTree(connection: Connection) {
        // Only dispatch event for genuinely new insertions, not updates
        if (!this.connectionMap.has(connection.id)) {
            dispatchIdEvent(connection.ofTheConceptId);
        }

        // O(1) Map insert
        this.connectionMap.set(connection.id, connection);

        // Keep connectionroot non-null so legacy null-checks pass
        if (this.connectionroot === null) {
            this.connectionroot = new ConnectionNode(connection.id, connection, null, null);
        }
    }

    /**
     * Returns the total number of connections stored.
     * @returns Number of connections in the Map
     */
    static traverse() {
        return this.connectionMap.size;
    }

    /**
     * Polls until IdentifierFlags.isConnectionLoaded is true (max 25 seconds).
     * Used by callers that need to wait for the initial IndexedDB load to finish.
     */
    static async waitForDataToLoad() {
        return new Promise((resolve, reject) => {
            this.checkFlag(resolve);
            setTimeout(() => {
                reject("not");
            }, 25000);
        });
    }

    /** Recursive polling helper for waitForDataToLoad */
    static checkFlag(resolve: any) {
        if (IdentifierFlags.isConnectionLoaded) {
            return resolve("done");
        } else {
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
    }

    /**
     * Removes a connection by ID. Dispatches an event for the owning concept
     * before deletion so listeners can react to the removal.
     *
     * @param id - The connection ID to remove
     */
    static async removeNodeFromTree(id: number) {
        const connection = this.connectionMap.get(id);
        if (connection) {
            // Preserve side effect: notify listeners of the owning concept
            dispatchIdEvent(connection.ofTheConceptId);
            this.connectionMap.delete(id);

            if (this.connectionMap.size === 0) {
                this.connectionroot = null;
            }
        }
    }

    /**
     * Retrieves a connection by ID from the Map.
     *
     * Returns a { key, value } wrapper matching the ConnectionNode shape.
     * Also increments the connection's count field for access tracking
     * (preserving the original ConnectionNode.getFromNode behavior).
     *
     * @param id - The connection ID to look up
     * @returns ConnectionNode-like wrapper with .value = Connection, or null/undefined
     */
    static async getNodeFromTree(id: number) {
        try {
            const connection = this.connectionMap.get(id);
            if (connection) {
                // Preserve count increment (was in ConnectionNode.getFromNode lines 303-308)
                if (connection.count) {
                    connection.count++;
                } else {
                    connection.count = 1;
                }
                return { key: id, value: connection } as ConnectionNode;
            }
            return null;
        } catch (ex) {
            console.log("this is the getNodeFromTree", id);
            return undefined;
        }
    }

    /**
     * Bulk connection retrieval by ID list.
     *
     * For each ID found in the Map, pushes the Connection into connectionArray
     * and removes the ID from the ids array. IDs remaining after this call
     * are "not found" and will be fetched from the backend.
     *
     * Performance: O(k) where k = ids.length (was O(N) full tree traversal).
     *
     * @param ids - Array of connection IDs to look up (mutated: found IDs are spliced out)
     * @param connectionArray - Output array (mutated: found Connections are pushed)
     * @param remainingIds - Not used directly but kept for API compatibility
     */
    static async getConnectionListFromIds(ids: number[], connectionArray: Connection[], remainingIds: any) {
        // Iterate backward so splice doesn't shift indexes
        for (let i = ids.length - 1; i >= 0; i--) {
            const connection = this.connectionMap.get(ids[i]);
            if (connection) {
                connectionArray.push(connection);
                ids.splice(i, 1);
            }
        }
    }
}
