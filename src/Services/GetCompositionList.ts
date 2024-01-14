import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition, GetCompositionWithId } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";


export  async function GetCompositionList(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    var startPage = inpage * (page - 1);
    var prefetchComposition:number[] = [];
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }

    await GetAllConnectionsOfCompositionBulk(prefetchComposition);

    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){

         var compositionJson= await GetComposition(conceptList[i].id);
         CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}

export  async function GetCompositionListWithId(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   console.log("what a list", concept);
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    var startPage = inpage * (page - 1);
    var prefetchComposition:number[] = [];
    console.log("this is the prefetched concept list", conceptList);
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }
    console.log("this is the prefetch", prefetchComposition);
    await GetAllConnectionsOfCompositionBulk(prefetchComposition);
    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         var compositionJson= await GetCompositionWithId(conceptList[i].id);
            CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}




