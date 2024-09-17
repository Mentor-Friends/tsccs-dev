import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { CreateDefaultConcept } from "../CreateDefaultConcept";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept"

  
  export function convertFromConceptToLConcept(concept: Concept) {
    const LConcept: Concept = CreateDefaultLConcept()
    LConcept.id = concept.id
    LConcept.ghostId = concept.ghostId
    LConcept.userId = concept.userId
    LConcept.accessId = concept.accessId
    LConcept.categoryId = concept.categoryId
    LConcept.characterValue = concept.characterValue
    LConcept.entryTimeStamp = concept.entryTimeStamp
    LConcept.typeId = concept.typeId
    LConcept.type = concept.type
    LConcept.isTemp = false
    LConcept.typeCharacter = concept?.type?.characterValue ?? "";
    return LConcept
  }


  export function convertFromLConceptToConcept(lconcept: Concept){
    const concept: Concept = CreateDefaultConcept();
    concept. id = lconcept.id
    concept.ghostId = lconcept.ghostId;
    concept.userId = lconcept.userId;
    concept.accessId = lconcept.accessId;
    concept.entryTimeStamp = lconcept.entryTimeStamp;
    concept.typeId = lconcept.typeId
    concept.categoryId = lconcept.categoryId
    return concept;
  }
  
  export function convertFromConnectionToLConnection(connection: Connection) {
    const Lconnection: LConnection = new LConnection(0, 0, 0, 0, 0, 0)
    Lconnection.id = connection.id
    Lconnection.ghostId = connection.ghostId
    Lconnection.accessId = connection.accessId
    Lconnection.ofTheConceptId = connection.ofTheConceptId
    Lconnection.toTheConceptId = connection.toTheConceptId
    Lconnection.entryTimeStamp = connection.entryTimeStamp
    Lconnection.typeId = connection.typeId
    Lconnection.isTemp = false
    return Lconnection
  }
  