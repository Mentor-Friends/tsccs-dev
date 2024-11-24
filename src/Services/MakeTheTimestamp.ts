import { Concept } from "../DataStructures/Concept";
import { MakeTheTypeConceptApi } from "../app";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import MakeTheConcept from "./MakeTheConcept";
import {MakeTheTypeConcept} from "./MakeTheTypeConcept";

export async function MakeTheTimestamp(type:string, referent:string, userId: number, 
    accessId:number = 4, sessionInformationId: number=999){

        let categoryId: number = 4;
        let referentId: number = 0;
        // change this
        let stringToCheck: string = "";
        let startsWithThe = type.startsWith("the_");
        let typeConcept = CreateDefaultConcept();
        let concept: Concept;
        if(startsWithThe){
            stringToCheck = type;
        }
        else{
            stringToCheck = "the_" + type;
        }
    let typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
    typeConcept = typeConceptString  as Concept;
    let conceptString = await MakeTheConcept(referent,userId, categoryId, typeConcept.id, 
        referentId, accessId, stringToCheck);

    concept = conceptString as Concept;
    return concept;
}