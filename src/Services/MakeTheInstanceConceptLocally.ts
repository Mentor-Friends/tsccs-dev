import { Concept } from "../DataStructures/Concept";
import CreateTheConcept from "./CreateTheConcept";
import MakeTheTypeConcept from "./MakeTheTypeConcept";

export async function MakeTheInstanceConceptNew(type:string, referent:string, composition:boolean=false, userId: number, 
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

        var  stringLength:number = referent.length;
        var typeConcept;
        var concept: Concept;
        var startsWithThe = type.startsWith("the_");

        if(startsWithThe){
            stringToCheck = type;
        }
        else{
            stringToCheck = "the_" + type;
        }

        if(composition){
           var   typeConceptString = await MakeTheTypeConcept(type, sessionInformationId, userId, userId );
           typeConcept = typeConceptString as Concept;

           var conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
            referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

            concept = conceptString as Concept;
        }
        else if(stringLength > 255){
        }
        else{

        }
        


}