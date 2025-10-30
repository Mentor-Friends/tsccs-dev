/**
 * @module orderingConnections
 * @description Provides functionality to sort connections by ID in ascending or descending order
 */

import { Connection } from "../../app";

/**
 * Sorts an array of connections by their ID in the specified order.
 *
 * @param {Connection[]} connections - Array of Connection objects to sort
 * @param {string} [order="DESC"] - Sort order: "ASC" for ascending, "DESC" for descending
 * @returns {Connection[]} The sorted array of connections (mutates the original array)
 *
 * @example
 * ```typescript
 * const connections: Connection[] = [
 *   { id: 103, ... },
 *   { id: 101, ... },
 *   { id: 102, ... }
 * ];
 *
 * // Sort in descending order (newest first)
 * const sorted = orderTheConnections(connections, "DESC");
 * // Result: [{ id: 103 }, { id: 102 }, { id: 101 }]
 *
 * // Sort in ascending order (oldest first)
 * const sortedAsc = orderTheConnections(connections, "ASC");
 * // Result: [{ id: 101 }, { id: 102 }, { id: 103 }]
 * ```
 *
 * @remarks
 * - This function mutates the original array in place
 * - Default order is "DESC" (descending, newest first)
 * - Uses the connection ID for sorting
 * - Any value other than "ASC" will result in descending order
 */
export function orderTheConnections(connections: Connection[], order: string = "DESC"){
  console.log("this is the order", order);
    if(order == "ASC"){

        connections.sort(function(x: Connection, y:Connection){
          return x.id - y.id;
        })
      }
      else{
        connections.sort(function(x: Connection, y:Connection){
          return y.id - x.id;
        })
      }
      return connections;
}