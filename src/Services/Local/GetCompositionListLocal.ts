import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetCompositionLocal, GetCompositionLocalWithId } from "./GetCompositionLocal";
import GetConceptByCharacterLocal, { GetConceptByCharacterLocalFull } from "./GetConceptByCharacterLocal";


export  async function GetCompositionListLocal(compositionName: string,userId:number){
   try{
      var concept = await GetConceptByCharacterLocal(compositionName);
      var CompositionList :any = [];
      if(concept.id != 0){
       var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
       for(var i=0; i< conceptList.length; i++){
         var compositionJson= await GetCompositionLocal(conceptList[i].id);
            CompositionList.push(compositionJson);
       }
      }
       return CompositionList;
   }
   catch(error){
      throw error;
   }

}

export  async function GetCompositionListLocalWithId(compositionName: string, userId: number){
   try{
      var concept = await GetConceptByCharacterLocal(compositionName);
      var CompositionList :any = [];
      if(concept.id != 0){
       var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
   
       for(var i=0; i< conceptList.length; i++){
         var compositionJson= await GetCompositionLocalWithId(conceptList[i].id);
            CompositionList.push(compositionJson);
       }
      }
       return CompositionList;
   }
   catch(error){
      throw error;
   }

}





