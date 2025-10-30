/**
 * Typed Connection Creation Between Concepts
 *
 * This module provides specialized functions for creating semantic, bidirectional, and
 * counted connections between concepts. It implements a sophisticated connection naming
 * scheme that incorporates concept types and relationship semantics, enabling queries
 * like "show all books_s_authored_s_by author" in the system.
 *
 * The module supports:
 * - Forward and backward (bidirectional) connections
 * - Automatic relationship counting
 * - Type-aware connection naming patterns
 *
 * @module CreateConnectionBetweenTwoConcepts
 */

import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { GetConnectionOfTheConcept } from "../Api/GetConnectionOfTheConcept";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { Connection } from "../DataStructures/Connection";
import { SyncData } from "../DataStructures/SyncData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import { CreateTheConnectionGeneral } from "./CreateTheConnectionGeneral";
import { DeleteConnectionById } from "./DeleteConnection";
import GetTheConcept from "./GetTheConcept";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

/**
 * Creates a typed connection between two concepts with optional bidirectionality and counting.
 *
 * This function establishes semantic connections using a naming pattern that includes the
 * concept types. For example, connecting a "book" to an "author" with linker "authored"
 * creates a connection of type "books_s_authored_s". This enables type-aware querying and
 * relationship navigation in the system.
 *
 * The function can optionally create bidirectional connections (both directions) and
 * maintain relationship counts, which is useful for analytics and relationship tracking.
 *
 * @param ofTheConcept - The source concept from which the connection originates
 * @param toTheConcept - The target concept to which the connection points
 * @param linker - The semantic relationship name (e.g., "authored", "contains", "belongs_to")
 * @param both - If true, creates connections in both directions (default: false)
 * @param count - If true, maintains a count of relationships for this linker type (default: false)
 *
 * @returns A promise that resolves to the created forward Connection object
 *
 * @example
 * ```typescript
 * // Create a one-way "authored" connection
 * const authorConcept = await GetTheConcept(123); // type: "author"
 * const bookConcept = await GetTheConcept(456);   // type: "book"
 *
 * const connection = await CreateConnectionBetweenTwoConcepts(
 *   authorConcept,
 *   bookConcept,
 *   "authored",
 *   false,
 *   false
 * );
 * // Creates connection type: "authors_s_authored_s"
 * ```
 *
 * @example
 * ```typescript
 * // Create bidirectional "friends_with" connections with counting
 * const userConcept1 = await GetTheConcept(789);
 * const userConcept2 = await GetTheConcept(101);
 *
 * await CreateConnectionBetweenTwoConcepts(
 *   userConcept1,
 *   userConcept2,
 *   "friends_with",
 *   true,  // Create both directions
 *   true   // Enable counting
 * );
 * // Creates: "users_s_friends_with_s" and "users_s_friends_with_by"
 * // Maintains count concepts for relationship tracking
 * ```
 *
 * @remarks
 * - Forward connection type pattern: `{sourceType}_s_{linker}_s`
 * - Backward connection type pattern: `{targetType}_s_{linker}_by`
 * - Count concept pattern: `{type}_s_{linker}_count`
 * - Uses session information ID 999 and access level 4 as defaults
 * - Counting creates/updates a separate count concept for relationship analytics
 * - The backward connection is created first if both=true
 *
 * @see {@link CreateConnectionBetweenTwoConceptsGeneral} for the version using reserved IDs
 * @see {@link CountRelationship} for understanding how relationship counting works
 * @see {@link MakeTheInstanceConcept} for connection type concept creation
 */
