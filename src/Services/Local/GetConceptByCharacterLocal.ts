import { GetLocalConceptByCharacterValue } from "../../Api/Local/GetLocalConceptByCharacterValue";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { CreateDefaultLConcept, LConcept, LocalSyncData, SplitStrings } from "../../app";

export default async function GetConceptByCharacterLocal(characterValue: string){
    var concept = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
    return concept;
}

export async function GetConceptByCharacterAndCategoryLocal(character: string){
    let lconcept: LConcept = CreateDefaultLConcept();
    if(character == "the"){
        lconcept.id = 1;
        lconcept.typeId = 5;
        lconcept.characterValue ="the";
        return lconcept;
    }
    var splittedStringArray = SplitStrings(character);
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
        var concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
        var literalCharacter = `${characterValue}`;
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