/**
 * @fileoverview ConceptsData module for managing concept storage and retrieval in CCS-JS.
 * This module provides centralized management of concepts using multiple indexing strategies
 * including binary trees, character-based trees, and type-based trees for efficient lookups.
 * @module DataStructures/ConceptData
 */

import { GetConcept } from "../Api/GetConcept";
import { Concept } from "./Concept";
import {  getFromDatabaseWithType, getFromDatabaseWithTypeOld, removeFromDatabase, storeToDatabase } from "../Database/NoIndexDb";
import { BinaryTree } from "./BinaryTree";
import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { BinaryTypeTree } from "./BinaryTypeTree";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";

/**
 * Central repository for managing all concepts in the CCS system.
 * Provides multiple indexing strategies (ID-based, character-based, type-based) for efficient concept retrieval.
 * Maintains both in-memory (tree structures) and persistent (IndexedDB) storage.
 *
 * @class ConceptsData
 * @example
 * ```typescript
 * // Add a concept to the system
 * ConceptsData.AddConcept(myConcept);
 *
 * // Retrieve a concept by ID
 * const concept = await ConceptsData.GetConcept(123);
 *
 * // Get concepts by type
 * const concepts = ConceptsData.GetConceptsByTypeId(10);
 * ```
 *
 * @remarks
 * This class uses static methods and properties, functioning as a singleton data store.
 * It coordinates multiple indexing strategies for optimized query performance.
 */
export class ConceptsData{

    /** Name identifier for this data structure */
    name: string;

    /**
     * Creates a new ConceptsData instance.
     * @remarks This is rarely instantiated as the class primarily uses static methods.
     */
    constructor(){
        this.name = "conceptsArray";
    }

    /** Legacy array storage for concepts (deprecated in favor of tree structures) */
    static  conceptsArray:Concept[] = [];

    /**
     * NPC (Non-Persistent Concepts) cache for temporarily tracking accessed concept IDs.
     * Limited to 10 entries for memory management.
     */
    static NPC: number[] = [];

    /** Dictionary-style storage for quick concept lookups by ID */
    static conceptDictionary:Concept[] = [];

    /**
     * Checks if a concept already exists in the concepts array.
     *
     * @param {Concept} concept - The concept to check for existence
     * @returns {boolean} True if the concept exists, false otherwise
     *
     * @example
     * ```typescript
     * const exists = ConceptsData.CheckContains(myConcept);
     * if (!exists) {
     *   // Add the concept
     * }
     * ```
     */
    static  CheckContains(concept: Concept){
        var contains = false;
        for(var i=0; i<this.conceptsArray.length; i++){
         if(this.conceptsArray[i].id == concept.id){
             contains = true;
         }
        }

        return contains;
    }

    /**
     * Adds a concept ID to the Non-Persistent Concepts (NPC) cache.
     * Used for tracking recently accessed concepts. Automatically clears when exceeding 10 entries.
     *
     * @param {number} id - The concept ID to add to NPC cache
     *
     * @example
     * ```typescript
     * ConceptsData.AddNpc(123);
     * ```
     */
    static AddNpc(id: number){
        if(!this.NPC.includes(id)){
            if(this.NPC.length > 10){
                this.NPC = [];
            }
            this.NPC.push(id);
        }
    }

    /**
     * Checks if a concept ID exists in the NPC cache.
     *
     * @param {number} id - The concept ID to check
     * @returns {boolean} True if the ID is in the NPC cache, false otherwise
     *
     * @example
     * ```typescript
     * if (ConceptsData.GetNpc(123)) {
     *   console.log("Concept recently accessed");
     * }
     * ```
     */
    static GetNpc(id: number){
        if(this.NPC.includes(id)){
            return true;
        }
        return false;
    }

    /**
     * Adds a concept to persistent storage (IndexedDB) only.
     * Does not update in-memory tree structures.
     *
     * @param {Concept} concept - The concept to store persistently
     *
     * @example
     * ```typescript
     * ConceptsData.AddConceptToStorage(myConcept);
     * ```
     *
     * @remarks Only stores concepts with valid IDs (id > 0)
     */
    static AddConceptToStorage(concept: Concept){
        if(concept.id > 0){
        storeToDatabase("concept",concept);
        }
    }

    /**
     * Adds a concept to both persistent storage and all in-memory tree indexes.
     * This is the primary method for adding concepts to the system.
     *
     * @param {Concept} concept - The concept to add
     *
     * @example
     * ```typescript
     * const newConcept = new Concept(...);
     * ConceptsData.AddConcept(newConcept);
     * ```
     *
     * @remarks
     * Updates three tree structures:
     * - BinaryTree (ID-based lookup)
     * - BinaryTypeTree (type-based lookup)
     * - BinaryCharacterTree (character value lookup)
     * Only processes concepts with valid IDs (id > 0)
     */
    static AddConcept(concept: Concept){
        if(concept.id > 0){
            //var contains = this.CheckContains(concept);
           // this.conceptDictionary[concept.id] = concept;
     
        //    if(contains){
          //   this.RemoveConcept(concept);
          //  }
             storeToDatabase("concept",concept);
             BinaryTree.addConceptToTree(concept);
              BinaryTypeTree.addConceptToTree(concept);
              BinaryCharacterTree.addConceptToTree(concept);
        }

    }

