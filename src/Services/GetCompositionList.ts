import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { GetAllConnectionsOfCompositionBulk } from "../Api/GetAllConnectionsOfCompositionBulk";
import { ConceptsData } from "../DataStructures/ConceptData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { Concept, GetCompositionListLocal, GetCompositionListLocalWithId, GetCompositionLocalWithId, handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithId, GetCompositionWithIdFromMemory } from "./GetComposition";
import GetConceptByCharacter, { GetConceptByCharacterUpdated } from "./GetConceptByCharacter";
import GetConceptByCharacterLocal from "./Local/GetConceptByCharacterLocal";

// get the list of compositions from the type 
// for eg get list of boomgpt
export  async function GetCompositionList(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
   const logData : any = Logger.logfunction("GetCompositionList", arguments) || {};
   if (serviceWorker) {
      logData.serviceWorker = true;
      try {
         const res: any = await sendMessage('GetCompositionList', { compositionName, userId, inpage, page })
         Logger.logUpdate(logData); 
         return res.data
      } catch (error) {
         console.error('GetCompositionList sw error: ', error)
         UpdatePackageLogWithError(logData, 'GetCompositionList', error);
         handleServiceWorkerException(error)
      }
    }

   let concept = await GetConceptByCharacter(compositionName);
   let CompositionList :any = [];

   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    let startPage = inpage * (page - 1);
    let prefetchComposition:number[] = [];
    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }

    await GetAllConnectionsOfCompositionBulk(prefetchComposition);

    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){

         let compositionJson= await GetCompositionFromMemory(conceptList[i].id);
         CompositionList.push(compositionJson);
      }
    }
   }
   Logger.logUpdate(logData);
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
   if (serviceWorker) {
      try {
         const res: any = await sendMessage('GetCompositionListAllWithId', {compositionName, userId, inpage, page})
         return res.data
      } catch (error) {
         console.error('GetCompositionListAllWithId sw error: ', error)
         handleServiceWorkerException(error)
      }
    }
   let conceptLocal = await GetConceptByCharacterLocal(compositionName);
   let conceptOnline = await GetConceptByCharacter(compositionName);
   let CompositionList :any = [];
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
   if (serviceWorker) {
      try {
         const res: any = await sendMessage('GetCompositionListWithId', { compositionName, userId, inpage, page })
         return res.data
      } catch (error) {
         console.error('GetCompositionListWithId sw error: ', error)
         handleServiceWorkerException(error)
      }
   }
   let concept = await GetConceptByCharacter(compositionName);
   let CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    let startPage = inpage * (page - 1);
    let prefetchComposition:number[] = [];
    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }
    await GetAllConnectionsOfCompositionBulk(prefetchComposition);
    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         let compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
            CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}


export  async function GetCompositionListWithIdUpdated(compositionName: string, userId: number,  inpage:number = 10, page:number =1){
   let concept = await GetConceptByCharacterUpdated(compositionName);
   let CompositionList :any = [];
   if(concept){
    await GetAllConceptsByType(compositionName, userId);
    let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    let startPage = inpage * (page - 1);
    let prefetchComposition:number[] = [];
    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         
         prefetchComposition.push(conceptList[i].id);
      }
    }
    await GetAllConnectionsOfCompositionBulk(prefetchComposition);
    for(let i=startPage; i< startPage + inpage; i++){
      if(conceptList[i]){
         let compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
            CompositionList.push(compositionJson);
      }
    }
   }
    return CompositionList;
}

export async function FormatTheConcepts(conceptList: Concept[], localConceptList: Concept[] , inpage:number = 10, page:number =1){
   let CompositionList: any[] = [];
   let startPage = inpage * (page - 1);
   let prefetchComposition:number[] = [];
   let localConceptLength = localConceptList.length;
   for(let i=startPage; i< startPage + inpage - localConceptLength; i++){
      if(conceptList[i]){
        prefetchComposition.push(conceptList[i].id);
      }
   }
   for(let i=0; i< localConceptList.length; i++){
      let compositionJson= await GetCompositionLocalWithId(localConceptList[i].id);
         CompositionList.push(compositionJson);
    }

   await GetAllConnectionsOfCompositionBulk(prefetchComposition);
   for(let i=startPage; i< startPage + inpage - localConceptLength; i++){
     if(conceptList[i]){
        let compositionJson= await GetCompositionWithIdFromMemory(conceptList[i].id);
           CompositionList.push(compositionJson);
     }
   }
   return CompositionList;
}




