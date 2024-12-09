import { CreateTextData } from "../Api/Create/CreateTheTextData";
import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { MakeTheNameInBackend } from "../Api/MakeTheNameInBackend";
import { Concept } from "../DataStructures/Concept";
import { TheTexts } from "../DataStructures/TheTexts";
import { Logger, MakeTheTypeConceptApi, sendMessage, serviceWorker } from "../app";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import CreateTheConcept, { CreateTheConceptImmediate } from "./CreateTheConcept";

/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the 
 * concept connection system. This function is the building block of the concept connection system.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also 
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param passedAccessId this is the accessId of the creator. By default should be 4.
 * @param passedSessionId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
export default async function MakeTheInstanceConcept(
  type: string,
  referent: string,
  composition: boolean = false,
  userId: number,
  passedAccessId: number = 4,
  passedSessionId: number = 999,
  referentId: number = 0
) {
  let startTime = performance.now()
  if (serviceWorker) {
    const res: any = await sendMessage("MakeTheInstanceConcept", {
      type,
      referent,
      composition,
      userId,
      passedAccessId,
      passedSessionId,
      referentId,
    });
    console.log("data received from sw", res);
    return res.data;
  }

  let sessionInformationId: number = passedSessionId;
  let categoryId: number = 4;
  let categoryUserId: number = userId;
  let referentUserId: number = 999;
  let securityId: number = 999;
  let securityUserId: number = userId;
  let sessionInformationUserId: number = userId;
  // change this
  let accessId: number = passedAccessId;
  let accessUserId: number = userId;

  let stringToCheck: string = "";

  let stringLength: number = referent.length;
  let typeConcept = CreateDefaultConcept();
  let concept: Concept;
  let startsWithThe = type.startsWith("the_");

  if (startsWithThe) {
    stringToCheck = type;
  } else {
    stringToCheck = "the_" + type;
  }
  if (composition) {
    let typeConceptString = await MakeTheTypeConceptApi(type, userId);
    typeConcept = typeConceptString as Concept;
    let conceptString = await CreateTheConcept(
      referent,
      userId,
      categoryId,
      typeConcept.id,
      referentId,
      accessId,
      type
    );
    concept = conceptString as Concept;
  } else if (stringLength > 255) {
    let typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
    typeConcept = typeConceptString as Concept;
    let conceptString = await CreateTheConcept(
      referent,
      userId,
      categoryId,
      typeConcept.id,
      referentId,
      accessId,
      stringToCheck
    );

    concept = conceptString as Concept;

    let TheTextsData = new TheTexts(
      userId,
      referent,
      securityId,
      securityUserId,
      accessId,
      accessUserId,
      sessionInformationId,
      sessionInformationUserId,
      Date.now().toString(),
      true
    );

    CreateTextData(TheTextsData);
  } else {
    let typeConceptString = await MakeTheTypeConceptApi(stringToCheck, userId);
    typeConcept = typeConceptString as Concept;
    let conceptByCharTypeString = await GetConceptByCharacterAndType(
      referent,
      typeConcept.id
    );
    let conceptTypeCharacter = conceptByCharTypeString as Concept;
    concept = conceptTypeCharacter;
    if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
      // let makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
      // let makeTheNameConcept = makeTheNameString as Concept;
      // concept = conceptTypeCharacter;
      let conceptString = await CreateTheConceptImmediate(
        referent,
        userId,
        categoryId,
        typeConcept.id,
        12,
        accessId,
        stringToCheck
      );
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
  // Add Log
  Logger.logInfo(startTime, "unknown", "create", "unknown", undefined, 200, concept, "MakeTheInstanceConcept", 
    ['type', 'referent', 'composition', 'userId', 'passedAccessId', 'passedSessionId', 'referentId'], 
    "unknown", 
    undefined 
  )
    
  return concept;
}