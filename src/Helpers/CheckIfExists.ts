/**
 * Check If Exists Helper Module for Concept Connection System (CCS-JS)
 *
 * This module provides utility functions to verify the existence of concepts and connections
 * within arrays. These functions are essential for avoiding duplicates and finding related
 * entities in the CCS data structures.
 *
 * @module Helpers/CheckIfExists
 * @see https://documentation.freeschema.com for data structure reference
 */

import { Concept } from "../DataStructures/Concept"
import { Connection } from "../DataStructures/Connection"
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept"
import { LConcept, LConnection } from "../app"



/**
 * Checks if a concept exists in an array of concepts by matching IDs.
 *
 * @param conceptList - Array of concepts to search through
 * @param concept - The concept to search for
 * @returns The found concept if it exists, otherwise returns a default concept
 *
 * @example
 * ```typescript
 * const concepts = [concept1, concept2, concept3];
 * const found = CheckIfConceptsExistsInArray(concepts, concept2);
 * if (found.id !== 0) {
 *   console.log('Concept exists!');
 * }
 * ```
 *
 * @remarks
 * Returns a default concept (created via CreateDefaultConcept) if the concept is not found.
 * Always check the returned concept's ID to verify if a match was found.
 */
export function CheckIfConceptsExistsInArray(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  let foundConcept = CreateDefaultConcept()
  if (Array.isArray(conceptList)) {
    const check = conceptList.find(c => c.id === concept.id)
    if (check) {
      foundConcept = check
    }
  }
  return foundConcept
}

// export function CheckIfTypeConceptExistsInArray(
//   conceptList: Concept[] = [],
//   concept: Concept,
// ) {
//   let newConceptType = concept.type?.characterValue;
//   if(!newConceptType?.startsWith("the_")){
//     newConceptType = "the_" + newConceptType;
//   }
//   let startsWith = conceptList[i].type?.characterValue;
//   if(!startsWith?.startsWith("the_")){
//     startsWith = "the_" + startsWith;
//   }
//   let foundConcept = CreateDefaultConcept()
//   if (Array.isArray(conceptList)) {
//     const check = conceptList.find(c => c.typeId == concept.typeId)
//     if (check) {
//       foundConcept = check
//     }
//   }

//   return foundConcept
// }

/**
 * Checks if concepts of the same type exist in an array, matching by type ID or character value.
 *
 * @param conceptList - Array of concepts to search through
 * @param concept - The concept whose type to match against
 * @returns Array of all concepts that match the same type
 *
 * @example
 * ```typescript
 * const concepts = [concept1, concept2, concept3];
 * const sameType = CheckIfTypeConceptsExistsInArray(concepts, concept1);
 * console.log(`Found ${sameType.length} concepts of the same type`);
 * ```
 *
 * @remarks
 * This function normalizes type character values by ensuring they start with "the_" prefix
 * before comparison. It matches concepts by either:
 * - Exact typeId match
 * - Character value match (with "the_" prefix normalization)
 */
export function CheckIfTypeConceptsExistsInArray(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  let foundConcepts: Concept[] = [];
  let newConceptType = concept.type?.characterValue;
  if(!newConceptType?.startsWith("the_")){
    newConceptType = "the_" + newConceptType;
  }
  if (Array.isArray(conceptList)) {
    for(let i=0 ; i<conceptList.length; i++){
      let startsWith = conceptList[i].type?.characterValue;
      if(!startsWith?.startsWith("the_")){
        startsWith = "the_" + startsWith;
      }
      if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
        foundConcepts.push(conceptList[i]);
      }
    }

  }

  return foundConcepts
}


/**
 * Checks if LConcepts (lightweight concepts) of the same type exist in an array.
 *
 * @param conceptList - Array of LConcepts to search through
 * @param concept - The LConcept whose type to match against
 * @returns Array of all LConcepts that match the same type
 *
 * @example
 * ```typescript
 * const lconcepts = [lconcept1, lconcept2, lconcept3];
 * const sameType = CheckIfTypeLConceptsExistsInArray(lconcepts, lconcept1);
 * console.log(`Found ${sameType.length} LConcepts of the same type`);
 * ```
 *
 * @remarks
 * This is the LConcept variant of CheckIfTypeConceptsExistsInArray.
 * LConcept is a lightweight representation that uses typeCharacter instead of type object.
 * The function normalizes type character values by ensuring they start with "the_" prefix.
 *
 * @see {@link CheckIfTypeConceptsExistsInArray}
 */
export function CheckIfTypeLConceptsExistsInArray(
  conceptList: LConcept[] = [],
  concept: LConcept,
) {
  let foundConcepts: LConcept[] = [];
  let newConceptType = concept.typeCharacter;
  if(!newConceptType?.startsWith("the_")){
    newConceptType = "the_" + newConceptType;
  }
  if (Array.isArray(conceptList)) {
    for(let i=0 ; i<conceptList.length; i++){
      let startsWith = conceptList[i].typeCharacter;
      if(!startsWith?.startsWith("the_")){
        startsWith = "the_" + startsWith;
      }
      if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
        foundConcepts.push(conceptList[i]);
      }
    }

  }

  return foundConcepts
}



