import { Connection } from "../../DataStructures/Connection";

/**
 * Converts a local connection (LConnection) to a standard Connection format.
 *
 * This function extracts the essential properties from a local connection and creates
 * a new Connection object. It's part of the local/server conversion system used when
 * preparing local connections for backend sync.
 *
 * **Properties Transferred:**
 * - id: Connection identifier
 * - ofTheConceptId: Source concept ID
 * - toTheConceptId: Target concept ID
 * - typeId: Connection type ID
 * - orderId: Order for sorting connections
 *
 * **LConnection vs Connection:**
 * - LConnection: Local-only connections stored in IndexedDB (negative IDs)
 * - Connection: Server-synced connections (positive IDs)
 * - Both use the same Connection class structure
 *
 * **Use Cases:**
 * - Preparing local connections for backend sync
 * - Converting local data to server format
 * - Data export and serialization
 * - Maintaining consistency across local and server data
 *
 * @param lconnection - The local connection to convert
 *
 * @returns A new Connection object with properties copied from the local connection
 *
 * @example
 * // Convert local connection before syncing
 * const localConn = await CreateTheConnectionLocal(fromId, toId, typeId, 1);
 * const serverConn = ConvertFromLConnectionToConnection(localConn);
 * // Now ready for backend sync
 *
 * @example
 * // Batch conversion
 * const localConnections = await GetAllLocalConnections();
 * const serverConnections = localConnections.map(lc =>
 *   ConvertFromLConnectionToConnection(lc)
 * );
 *
 * @see {@link CreateTheConnectionLocal} for creating local connections
 * @see {@link ConvertFromLConceptToConcept} for concept conversion
 */
export function ConvertFromLConnectionToConnection(lconnection: Connection){
    let connection: Connection = new Connection(0,0,0,0,0,0,0);
    connection.ofTheConceptId = lconnection.ofTheConceptId;
    connection.toTheConceptId = lconnection.toTheConceptId;
    connection.typeId = lconnection.typeId;
    connection.orderId = lconnection.orderId;
    connection.id = lconnection.id;
    return connection;
}