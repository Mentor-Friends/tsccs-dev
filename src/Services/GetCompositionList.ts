import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition, GetCompositionWithId } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";


export  async function GetCompositionList(compositionName: string){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, 999);
    var conceptList = ConceptsData.GetConceptsByTypeId(concept.id);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetComposition(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}

export  async function GetCompositionListWithId(compositionName: string){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, 999);
    var conceptList = ConceptsData.GetConceptsByTypeId(concept.id);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionWithId(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}


