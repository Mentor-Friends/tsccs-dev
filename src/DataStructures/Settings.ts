/**
 * @fileoverview Settings module for managing global application settings in CCS-JS.
 * This module provides centralized configuration flags for application behavior.
 * @module DataStructures/Settings
 */

/**
 * Global application settings for CCS-JS.
 * Controls application-wide behavior such as update status and synchronization mode.
 *
 * @class Settings
 * @example
 * ```typescript
 * // Enable online sync
 * Settings.isOnlineSync = true;
 *
 * // Check if system is updated
 * if (Settings.isUpdated) {
 *   console.log("System is up to date");
 * }
 * ```
 *
 * @remarks
 * All properties are static flags used across the application.
 * These settings affect how data is synchronized and persisted.
 */
export class Settings{
    /** Flag indicating if the system has been updated to the latest version */
    static isUpdated = false;

    /** Flag controlling whether changes are synchronized online immediately */
    static isOnlineSync = false;

}