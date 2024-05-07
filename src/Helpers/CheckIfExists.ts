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

export function CheckIfTypeConceptsExistsInArray(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  let foundConcepts: Concept[] = [];
  if (Array.isArray(conceptList)) {
    for(let i=0 ; i<conceptList.length; i++){
      if (concept.typeId == conceptList[i].typeId) {
        foundConcepts.push(conceptList[i]);
      }
    }

  }

  return foundConcepts
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
  conceptId: number,
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
    const check = connectionList.find(c => c.toTheConceptId === conceptId)
    if (check) {
      foundConnection = check
    }
    const toCheck = connectionList.find(c => c.ofTheConceptId === conceptId)
    if (toCheck) {
      foundConnection = toCheck
    }
  }
  return foundConnection
}

export function CheckAllConnectionsConnectedInConnectionArray(
  connectionList: Connection[] = [],
  conceptId: number,
){
  let foundConnections = [];
  if (Array.isArray(connectionList)) {
    const check = connectionList.find(c => c.toTheConceptId == conceptId)
    if (check) {
      foundConnections.push(check);
    }
    const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId)
    if (toCheck) {
      foundConnections.push(toCheck);
    }
  }
  return foundConnections
}

