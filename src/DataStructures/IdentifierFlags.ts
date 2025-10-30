/**
 * @fileoverview IdentifierFlags module for tracking data loading states in CCS-JS.
 * This module provides centralized flags for synchronizing data loading across different storage structures.
 * @module DataStructures/IdentifierFlags
 */

/**
 * Centralized flags for tracking the loading state of various data structures.
 * Used for synchronization when loading initial data from backend or local storage.
 *
 * @class IdentifierFlags
 * @example
 * ```typescript
 * // Check if data is loaded
 * if (IdentifierFlags.isDataLoaded) {
 *   console.log("Concept data ready");
 * }
 *
 * // Set flag when loading completes
 * IdentifierFlags.isDataLoaded = true;
 * ```
 *
 * @remarks
 * All properties are static flags (booleans) used across the application
 * to coordinate asynchronous data loading operations.
 */
export class IdentifierFlags{
    /** Flag indicating if the type tree has been loaded from backend */
    static isTypeLoaded = false;

    /** Flag indicating if the character tree has been loaded from backend */
    static isCharacterLoaded =false;

    /** Flag indicating if the main concept data has been loaded from backend */
    static isDataLoaded = false;

    /** Flag indicating if local concept data has been loaded from IndexedDB */
    static isLocalDataLoaded = false;

    /** Flag indicating if local character tree has been loaded from IndexedDB */
    static isLocalCharacterLoaded = false;

    /** Flag indicating if local type tree has been loaded from IndexedDB */
    static isLocalTypeLoaded = false;

    /** Flag indicating if connection data has been loaded from backend */
    static isConnectionLoaded = false;

    /** Flag indicating if connection type tree has been loaded from backend */
    static isConnectionTypeLoaded = false;

    /** Flag indicating if local connection data has been loaded from IndexedDB */
    static isLocalConnectionLoaded = false;
}