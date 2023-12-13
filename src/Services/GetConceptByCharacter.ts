import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacter(characterValue);
    console.log("found the character");
    console.log(concept);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        console.log("now going online");
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}