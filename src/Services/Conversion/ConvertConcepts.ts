/**
 * @module ConvertConcepts
 * @description Provides conversion functions between Concept/Connection and LConcept/LConnection (local versions)
 */

import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { CreateDefaultConcept } from "../CreateDefaultConcept";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept"

/**
 * Converts a standard Concept to a Local Concept (LConcept).
 * LConcepts include additional properties for local/optimistic operations.
 *
 * @param {Concept} concept - The standard Concept to convert
 * @returns {LConcept} The converted LConcept with all properties mapped
 *
 * @example
 * ```typescript
 * const concept: Concept = {
 *   id: 123,
 *   characterValue: "John",
 *   typeId: 456,
 *   ...
 * };
 * const lConcept = convertFromConceptToLConcept(concept);
 * // lConcept includes all concept properties plus isTemp, typeCharacter
 * ```
 *
 * @remarks
 * - Maps all standard Concept properties to LConcept
 * - Sets isTemp to false (not a temporary concept)
 * - Includes typeCharacter from concept.type.characterValue
 * - Used when loading concepts from backend into local cache
 * - LConcepts are used for optimistic UI updates
 */
export function convertFromConceptToLConcept(concept: Concept) {
    const LConcept: LConcept = CreateDefaultLConcept()
    LConcept.id = concept.id
    LConcept.ghostId = concept.ghostId
    LConcept.userId = concept.userId
    LConcept.accessId = concept.accessId
    LConcept.categoryId = concept.categoryId
    LConcept.characterValue = concept.characterValue
    LConcept.entryTimeStamp = concept.entryTimeStamp
    LConcept.typeId = concept.typeId
    LConcept.type = concept.type
    LConcept.isTemp = false
    LConcept.typeCharacter = concept?.type?.characterValue ?? "";
    return LConcept
  }


/**
 * Converts a Local Concept (LConcept) back to a standard Concept.
 * Used when persisting local concepts to the backend.
 *
 * @param {LConcept} lconcept - The LConcept to convert
 * @returns {Concept} The converted standard Concept
 *
 * @example
 * ```typescript
 * const lConcept: LConcept = {
 *   id: 123,
 *   ghostId: 456,
 *   characterValue: "John",
 *   isTemp: true,
 *   ...
 * };
 * const concept = convertFromLConceptToConcept(lConcept);
 * // concept is now a standard Concept without local-specific properties
 * ```
 *
 * @remarks
 * - Maps LConcept properties back to standard Concept
 * - Drops local-specific properties (isTemp, typeCharacter)
 * - Used when saving concepts to backend
 * - Reverse operation of convertFromConceptToLConcept
 */
export function convertFromLConceptToConcept(lconcept: LConcept){
    const concept: Concept = CreateDefaultConcept();
    concept. id = lconcept.id
    concept.ghostId = lconcept.ghostId;
    concept.userId = lconcept.userId;
    concept.accessId = lconcept.accessId;
    concept.entryTimeStamp = lconcept.entryTimeStamp;
    concept.typeId = lconcept.typeId
    concept.categoryId = lconcept.categoryId
    concept.characterValue = lconcept.characterValue
    return concept;
  }
  
/**
 * Converts a standard Connection to a Local Connection (LConnection).
 * LConnections include additional properties for local/optimistic operations.
 *
 * @param {Connection} connection - The standard Connection to convert
 * @returns {LConnection} The converted LConnection with all properties mapped
 *
 * @example
 * ```typescript
 * const connection: Connection = {
 *   id: 789,
 *   ofTheConceptId: 123,
 *   toTheConceptId: 456,
 *   typeId: 999,
 *   ...
 * };
 * const lConnection = convertFromConnectionToLConnection(connection);
 * // lConnection includes all connection properties plus isTemp flag
 * ```
 *
 * @remarks
 * - Maps all standard Connection properties to LConnection
 * - Sets isTemp to false (not a temporary connection)
 * - Used when loading connections from backend into local cache
 * - LConnections are used for optimistic UI updates
 * - Enables local connection management before backend persistence
 */
export function convertFromConnectionToLConnection(connection: Connection) {
    const Lconnection: LConnection = new LConnection(0, 0, 0, 0, 0, 0)
    Lconnection.id = connection.id
    Lconnection.ghostId = connection.ghostId
    Lconnection.accessId = connection.accessId
    Lconnection.ofTheConceptId = connection.ofTheConceptId
    Lconnection.toTheConceptId = connection.toTheConceptId
    Lconnection.entryTimeStamp = connection.entryTimeStamp
    Lconnection.typeId = connection.typeId
    Lconnection.isTemp = false
    return Lconnection
  }
  