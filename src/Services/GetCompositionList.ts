import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { GetCompositionListLocal, GetCompositionListLocalWithId } from "../app";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithId, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetConceptByCharacter from "./GetConceptByCharacter";
import GetConceptByCharacterLocal from "./Local/GetConceptByCharacterLocal";

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

    await GetAllConnectionsOfCompositionBulk(prefetchComposition);

    for(var i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){

         var compositionJson= await GetCompositionFromMemory(conceptList[i].id);
         CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}

export async function GetCompositionListAll(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   let LocalCompositionList = GetCompositionListLocal(compositionName, userId);
   let CompositionList =  GetCompositionList(compositionName,userId)
   let AllList: any[] = [];
   Promise.race([LocalCompositionList, CompositionList])
   .then((result)=> {
      console.log("Promise result", result);
      AllList.push(...result);
   })
   .catch((error)=>{
      console.log("error in handling", error);
   });

   CompositionList.then((result)=>{
      console.log("This is the second promise result", result);
      AllList.push(...result);
   })
   return AllList;
}

export async function GetCompositionListAllWithId(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   let LocalCompositionList =  GetCompositionListLocalWithId(compositionName, userId);
   console.log("tbis is the local composition list", LocalCompositionList);
   let CompositionList =    GetCompositionListWithId(compositionName,userId)
   console.log("this is the online composition list", CompositionList);
   let AllList: any[] = [];

   Promise.race([LocalCompositionList, CompositionList])
   .then((result)=> {
      console.log("Promise result", result);
      AllList.push(...result);
   })
   .catch((error)=>{
      console.log("error in handling", error);
   });

   CompositionList.then((result)=>{
      console.log("This is the second promise result", result);
      AllList.push(...result);
   })
   return AllList;
}

export  async function GetCompositionListWithId(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    var conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    console.log("this is the remaining conceptList", conceptList);
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




