/**
 * Default Concept Factory
 *
 * This module provides utility functions for creating default/empty concept instances
 * and formatting date values. These utilities are used throughout the system when
 * initializing concepts or handling date operations.
 *
 * @module CreateDefaultConcept
 */

import { Concept } from "../DataStructures/Concept";

/**
 * Creates a default concept with zero/empty values and current timestamps.
 *
 * This factory function is used throughout the system when a concept instance is needed
 * but not yet populated with real data. It's particularly useful as a placeholder during
 * concept retrieval operations, initialization, or when a null-safe concept object is required.
 *
 * The created concept has all numeric fields set to 0, characterValue set to "0",
 * isComposition set to false, and timestamps set to the current date/time.
 *
 * @returns A new Concept instance with default values
 *
 * @example
 * ```typescript
 * // Use as a placeholder during concept retrieval
 * let concept = CreateDefaultConcept();
 *
 * try {
 *   concept = await GetTheConcept(123);
 * } catch (error) {
 *   console.log("Using default concept due to error");
 * }
 *
 * if (concept.id === 0) {
 *   console.log("Concept not found, using default");
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Initialize a concept variable before conditional assignment
 * let resultConcept = CreateDefaultConcept();
 *
 * if (useCache) {
 *   resultConcept = await ConceptsData.GetConcept(id);
 * } else {
 *   resultConcept = await GetConcept(id);
 * }
 * ```
 *
 * @remarks
 * - All ID fields (id, typeId, userId, etc.) are set to 0
 * - characterValue is set to "0" string
 * - isComposition is set to false
 * - created_on and updated_on are set to current date/time using formatDate()
 * - The concept is not added to any data store; it's just an instance
 * - Commonly used as a null-safe alternative when concept retrieval might fail
 *
 * @see {@link formatDate} for the date formatting function used
 * @see {@link Concept} for the concept data structure
 */
export function CreateDefaultConcept(){
    let created_on = formatDate(new Date());
    let updated_on = formatDate(new Date());
    let concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false,created_on,updated_on);
    return concept;
}

/**
 * Formats a Date object into a human-readable string with 12-hour time format.
 *
 * This utility function converts JavaScript Date objects into a consistent string
 * format used throughout the CCS system for timestamps. The format includes the date
 * in MM/DD/YYYY format and time in 12-hour format with AM/PM indicator.
 *
 * The function is primarily used for setting created_on and updated_on timestamps
 * on concepts and connections.
 *
 * @param date - The Date object to format
 *
 * @returns A formatted date string in the pattern "M/D/YYYY h:mm:ss AM/PM"
 *
 * @example
 * ```typescript
 * // Format current date
 * const now = new Date();
 * const formatted = formatDate(now);
 * console.log(formatted); // "1/15/2024 3:45:30 PM"
 * ```
 *
 * @example
 * ```typescript
 * // Use when creating a concept
 * const concept = new Concept(
 *   123,
 *   456,
 *   999,
 *   // ... other fields
 *   formatDate(new Date()),  // created_on
 *   formatDate(new Date())   // updated_on
 * );
 * ```
 *
 * @example
 * ```typescript
 * // Format a specific date
 * const specificDate = new Date(2024, 0, 15, 15, 30, 45);
 * console.log(formatDate(specificDate)); // "1/15/2024 3:30:45 PM"
 * ```
 *
 * @remarks
 * - Months are 1-indexed in output (January = 1) but 0-indexed in JavaScript Date
 * - Uses 12-hour time format with AM/PM
 * - Minutes and seconds are zero-padded to 2 digits
 * - Hours are NOT zero-padded (e.g., "3:05 PM" not "03:05 PM")
 * - Date components are NOT zero-padded (e.g., "1/5/2024" not "01/05/2024")
 * - Output format: "M/D/YYYY h:mm:ss AM/PM"
 * - Midnight (00:00) is represented as "12:00 AM"
 * - Noon (12:00) is represented as "12:00 PM"
 *
 * @see {@link CreateDefaultConcept} which uses this function for timestamps
 */
export function formatDate(date:Date) {
  const month = date.getMonth() + 1; // months are 0-indexed
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  // Pad minutes and seconds
  const pad = (n:any) => n.toString().padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}