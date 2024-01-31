import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import CreateTheConcept from "./CreateTheConcept";
import { MakeTheName } from "./MakeTheName";
import MakeTheTypeConcept from "./MakeTheTypeConcept";

export default async function MakeTheInstanceConcept(type:string, referent:string, composition:boolean=false, userId: number, 
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
            var accessId: number = accessId;
            var accessUserId: number = userId;

            var stringToCheck: string = "";

            var  stringLength:number = referent.length;
            var typeConcept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false);
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
                console.log("For compsosition", typeConcept);
               var conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

                concept = conceptString as Concept;
            }
            else if(stringLength > 255){

                var typeConceptString = await MakeTheTypeConcept(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
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
                var typeConceptString = await MakeTheTypeConcept(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString  as Concept;
                var conceptByCharTypeString = await GetConceptByCharacterAndType(referent,typeConcept.id);
                var conceptTypeCharacter = conceptByCharTypeString as Concept;

            var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                var conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                    makeTheNameConcept.id, makeTheNameConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );
                concept = conceptString as Concept;
            }
        }
            // if(concept){
            //     if(concept.type == null){
            //         var conceptType = ConceptsData.GetConcept(concept.typeId);
            //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
            //             var typeConceptStringNew = await GetConcept(concept.typeId);
            //             var newTypeConcept = typeConceptStringNew as Concept;
            //             concept.type = newTypeConcept;
            //         }
            //     }
            // }
            concept.type = typeConcept;
            console.log("this is the concept returned by make the instance concept",concept);
            return concept;
}