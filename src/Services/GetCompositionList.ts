import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition, GetCompositionWithId } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";


export  async function GetCompositionList(compositionName: string,userId:number){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   console.log("this is the concept list", concept);
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    console.log("this is the concept list", conceptList);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetComposition(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}

export  async function GetCompositionListWithId(compositionName: string, userId: number){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   console.log("this is the concept list", concept);
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    console.log("this is the concept list", conceptList);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionWithId(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}




