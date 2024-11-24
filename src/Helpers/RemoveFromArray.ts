import { Concept } from "../DataStructures/Concept"
import { Connection } from "../DataStructures/Connection"
import { LConnection } from "../app"

export function RemoveConceptFromList(
  conceptList: Concept[] = [],
  concept: Concept,
) {
  if (Array.isArray(conceptList)) {
    conceptList.splice(
      conceptList.findIndex(function (i) {
        return i.id === concept.id
      }),
      1,
    )
  }
}

export function RemoveConnectionFromList(
  connectionList: Connection[] = [],
  connection: Connection,
) {
  if (Array.isArray(connectionList)) {
    connectionList.splice(
      connectionList.findIndex(function (i) {
        return i.id === connection.id
      }),
      1,
    )
  }
}

export function RemoveLConnectionFromList(
  connectionList: Connection[] = [],
  connection: Connection,
) {
  if (Array.isArray(connectionList)) {
    connectionList.splice(
      connectionList.findIndex(function (i) {
        return i.id === connection.id
      }),
      1,
    )
  }
}
