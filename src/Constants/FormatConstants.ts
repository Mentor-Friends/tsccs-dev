/**
 * Format Constants Module for Concept Connection System (CCS-JS)
 *
 * This module defines constants for different data format types used throughout the system.
 * These format types determine how data structures (concepts, connections, etc.) are serialized
 * and presented when retrieved from the API or displayed in the application.
 *
 * @module Constants/FormatConstants
 * @see https://documentation.freeschema.com for format specifications
 */

/**
 * Standard normal format for data representation.
 * This format includes essential data fields without additional metadata.
 *
 * @example
 * ```typescript
 * import { NORMAL } from './FormatConstants';
 * const format = NORMAL; // 1
 * ```
 */
export const NORMAL = 1;

/**
 * Data with ID format.
 * This format includes the data along with its unique identifier.
 *
 * @example
 * ```typescript
 * import { DATAID } from './FormatConstants';
 * const format = DATAID; // 2
 * ```
 */
export const DATAID = 2;

/**
 * Just data format without any metadata.
 * This format returns only the core data fields, excluding IDs and timestamps.
 *
 * @example
 * ```typescript
 * import { JUSTDATA } from './FormatConstants';
 * const format = JUSTDATA; // 3
 * ```
 */
export const JUSTDATA = 3;

/**
 * Data with ID and date format.
 * This format includes the data, its ID, and associated timestamp information.
 *
 * @example
 * ```typescript
 * import { DATAIDDATE } from './FormatConstants';
 * const format = DATAIDDATE; // 4
 * ```
 */
export const DATAIDDATE = 4;

/**
 * Raw data format.
 * This format returns data in its raw form as stored in the database without any processing.
 *
 * @example
 * ```typescript
 * import { RAW } from './FormatConstants';
 * const format = RAW; // 5
 * ```
 */
export const RAW = 5;

/**
 * All IDs format.
 * This format includes all related IDs (concept IDs, type IDs, user IDs, etc.).
 *
 * @example
 * ```typescript
 * import { ALLID } from './FormatConstants';
 * const format = ALLID; // 6
 * ```
 */
export const ALLID = 6;

/**
 * List normal format.
 * This format is used for representing lists or arrays of data in standard format.
 *
 * @example
 * ```typescript
 * import { LISTNORMAL } from './FormatConstants';
 * const format = LISTNORMAL; // 7
 * ```
 */
export const LISTNORMAL = 7;