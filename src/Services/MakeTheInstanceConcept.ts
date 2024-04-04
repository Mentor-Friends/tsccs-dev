import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { MakeTheNameInBackend } from "../Api/MakeTheNameInBackend";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import CreateTheConcept, { CreateTheConceptImmediate, CreateTheConceptTemporary } from "./CreateTheConcept";
import { MakeTheName } from "./MakeTheName";
import { MakeTheTimestamp } from "./MakeTheTimestamp";
import MakeTheTypeConcept from "./MakeTheTypeConcept";

export default async function MakeTheInstanceConcept(type:string, referent:string, composition:boolean=false, userId: number, 
        passedAccessId:number, passedSessionId: number=999){

            let sessionInformationId: number = passedSessionId;
            let categoryId: number = 4;
            let categoryUserId: number = userId; 
            let referentId: number = 0;
            let referentUserId: number = 999;
            let securityId: number = 999;
            let securityUserId: number = userId;
            let sessionInformationUserId: number = userId;
            // change this
            let accessId: number = passedAccessId;
            let accessUserId: number = userId;

            let stringToCheck: string = "";

            let  stringLength:number = referent.length;
            let referentType: string = typeof(referent);
            console.log("This is the referent type" , referentType);
            console.log("This is the ref type",type );
            console.log("This is the ref value",referent );
            let typeConcept = CreateDefaultConcept();
            let concept: Concept;
            let startsWithThe = type.startsWith("the_");

            if(startsWithThe){
                stringToCheck = type;
            }
            else{
                stringToCheck = "the_" + type;
            }
            if(composition){
               let   typeConceptString = await MakeTheTypeConcept(type, sessionInformationId, userId, userId );
               typeConcept = typeConceptString as Concept;
               let conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );

                concept = conceptString as Concept;
            }
            else if(stringLength > 255){

                let typeConceptString = await MakeTheTypeConcept(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptString = await CreateTheConcept(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                    referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );
    
                concept = conceptString as Concept;

                let TheTextsData = new TheTexts(userId,referent,securityId,securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,
                    Date.now().toString(),true);

                CreateTextData(TheTextsData);

            }
            else if(referentType == "Date"){
               concept  = await MakeTheTimestamp(type, referent, userId, accessId, sessionInformationId);
            }
            else{
                let typeConceptString = await MakeTheTypeConcept(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString  as Concept;
                let conceptByCharTypeString = await GetConceptByCharacterAndType(referent,typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString as Concept;
                concept = conceptTypeCharacter;
                if(conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0){
                    // let makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
                    // let makeTheNameConcept = makeTheNameString as Concept;
                    // concept = conceptTypeCharacter;
                    let conceptString = await CreateTheConceptImmediate(referent,userId, categoryId, userId, typeConcept.id, typeConcept.userId,
                        12, 12, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId  );
                    concept = conceptString as Concept;
                    MakeTheNameInBackend(concept.id, `${referent}`, typeConcept.id, userId);

                }
            }
            // if(concept){
            //     if(concept.type == null){
            //         let conceptType = ConceptsData.GetConcept(concept.typeId);
            //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
            //             let typeConceptStringNew = await GetConcept(concept.typeId);
            //             let newTypeConcept = typeConceptStringNew as Concept;
            //             concept.type = newTypeConcept;
            //         }
            //     }
            // }
            concept.type = typeConcept;
            return concept;
}