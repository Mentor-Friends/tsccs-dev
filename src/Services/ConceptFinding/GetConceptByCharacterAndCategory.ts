import { GetConceptByCharacterValue } from "../../Api/GetConceptByCharacterValue";
import { GetConceptByCharacterAndCategoryDirectApi } from "../../Api/SearchConcept/GetConceptByCharacterAndCategoryDirect";
import { Concept, ConceptsData, CreateDefaultConcept, Logger, SplitStrings } from "../../app";

export async function GetConceptByCharacterAndCategory(character: string){
    const logData : any = Logger.logfunction("GetConceptByCharacterAndCategory", character);
    let concept: Concept = CreateDefaultConcept();
    if(character == "the"){
        concept.id = 1;
        concept.typeId = 5;
        concept.characterValue ="the";
        return concept;
    }
    let splittedStringArray = SplitStrings(character);
    if(splittedStringArray.length > 1){
        let category = 1;
        let prefix = await GetConceptByCharacterAndCategory(splittedStringArray[0])
        if(prefix.id != 0){
            category = prefix.id;
        }
        concept = await GetConceptByCharacterAndCategoryFromMemory(character,category);
    }
    else if(splittedStringArray[0] == character){
        concept = await GetConceptByCharacter(character);

    }
    Logger.logUpdate(logData);
    return concept;
}

export  async function GetConceptByCharacter(characterValue: string){
    const logData : any = Logger.logfunction("GetConceptByCharacter", arguments);
    let concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
    if(concept.id == 0){
       concept = await GetConceptByCharacterValue(characterValue);
    }
    Logger.logUpdate(logData);
    return concept;
}

export  async function GetConceptByCharacterAndCategoryFromMemory(character: string, category: number){
    const logData : any = Logger.logfunction("GetConceptByCharacterAndCategoryFromMemory", arguments);
    let concept = await ConceptsData.GetConceptByCharacterAndCategoryLocal(character, category);
    if(concept.id == 0){
        concept = await GetConceptByCharacterAndCategoryDirectApi(character,category);
    }
    Logger.logUpdate(logData);
    return concept;
}