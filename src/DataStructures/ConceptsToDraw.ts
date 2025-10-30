/**
 * @fileoverview Static repository for managing concepts to be drawn/rendered in the CCS-JS system.
 * @module DataStructures/ConceptsToDraw
 */

import { Concept } from "./Concept";

/**
 * Manages a static collection of concepts that need to be drawn or rendered.
 *
 * @remarks
 * ConceptsToDraw acts as a singleton-like repository using static methods and properties
 * to manage a collection of Concept instances. It provides functionality to add, remove,
 * check existence, and retrieve concepts by ID. This is typically used for maintaining
 * a render queue or active concept list in visualization components.
 *
 * The class uses static methods for all operations, meaning the concept array is shared
 * across all instances of the class. The instance method `getName()` is provided for
 * identification purposes.
 *
 * @example
 * ```typescript
 * // Add concepts to the collection
 * const concept1 = new Concept(...);
 * ConceptsToDraw.AddConcept(concept1);
 *
 * // Check if a concept exists
 * if (ConceptsToDraw.CheckContains(concept1)) {
 *   console.log('Concept is in the draw queue');
 * }
 *
 * // Retrieve a concept by ID
 * const retrieved = ConceptsToDraw.GetConcept(concept1.id);
 *
 * // Remove when done
 * ConceptsToDraw.RemoveConcept(concept1);
 * ```
 */
export class ConceptsToDraw{
    /**
     * Descriptive name for this concepts collection.
     * @defaultValue "concepts To Draw"
     */
    name: string;

    /**
     * Creates a new ConceptsToDraw instance.
     *
     * @remarks
     * While the class can be instantiated, the primary functionality is accessed
     * through static methods. Instances are mainly useful for accessing the `name`
     * property via the `getName()` method.
     *
     * @example
     * ```typescript
     * const conceptsToDraw = new ConceptsToDraw();
     * console.log(conceptsToDraw.getName()); // "concepts To Draw"
     * ```
     */
    constructor(){
        this.name = "concepts To Draw";
    }

    /**
     * Static array holding all concepts that are queued to be drawn.
     *
     * @remarks
     * This array is shared across all instances and should be managed through
     * the static methods provided by the class. Direct manipulation is not recommended.
     */
    static  conceptsArray:Concept[] = [];

    /**
     * Checks whether a concept already exists in the collection.
     *
     * @param concept - The concept to check for existence
     * @returns `true` if the concept exists (matched by ID), `false` otherwise
     *
     * @remarks
     * Performs a linear search through the conceptsArray comparing concept IDs.
     * This method is used internally by `AddConcept` to prevent duplicates.
     *
     * @example
     * ```typescript
     * const concept = new Concept(...);
     * ConceptsToDraw.AddConcept(concept);
     *
     * if (ConceptsToDraw.CheckContains(concept)) {
     *   console.log('Concept already exists');
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
     * Adds a concept to the collection if it doesn't already exist.
     *
     * @param concept - The concept to add to the collection
     *
     * @remarks
     * This method ensures no duplicate concepts are added by first checking
     * existence via `CheckContains`. Only concepts with unique IDs will be added.
     * If a concept with the same ID already exists, the method silently returns
     * without adding the duplicate.
     *
     * @example
     * ```typescript
     * const concept1 = new Concept(...);
     * const concept2 = new Concept(...);
     *
     * ConceptsToDraw.AddConcept(concept1);
     * ConceptsToDraw.AddConcept(concept2);
     * ConceptsToDraw.AddConcept(concept1); // Won't add duplicate
     *
     * console.log(ConceptsToDraw.conceptsArray.length); // 2
     * ```
     */
    static AddConcept(concept: Concept){
       var contains = this.CheckContains(concept);

       if(!contains){
        this.conceptsArray.push(concept);
       }
    }

    /**
     * Removes a concept from the collection by matching its ID.
     *
     * @param concept - The concept to remove from the collection
     *
     * @remarks
     * Performs a linear search to find and remove the concept with a matching ID.
     * Uses `Array.splice()` to remove the element. If multiple concepts with the
     * same ID exist (which shouldn't happen with proper usage of AddConcept), only
     * the first match is removed.
     *
     * If the concept doesn't exist in the array, the method completes without error.
     *
     * @example
     * ```typescript
     * const concept = new Concept(...);
     * ConceptsToDraw.AddConcept(concept);
     *
     * // Later, when no longer needed
     * ConceptsToDraw.RemoveConcept(concept);
     *
     * // Verify removal
     * console.log(ConceptsToDraw.CheckContains(concept)); // false
     * ```
     */
    static RemoveConcept(concept: Concept){
       for(var i=0; i<this.conceptsArray.length; i++){
        if(this.conceptsArray[i].id == concept.id){
            this.conceptsArray.splice(i, 1);
        }
       }
    }

    /**
     * Retrieves a concept from the collection by its ID.
     *
     * @param id - The unique identifier of the concept to retrieve
     * @returns The Concept object if found, or `null` if no matching concept exists
     *
     * @remarks
     * Performs a linear search through the conceptsArray to find a concept with
     * the matching ID. Returns the first match found. If no concept with the
     * specified ID exists, returns `null`.
     *
     * @example
     * ```typescript
     * const concept = new Concept(...);
     * ConceptsToDraw.AddConcept(concept);
     *
     * // Retrieve by ID
     * const retrieved = ConceptsToDraw.GetConcept(concept.id);
     * if (retrieved) {
     *   console.log('Found concept:', retrieved.id);
     * } else {
     *   console.log('Concept not found');
     * }
     * ```
     */
    static GetConcept(id: number){
       var  myConcept: Concept|null;
       myConcept = null;
        for(var i=0; i<this.conceptsArray.length; i++){
            if(this.conceptsArray[i].id == id){
                myConcept = this.conceptsArray[i];
            }
        }
        return myConcept;
    }

    /**
     * Gets the descriptive name of this concepts collection.
     *
     * @returns The name string "concepts To Draw"
     *
     * @remarks
     * This is an instance method (unlike the other methods which are static),
     * so it requires an instance of ConceptsToDraw to call.
     *
     * @example
     * ```typescript
     * const conceptsToDraw = new ConceptsToDraw();
     * console.log(conceptsToDraw.getName()); // "concepts To Draw"
     * ```
     */
    getName(){
        return this.name;
    }
}