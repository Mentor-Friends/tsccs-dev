/**
 * @module GetRelation
 * @description Retrieves related concepts in the Concept Connection System (CCS).
 * This module provides functions to traverse concept relationships, supporting both
 * forward and reverse traversal, pagination, and multiple return formats (compositions,
 * raw concepts, or connections). Relations define semantic connections between concepts.
 */

import { Connection } from "../DataStructures/Connection";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConceptByCharacterAndCategory } from "./ConceptFinding/GetConceptByCharacterAndCategory";
import { GetConnectionToTheConcept } from "../Api/GetConnectionToTheConcept";
import { GetConceptBulk } from "../app";

/**
 * Retrieves related concepts as compositions through a specified relation.
 *
 * This function traverses concept relationships in either forward or reverse direction:
 * - Forward: Finds concepts that the source concept points TO via the relation
 * - Reverse: Finds concepts that point TO the source concept via the relation
 *
 * The process:
 * 1. Gets the source concept by ID
 * 2. Finds the relation concept by character and category
 * 3. Retrieves connections in the specified direction
 * 4. Prefetches all related concepts for performance
 * 5. Converts each concept to its composition representation
 *
 * @param id - The ID of the source concept to find relations for
 * @param relation - The name of the relation (e.g., "author", "parent", "tag")
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number to retrieve (default: 1)
 * @param reverse - If true, finds concepts pointing TO this concept; if false, finds concepts this concept points TO (default: false)
 *
 * @returns Promise resolving to an array of compositions representing related concepts
 *
 * @remarks
 * - Uses GetConceptByCharacterAndCategory to find the relation concept
 * - Forward direction uses GetConnectionOfTheConcept (from -> to)
 * - Reverse direction uses GetConnectionToTheConcept (to <- from)
 * - Uses bulk prefetching for performance optimization
 * - Returns compositions with full connection data
 * - Empty array if relation concept not found
 *
 * @example
 * ```typescript
 * // Get all posts authored by a user (forward relation)
 * const userPosts = await GetRelation(123, "author", 10, 1, false);
 *
 * // Get the author of a post (reverse relation)
 * const postAuthor = await GetRelation(456, "author", 1, 1, true);
 *
 * // Get tags for an article (forward)
 * const tags = await GetRelation(789, "tag", 20, 1, false);
 *
 * // Get all articles with a specific tag (reverse)
 * const taggedArticles = await GetRelation(789, "tag", 20, 1, true);
 *
 * // Each result is a composition with connections
 * userPosts.forEach(post => {
 *   console.log("Related composition:", post);
 * });
 * ```
 *
 * @see {@link GetRelationRaw} - Returns raw concepts instead of compositions
 * @see {@link GetRelationConnections} - Returns connection objects
 * @see {@link GetTheConcept} - Retrieves individual concepts
 * @see {@link GetCompositionWithIdAndDateFromMemory} - Converts concepts to compositions
 */
export async function GetRelation(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
    let output: any[] = [];
    let  concept:Concept = await GetTheConcept(id);
    let relatedConceptString = await GetConceptByCharacterAndCategory(relation);
    let relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      let prefetch :number[] = [];
      let connections:Connection[] = [];
      if(reverse){
        let connectionsString = await GetConnectionToTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
        connections = connectionsString as Connection[];
        let prefetch :number[] = [];
        for(let i=0; i<connections.length; i++){
          prefetch.push(connections[i].ofTheConceptId);
        }
        await GetAllConnectionsOfCompositionBulk(prefetch);
        for(let i=0; i<connections.length; i++){
          let ofTheConceptId = connections[i].ofTheConceptId;
          let ofConcept = await GetTheConcept(ofTheConceptId);
          let newComposition = await GetCompositionWithIdAndDateFromMemory(ofConcept.id);
          output.push(newComposition);
        }
      }
      else{
        let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
        connections = connectionsString as Connection[];
        for(let i=0; i<connections.length; i++){
          prefetch.push(connections[i].toTheConceptId);
        }
        await GetAllConnectionsOfCompositionBulk(prefetch);
        for(let i=0; i<connections.length; i++){
          let toConceptId = connections[i].toTheConceptId;
          let toConcept = await GetTheConcept(toConceptId);
          let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
          output.push(newComposition);
        }
      }


    }
    return  output;
}

