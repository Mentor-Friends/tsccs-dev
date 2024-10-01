import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { Concept, GetCompositionListLocal, GetCompositionListLocalWithId, GetCompositionLocalWithId } from "../app";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithId, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetConceptByCharacter, { GetConceptByCharacterUpdated } from "./GetConceptByCharacter";
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

// export async function GetCompositionListAllWithId(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
//    let LocalCompositionList =  await GetCompositionListLocalWithId(compositionName, userId);
//    console.log("tbis is the local composition list", LocalCompositionList);
//    let CompositionList =    await GetCompositionListWithId(compositionName,userId)
//    console.log("this is the online composition list", CompositionList);
//    let AllList: any[] = [];

//    // Promise.race([LocalCompositionList, CompositionList])
//    // .then((result)=> {
//    //    console.log("Promise result", result);
//    //    AllList.push(...result);
//    // })
//    // .catch((error)=>{
//    //    console.log("error in handling", error);
//    // });

//    // CompositionList.then((result)=>{
//    //    console.log("This is the second promise result", result);
//    //    AllList.push(...result);
//    // })
//    AllList.push(...LocalCompositionList);
//    AllList.push(...CompositionList);
//    return AllList;
// }


export async function GetCompositionListAllWithId(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   var conceptLocal = await GetConceptByCharacterLocal(compositionName);
   var conceptOnline = await GetConceptByCharacter(compositionName);
   var CompositionList :any = [];
   let conceptList: any[] = [];
   let conceptListLocal: Concept[] = [];
   let finalLocal : Concept[] = [];
   let conceptListOnline : Concept[] = [];
   if(conceptLocal.id != 0){
       conceptListLocal = await LocalConceptsData.GetConceptsByTypeIdAndUser(conceptLocal.id,userId);
   }
   if(conceptOnline.id != 0){

    await GetAllConceptsByType(compositionName, userId);
    conceptListOnline = await ConceptsData.GetConceptsByTypeIdAndUser(conceptOnline.id,userId);
     conceptList = conceptListOnline;
   }
     for(let i= 0; i< conceptListLocal.length; i++){
      let isDuplicate = false;
         for(let j = 0; j <  conceptListOnline.length ; j ++){
               if(conceptListLocal[i].ghostId == conceptListOnline[j].ghostId){
                  isDuplicate = true;
               }
         }
         if(!isDuplicate){
            finalLocal.push(conceptListLocal[i]);
         }

   }

   console.log("This is the all list", finalLocal)
   let AllList: any[] = [];
  
   AllList = await FormatTheConcepts(conceptList, finalLocal, inpage, page);

   return AllList;
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


export  async function GetCompositionListWithIdUpdated(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
   var concept = await GetConceptByCharacterUpdated(compositionName);
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

export async function FormatTheConcepts(conceptList: Concept[], localConceptList: Concept[] , inpage:number = 10, page:number =1){
   let CompositionList: any[] = [];
   var startPage = inpage * (page - 1);
   var prefetchComposition:number[] = [];
   let localConceptLength = localConceptList.length;
   for(var i=startPage; i< startPage + inpage - localConceptLength; i++){
      if(conceptList[i]){
        prefetchComposition.push(conceptList[i].id);
      }
   }
   for(var i=0; i< localConceptList.length; i++){
      var compositionJson= await GetCompositionLocalWithId(localConceptList[i].id);
         CompositionList.push(compositionJson);
    }

   await GetAllConnectionsOfCompositionBulk(prefetchComposition);
   for(var i=startPage; i< startPage + inpage - localConceptLength; i++){
     if(conceptList[i]){
        var compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
           CompositionList.push(compositionJson);
     }
   }
   return CompositionList;
}




