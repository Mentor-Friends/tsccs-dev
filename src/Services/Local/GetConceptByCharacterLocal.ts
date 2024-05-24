import { GetLocalConceptByCharacterValue } from "../../Api/Local/GetLocalConceptByCharacterValue";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";

export default async function GetConceptByCharacterLocal(characterValue: string){
    var concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
    console.log("This is the concept local for character", concept);
    return concept;
}

export  async function GetConceptByCharacterLocalFull(characterValue: string){
    var concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetLocalConceptByCharacterValue(characterValue);
        concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
    }
    console.log("This is the concept local for character", concept);
    return concept;
}