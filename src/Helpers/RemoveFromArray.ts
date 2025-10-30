/**
 * Remove From Array Helper Module for Concept Connection System (CCS-JS)
 *
 * This module provides utility functions for removing concepts and connections from arrays.
 * These functions mutate the original arrays by splicing out matching elements by ID.
 *
 * @module Helpers/RemoveFromArray
 * @see https://documentation.freeschema.com for data structure reference
 */

import { Concept } from "../DataStructures/Concept"
import { Connection } from "../DataStructures/Connection"
import { LConnection } from "../app"

/**
 * Removes a concept from an array by matching its ID.
 *
 * @param conceptList - Array of concepts to remove from (will be mutated)
 * @param concept - The concept to remove from the array
 *
 * @example
 * ```typescript
 * const concepts = [concept1, concept2, concept3];
 * RemoveConceptFromList(concepts, concept2);
 * console.log(concepts.length); // 2 (concept2 has been removed)
 * ```
 *
 * @remarks
 * This function mutates the original array using splice().
 * If the concept is not found (findIndex returns -1), splice will remove the last element.
 * Ensure the concept exists in the array before calling this function to avoid unintended removals.
 */
export function RemoveConceptFromList(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  if (Array.isArray(conceptList)) {
    conceptList.splice(
      conceptList.findIndex(function (i) {
        return i.id === concept.id
      }),
      1,
    )
  }
}

/**
 * Removes a connection from an array by matching its ID.
 *
 * @param connectionList - Array of connections to remove from (will be mutated)
 * @param connection - The connection to remove from the array
 *
 * @example
 * ```typescript
 * const connections = [conn1, conn2, conn3];
 * RemoveConnectionFromList(connections, conn2);
 * console.log(connections.length); // 2 (conn2 has been removed)
 * ```
 *
 * @remarks
 * This function mutates the original array using splice().
 * If the connection is not found (findIndex returns -1), splice will remove the last element.
 * Ensure the connection exists in the array before calling this function to avoid unintended removals.
 */
export function RemoveConnectionFromList(
  connectionList: Connection[] = [],
  connection: Connection,
) {
  if (Array.isArray(connectionList)) {
    connectionList.splice(
      connectionList.findIndex(function (i) {
        return i.id === connection.id
      }),
      1,
    )
  }
}

/**
 * Removes an LConnection (lightweight connection) from an array by matching its ID.
 *
 * @param connectionList - Array of LConnections to remove from (will be mutated)
 * @param connection - The LConnection to remove from the array
 *
 * @example
 * ```typescript
 * const lconnections = [lconn1, lconn2, lconn3];
 * RemoveLConnectionFromList(lconnections, lconn2);
 * console.log(lconnections.length); // 2 (lconn2 has been removed)
 * ```
 *
 * @remarks
 * This is the LConnection variant of RemoveConnectionFromList.
 * LConnection is a lightweight representation used for performance optimization.
 * This function mutates the original array using splice().
 * If the connection is not found (findIndex returns -1), splice will remove the last element.
 *
 * @see {@link RemoveConnectionFromList}
 */
export function RemoveLConnectionFromList(
  connectionList: LConnection[] = [],
  connection: LConnection,
) {
  if (Array.isArray(connectionList)) {
    connectionList.splice(
      connectionList.findIndex(function (i) {
        return i.id === connection.id
      }),
      1,
    )
  }
}