export async function CreateConnectionBetweenTwoConcepts(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false, count:boolean = false){

        var userId:number = ofTheConcept.userId;
        var orderUserId: number = userId;
        var securityId: number = 999;
        var securityUserId: number = userId;
        var accessId: number = 4;
        var accessUserId: number = userId;
        var sessionInformationId = 999;
        var sessionInformationUserId = 999;
        if(both){
            let prefix1: string = toTheConcept.type?.characterValue + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;  
            if(count){
               await CountRelationship(linkerAdd1, toTheConcept, userId);
              }
            var connectionConceptReverse = await MakeTheInstanceConcept("connection",backwardLinker,false,999,999,999);
            let newConnection = new Connection(0,toTheConcept.id, ofTheConcept.id,toTheConcept.userId, ofTheConcept.userId, toTheConcept.userId,
               connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
            SyncData.AddConnection(newConnection);
        }
        let prefix: string = ofTheConcept.type?.characterValue + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if(count){
         await CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        var connectionConcept = await MakeTheInstanceConcept("connection",forwardLinker,false,999,999,999);
        let newConnection = new Connection(0,ofTheConcept.id, toTheConcept.id,ofTheConcept.userId, toTheConcept.userId, ofTheConcept.userId,
           connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
        SyncData.AddConnection(newConnection);
        return newConnection;
        }

/**
 * Maintains a count of relationships for a specific connection type on a concept.
 *
 * This function implements a counting mechanism that tracks how many times a particular
 * relationship type has been used with a concept. It retrieves any existing count,
 * increments it, creates a new count concept, and connects it to the source concept.
 *
 * The counting system works by:
 * 1. Looking for existing count connections using a special count connection type
 * 2. Retrieving the current count value from the connected count concept
 * 3. Incrementing the count
 * 4. Deleting old count connections
 * 5. Creating a new count concept with the updated value
 * 6. Connecting the new count concept back to the source
 *
 * This enables analytics like "how many books has this author authored?" or
 * "how many followers does this user have?"
 *
 * @param linker - The relationship name being counted (e.g., "authored_s", "follows_s")
 * @param concept - The concept for which relationships are being counted
 * @param passedUserId - Optional user ID to use instead of the concept's userId (default: null, uses concept.userId)
 *
 * @returns A promise that resolves when the count has been updated
 *
 * @example
 * ```typescript
 * // Count how many times an author has "authored" something
 * const authorConcept = await GetTheConcept(123);
 * await CountRelationship("authored_s", authorConcept);
 *
 * // Later, retrieve the count
 * const countConnectionType = await GetConceptByCharacter("authors_s_authored_s_count");
 * const countConnections = await GetConnectionOfTheConcept(
 *   countConnectionType.id,
 *   authorConcept.id,
 *   authorConcept.userId
 * );
 * const countConcept = await GetTheConcept(countConnections[0].toTheConceptId);
 * console.log("Author has written", countConcept.characterValue, "books");
 * ```
 *
 * @example
 * ```typescript
 * // Count relationships with a specific user ID
 * const userConcept = await GetTheConcept(456);
 * await CountRelationship("follows_s", userConcept, 999);
 * ```
 *
 * @remarks
 * - Count connection type pattern: `{conceptType}_s_{linker}_count`
 * - Creates a new "count" type concept with the numeric value as characterValue
 * - Deletes all previous count connections before creating the new one
 * - If no existing count is found, starts from 1
 * - If parsing the count value fails, defaults to 0 and increments to 1
 * - Uses session information ID 999, access level 4, and security ID 999
 * - The count concept itself is of type "count"
 *
 * @see {@link CreateConnectionBetweenTwoConcepts} for functions that use counting
 * @see {@link GetConnectionOfTheConcept} for retrieving count connections
 * @see {@link MakeTheInstanceConcept} for creating count concepts
 */
export async function CountRelationship(linker: string, concept:Concept, passedUserId: number | null = null){
   var concept1:Concept = concept; 
   var userId:number = passedUserId ?? concept.userId;
   var orderUserId: number = userId;
   var securityId: number = 999;
   var securityUserId: number = userId;
   var accessId: number = 4;
   var accessUserId: number = userId;
   var sessionInformationId = 999;
   var sessionInformationUserId = 999;
   var forwardLinkerCount:string = linker + "_count";
   var forwardLinkerCountString = concept.type?.characterValue +  "_s" + "_" + forwardLinkerCount;
   var forwardLinkerCountConcept = await MakeTheInstanceConcept("connection",forwardLinkerCountString,false,userId,accessId,sessionInformationId);

   var connectionsString = await GetConnectionOfTheConcept(forwardLinkerCountConcept.id, concept.id, userId, 10, 1);
   var connections = connectionsString as Connection[];
   var prefetch :number[] = [];
   var countConceptList:Concept[] = [];
   var countConcept = CreateDefaultConcept();
   for(var i=0; i<connections.length; i++){
     let toConcept = await GetTheConcept(connections[i].toTheConceptId);
     countConceptList.push(toConcept);
   }
   if(countConceptList.length < 1){
       countConcept = await MakeTheInstanceConcept("count", "1", false, userId, accessId,sessionInformationId);

   }
   else{
      var oldcountConcept = countConceptList[0];
      let count:number = 0;
      try{
         count = Number(oldcountConcept.characterValue);
      }
      catch(ex){
         count = 0;
      }
      count = count + 1;
      countConcept = await MakeTheInstanceConcept("count", count.toString(), false, userId, accessId, sessionInformationId );
      for(let i=0; i<connections.length; i++){
         DeleteConnectionById(connections[i].id);
      }
   
   }
   let newConnection = new Connection(0,concept1.id, countConcept.id,concept1.userId, countConcept.userId, concept1.userId,
      forwardLinkerCountConcept.id, forwardLinkerCountConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
   await SyncData.AddConnection(newConnection);


}

/**
 * Creates a typed connection with reserved IDs between two concepts.
 *
 * This is the production-ready version of CreateConnectionBetweenTwoConcepts that uses
 * reserved IDs and the CreateTheConnectionGeneral function. It provides the same
 * semantic connection naming and bidirectional support, but ensures connections are
 * properly persisted with system-reserved IDs.
 *
 * Unlike the basic version, this function uses CreateTheConnectionGeneral instead of
 * directly creating Connection objects, which means connections get proper ID reservation,
 * update flags, and transaction tracking.
 *
 * @param ofTheConcept - The source concept from which the connection originates
 * @param toTheConcept - The target concept to which the connection points
 * @param linker - The semantic relationship name (e.g., "authored", "contains", "belongs_to")
 * @param both - If true, creates connections in both directions (default: false)
 * @param count - If true, maintains a count of relationships for this linker type (default: false)
 *
 * @returns A promise that resolves to the created forward Connection object with reserved ID
 *
 * @example
 * ```typescript
 * // Create a production-grade bidirectional "collaborates_with" connection
 * const researcher1 = await GetTheConcept(123);
 * const researcher2 = await GetTheConcept(456);
 *
 * const connection = await CreateConnectionBetweenTwoConceptsGeneral(
 *   researcher1,
 *   researcher2,
 *   "collaborates_with",
 *   true,  // Bidirectional
 *   true   // Track counts
 * );
 *
 * console.log("Connection ID:", connection.id);
 * // Both researchers now have collaboration connections and counts
 * ```
 *
 * @example
 * ```typescript
 * // Create a one-way "belongs_to" connection with reserved ID
 * const itemConcept = await GetTheConcept(789);
 * const categoryConcept = await GetTheConcept(101);
 *
 * await CreateConnectionBetweenTwoConceptsGeneral(
 *   itemConcept,
 *   categoryConcept,
 *   "belongs_to",
 *   false,
 *   false
 * );
 * ```
 *
 * @remarks
 * - Uses CreateTheConnectionGeneral for proper ID reservation and persistence
 * - Forward connection type pattern: `{sourceType}_s_{linker}_s`
 * - Backward connection type pattern: `{targetType}_s_{linker}_by`
 * - Backward connections still use basic Connection creation (not CreateTheConnectionGeneral)
 * - Uses session information ID 999, order 1000, and access level 4
 * - Connection is marked for update (toUpdate = true) via CreateTheConnectionGeneral
 * - Recommended for production use over CreateConnectionBetweenTwoConcepts
 *
 * @see {@link CreateConnectionBetweenTwoConcepts} for the temporary version
 * @see {@link CreateTheConnectionGeneral} for the underlying connection creation
 * @see {@link CountRelationship} for relationship counting implementation
 */
export async function CreateConnectionBetweenTwoConceptsGeneral(ofTheConcept: Concept, toTheConcept: Concept, linker:string, both:boolean = false, count:boolean = false){

   var userId:number = ofTheConcept.userId;
   var orderUserId: number = userId;
   var securityId: number = 999;
   var securityUserId: number = userId;
   var accessId: number = 4;
   var accessUserId: number = userId;
   var sessionInformationId = 999;
   var sessionInformationUserId = 999;
   if(both){
       let prefix1: string = toTheConcept.type?.characterValue + "_s";
       let linkerAdd1 = linker + "_by";
       let backwardLinker = prefix1 + "_" + linkerAdd1;  
       if(count){
          await CountRelationship(linkerAdd1, toTheConcept, userId);
         }
       var connectionConceptReverse = await MakeTheInstanceConcept("connection",backwardLinker,false,999,999,999);
       let newConnection = new Connection(0,toTheConcept.id, ofTheConcept.id,toTheConcept.userId, ofTheConcept.userId, toTheConcept.userId,
          connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId,sessionInformationId,sessionInformationUserId  );
       SyncData.AddConnection(newConnection);
   }
   let prefix: string = ofTheConcept.type?.characterValue + "_s";
   let linkerAdd = linker + "_s";
   let forwardLinker = prefix + "_" + linkerAdd;
   if(count){
    await CountRelationship(linkerAdd, ofTheConcept, userId);
   }
   var connectionConcept = await MakeTheInstanceConcept("connection",forwardLinker,false,999,999,999);
   let newConnection = await CreateTheConnectionGeneral(ofTheConcept.id,ofTheConcept.userId, toTheConcept.id, toTheConcept.userId, 
      connectionConcept.id, sessionInformationId,sessionInformationId, 1000,  accessId);
   return newConnection;
   }