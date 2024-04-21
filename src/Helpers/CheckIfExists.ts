import { Concept } from "../DataStructures/Concept"
import { Connection } from "../DataStructures/Connection"
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept"



export function CheckIfConceptsExistsInArray(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  let foundConcept = CreateDefaultConcept()
  if (Array.isArray(conceptList)) {
    const check = conceptList.find(c => c.id === concept.id)
    if (check) {
      foundConcept = check
    }
  }
  return foundConcept
}

export function CheckIfTypeConceptExistsInArray(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  let foundConcept = CreateDefaultConcept()
  if (Array.isArray(conceptList)) {
    const check = conceptList.find(c => c.typeId == concept.typeId)
    if (check) {
      foundConcept = check
    }
  }

  return foundConcept
}

export function CheckIfConnectionExistsInArray(
  connectionList: Connection[] = [],
  connection: Connection,
) {
  let foundConnection = new Connection(
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  )
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.id === connection.id)
    if (check) {
      foundConnection = check
    }
  }
  return foundConnection
}

export function CheckIfToTheConceptExistsInConnectionArray(
  connectionList: Connection[] = [],
  toTheConceptId: number,
) {
  let foundConnection = new Connection(
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  )
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.toTheConceptId === toTheConceptId)
    if (check) {
      foundConnection = check
    }
  }
  return foundConnection
}
