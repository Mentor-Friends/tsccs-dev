/**
 * Unique Insert Helper Module for Concept Connection System (CCS-JS)
 *
 * This module provides utility functions for inserting values into arrays while ensuring uniqueness.
 * It prevents duplicate entries by checking if the value already exists before insertion.
 *
 * @module Helpers/UniqueInsert
 * @see https://documentation.freeschema.com for data structure reference
 */

/**
 * Inserts a number into an array only if it doesn't already exist.
 *
 * @param Array - Array of numbers to insert into (will be mutated if insertion occurs)
 * @param toInsert - The number to insert into the array
 * @returns The modified array with the number inserted (or unchanged if it already existed)
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3];
 * InsertUniqueNumber(numbers, 4); // [1, 2, 3, 4]
 * InsertUniqueNumber(numbers, 2); // [1, 2, 3, 4] (2 already exists, no change)
 * ```
 *
 * @remarks
 * This function mutates the original array by pushing the value if it's not found.
 * Uses indexOf() for checking existence, which has O(n) time complexity.
 * For large arrays with frequent insertions, consider using a Set data structure instead.
 */
export default function InsertUniqueNumber(
    Array: number[],
    toInsert: number,
  ): number[] {
    if (Array.indexOf(toInsert) === -1) {
      Array.push(toInsert)
    }
    return Array
  }
  