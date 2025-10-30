/**
 * @fileoverview SettingData module for managing persisted setting data in CCS-JS.
 * This module defines the structure for storing user preferences and configuration.
 * @module DataStructures/SettingData
 */

/**
 * Represents persisted setting data for the application.
 * Can be stored in local storage or IndexedDB for user preferences.
 *
 * @class SettingData
 * @example
 * ```typescript
 * // Create settings with online sync enabled
 * const settings = new SettingData(true);
 *
 * // Store settings
 * localStorage.setItem('settings', JSON.stringify(settings));
 * ```
 */
export class SettingData{

    /** Unique identifier for the settings record */
    public id:number = 1;

    /** Controls whether online synchronization is enabled */
    public isOnlineSync: boolean = false;

    /**
     * Creates a new SettingData instance.
     *
     * @param {boolean} isOnlineSync - Whether to enable online synchronization
     *
     * @example
     * ```typescript
     * const settings = new SettingData(true);
     * console.log(settings.isOnlineSync); // true
     * ```
     */
    constructor(isOnlineSync:boolean){
        this.isOnlineSync = isOnlineSync;
    }
}