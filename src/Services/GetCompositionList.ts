import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";


export  async function GetCompositionList(compositionName: string){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, 999);
    var conceptList = ConceptsData.GetConceptsByTypeId(concept.id);
    for(var i=0; i< conceptList.length; i++){
      var compositionString = await GetComposition(conceptList[i].id);
         var json = JSON.stringify(compositionString);
         CompositionList.push(json);
    }
   }
    return CompositionList;
}


