/**
 * @fileoverview ReservedIds module for managing pre-allocated concept and connection IDs.
 * This module provides a pool of reserved IDs to avoid database round-trips during bulk operations.
 * @module DataStructures/ReservedIds
 */

import { GetReservedConnectionIds } from "../Api/GetReservedConnectionIds";
import { GetReservedIds } from "../Api/GetReservedIds";

/**
 * Manages a pool of pre-allocated concept IDs from the backend.
 * Automatically refills the pool when it gets low to ensure smooth operation.
 *
 * @class ReservedIds
 * @example
 * ```typescript
 * // Get a reserved ID for a new concept
 * const newId = await ReservedIds.getId();
 *
 * // Add an ID to the pool
 * ReservedIds.AddId(123);
 * ```
 *
 * @remarks
 * Maintains a pool of at least 10 IDs. When the pool has fewer than 10 IDs,
 * it automatically requests more from the backend.
 */
export class ReservedIds{
    /** Pool of reserved concept IDs */
    static  ids:number[] = [];

     /**
     * Gets the next available reserved ID from the pool.
     * Automatically refills the pool if it has fewer than 10 IDs.
     *
     * @returns {Promise<number>} A unique reserved concept ID
     *
     * @example
     * ```typescript
     * const id = await ReservedIds.getId();
     * const concept = new Concept(id, ...);
     * ```
     *
     * @remarks
     * Uses FIFO (first in, first out) to retrieve IDs.
     * Triggers a backend call to GetReservedIds when pool is low.
     */
     static async getId(){
        if(this.ids.length < 10){
            var ids =  await GetReservedIds();
        }
        var id = this.ids[0];
        this.ids.shift();
        return id;

    }

    /**
     * Adds an ID to the reserved IDs pool.
     *
     * @param {number} id - The ID to add to the pool
     *
     * @example
     * ```typescript
     * ReservedIds.AddId(123);
     * ```
     *
     * @remarks
     * Prevents duplicate IDs from being added to the pool.
     */
    static AddId(id:number){
        if(!this.ids.includes(id)){
            this.ids.push(id);
        }
    }
}

/**
 * Manages a pool of pre-allocated connection IDs from the backend.
 * Automatically refills the pool when it gets low to ensure smooth operation.
 *
 * @class ReservedConnectionIds
 * @example
 * ```typescript
 * // Get a reserved ID for a new connection
 * const newId = await ReservedConnectionIds.getId();
 *
 * // Add an ID to the pool
 * ReservedConnectionIds.AddId(456);
 * ```
 *
 * @remarks
 * Maintains a pool of at least 10 IDs. When the pool has fewer than 10 IDs,
 * it automatically requests more from the backend.
 */
export class ReservedConnectionIds{
    /** Pool of reserved connection IDs */
    static connectionIds: number[] = [];

    /**
     * Gets the next available reserved connection ID from the pool.
     * Automatically refills the pool if it has fewer than 10 IDs.
     *
     * @returns {Promise<number>} A unique reserved connection ID
     *
     * @example
     * ```typescript
     * const id = await ReservedConnectionIds.getId();
     * const connection = new Connection(id, ...);
     * ```
     *
     * @remarks
     * Uses FIFO (first in, first out) to retrieve IDs.
     * Triggers a backend call to GetReservedConnectionIds when pool is low.
     */
    static async getId(){
        if(this.connectionIds.length < 10){
            var connectionIds =  await GetReservedConnectionIds();
        }
        var id = this.connectionIds[0];
        this.connectionIds.shift();
        return id;

    }

    /**
     * Adds an ID to the reserved connection IDs pool.
     *
     * @param {number} id - The ID to add to the pool
     *
     * @example
     * ```typescript
     * ReservedConnectionIds.AddId(456);
     * ```
     *
     * @remarks
     * Prevents duplicate IDs from being added to the pool.
     */
    static AddId(id:number){
        if(!this.connectionIds.includes(id)){
            this.connectionIds.push(id);
        }
    }
}