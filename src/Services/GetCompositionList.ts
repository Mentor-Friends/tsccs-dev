/**
 * Composition List Retrieval Service
 *
 * This module provides functionality for retrieving multiple compositions of the same
 * type in paginated batches. It's designed for scenarios where you need to fetch lists
 * of structured data, such as "all user profiles", "all blog posts", or "all products".
 *
 * The module implements bulk prefetching optimizations to minimize API calls and
 * improve performance when retrieving multiple compositions.
 *
 * @module GetCompositionList
 */

import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithId, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";

/**
 * Retrieves a paginated list of compositions by type name.
 *
 * This function fetches multiple compositions that share the same type (e.g., all "blog_post"
 * compositions) with pagination support. It implements a bulk prefetch optimization strategy:
 * first fetching all concepts of the given type, then bulk-prefetching all their connections,
 * and finally reconstructing each composition from cached data.
 *
 * This approach is much more efficient than fetching compositions individually, especially
 * for large lists.
 *
 * @param compositionName - The type name of compositions to retrieve (e.g., "blog_post", "user_profile")
 * @param userId - The user ID who owns the compositions
 * @param inpage - Number of items per page (default: 10)
 * @param page - Page number, 1-indexed (default: 1)
 *
 * @returns A promise that resolves to an array of composition objects
 *
 * @example
 * ```typescript
 * // Get the first page of blog posts (10 items)
 * const blogPosts = await GetCompositionList("blog_post", 999, 10, 1);
 * console.log(`Retrieved ${blogPosts.length} blog posts`);
 *
 * blogPosts.forEach(post => {
 *   const postData = post["blog_post"];
 *   console.log("Title:", postData.title);
 *   console.log("Author:", postData.author);
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Get the second page of user profiles (20 per page)
 * const profiles = await GetCompositionList("user_profile", 456, 20, 2);
 * // Returns profiles 21-40
 * ```
 *
 * @example
 * ```typescript
 * // Implement pagination for all products
 * const PAGE_SIZE = 25;
 * let currentPage = 1;
 * let products = [];
 *
 * do {
 *   const pageProducts = await GetCompositionList("product", 999, PAGE_SIZE, currentPage);
 *   products.push(...pageProducts);
 *   currentPage++;
 * } while (pageProducts.length === PAGE_SIZE);
 *
 * console.log(`Total products: ${products.length}`);
 * ```
 *
 * @remarks
 * - Uses bulk prefetch optimization for better performance
 * - First fetches all concepts of the specified type
 * - Then bulk-prefetches all connections for the page
 * - Finally reconstructs compositions from cached data
 * - Pagination is 1-indexed (page 1 is the first page)
 * - Returns empty array if composition type doesn't exist
 * - Uses GetCompositionFromMemory for fast reconstruction
 * - Efficient for large lists due to bulk operations
 *
 * @see {@link GetCompositionListWithId} for version that includes metadata
 * @see {@link GetCompositionFromMemory} for individual composition retrieval
 * @see {@link GetAllConceptsByType} for fetching concepts by type
 * @see {@link GetAllConnectionsOfCompositionBulk} for bulk connection prefetch
 */
export  async function GetCompositionList(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    var startPage = inpage * (page - 1);
    var prefetchComposition:number[] = [];
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }

    let myConnectionList = await GetAllConnectionsOfCompositionBulk(prefetchComposition);

    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){

         var compositionJson= await GetCompositionFromMemory(conceptList[i].id);
         CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}

/**
 * Retrieves a paginated list of compositions with metadata wrappers.
 *
 * Similar to GetCompositionList, but each composition in the returned array includes
 * metadata (ID, creation timestamp) in addition to the composition data. This is useful
 * when you need to track or reference individual compositions by their IDs.
 *
 * The function uses the same bulk prefetch optimization strategy for efficient retrieval.
 *
 * @param compositionName - The type name of compositions to retrieve
 * @param userId - The user ID who owns the compositions
 * @param inpage - Number of items per page (default: 10)
 * @param page - Page number, 1-indexed (default: 1)
 *
 * @returns A promise that resolves to an array of objects with id, created_at, and data fields
 *
 * @example
 * ```typescript
 * // Get blog posts with IDs and timestamps
 * const posts = await GetCompositionListWithId("blog_post", 999, 10, 1);
 *
 * posts.forEach(post => {
 *   console.log("Post ID:", post.id);
 *   console.log("Created:", post.created_at);
 *   console.log("Title:", post.data["blog_post"].title);
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Build a list of editable items with their IDs
 * const items = await GetCompositionListWithId("task", 456, 50, 1);
 *
 * const editableList = items.map(item => ({
 *   id: item.id,
 *   name: item.data["task"].name,
 *   editUrl: `/edit/${item.id}`
 * }));
 * ```
 *
 * @remarks
 * - Each item includes: { id, created_at, data }
 * - Uses bulk prefetch for performance
 * - Uses GetCompositionWithIdFromMemory for reconstruction
 * - Otherwise identical to GetCompositionList
 *
 * @see {@link GetCompositionList} for version without metadata
 * @see {@link GetCompositionWithIdFromMemory} for individual composition with ID
 */
export  async function GetCompositionListWithId(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    var startPage = inpage * (page - 1);
    var prefetchComposition:number[] = [];
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }
    await GetAllConnectionsOfCompositionBulk(prefetchComposition);
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         var compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
            CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}