    /**
     * Adds a concept to in-memory tree structures only, without persisting to storage.
     * Useful for temporary concepts or when storage is handled separately.
     *
     * @param {Concept} concept - The concept to add to memory
     *
     * @example
     * ```typescript
     * ConceptsData.AddConceptToMemory(temporaryConcept);
     * ```
     *
     * @remarks
     * Updates three tree structures without touching IndexedDB.
     * Only processes concepts with valid IDs (id > 0)
     */
    static AddConceptToMemory(concept: Concept){
        if(concept.id > 0){
            //var contains = this.CheckContains(concept);
           // this.conceptDictionary[concept.id] = concept;
     
        //    if(contains){
          //   this.RemoveConcept(concept);
          //  }
             BinaryTree.addConceptToTree(concept);
              BinaryTypeTree.addConceptToTree(concept);
              BinaryCharacterTree.addConceptToTree(concept);
        }

    }

    /**
     * Adds a concept to the legacy array storage temporarily.
     * Removes existing duplicates before adding.
     *
     * @param {Concept} concept - The concept to add temporarily
     *
     * @example
     * ```typescript
     * ConceptsData.AddConceptTemporary(tempConcept);
     * ```
     *
     * @remarks
     * This method uses the legacy conceptsArray and conceptDictionary.
     * Consider using AddConceptToMemory for new implementations.
     */
    static AddConceptTemporary(concept: Concept){
        var contains = this.CheckContains(concept);
        this.conceptDictionary[concept.id] = concept;
 
        if(contains){
         this.RemoveConcept(concept);
        }
         this.conceptsArray.push(concept);
     }

    /**
     * Removes a concept from all storage locations (memory trees and persistent storage).
     *
     * @param {Concept} concept - The concept to remove
     *
     * @example
     * ```typescript
     * ConceptsData.RemoveConcept(obsoleteConcept);
     * ```
     *
     * @remarks
     * Removes from:
     * - Legacy conceptsArray
     * - BinaryTree (ID index)
     * - IndexedDB persistent storage
     */
    static RemoveConcept(concept: Concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }
       BinaryTree.removeNodeFromTree(concept.id);

