/**
 * @module GetLink
 * @description Retrieves linked concepts in the Concept Connection System (CCS).
 * This module provides functions to traverse concept relationships through linkers,
 * supporting pagination and both composition-based and raw concept retrieval.
 * Linkers are special concepts that define typed relationships between concepts.
 */

import { Connection } from "../DataStructures/Connection";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "./../DataStructures/Concept";
import { GetCompositionWithIdAndDateFromMemory, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetTheConcept from "./GetTheConcept";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";

/**
 * Retrieves linked concepts as compositions through a specified linker.
 *
 * This function follows a multi-step process to retrieve related concepts:
 * 1. Gets the source concept by ID
 * 2. Constructs a linker string from the concept's type and provided linker name
 * 3. Finds the linker concept (type 16)
 * 4. Retrieves all connections using that linker from the source concept
 * 5. Prefetches all target concepts for performance
 * 6. Converts each target concept to its composition representation
 *
 * The linker string format is: "{type}_s_{linker}" (e.g., "user_s_posts").
 *
 * @param id - The ID of the source concept to find links from
 * @param linker - The name of the linker relationship (e.g., "posts", "comments", "likes")
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number to retrieve (default: 1)
 *
 * @returns Promise resolving to an array of compositions representing linked concepts
 *
 * @remarks
 * - Linker concepts have type ID 16
 * - Uses bulk prefetching for performance optimization
 * - Returns compositions with full connection data
 * - Empty array if linker concept not found
 * - Linker format: "{source_type}_s_{linker_name}"
 * - The "_s" suffix indicates a plural/collection relationship
 *
 * @example
 * ```typescript
 * // Get all posts linked to a user (page 1, 10 per page)
 * const userPosts = await GetLink(123, "posts");
 *
 * // Get comments with custom pagination
 * const comments = await GetLink(456, "comments", 20, 2);
 *
 * // Get likes for a post
 * const likes = await GetLink(789, "likes", 50, 1);
 *
 * // Each result is a composition with connections
 * userPosts.forEach(post => {
 *   console.log("Post composition:", post);
 * });
 * ```
 *
 * @see {@link GetLinkRaw} - Returns raw concepts instead of compositions
 * @see {@link GetTheConcept} - Retrieves individual concepts
 * @see {@link GetCompositionWithIdAndDateFromMemory} - Converts concepts to compositions
 * @see {@link GetConnectionOfTheConcept} - Retrieves connections
 */
export async function GetLink(id:number, linker:string, inpage:number=10, page:number=1){
    var output: any[] = [];
    var  concept:Concept = await GetTheConcept(id);
    var linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
    var relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
    var relatedConcept = relatedConceptString as Concept;
    if(relatedConcept.id > 0){
      var connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
      var connections = connectionsString as Connection[];
      var prefetch :number[] = [];
      for(var i=0; i<connections.length; i++){
        prefetch.push(connections[i].toTheConceptId);
      }
      await GetAllConnectionsOfCompositionBulk(prefetch);
      for(var i=0; i<connections.length; i++){
        let toConceptId = connections[i].toTheConceptId;
        let toConcept = await GetTheConcept(toConceptId);
        let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
        output.push(newComposition);
      }
    }
    return  output;
}

/**
 * Retrieves linked concepts in raw form through a specified linker.
 *
 * This function is similar to GetLink but returns raw Concept objects instead
 * of compositions. It follows the same linker-based traversal but skips the
 * composition conversion step, making it more lightweight when only concept
 * data is needed without full connection details.
 *
 * Unlike GetLink, this function does not call GetAllConnectionsOfCompositionBulk
 * since it doesn't need to build compositions.
 *
 * @param id - The ID of the source concept to find links from
 * @param linker - The name of the linker relationship (e.g., "posts", "comments", "likes")
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number to retrieve (default: 1)
 *
 * @returns Promise resolving to an array of raw Concept objects
 *
 * @remarks
 * - Returns Concept objects directly without composition wrapper
 * - More lightweight than GetLink - use when compositions not needed
 * - Does not prefetch connection data
 * - Same linker string format: "{source_type}_s_{linker_name}"
 * - Empty array if linker concept not found
 * - Better performance for simple concept retrieval
 *
 * @example
 * ```typescript
 * // Get raw post concepts
 * const posts = await GetLinkRaw(123, "posts");
 * posts.forEach(post => {
 *   console.log("Post ID:", post.id);
 *   console.log("Post Type:", post.type);
 * });
 *
 * // Get comments without composition overhead
 * const comments = await GetLinkRaw(456, "comments", 20, 2);
 *
 * // Quick check for existence
 * const likes = await GetLinkRaw(789, "likes", 1, 1);
 * const hasLikes = likes.length > 0;
 * ```
 *
 * @see {@link GetLink} - Returns full compositions instead of raw concepts
 * @see {@link GetTheConcept} - Retrieves individual concepts
 * @see {@link GetConnectionOfTheConcept} - Retrieves connections
 */
export async function GetLinkRaw(id:number, linker:string, inpage:number=10, page:number=1){
  var output: Concept[] = [];
  var  concept:Concept = await GetTheConcept(id);
  var linkString: string = concept.type?.characterValue + "_s" + "_" + linker;
  var relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
  var relatedConcept = relatedConceptString as Concept;
  if(relatedConcept.id > 0){
    var connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,inpage, page);
    var connections = connectionsString as Connection[];
    var prefetch :number[] = [];
    for(var i=0; i<connections.length; i++){
      prefetch.push(connections[i].toTheConceptId);
    }
    for(var i=0; i<connections.length; i++){
      let toConceptId = connections[i].toTheConceptId;
      let toConcept = await GetTheConcept(toConceptId);
      output.push(toConcept);
    }
  }
  return  output;
}
