import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetCompositionLocal, GetCompositionLocalWithId } from "./GetCompositionLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";

/**
 * This function returns the list of composition which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions.
 */
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

/**
 * This function returns the list of composition with data - id format which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions with data - id format.
 */
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