       removeFromDatabase("concept",concept.id);
    }

    /**
     * Retrieves a concept by its ID from the binary tree index.
     *
     * @param {number} id - The concept ID to retrieve
     * @returns {Promise<Concept>} The concept if found, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await ConceptsData.GetConcept(123);
     * if (concept.id !== 0) {
     *   console.log("Found:", concept.characterValue);
     * }
     * ```
     *
     * @remarks
     * Returns a default concept (id = 0) if the concept is not found.
     * Uses BinaryTree for O(log n) lookup performance.
     */
    static async GetConcept(id: number){
       var  myConcept: Concept = CreateDefaultConcept();
        var node = await BinaryTree.getNodeFromTree(id);
        if(node?.value){
            var returnedConcept = node.value;
            if(returnedConcept){
                myConcept = returnedConcept as Concept;
            }
        }
        // if(myConcept.id == 0 || myConcept == null){
        //     for(var i=0; i<this.conceptsArray.length; i++){
        //         if(this.conceptsArray[i].id == id){
        //             myConcept = this.conceptsArray[i];
        //         }
        //     }
        // }
        return myConcept;
    }

    /**
     * Retrieves a concept by its character value from the character tree index.
     *
     * @param {string} characterValue - The character value to search for
     * @returns {Promise<Concept>} The concept if found, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await ConceptsData.GetConceptByCharacter("Hello");
     * ```
     *
     * @remarks
     * Uses BinaryCharacterTree for efficient character-based lookups.
     * Returns a default concept if not found.
     */
    static async GetConceptByCharacter(characterValue: string){
        var concept: Concept = CreateDefaultConcept();

        var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
        if(Node){
            concept  = Node.value;
        }


         return concept;
     }

     /**
     * Retrieves a concept by its character value (updated version).
     * Currently identical to GetConceptByCharacter.
     *
     * @param {string} characterValue - The character value to search for
     * @returns {Promise<Concept>} The concept if found, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await ConceptsData.GetConceptByCharacterUpdated("Hello");
     * ```
     *
     * @remarks
     * This method may be deprecated or merged with GetConceptByCharacter in future versions.
     */
     static async GetConceptByCharacterUpdated(characterValue: string){
        var concept: Concept = CreateDefaultConcept();

        var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
        if(Node){
            concept  = Node.value;
        }


         return concept;
     }


     /**
     * Retrieves a concept by both its character value and type ID from local storage.
     * Provides more specific matching than character-only searches.
     *
     * @param {string} character_value - The character value to search for
     * @param {number} typeId - The type ID to filter by
     * @returns {Promise<Concept>} The concept matching both criteria, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await ConceptsData.GetConceptByCharacterAndTypeLocal("Apple", 5);
     * ```
     *
     * @remarks
     * Uses BinaryTypeTree for efficient combined character and type lookups.
     * More specific than GetConceptByCharacter as it filters by type.
     */
     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: Concept = CreateDefaultConcept();
        //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
        concept = await BinaryTypeTree.getTypeVariantsWithCharacterValue(character_value,typeId);
        // if(Node){

        //     concept =  Node.value;
        //     console.log("found the output");
        //     console.log(concept);
        // }
        return concept;

     }

     /**
     * Retrieves a concept by both its character value and category ID from local storage.
     *
     * @param {string} character_value - The character value to search for
     * @param {number} categoryId - The category ID to filter by
     * @returns {Promise<Concept>} The concept matching both criteria, or a default concept if not found
     *
     * @example
     * ```typescript
     * const concept = await ConceptsData.GetConceptByCharacterAndCategoryLocal("Fruit", 3);
     * ```
     *
     * @remarks
     * Uses BinaryCharacterTree with category filtering for specific lookups.
     */
     static async GetConceptByCharacterAndCategoryLocal(character_value:string, categoryId: number){
        var concept: Concept = CreateDefaultConcept();

        var Node = await BinaryCharacterTree.getCharacterAndCategoryFromTree(character_value,categoryId);
        if(Node){

            concept =  Node.value;
        }
        return concept;

     }

     /**
     * Retrieves all concepts of a specific type ID from local storage.
     *
     * @param {number} typeId - The type ID to filter by
     * @returns {Concept[]} Array of concepts with the specified type
     *
     * @example
     * ```typescript
     * const fruits = ConceptsData.GetConceptsByTypeId(5);
     * console.log(`Found ${fruits.length} fruits`);
     * ```
     *
     * @remarks
     * Currently searches the legacy conceptsArray.
     * Consider using GetConceptsByTypeIdAndUser for more specific queries.
     */
     static  GetConceptsByTypeId(typeId: number){
        var  myConcept: Concept|null;
        let ConceptList: Concept[] = [];
        myConcept = null;
         for(var i=0; i<this.conceptsArray.length; i++){
             if(this.conceptsArray[i].typeId == typeId){
                 ConceptList.push(this.conceptsArray[i]);
             }
         }
        //  getFromDatabaseWithType("concept","typeId",typeId).then(conceptList=>{
        //     console.log("thi sis my list");
        //  });
        //   var dbConceptList = await getFromDatabaseWithTypeOld("concept","typeId", typeId);
        //   console.log(dbConceptList);
        //   if(Array.isArray(dbConceptList)){
        //         console.log(dbConceptList);
        //         console.log(dbConceptList.length);
        //  for(var i=0; i< dbConceptList.length; i++){
        //     console.log("here to push firsts");
        //     var contains: boolean = false;
        //     for(var j=0; j< ConceptList.length; j++){
        //         if(dbConceptList[i].id == ConceptList[j].id){
        //             contains = true;
        //         }
        //     }
        //     console.log("here to push");
        //     if(!contains){
        //         ConceptList.push(dbConceptList[i]);
        //     }
        //  }
        // }
        // console.log("this is the concept list");
        // console.log(ConceptList);
         return ConceptList;
     }

     /**
     * Retrieves all concepts of a specific type ID and user ID from the type tree.
     *
     * @param {number} typeId - The type ID to filter by
     * @param {number} userId - The user ID to filter by
     * @returns {Promise<Concept[]>} Array of concepts matching both type and user
     *
     * @example
     * ```typescript
     * const userConcepts = await ConceptsData.GetConceptsByTypeIdAndUser(5, 1);
     * ```
     *
     * @remarks
     * Uses BinaryTypeTree for efficient filtered queries.
     * Useful for multi-user systems to get user-specific concepts of a type.
     */
     static async   GetConceptsByTypeIdAndUser(typeId: number, userId: number){
        let ConceptList: Concept[] = [];
        ConceptList = await BinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
         return ConceptList;
     }

     /**
     * Returns the root node of the binary character tree.
     * Used for direct tree traversal or debugging.
     *
     * @returns {Node | null} The root node of the character tree
     *
     * @example
     * ```typescript
     * const tree = ConceptsData.GetBinaryCharacterTree();
     * if (tree) {
     *   console.log("Tree root:", tree.key);
     * }
     * ```
     */
     static GetBinaryCharacterTree(){
        return BinaryCharacterTree.characterRoot;
     }




    /**
     * Returns the name identifier of this data structure instance.
     *
     * @returns {string} The name "conceptsArray"
     *
     * @example
     * ```typescript
     * const conceptData = new ConceptsData();
     * console.log(conceptData.getName()); // "conceptsArray"
     * ```
     */
    getName(){
        return this.name;
    }
}