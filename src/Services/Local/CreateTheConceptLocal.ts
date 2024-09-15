import { CreateTheConceptApi } from "../../Api/Create/CreateTheConceptApi";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { ReservedIds } from "../../DataStructures/ReservedIds";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { LocalSyncData } from "../../app";

export default async function CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number, 
typeId:number, 
accessId:number, isComposition: boolean = false, referentId:number = 0){
    try{
        //var id = -Math.floor(Math.random() * 100000000);
        var id = LocalId.getConceptId();
        var isNew: boolean = true;
        let created_on:Date = new Date();
        let updated_on:Date = new Date();
        if(referent == "the"){
            let concept = new LConcept(1,999,5,5,accessId, referent,typecharacter, isNew,created_on,updated_on,referentId);
            return concept;
        }

        var concept = new LConcept(id,userId,typeId,categoryId,accessId, referent,typecharacter, isNew,created_on,updated_on, referentId);
        concept.isTemp = true;
        concept.isComposition = isComposition;
        LocalConceptsData.AddConcept(concept);
        storeToDatabase("localconcept",concept);
        return concept;
    }
    catch(error){
        throw error;
    }


}