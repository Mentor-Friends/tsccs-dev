import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";

export default async function GetConceptByCharacterLocal(characterValue: string){
    var concept = await LocalConceptsData.GetConceptByCharacter(characterValue);
    return concept;
}