/**
 * Retrieves related concepts in raw form through a specified relation.
 *
 * This function is similar to GetRelation but returns raw Concept objects instead
 * of compositions. It supports both forward and reverse traversal and uses bulk
 * concept retrieval for optimal performance. This is more lightweight when only
 * concept data is needed without full composition details.
 *
 * @param id - The ID of the source concept to find relations for
 * @param relation - The name of the relation (e.g., "author", "parent", "tag")
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number to retrieve (default: 1)
 * @param reverse - If true, finds concepts pointing TO this concept; if false, finds concepts this concept points TO (default: false)
 *
 * @returns Promise resolving to an array of raw Concept objects
 *
 * @remarks
 * - Returns Concept objects directly without composition wrapper
 * - More lightweight than GetRelation - use when compositions not needed
 * - Uses GetConceptBulk for efficient bulk retrieval
 * - Supports both forward and reverse traversal
 * - Empty array if relation concept not found
 * - Better performance for simple concept retrieval
 *
 * @example
 * ```typescript
 * // Get raw author concepts
 * const authors = await GetRelationRaw(123, "author", 10, 1, true);
 * authors.forEach(author => {
 *   console.log("Author ID:", author.id);
 *   console.log("Author Type:", author.type);
 * });
 *
 * // Get related tags without composition overhead
 * const tags = await GetRelationRaw(456, "tag", 20, 1, false);
 *
 * // Quick check for existence
 * const parents = await GetRelationRaw(789, "parent", 1, 1, false);
 * const hasParent = parents.length > 0;
 * ```
 *
 * @see {@link GetRelation} - Returns full compositions instead of raw concepts
 * @see {@link GetRelationConnections} - Returns connection objects
 * @see {@link GetConceptBulk} - Bulk concept retrieval
 */
export async function GetRelationRaw(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
  let output: Concept[] = [];
  let  concept:Concept = await GetTheConcept(id);
  let relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  let relatedConcept = relatedConceptString as Concept;
  let connections:Connection[] = [];
  let prefetch :number[] = [];

  if(relatedConcept.id > 0){
    if(reverse){
      let connectionsString = await GetConnectionToTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
      for(let i=0; i<connections.length; i++){
        prefetch.push(connections[i].ofTheConceptId);
      }
    }
    else{
      let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
      for(let i=0; i<connections.length; i++){
        prefetch.push(connections[i].toTheConceptId);
      }
    }
   output = await GetConceptBulk(prefetch);
  }
  return  output;
}

/**
 * Retrieves connection objects for a specified relation.
 *
 * This function returns the actual Connection objects that link concepts through
 * a relation, rather than the related concepts themselves. This is useful when
 * you need to inspect or manipulate the connection metadata, timestamps, or
 * relationship properties directly.
 *
 * Unlike GetRelation and GetRelationRaw which return concepts, this returns the
 * connections that define the relationships, allowing access to connection-specific
 * data like creation time, sync status, and connection properties.
 *
 * @param id - The ID of the source concept to find relation connections for
 * @param relation - The name of the relation (e.g., "author", "parent", "tag")
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number to retrieve (default: 1)
 * @param reverse - If true, finds connections pointing TO this concept; if false, finds connections FROM this concept (default: false)
 *
 * @returns Promise resolving to an array of Connection objects
 *
 * @remarks
 * - Returns Connection objects, not Concept objects
 * - Provides access to connection metadata and properties
 * - Supports both forward and reverse traversal
 * - Does not fetch or return the actual concepts being connected
 * - Empty array if relation concept not found
 * - Useful for connection-level operations and analysis
 * - Connection objects contain: typeId, ofTheConceptId, toTheConceptId, etc.
 *
 * @example
 * ```typescript
 * // Get connection objects for author relations
 * const authorConnections = await GetRelationConnections(123, "author", 10, 1, false);
 * authorConnections.forEach(conn => {
 *   console.log("Connection Type ID:", conn.typeId);
 *   console.log("From Concept:", conn.ofTheConceptId);
 *   console.log("To Concept:", conn.toTheConceptId);
 *   console.log("Created:", conn.localSyncTime);
 * });
 *
 * // Get tag connections in reverse
 * const tagConnections = await GetRelationConnections(456, "tag", 20, 1, true);
 *
 * // Check connection metadata
 * const parentConnections = await GetRelationConnections(789, "parent", 1, 1, false);
 * if (parentConnections.length > 0) {
 *   console.log("Parent connection exists");
 *   console.log("Connection details:", parentConnections[0]);
 * }
 * ```
 *
 * @see {@link GetRelation} - Returns related concepts as compositions
 * @see {@link GetRelationRaw} - Returns related concepts as raw objects
 * @see {@link Connection} - Connection data structure
 */
export async function GetRelationConnections(id:number, relation:string, inpage:number=10, page:number=1, reverse:boolean = false){
  let output: Concept[] = [];
  let  concept:Concept = await GetTheConcept(id);
  let relatedConceptString =    await GetConceptByCharacterAndCategory(relation);
  let relatedConcept = relatedConceptString as Concept;
  let connections:Connection[] = [];
  let prefetch :number[] = [];
  if(relatedConcept.id > 0){
    if(reverse){
      let connectionsString = await GetConnectionToTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
    }
    else{
      let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      connections = connectionsString as Connection[];
    }
  }
  return connections;
}