/**
 * Checks if a connection exists in an array of connections by matching IDs.
 *
 * @param connectionList - Array of connections to search through
 * @param connection - The connection to search for
 * @returns The found connection if it exists, otherwise returns a default connection with all zeros
 *
 * @example
 * ```typescript
 * const connections = [conn1, conn2, conn3];
 * const found = CheckIfConnectionExistsInArray(connections, conn2);
 * if (found.id !== 0) {
 *   console.log('Connection exists!');
 * }
 * ```
 *
 * @remarks
 * Returns a new Connection instance with all parameters set to 0 if the connection is not found.
 * Always check the returned connection's ID to verify if a match was found.
 */
export function CheckIfConnectionExistsInArray(
  connectionList: Connection[] = [],
  connection: Connection,
) {
  let foundConnection = new Connection(
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  )
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.id === connection.id)
    if (check) {
      foundConnection = check
    }
  }
  return foundConnection
}



/**
 * Checks if a connection exists in an array where a concept is either the source or target.
 *
 * @param connectionList - Array of connections to search through
 * @param conceptId - The ID of the concept to find in connections
 * @returns The first connection found where the concept appears as either toTheConceptId or ofTheConceptId
 *
 * @example
 * ```typescript
 * const connections = [conn1, conn2, conn3];
 * const found = CheckIfToTheConceptExistsInConnectionArray(connections, 123);
 * if (found.id !== 0) {
 *   console.log('Concept is connected!');
 * }
 * ```
 *
 * @remarks
 * This function searches bidirectionally - it finds connections where the concept is either:
 * - The target (toTheConceptId)
 * - The source (ofTheConceptId)
 * If both exist, the ofTheConceptId match takes precedence as it's checked second.
 * Returns a default connection (all zeros) if no match is found.
 */
export function CheckIfToTheConceptExistsInConnectionArray(
  connectionList: Connection[] = [],
  conceptId: number,
) {
  let foundConnection = new Connection(
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  )
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.toTheConceptId === conceptId)
    if (check) {
      foundConnection = check
    }
    const toCheck = connectionList.find(c => c.ofTheConceptId === conceptId)
    if (toCheck) {
      foundConnection = toCheck
    }
  }
  return foundConnection
}

/**
 * Finds all connections in an array where a concept appears as either source or target.
 *
 * @param connectionList - Array of connections to search through
 * @param conceptId - The ID of the concept to find in connections
 * @returns Array of all connections where the concept is connected (up to 2: one as target, one as source)
 *
 * @example
 * ```typescript
 * const connections = [conn1, conn2, conn3];
 * const found = CheckAllConnectionsConnectedInConnectionArray(connections, 123);
 * console.log(`Concept has ${found.length} connections`);
 * ```
 *
 * @remarks
 * This function finds connections where the concept appears as:
 * - toTheConceptId (target/destination of connection)
 * - ofTheConceptId (source/origin of connection)
 * Note: Uses `find()` which only returns the first match for each direction,
 * so maximum 2 connections will be returned even if more exist.
 *
 * @see {@link CheckAllConnectionsConnectedInLConnectionArray} for the LConnection variant
 */
export function CheckAllConnectionsConnectedInConnectionArray(
  connectionList: Connection[] = [],
  conceptId: number,
){
  let foundConnections = [];
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.toTheConceptId == conceptId)
    if (check) {
      foundConnections.push(check);
    }
    const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId)
    if (toCheck) {
      foundConnections.push(toCheck);
    }
  }
  return foundConnections
}



/**
 * Finds all LConnections (lightweight connections) in an array where a concept appears as either source or target.
 *
 * @param connectionList - Array of LConnections to search through
 * @param conceptId - The ID of the concept to find in connections
 * @returns Array of all LConnections where the concept is connected (up to 2: one as target, one as source)
 *
 * @example
 * ```typescript
 * const lconnections = [lconn1, lconn2, lconn3];
 * const found = CheckAllConnectionsConnectedInLConnectionArray(lconnections, 123);
 * console.log(`Concept has ${found.length} lightweight connections`);
 * ```
 *
 * @remarks
 * This is the LConnection variant of CheckAllConnectionsConnectedInConnectionArray.
 * LConnection is a lightweight representation of connections used for performance optimization.
 * Like its standard counterpart, it uses `find()` which only returns the first match per direction,
 * so maximum 2 connections will be returned.
 *
 * @see {@link CheckAllConnectionsConnectedInConnectionArray}
 */
export function CheckAllConnectionsConnectedInLConnectionArray(
  connectionList: LConnection[] = [],
  conceptId: number,
){
  let foundConnections = [];
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.toTheConceptId == conceptId)
    if (check) {
      foundConnections.push(check);
    }
    const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId)
    if (toCheck) {
      foundConnections.push(toCheck);
    }
  }
  return foundConnections
}

