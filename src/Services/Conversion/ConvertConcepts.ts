import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { LConnection } from "../../DataStructures/Local/LConnection";
import { CreateDefaultLConcept } from "../Local/CreateDefaultLConcept"

  
  export function convertFromConceptToLConcept(concept: Concept) {
    const LConcept: LConcept = CreateDefaultLConcept()
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
    return LConcept
  }
  
  export function convertFromConnectionToLConnection(connection: Connection) {
    const Lconnection: LConnection = new LConnection(0, 0, 0, 0, 0, 0)
    Lconnection.id = connection.id
    Lconnection.ghostId = connection.ghostId
    Lconnection.accessId = connection.accessId
    Lconnection.ofTheConceptId = connection.ofTheConceptId
    Lconnection.toTheConceptId = connection.toTheConceptId
    Lconnection.OfTheConceptId = connection.ofTheConceptId
    Lconnection.ToTheConceptId = connection.toTheConceptId
    Lconnection.entryTimeStamp = connection.entryTimeStamp
    Lconnection.typeId = connection.typeId
    Lconnection.isTemp = false
    return Lconnection
  }
  