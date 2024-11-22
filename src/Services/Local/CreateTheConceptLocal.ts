import { InnerActions, sendMessage, serviceWorker } from "../../app";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";

/**
 * This function creates the concept in the local system (Local memory and IndexDb) but not in the backend database
 * To create this concept in the backend database you need to sync the local data to the backend by LocalSyncData class.
 * 
 * This function creates a id and ghost id which are equal to each other. 
 * These id and ghostId are negative which means that they are virtual concepts. After these concepts have been synced with the backend
 * they are converted to real id. After returning from the backend the id changes to positive(+) and real id while the ghostId remains the same
 * 
 * The system then saves this relation between -ve id and real id in the backend server and also in the local memory.
 * 
 * @param referent This is the string that is the actual value of the concept.
 * @param typecharacter The string that defines the type of the concept.
 * @param userId This is the userId of the creator.
 * @param categoryId This is the category Id of the concept.
 * @param typeId This is the type Id of the concept that relates to the typecharacter passed above.
 * @param accessId This is the accessId of the concept(most probably is the accessId of the user)
 * @param isComposition This is set in the case that the composition needs to be created.
 * @param referentId if this concept refers to any other concept then this needs to be passed.
 * @returns 
 */
export default async function CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number, 
typeId:number, 
accessId:number, isComposition: boolean = false, referentId:number = 0, actions: InnerActions = {concepts: [], connections: []}){
    try{
        if (serviceWorker) {
            const res: any = await sendMessage('CreateTheConceptLocal', { referent, typecharacter, userId, categoryId, typeId, accessId, isComposition, referentId })
            console.log('data received from sw', res)
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            return res.data
          }

        //let id = -Math.floor(Math.random() * 100000000);
        let id = await LocalId.getConceptId();
        console.log("this is the getting id type connection", id);

        let isNew: boolean = true;
        let created_on:Date = new Date();
        let updated_on:Date = new Date();
        if(referent == "the"){
            let concept = new Concept(1,999,5,5, referentId, referent, accessId, isNew,created_on,updated_on,typecharacter);
            return concept;
        }

        let concept = new Concept(id,userId,typeId,categoryId,referentId, referent, accessId, isNew,created_on,updated_on,typecharacter );
        concept.isTemp = true;
        concept.isComposition = isComposition;
        LocalConceptsData.AddConcept(concept);
        actions.concepts.push(concept)
        //storeToDatabase("localconcept",concept);
        return concept;
    }
    catch(error){
        throw error;
    }


}