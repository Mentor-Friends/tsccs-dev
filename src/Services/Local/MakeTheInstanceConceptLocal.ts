import { CreateTextData } from "../../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../../Api/GetConceptByCharacterAndType";
import { Concept } from "../../DataStructures/Concept";
import { TheTexts } from "../../DataStructures/TheTexts";
import CreateTheConcept from "../CreateTheConcept";
import CreateTheConceptLocal from "./CreateTheConceptLocal";
import { MakeTheName } from "../MakeTheName";
import MakeTheTypeConceptLocal from "./MakeTheTypeLocal";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";

export async function MakeTheInstanceConceptLocal(type:string, referent:string, composition:boolean=false, userId: number, 
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
           var   typeConceptString = await MakeTheTypeConceptLocal(type, sessionInformationId, userId, userId );
           typeConcept = typeConceptString as Concept;
            
           var conceptString = await CreateTheConceptLocal(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
            referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

            concept = conceptString as Concept;
        }
        else if(stringLength > 255){

            var typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString  as Concept;
            var conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

            concept = conceptString as Concept;

            var TheTextsData = new TheTexts(userId,referent,securityId,securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,
                Date.now().toString(),true);

             var TextDataString = await  CreateTextData(TheTextsData);

             var TextData = TextDataString as TheTexts;
        }
        else{
            var typeConceptString = await MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString  as Concept;
            var conceptByCharTypeString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString as Concept;
            // var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            // var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                var conceptString = await CreateTheConceptLocal(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                    0, 0, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );
                concept = conceptString as Concept;
            }
        }

        concept.type = typeConcept;
        return concept;

}