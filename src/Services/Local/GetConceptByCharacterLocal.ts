import { GetLocalConceptByCharacterValue } from "../../Api/Local/GetLocalConceptByCharacterValue";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { Concept, CreateDefaultLConcept, LocalSyncData, sendMessage, serviceWorker, SplitStrings } from "../../app";

export default async function GetConceptByCharacterLocal(characterValue: string){
    let concept = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
    return concept;
}

/**
 * 
 * @param character the character value of the concept we want to find in our local system.
 * @returns LConcept which will be the associated concept with the character Value.
 */
export async function GetConceptByCharacterAndCategoryLocal(character: string){
    if (serviceWorker) {
        const res: any = await sendMessage('GetConceptByCharacterAndCategoryLocal', { character })
        console.log('data received from sw', res)
        return res.data
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

export async function GetConceptByCategoryAndCharacterLocalMemory(value:string, categoryId: number){
   let concept  =  LocalConceptsData.GetConceptByCharacterAndCategoryLocal(value, categoryId);
   return concept;
}

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