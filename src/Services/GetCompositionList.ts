import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithId, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";

// get the list of compositions from the type 
// for eg get list of boomgpt
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

    let myConnectionList = await GetAllConnectionsOfCompositionBulk(prefetchComposition);

    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){

         var compositionJson= await GetCompositionFromMemory(conceptList[i].id);
         CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}

export  async function GetCompositionListWithId(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
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
         var compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
            CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}




