import { GetLocalConceptByCharacterValue } from "../../Api/Local/GetLocalConceptByCharacterValue";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { Concept, CreateDefaultLConcept, handleServiceWorkerException, LocalSyncData, sendMessage, serviceWorker, SplitStrings } from "../../app";

/**
 * Retrieves a local concept by character value with typeId=51 (standard type).
 *
 * Simple lookup in LocalConceptsData for concepts matching the character value
 * and having typeId of 51.
 *
 * @param characterValue - The character value to search for
 * @returns Concept matching the character and type, or empty concept if not found
 */
export default async function GetConceptByCharacterLocal(characterValue: string){
    let concept = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
    return concept;
}

/**
 * Retrieves a local concept by character value, handling hierarchical type names.
 *
 * **Complex Logic**: For compound names (e.g., "the_person_email"):
 * 1. Splits string by underscore
 * 2. Recursively processes first part to get category ID
 * 3. Searches using character value and derived category
 * 4. Falls back to simple character search for single words
 *
 * **Special Case**: Returns concept with id=1 for character value "the".
 *
 * @param character - The character value to find (e.g., "the_status", "the_person_email")
 * @returns Concept associated with the character value
 *
 * @example
 * const concept = await GetConceptByCharacterAndCategoryLocal("the_person_email");
 * // Splits into "the_person" (category) and searches with that context
 */
export async function GetConceptByCharacterAndCategoryLocal(character: string){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetConceptByCharacterAndCategoryLocal', { character })
            return res.data
        } catch (error) {
            console.error('GetConceptByCharacterAndCategoryLocal error sw: ', error)
            handleServiceWorkerException(error)
        }
    }

    let lconcept: Concept = CreateDefaultLConcept();
    if(character == "the"){
        lconcept.id = 1;
        lconcept.typeId = 5;
        lconcept.characterValue ="the";
        return lconcept;
    }
    let splittedStringArray = SplitStrings(character);
    if(splittedStringArray.length > 1){
        let category = 1;
        let prefix = await GetConceptByCharacterAndCategoryLocal(splittedStringArray[0])
        if(prefix.id != 0){
            category = prefix.id;
        }
        lconcept = await GetConceptByCategoryAndCharacterLocalMemory(character, category);
    }
    else if(splittedStringArray[0] == character){
        lconcept = await GetConceptByCharacterLocal(character);

    }
    return lconcept;
}

/**
 * Retrieves a concept by character value and category ID from local memory.
 *
 * Direct lookup in LocalConceptsData without server fallback.
 *
 * @param value - The character value to search for
 * @param categoryId - The category ID to filter by
 * @returns Concept matching the character and category, or empty concept if not found
 */
export async function GetConceptByCategoryAndCharacterLocalMemory(value:string, categoryId: number){
   let concept  =  LocalConceptsData.GetConceptByCharacterAndCategoryLocal(value, categoryId);
   return concept;
}

/**
 * Retrieves a concept by character value with automatic server fallback.
 *
 * **Complex Logic**:
 * 1. First checks LocalConceptsData for existing concept
 * 2. If not found (id==0 or null), fetches from server via GetLocalConceptByCharacterValue
 * 3. After server fetch, rechecks LocalConceptsData (now populated)
 * 4. Returns the concept or throws error
 *
 * Use this when you need guaranteed concept retrieval with server sync.
 *
 * @param characterValue - The character value to search for
 * @returns Concept from local storage, fetching from server if needed
 * @throws Error if server fetch fails
 */
export  async function GetConceptByCharacterLocalFull(characterValue: string){
    try{
        let concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
        let literalCharacter = `${characterValue}`;
        if((concept == null || concept?.id == 0) && literalCharacter){
            await GetLocalConceptByCharacterValue(characterValue);
            concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    }
    catch(error){
        console.log("this is the error in Get Concept By Character Local full", error);
        throw error;
    }

}