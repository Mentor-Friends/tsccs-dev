/**
 * @fileoverview Static repository for managing character data in the CCS-JS system.
 * @module DataStructures/CharacterRepository
 */

import { TheCharacter } from "./TheCharacter";

/**
 * Manages a static collection of character entities with indexed storage and retrieval.
 *
 * @remarks
 * CharacterRepository provides a centralized, static repository for storing and retrieving
 * TheCharacter instances. Characters are stored in an array indexed by their ID for fast
 * access. The class also provides lookup functionality to find characters by their data value.
 *
 * This repository uses static methods and properties, meaning the character collection is
 * shared across all instances of the class. The instance method `name` is provided for
 * identification purposes only.
 *
 * @example
 * ```typescript
 * // Add a character to the repository
 * const char = new TheCharacter(1, "A", 100, 1, 200, 1, 300, 1, "2025-10-30", false);
 * CharacterRepository.AddCharacter(char);
 *
 * // Retrieve character by data value
 * const found = CharacterRepository.GetCharacter("A");
 * if (found.id !== 0) {
 *   console.log('Found character:', found.data);
 * }
 * ```
 */
export class CharacterRepository{
    /**
     * Descriptive name for this character repository.
     * @defaultValue "character Repository"
     */
    name: string;

    /**
     * Creates a new CharacterRepository instance.
     *
     * @remarks
     * While the class can be instantiated, the primary functionality is accessed
     * through static methods. Instances are mainly useful for accessing the descriptive
     * name property.
     *
     * @example
     * ```typescript
     * const repo = new CharacterRepository();
     * console.log(repo.name); // "character Repository"
     * ```
     */
    constructor(){
        this.name = "character Repository";
    }

    /**
     * Static array holding all character data indexed by character ID.
     *
     * @remarks
     * Characters are stored at index positions corresponding to their ID values.
     * This provides O(1) access time when retrieving characters by ID, but may
     * result in sparse arrays if character IDs are not sequential.
     *
     * This array should be managed through the static methods provided by the class.
     */
    static  characterData:TheCharacter[] = [];

    /**
     * Adds a character to the repository, indexed by its ID.
     *
     * @param character - The character to add to the repository
     *
     * @remarks
     * The character is stored at the array index matching its ID value. If a character
     * with the same ID already exists, it will be overwritten. This indexed approach
     * allows for fast retrieval by ID but may create sparse arrays.
     *
     * @example
     * ```typescript
     * const char1 = new TheCharacter(1, "A", 100, 1, 200, 1, 300, 1, "2025-10-30", false);
     * const char2 = new TheCharacter(5, "B", 100, 1, 200, 1, 300, 1, "2025-10-30", false);
     *
     * CharacterRepository.AddCharacter(char1);
     * CharacterRepository.AddCharacter(char2);
     *
     * // char1 is at index 1, char2 is at index 5
     * console.log(CharacterRepository.characterData[1].data); // "A"
     * ```
     */
    static AddCharacter(character: TheCharacter){
        this.characterData[character.id] = character;
     }

    /**
     * Retrieves a character from the repository by matching its data value.
     *
     * @param value - The data string to search for
     * @returns The matching TheCharacter instance, or a default empty character if not found
     *
     * @remarks
     * Performs a linear search through the entire characterData array to find a character
     * whose `data` property matches the provided value. If no match is found, returns a
     * default TheCharacter instance with ID 0 and data "0".
     *
     * Note: The default character returned has all numeric fields set to 0, data set to "0",
     * and isNew set to false. Callers should check the ID to determine if a valid character
     * was found (a valid character should have a non-zero ID).
     *
     * @example
     * ```typescript
     * const char = new TheCharacter(1, "A", 100, 1, 200, 1, 300, 1, "2025-10-30", false);
     * CharacterRepository.AddCharacter(char);
     *
     * // Find existing character
     * const found = CharacterRepository.GetCharacter("A");
     * console.log(found.id); // 1
     *
     * // Search for non-existent character
     * const notFound = CharacterRepository.GetCharacter("Z");
     * console.log(notFound.id); // 0 (default)
     * console.log(notFound.data); // "0" (default)
     * ```
     */
     static GetCharacter(value: string){
        var theCharacter: TheCharacter = new TheCharacter(0,"0",0,0,0,0,0,0,"0",false);
        for(var i=0 ;i <this.characterData.length; i++){
            if(this.characterData[i].data == value){
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
     }
}