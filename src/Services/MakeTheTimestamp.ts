import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import MakeTheConcept from "./MakeTheConcept";
import MakeTheTypeConcept from "./MakeTheTypeConcept";

export async function MakeTheTimestamp(type:string, referent:string, userId: number, 
    accessId:number, sessionInformationId: number=999){

        var sessionInformationId: number = 999;
        var categoryId: number = 4;
        var categoryUserId: number = userId; 
        var referentId: number = 0;
        var referentUserId: number = 999;
        var securityId: number = 999;
        var securityUserId: number = userId;
        var sessionInformationUserId: number = userId;
        // change this
        var accessId: number = 4;
        var accessUserId: number = userId;
        var stringToCheck: string = "";
        var startsWithThe = type.startsWith("the_");
        var typeConcept = CreateDefaultConcept();
        var concept: Concept;
        if(startsWithThe){
            stringToCheck = type;
        }
        else{
            stringToCheck = "the_" + type;
        }
    var typeConceptString = await MakeTheTypeConcept(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
    typeConcept = typeConceptString  as Concept;
    var conceptString = await MakeTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
        referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

    concept = conceptString as Concept;
    return concept;
}