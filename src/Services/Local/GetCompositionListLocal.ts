import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetCompositionLocal, GetCompositionLocalWithId } from "./GetCompositionLocal";
import GetConceptByCharacterLocal from "./GetConceptByCharacterLocal";


export  async function GetCompositionListLocal(compositionName: string,userId:number){
   var concept = await GetConceptByCharacterLocal(compositionName);
   var CompositionList :any = [];
   if(concept){
    var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionLocal(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}

export  async function GetCompositionListLocalWithId(compositionName: string, userId: number){
   var concept = await GetConceptByCharacterLocal(compositionName);
   var CompositionList :any = [];
   if(concept){
    var conceptList = await LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id,userId);
    for(var i=0; i< conceptList.length; i++){
      var compositionJson= await GetCompositionLocalWithId(conceptList[i].id);
         CompositionList.push(compositionJson);
    }
   }
    return CompositionList;
}




