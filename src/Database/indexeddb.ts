/**
 * IndexedDB management module for the Concept Connection System.
 *
 * This module provides a singleton class that maintains a static reference to an
 * IndexedDB database connection. It serves as the primary interface for browser-based
 * storage of concepts, settings, and other CCS data structures.
 *
 * @module Database/indexeddb
 * @see https://documentation.freeschema.com for reference
 */

import { ConceptsData } from "../DataStructures/ConceptData";
import { Concept } from "../DataStructures/Concept";
import { Settings } from "../DataStructures/Settings";
import { SettingData } from "../DataStructures/SettingData";
import { BaseUrl } from "../DataStructures/BaseUrl";

var version = 4;

/**
 * Singleton class managing the IndexedDB database connection.
 *
 * IndexDb provides a static database reference that can be accessed throughout
 * the application for storing and retrieving concept data, settings, and other
 * persistent information in the browser's IndexedDB storage.
 *
 * @remarks
 * The static db property is shared across the entire application. It should be
 * initialized during application startup before performing any database operations.
 * The current database schema version is 4.
 *
 * @example
 * ```typescript
 * // Access the database instance
 * const database = IndexDb.db;
 * if (database) {
 *   // Perform database operations
 *   const transaction = database.transaction(['concepts'], 'readonly');
 * }
 * ```
 *
 * @see LocalIndexDb for local-only database operations
 * @see https://documentation.freeschema.com for database schema details
 */
export class IndexDb{
  /**
   * Static reference to the IndexedDB database instance.
   *
   * This property holds the active IDBDatabase connection used throughout
   * the application. Must be initialized before use.
   *
   * @type {IDBDatabase}
   */
  static db:IDBDatabase;
}

