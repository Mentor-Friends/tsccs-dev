import { GetConceptByCharacterValue } from "../../Api/GetConceptByCharacterValue";
import { GetConceptByCharacterAndCategoryDirectApi } from "../../Api/SearchConcept/GetConceptByCharacterAndCategoryDirect";
import { Concept, ConceptsData, CreateDefaultConcept, SplitStrings } from "../../app";

export async function GetConceptByCharacterAndCategory(character: string){
    let concept: Concept = CreateDefaultConcept();
    if(character == "the"){
        concept.id = 1;
        concept.typeId = 5;
        concept.characterValue ="the";
        return concept;
    }
    var splittedStringArray = SplitStrings(character);
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
    return concept;
}

export  async function GetConceptByCharacter(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
    if(concept.id == 0){
       concept = await GetConceptByCharacterValue(characterValue);
    }
    return concept;
}

export  async function GetConceptByCharacterAndCategoryFromMemory(character: string, category: number){
    let concept = await ConceptsData.GetConceptByCharacterAndCategoryLocal(character, category);
    if(concept.id == 0){
        concept = await GetConceptByCharacterAndCategoryDirectApi(character,category);
    }
    return concept;
}